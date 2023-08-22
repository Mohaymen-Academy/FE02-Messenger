import { GetMessages } from '../features/SelectedInfo';

export default function GoHnalder() {
  /**
   *
   *  @param {Array} messages
   *  @param {Number} msgid
   *
   **/
  function MsgIsInList(messages, msgid) {
    // console.error(messages, msgid);
    return messages.filter((msg) => msg.messageID == msgid).length > 0;
  }
  /**
   *
   *  @param {Array} messages
   *  @param {Number} msgid
  //  *  @param {HTMLElement} Listref
   **/
  function GoTo(messages, msgid, Listref, dispatch, chatid, chattype) {
    if (MsgIsInList(messages, msgid)) {
      // console.error(Listref);
      // console.error(msgid);
      // Loop through the child nodes of the parent element
      let selectedchild;
      // console.error(Listref.current.childNodes);
      for (let i = 0; i < Listref.current.childNodes.length; i++) {
        const childNode = Listref.current.childNodes[i];
        // console.error(childNode.getAttribute('data-id'));
        if (childNode.getAttribute('data-id') == msgid) {
          selectedchild = childNode;
        }
      }
      // console.error(selectedchild);
      console.error(selectedchild.scrollHeight);
      console.error(selectedchild.scrollTop);
      console.error(selectedchild.clientHeight);
      // Listref.current.scrollTop = selectedchild.scrollHeight;
    } else {
      dispatch(GetMessages({ type: chattype, ID: chatid, message_id: msgid }));
    }
  }
  return { GoTo };
}
