import { useRef, useState } from 'react';
const containers = [
  { id: 1, lower: 1, upper: 8, style: ['bold'] },
  { id: 2, lower: 3, upper: 12, style: ['highlihgt'] },
  { id: 3, lower: 6, upper: 14, style: ['strike'] }
  //   { id: 4, lower: 9, upper: 18, style: ['underline'] },
  //   { id: 5, lower: 10, upper: 16, style: ['italic'] }
];

/**
 * @param {Object} HeadContainer
 * @param {Array} BodyContainer
 *
 * */
/**
 * @param {Array} containers
 *
 * */
export default function TextProcessorObj(containers) {
  console.log(containers);
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
    counter: 0
  });
  const divref = useRef(null);
  const [openTextProcessor, setOpenTextProcessor] = useState(false);

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
    // there are two ways

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
  // while (index < ProcessorValues.current.sorted.length) {
  //   const HeadContainer = ProcessorValues.current.sorted[index];
  //   const containersConflict = Conflicts(HeadContainer, ProcessorValues.current.sorted.slice(index + 1));
  //   // console.log(containersConflict)
  //   // console.log(HeadContainer,'\nzarp\n',container/sConflict);
  //   // console.log(HeadContainer, '\n---------------------\n', containersConflict);
  //   if (containersConflict.length) {
  //     //   console.log('beforechange', HeadContainer, containersConflict[0]);
  //     ChnageTheContainers(HeadContainer, containersConflict[0]);
  //     index = 0;
  //     //   break;
  //     //   console.log('zarp', ProcessorValues.current.sorted, '\n--------------------------------\n');
  //   } else {
  //     index++;
  //   }
  //   ProcessorValues.current.sorted = ProcessorValues.current.sorted.sort(customSort);
  //   // console.log(ProcessorValues.current.sorted, '\n---------------------\n');
  // }
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
    console.log('zarp');
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const clonedRange = range.cloneRange();
    clonedRange.selectNodeContents(divref.current);
    clonedRange.setEnd(range.endContainer, range.endOffset); // this set the position of the cursor
    ProcessorValues.current.caretPosition = clonedRange.toString().length;
    let charcounter = 0;
    console.log(divref.current.childNodes);

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
    console.log(ProcessorValues.current.sorted);
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
  function handleSelect(e) {
    setOpenTextProcessor(true);
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (selectedText.toString() != '') {
      // console.log(selection);
      // console.log(selection.anchorNode.parentNode.dataset);
      // console.log(selection.anchorOffset, ' anchor offset');
      // console.log(selection.focusNode.parentNode.dataset);
      // console.log(selection.focusOffset, ' focus offset');
      e.preventDefault();
      e.stopPropagation();
      x_mouse = e.clientX;
      y_mouse = e.clientY;
      setmousepositoin({ x_mouse, y_mouse });
      const range = selection.getRangeAt(0);
      const ref = divref.current;
      const rangerect = range.getBoundingClientRect();
      const startContainer = range.startContainer;
      const startOffset = range.startOffset;
      const endContainer = range.endContainer;
      const endOffset = range.endOffset;
    }
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
    setOpenTextProcessor
  ];
}
