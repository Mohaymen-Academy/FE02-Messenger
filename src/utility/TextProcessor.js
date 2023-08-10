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
    selectedupper: 0
  });
  const divref = useRef(null);
  const [openTextProcessor, setOpenTextProcessor] = useState(false);
  const [entitycontainers, setentitycontainers] = useState([]);
  let counter = ProcessorValues.current.sorted.length;
  function replaceInArray(modifiedobject) {
    const Originalindex = ProcessorValues.current.sorted.findIndex(
      (obj) => obj.id == modifiedobject.id
    );
    if (Originalindex != -1) {
      //   console.log('before', ProcessorValues.current.sorted[Originalindex]);
      ProcessorValues.current.sorted[Originalindex] = modifiedobject;
      //   console.log('after', ProcessorValues.current.sorted[Originalindex]);
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
  function ChnageTheContainers(HeadContainer, selectedContainer) {
    if (selectedContainer.upper < HeadContainer.upper) {
      // TODO
      // ! NEED TO ADD THE SECTION FOR
      // if the whole of body is in the head
      //   console.log('khsewlkhr')
    }
    // if the header and container are not in each other
    else if (selectedContainer.lower > HeadContainer.lower) {
      // find the HeaderChildRange
      const HeaderDirectChildContainerLower = HeadContainer.lower;
      const HeaderDirectChildContainerUpper = selectedContainer.lower - 1;
      const IntersectionChildContainerLower = selectedContainer.lower;
      const IntersectionChildContainerUpper = HeadContainer.upper;
      const NewContainerLower = HeadContainer.upper + 1;
      const NewContainerUpper = selectedContainer.upper;

      HeadContainer.lower = HeaderDirectChildContainerLower;
      HeadContainer.upper = HeaderDirectChildContainerUpper;
      replaceInArray(HeadContainer);
      counter++;
      const newObject = {
        id: counter,
        lower: IntersectionChildContainerLower,
        upper: IntersectionChildContainerUpper,
        style: HeadContainer.style.concat(selectedContainer.style)
      };
      replaceInArray(newObject);
      //   console.log(newObject.lower, newObject.lower);
      //   changeSelectedRange
      selectedContainer.lower = NewContainerLower;
      selectedContainer.upper = NewContainerUpper;
      replaceInArray(selectedContainer);
    } else {
      if (selectedContainer.lower == HeadContainer.lower) {
        HeadContainer.style.concat(selectedContainer.style);
        const newObject = {
          id: HeadContainer.id,
          lower: HeadContainer.lower,
          upper: HeadContainer.upper,
          style: HeadContainer.style.concat(selectedContainer.style)
        };

        replaceInArray(newObject);
        const NewContainerLower = HeadContainer.upper + 1;
        const NewContainerUpper = selectedContainer.upper;
        selectedContainer.lower = NewContainerLower;
        selectedContainer.upper = NewContainerUpper;
      }
    }
  }
  let index = 0;
  //   console.log(index);
  function removeChar(divID, charindex) {
    console.log();
    let entetiyindex = 0;
    ProcessorValues.current.sorted.forEach((element, index) => {
      if (element.id == divID) {
        entetiyindex = index;
      }
    });
    console.log(entetiyindex);
  }
  function addChar() {}

  function handleonInput(e) {
    e.stopPropagation();
    // console.log('zarp');
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const clonedRange = range.cloneRange();
    clonedRange.selectNodeContents(divref.current);
    clonedRange.setEnd(range.endContainer, range.endOffset); // this set the position of the cursor
    ProcessorValues.current.caretPosition = clonedRange.toString().length;
    let charcounter = 0;
    // console.log(divref.current.childNodes);

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
    // console.log(ProcessorValues.current.sorted);
    // ProcessorValues.current.sorted = customSort(ProcessorValues.current.sorted);
  }

  function handleclick(e) {
    console.log(e);
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
      length += startIndex-1;
      console.log('Start Index:', startIndex, length);
      ProcessorValues.current.selectedlower = startIndex;
      ProcessorValues.current.selectedupper = length;
    }
  }
  function ChangeEntities(choice) {
    ProcessorValues.current.counter = ProcessorValues.current.counter + 1;
    const NewEntity = {
      id: ProcessorValues.current.counter,
      lower: ProcessorValues.current.selectedlower,
      upper: ProcessorValues.current.selectedupper,
      style: [TEXT_STYLES[choice]]
    };
    console.log(NewEntity);
    ProcessorValues.current.sorted.push(NewEntity);
    ProcessorValues.current.sorted = ProcessorValues.current.sorted.sort(customSort);

    while (index < ProcessorValues.current.sorted.length) {
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
    }
    ProcessorValues.current.sorted = ProcessorValues.current.sorted.sort(customSort);
    console.log(ProcessorValues.current.sorted, '\n---------------------\n');
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
