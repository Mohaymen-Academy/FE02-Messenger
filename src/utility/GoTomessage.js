import { GetMessages } from "../features/SelectedInfo";

function GoHnalder() {
  /**
   *
   *  @param {Array} messages
   *  @param {Number} msgid
   *
   **/
  function MsgIsInList(messages, msgid) {
    return messages.filter((msg) => msg.MessageID == msgid).length > 0;
  }
  /**
   *
   *  @param {Array} messages
   *  @param {Number} msgid
   *  @param {HTMLElement} Listref
   **/
  function GoTo(messages, msgid, Listref, dispatch) {
    if (MsgIsInList(messages, msgid)) {
      Listref.childNodes.forEach((item) => console.log(item.dataset.id));
    } else {
        dispatch(GetMessages())
    }
  }
}
