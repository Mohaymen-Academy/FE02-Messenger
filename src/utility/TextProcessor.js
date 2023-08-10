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
export function TextProcessor(containers) {
  let sorted = containers.sort(customSort);
  let counter = sorted.length;
  function replaceInArray(modifiedobject) {
    const Originalindex = sorted.findIndex((obj) => obj.id == modifiedobject.id);
    if (Originalindex != -1) {
      //   console.log('before', sorted[Originalindex]);
      sorted[Originalindex] = modifiedobject;
      //   console.log('after', sorted[Originalindex]);
    } else {
      sorted.push(modifiedobject);
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
      //   console.log(
      //     HeaderDirectChildContainerLower,
      //     HeaderDirectChildContainerUpper,
      //     IntersectionChildContainerLower,
      //     IntersectionChildContainerUpper,
      //     NewContainerLower,
      //     NewContainerUpper
      //   );

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
  // while (index < sorted.length) {
  //   const HeadContainer = sorted[index];
  //   const containersConflict = Conflicts(HeadContainer, sorted.slice(index + 1));
  //   // console.log(containersConflict)
  //   // console.log(HeadContainer,'\nzarp\n',container/sConflict);
  //   // console.log(HeadContainer, '\n---------------------\n', containersConflict);
  //   if (containersConflict.length) {
  //     //   console.log('beforechange', HeadContainer, containersConflict[0]);
  //     ChnageTheContainers(HeadContainer, containersConflict[0]);
  //     index = 0;
  //     //   break;
  //     //   console.log('zarp', sorted, '\n--------------------------------\n');
  //   } else {
  //     index++;
  //   }
  //   sorted = sorted.sort(customSort);
  //   // console.log(sorted, '\n---------------------\n');
  // }
  //   console.log(index);
  console.log(sorted);
  function removeChar(divID, charindex) {
    console.log();
    let entetiyindex = 0;
    sorted.forEach((element, index) => {
      if (element.id == divID) {
        entetiyindex = index;
      }
    });
    console.log(entetiyindex);
  }
  function addChar() {}
  removeChar(3, 3);
}

const customSort = (a, b) => {
  if (a.lower != b.lower) {
    return a.lower - b.lower;
  } else {
    // console.log(a.upper, b.upper);
    return a.upper - b.upper;
  }
};
TextProcessor(containers);

function handleonInput(e) {
  e.stopPropagation();
  // console.log('zarp')
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const clonedRange = range.cloneRange();
  clonedRange.selectNodeContents(divref.current);
  clonedRange.setEnd(range.endContainer, range.endOffset); // this set the position of the cursor
  const caretPosition = clonedRange.toString().length;
  textref.current.textcontent = caretPosition;
  console.log(clonedRange.toString());
}

function handleclick(e) {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const clonedRange = range.cloneRange();
  clonedRange.selectNodeContents(divref.current);
  clonedRange.setEnd(range.endContainer, range.endOffset); // this set the position of the cursor
  const caretPosition = clonedRange.toString().length;
  // console.log(caretPosition);
  textref.current.textcontent = caretPosition;
}

function handleEmojiPicker(e) {
  const emoji = e.emoji;
  const careposition = textref.current.textcontent;
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
  console.log(index);

  const leftPart = originalString.substring(0, index);
  const rightPart = originalString.substring(index);

  return leftPart + charToAdd + rightPart;
}
function handleSelect(e) {
  serOpenTextProcessor(true);
  const selection = window.getSelection();
  const selectedText = selection.toString();

  if (selectedText.toString() != '') {
    console.log(selection);
    console.log(selection.anchorNode.parentNode.dataset);
    console.log(selection.anchorOffset, ' anchor offset');
    console.log(selection.focusNode.parentNode.dataset);
    console.log(selection.focusOffset, ' focus offset');
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
  console.log(e.key);
  console.log(e);
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const clonedRange = range.cloneRange();
  console.log(clonedRange);
}

