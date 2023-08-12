import { useRef, useState } from 'react';
import { TEXT_STYLES } from './Constants';
export default function TextProcessorObj(containers) {
  // console.log(containers);
  const customSort = (a, b) => {
    // console.log(a,b)
    if (a.lower != b.lower) {
      return a.lower - b.lower;
    } else {
      // console.log(a.upper, b.upper);
      return a.upper - b.upper;
    }
  };
  const ProcessorValues = useRef({
    sorted: containers.sort(customSort),
    caretPosition: null,
    counter: 3,
    selectedlower: 0,
    selectedupper: 0,
    selectedtext: null
  });
  const divref = useRef(null);
  const textref=useRef(null)
  const [openTextProcessor, setOpenTextProcessor] = useState(false);
  const [entitycontainers, setentitycontainers] = useState([]);
  function replaceInArray(modifiedobject) {
    const Originalindex = ProcessorValues.current.sorted.findIndex(
      (obj) => obj.id == modifiedobject.id
    );
    if (Originalindex != -1) {
      ProcessorValues.current.sorted[Originalindex] = modifiedobject;
    } else {
      ProcessorValues.current.sorted.push(modifiedobject);
    }
  }

  function Conflicts(HeadContainer, BodyContainer) {
    // console.log(HeadContainer)
    return BodyContainer.filter((obj) => findConflict(HeadContainer, obj));
  }
  function findConflict(Head, body) {
    return (
      Head.lower <= body.lower && Head.upper >= body.lower
      //   ||   (Head.lower == body.lower && Head.upper == body.upper)
    );
  }

  function handleonInput(e) {
    console.log(divref.current.innerText)
    e.stopPropagation();
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const clonedRange = range.cloneRange();
    clonedRange.selectNodeContents(divref.current);
    clonedRange.setEnd(range.endContainer, range.endOffset); // this set the position of the cursor
    ProcessorValues.current.caretPosition = clonedRange.toString().length;
    let charcounter = 0;
    if (divref.current.childNodes.length == 0) {
      ProcessorValues.current.sorted = [];
    }
    divref.current.childNodes.forEach((child) => {
      console.log(child);
      if (child.data) {
        charcounter = charcounter + child.data.length;
      } // if there is only text
      else {
        const id = child.dataset.id;
        const newlower = charcounter;
        if (child.innerText == '\n') {
          ProcessorValues.current.sorted = ProcessorValues.current.sorted.filter(
            (obj) => obj.id != id
          );
          return;
        }
        charcounter = charcounter + child.innerText.length;
        const newupper = charcounter;
        ProcessorValues.current.sorted = ProcessorValues.current.sorted.map((obj) => {
          if (obj.id == id) {
            return { ...obj, lower: newlower, upper: newupper, content: child.innerText };
          }
          return obj;
        });
      }
    });
  }

  function handleclick(e) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const clonedRange = range.cloneRange();
    clonedRange.selectNodeContents(divref.current);
    clonedRange.setEnd(range.endContainer, range.endOffset); // this set the position of the cursor
    ProcessorValues.current.caretPosition = clonedRange.toString().length;
    // console.log(ProcessorValues.current.caretPosition);
    // textref.current.textcontent = caretPosition;
  }

  function handleEmojiPicker(e) {
    const emoji = e.emoji;
    // const careposition = textref.current.textcontent;
    divref.current.innerText = insertCharAtIndex(divref.current.innerText, emoji, careposition);
    setOpenEmoji(false);
  }
  function insertCharAtIndex(originalString, charToAdd, index) {
    if (index < 0 || index > originalString.length) {
      throw new Error('Index out of bounds');
    }
    if (index == originalString.length) {
      return originalString + charToAdd;
    }
    // console.log(index);
    const leftPart = originalString.substring(0, index);
    const rightPart = originalString.substring(index);
    return leftPart + charToAdd + rightPart;
  }

  function rangefun() {
    var selection = window.getSelection();
    let range = window.getSelection().getRangeAt(0);
    let length = selection.toString().length;
    if (length != 0) {
      setOpenTextProcessor(true);
      const preSelectionRange = range.cloneRange();
      preSelectionRange.selectNodeContents(divref.current);
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
      const startIndex = preSelectionRange.toString().length;
      length += startIndex - 1;
      ProcessorValues.current.selectedlower = startIndex;
      ProcessorValues.current.selectedupper = length;
      ProcessorValues.current.selectedtext = preSelectionRange.toString();
    }
  }

  function Removetheselected(selectedContainer) {
    ProcessorValues.current.sorted = ProcessorValues.current.sorted.filter(
      (obj) => obj.id != selectedContainer.id
    );
  }
  function ChnageTheContainers(HeadContainer, selectedContainer) {
    // the header and lower are overlap witheachother
    // console.log(HeadContainer,selectedContainer)
    let rangeSet = new Set();
    rangeSet.add(HeadContainer.lower);
    rangeSet.add(HeadContainer.upper);
    rangeSet.add(selectedContainer.lower);
    rangeSet.add(selectedContainer.upper);
    rangeSet = [...rangeSet];
    console.log(rangeSet);
    rangeSet.sort((a, b) => a - b);
    console.log(rangeSet);
    switch (rangeSet.length) {
      case 2:
        HeadContainer.style = HeadContainer.style.concat(selectedContainer.style);
        replaceInArray(HeadContainer);
        Removetheselected(selectedContainer);
        break;
      case 3:
        if (HeadContainer.lower == selectedContainer.lower) {
          if (HeadContainer.upper > selectedContainer.upper) {
            selectedContainer.style = HeadContainer.style;
          }
          HeadContainer.lower = rangeSet[0];
          HeadContainer.upper = rangeSet[1];
          HeadContainer.style = HeadContainer.style.concat(selectedContainer.style);
          replaceInArray(HeadContainer);
          selectedContainer.lower = rangeSet[1] + 1;
          selectedContainer.upper = rangeSet[2];
          replaceInArray(selectedContainer);
        } else {
          HeadContainer.lower = rangeSet[0];
          HeadContainer.upper = rangeSet[1] - 1;
          replaceInArray(HeadContainer);
          selectedContainer.lower = rangeSet[1];
          selectedContainer.upper = rangeSet[2];
          selectedContainer.style = HeadContainer.style.concat(selectedContainer.style);
          replaceInArray(selectedContainer);
        }
        break;
      case 4:
        HeadContainer.lower = rangeSet[0];
        HeadContainer.upper = rangeSet[1] - 1;
        replaceInArray(HeadContainer);
        ProcessorValues.current.counter += 1;
        let objmiddle = {
          id: ProcessorValues.current.counter,
          lower: rangeSet[1],
          upper: rangeSet[2],
          style: HeadContainer.style.concat(selectedContainer.style)
        };
        replaceInArray(objmiddle);
        selectedContainer.lower = rangeSet[2] + 1;
        selectedContainer.upper = rangeSet[3];
        replaceInArray(selectedContainer);
        break;
    }
  }
  function ChangeEntities(choice) {
    console.log(divref.current.innerText);
    console.log(divref.current)
    ProcessorValues.current.counter = ProcessorValues.current.counter + 1;
    const NewEntity = {
      id: ProcessorValues.current.counter,
      lower: ProcessorValues.current.selectedlower,
      upper: ProcessorValues.current.selectedupper,
      style: [TEXT_STYLES[choice]]
    };
    console.log(NewEntity.upper);
    console.log(NewEntity.lower);

    ProcessorValues.current.sorted.push(NewEntity);
    ProcessorValues.current.sorted = ProcessorValues.current.sorted.sort(customSort);
    let index = 0;
    let loopcounter = 0;
    while (index < ProcessorValues.current.sorted.length) {
      // if (loopcounter == 10) {
      //   break;
      // }
      const HeadContainer = ProcessorValues.current.sorted[index];
      const containersConflict = Conflicts(
        HeadContainer,
        ProcessorValues.current.sorted.slice(index + 1)
      );
      if (containersConflict.length) {
        ChnageTheContainers(HeadContainer, containersConflict[0]);
        index = 0;
      } else {
        index++;
      }
      // loopcounter++;
      ProcessorValues.current.sorted = ProcessorValues.current.sorted.sort(customSort);
      // console.log(ProcessorValues.current.sorted);
      // setTimeout(() => {}, 500000);
    }
    // console.log(ProcessorValues.current.sorted);
    generateEntity();
  }

  function generateEntity() {
    let list_of_renderableentities = [];
    // ProcessorValues.current.sorted(ent=>)
    let prevEnd;
    for (let i = 0; i < ProcessorValues.current.sorted.length; i++) {
      if (i == 0 && ProcessorValues.current.sorted[0].lower > 0) {
        list_of_renderableentities.push({
          lower: 0,
          upper: ProcessorValues.current.sorted[0].lower - 1
        });
        prevEnd = ProcessorValues.current.sorted[0].upper;
      }
      const currentRange = ProcessorValues.current.sorted[i];
      const gapStart = prevEnd + 1;
      const gapEnd = currentRange.lower - 1;
      if (gapStart <= gapEnd) {
        list_of_renderableentities.push({ lower: gapStart, upper: gapEnd });
      }
      prevEnd = Math.max(prevEnd, currentRange.upper);
    }
    // Handle the case after the last range
    if (prevEnd < divref.current.innerText.length) {
      list_of_renderableentities.push({
        lower: prevEnd + 1,
        upper: divref.current.innerText.length - 1
      });
    }
    console.log(list_of_renderableentities);
    list_of_renderableentities = list_of_renderableentities.concat(ProcessorValues.current.sorted);
    list_of_renderableentities.sort(customSort);
    list_of_renderableentities = list_of_renderableentities.map((ent) => ({
      ...ent,
      content: divref.current.innerText.substring(ent.lower, ent.upper + 1)
    }));
    divref.current.innerText = '';
    setentitycontainers(list_of_renderableentities);
    // console.log(list_of_renderableentities);
  }

  function calculateOffset(child, relativeOffset) {
    var parent = child.parentElement;

    // verify whether or not the correct parent element is selected, modify if necessary
    if (parent.tagName != 'P') {
      parent = parent.closest('p');
      child = child.parentElement;
    }
    var children = [];

    // add the child's preceding siblings to an array
    for (var c of parent.childNodes) {
      if (c === child) break;
      children.push(c);
    }

    // calculate the total text length of all the preceding siblings and increment with the relative offset
    return relativeOffset + children.reduce((a, c) => a + c.textContent.length, 0);
  }

  function handleSelect(e) {
    rangefun();
  }
  function handleKeyDown(e) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const clonedRange = range.cloneRange();
  }
  return [
    handleEmojiPicker,
    handleKeyDown,
    handleSelect,
    handleonInput,
    handleclick,
    openTextProcessor,
    divref,
    setOpenTextProcessor,
    entitycontainers,
    setentitycontainers,
    ChangeEntities
  ];
}
