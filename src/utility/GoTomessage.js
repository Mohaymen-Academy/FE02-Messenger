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
        // console.error(Listref.current.scrollTop + childNode.getBoundingClientRect().top);
        if (childNode.getAttribute('data-id') == msgid) {
          selectedchild = childNode;
          Listref.current.scrollTop =
            Listref.current.scrollTop + selectedchild.getBoundingClientRect().top - 300;
        }
      }
    } else {
      dispatch(GetMessages({ type: chattype, profid: chatid, message_id: msgid }));
    }
  }
  return { GoTo };
}
