import { GetMessages } from '../features/SelectedInfo';

export default function GoHnalder() {
  /**
   *
   *  @param {Array} messages
   *  @param {Number} msgid
   *
   **/
  function MsgIsInList(messages, msgid) {
    console.error(messages);
    return messages.filter((msg) => msg.messageID == msgid).length > 0;
  }
  /**
   *
   *  @param {Array} messages
   *  @param {Number} msgid
  //  *  @param {HTMLElement} Listref
   **/
  function GoTo(messages, msgid, Listref, dispatch) {
    if (MsgIsInList(messages, msgid)) {
      // console.error(Listref);
      // console.error(Listref.current.childNodes);
      // Loop through the child nodes of the parent element
      let selectedchild;
      for (let i = 0; i < Listref.current.childNodes.length; i++) {
        const childNode = Listref.current.childNodes[i];
        console.log(childNode.getAttribute('data-id'));
        if (childNode.dataset.id == msgid){
          selectedchild=childNode
        }
          // Perform operations on the child node
      }
      // const childNodeWithDataId = parentElement.querySelector(`[data-id="${dataId}"]`);
      // Listref.childNodes.item((item) => console.error(item.dataset.id));
    } else {
      console.error('false');
      //   // dispatch(GetMessages());
    }
  }
  return { GoTo };
}
