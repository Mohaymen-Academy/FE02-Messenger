import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DOWN, UP } from '../../utility/Constants';
import { GetMessagesDown, GetMessagesUp } from '../../features/SelectedInfo';

export default function ShowUnread() {
  const dispatch = useDispatch();
  const selectedChat = useSelector((store) => store.selectedProf.selectedChatID);
  const upfinished = useSelector((state) => state.selectedProf.upfinished);
  const downfinished = useSelector((state) => state.selectedProf.downfinished);
  const minID = useSelector((state) => state.selectedProf.minID);
  const maxID = useSelector((state) => state.selectedProf.maxID);
  const unreadcount = useSelector((state) => state.selectedProf.unreadcount);
  const needupdate = useSelector((state) => state.selectedProf.needupdate);
  const dir = useSelector((state) => state.selectedProf.dir);
  useEffect(() => {
    // console.error(
    //   selectedChat,
    //   upfinished,
    //   downfinished,
    //   minID,
    //   maxID,
    //   unreadcount,
    //   needupdate,
    //   dir
    // );
    if (needupdate) {
      if (dir == UP && !upfinished) {
        console.error('2');
        dispatch(GetMessagesUp({ msgid: minID, chatid: selectedChat }));
      } else if (dir == DOWN && !downfinished) {
        console.error('1');
        dispatch(GetMessagesDown({ msgid: maxID, chatid: selectedChat }));
      }
    }
  });
  return (
    <div>
      <span>{unreadcount}</span>
    </div>
  );
}
