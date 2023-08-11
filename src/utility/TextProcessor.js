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

  function ChnageTheContainers(HeadContainer, selectedContainer) {
    // the header and lower are overlap witheachother
    // console.log(HeadContainer,selectedContainer)
    let rangeSet = new Set();
    rangeSet.add(HeadContainer.lower);
    rangeSet.add(HeadContainer.upper);
    rangeSet.add(selectedContainer.upper);
    rangeSet.add(selectedContainer.upper);
    rangeSet = [...rangeSet].sort();
    switch (rangeSet.size) {
      case 2:
        ProcessorValues.current.counter += 1;
        const newObj = {
          id: ProcessorValues.current.counter,
          lower: rangeSet[0],
          upper: rangeSet[1],
          style: HeadContainer.style.concat(selectedContainer.style)
        };
        replaceInArray(newObj);
        break;

      case 3:
        ProcessorValues.current.counter += 1;
        if (HeadContainer.lower == selectedContainer.lower) {
          if (HeadContainer.upper < selectedContainer.upper) {
            let firsObj = {
              id: ProcessorValues.current.counter,
              lower: rangeSet[0],
              upper: rangeSet[1],
              style: HeadContainer.style.concat(selectedContainer.style)
            };
            ProcessorValues.current.counter += 1;
            let secObj = {
              id: ProcessorValues.current.counter,
              lower: rangeSet[1] + 1,
              upper: rangeSet[2],
              style: selectedContainer.style
            };
            replaceInArray(firsObj);
            replaceInArray(secObj);
          } else {
            let firsObj = {
              id: ProcessorValues.current.counter,
              lower: rangeSet[0],
              upper: rangeSet[1],
              style: HeadContainer.style.concat(selectedContainer.style)
            };
            ProcessorValues.current.counter += 1;
            let secObj = {
              id: ProcessorValues.current.counter,
              lower: rangeSet[1] + 1,
              upper: rangeSet[2],
              style: HeadContainer.style
            };
            replaceInArray(firsObj);
            replaceInArray(secObj);
          }
        } else {
          let firsObj = {
            id: ProcessorValues.current.counter,
            lower: rangeSet[0],
            upper: rangeSet[1],
            style: HeadContainer.style
          };
          ProcessorValues.current.counter += 1;
          let secObj = {
            id: ProcessorValues.current.counter,
            lower: rangeSet[1] + 1,
            upper: rangeSet[2],
            style: HeadContainer.style.concat(selectedContainer.style)
          };
          replaceInArray(firsObj);
          replaceInArray(secObj);
        }
        break;
      case 4:
        let objlower = {
          id: ProcessorValues.current.counter,
          lower: rangeSet[0],
          upper: rangeSet[1],
          style: HeadContainer.style
          // content: HeadContainer.content
        };
        ProcessorValues.current.counter += 1;
        let objmiddle = {
          id: ProcessorValues.current.counter,
          lower: rangeSet[1] + 1,
          upper: rangeSet[2],
          style: HeadContainer.style.concat(selectedContainer.style)
        };
        ProcessorValues.current.counter += 1;
        let high = {
          id: ProcessorValues.current.counter,
          lower: rangeSet[2] + 1,
          upper: rangeSet[3],
          style: selectedContainer.style
        };
        replaceInArray(objlower);
        replaceInArray(objmiddle);
        replaceInArray(high);
    }
    ProcessorValues.current.sorted = ProcessorValues.current.sorted.filter(
      (obj) => obj.id != HeadContainer.id || obj.id != selectedContainer.id
    );

  }
  function ChangeEntities(choice) {
    console.log(choice);
    // ProcessorValues.current.counter = ProcessorValues.current.counter + 1;
    // const NewEntity = {
    //   id: ProcessorValues.current.counter,
    //   lower: ProcessorValues.current.selectedlower,
    //   upper: ProcessorValues.current.selectedupper,
    //   style: [TEXT_STYLES[choice]]
    // };
    // console.log(NewEntity);

    // ProcessorValues.current.sorted.push(NewEntity);
    // ProcessorValues.current.sorted = ProcessorValues.current.sorted.sort(customSort);
    // let countloop = 0;
    // let index = 0;
    // // console.clear();
    // console.log(ProcessorValues.current.sorted)
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
