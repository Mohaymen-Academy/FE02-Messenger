import React, { useEffect } from 'react';
import {
  UilTimes,
  UilPen,
  UilLink,
  UilBell,
  UilBellSlash,
  UilUserPlus
} from '@iconscout/react-unicons';
import { Files, Links, Medias, Musics, Voices, FilePartition } from './ProfileParts';
import { useDispatch, useSelector } from 'react-redux';
import Requests from '../../API/Requests';
import { SetLeftProf, addcontact } from '../../features/SelectedInfo';
import SearchResult from '../SearchBar/SearchResult';
import { AddContact, GetContacts } from '../../features/chatCardPreviewSlice';
import { GetSharedMedia } from '../../features/SharedMediaSlice';
export default function LeftSide({
  chatid,
  setActive,
  setlayout,
  isGroupOrChannel,
  isgroup,
  selectedProfile
  // chatid
}) {
  // console.error(selectedProfile);
  const dispatch = useDispatch();
  const account = useSelector((state) => state.selectedProf.leftProf);
  const iscontact = useSelector((state) => state.selectedProf.isContact);
  useEffect(() => {
    console.error(chatid);
    dispatch(GetSharedMedia(chatid));
    dispatch(SetLeftProf({ profid: chatid }));
  }, [chatid]);
  console.error(selectedProfile);
  // console.error(iscontact);
  const [filepart, setfilepart] = React.useState({
    0: 1,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  });

  const changesetpat = (num) => {
    let newfilepart = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };
    newfilepart[num] = 1;
    setfilepart(newfilepart);
  };
  async function handleAdd() {
    console.error(selectedProfile.profileID);
    await Requests().AddContact(selectedProfile.profileID);
    // dispatch(GetContacts());
    dispatch(addcontact());
  }
  const [members, setmembers] = React.useState([]);
  useEffect(() => {
    if (isgroup) {
      Requests()
        .GetMembers(selectedProfile.profileID)
        .then((res) => res.data)
        .then((data) => {
          console.error(data);
          setfilepart({
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 1
          });
          setmembers(data);
        })
        .catch((err) => console.error(err));
    } else {
      setfilepart({
        0: 1,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      });
    }
  }, [selectedProfile]);
  // console.log(selectedProfile.lastProfilePicture?.preLoadingContent)

  return (
    <div
      className={`flex min-w-[350px] flex-col h-screen transition-all duration-200 ease-in bg-color2 shadow-md border-r`}>
      <div className="flex bg-color2 items-center justify-between px-4  ">
        <div className="flex flex-row w-fit h-[70px] place-items-center">
          <button
            onClick={(e) => {
              setActive(false);
            }}>
            <UilTimes className="w-8 h-8 text-text1 cursor-pointer" />
          </button>
          <div className="p-1 cardP">اطلاعات پروفایل</div>
        </div>
        <div>
          {iscontact ? (
            <button onClick={() => setlayout(1)}>
              <UilPen className=" text-text1 cursor-pointer" />
            </button>
          ) : !isGroupOrChannel ? (
            <button onClick={handleAdd}>
              <UilUserPlus className=" text-text1 cursor-pointer" />
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="relative w-full h-[350px] mb-0 md:h-[350px]">
        <div
          className={`flex flex-col justify-end place-items-end w-full h-[350px]  bg-cover  bg-center bg-no-repeat`}
          // style={{ backgroundColor: selectedProfile.defaultProfileColor }}
        >
          <div className="h-[350px] w-[100%] flex flex-col">
            <img
              className="h-[350px] w-auto aspect-[1/1] "
              src={`data:image/jpeg;base64,${selectedProfile.lastProfilePicture?.preLoadingContent}`}
              style={{ backgroundColor: selectedProfile.defaultProfileColor }}
              alt=""
            />
            <div
              className="absolute w-[100%] flex flex-col justify-end gap-2  "
              style={{ bottom: 0 }}>
              <div className=" p-10  text-white font-bold text-[25px] opacity-150 absolute">
                {selectedProfile?.profileName}
              </div>
              <div className="p-5 pr-10  text-white text-[15px] absolute">{account?.status}</div>
              {/* //should change with the member or subs number */}
              <div className="w-full h-[155px] bg-gradient-to-b from-transparent to-black"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {isgroup ? (
          <div className="w-[100%] flex flex-col gap-1 my-3">
            <button className="flex w-[95%] justify-evenly  mx-auto items-center hover:bg-opacity-5 rounded-lg hover:bg-color3">
              {/* <UilLink className={'text-text1'} /> */}
              {/* <div className="overflow-hidden  flex flex-col text-right">
                <p className="text-text1">https://splus.ir/joingroup/AG3_T_fw3E7bqinWv6nnlg</p>
                <p className="text-opacity-30 text-text1">لینک</p>
              </div> */}
            </button>
            <button className="flex w-[90%] justify-between mt-3 mx-auto items-center hover:bg-opacity-5 rounded-lg hover:bg-color3">
              <div className="flex w-[100%] gap-4 items-center py-2">
                {false ? (
                  <UilBell className={'w-5 h-5 text-color3'}></UilBell>
                ) : (
                  <UilBellSlash className={'w-7 h-7 text-color3'}></UilBellSlash>
                )}
                <p className="w-fit text-text1">اعلان ها</p>
              </div>
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col w-full h-[calc(100%-420px)] bg-color1">
        <div className="w-full h-[50px] bg-color2 flex flex-row  place-items-center border-b-1">
          {isgroup ? (
            <div
              className={`category-part ${
                filepart[5] == 1 ? 'bg-color1 rounded-t-lg ' : 'bg-color2'
              }`}
              onClick={() => changesetpat(5)}>
              اعضا
            </div>
          ) : (
            <></>
          )}
          <div
            className={`category-part ${filepart[0] == 1 ? 'bg-color1 rounded-t-lg' : 'bg-color2'}`}
            onClick={() => changesetpat(0)}>
            رسانه
          </div>
          <div
            className={`category-part ${filepart[1] == 1 ? 'bg-color1 rounded-t-lg' : 'bg-color2'}`}
            onClick={() => changesetpat(1)}>
            فایل ها
          </div>
          <div
            className={`category-part ${filepart[2] == 1 ? 'bg-color1 rounded-t-lg' : 'bg-color2'}`}
            onClick={() => changesetpat(2)}>
            لینک
          </div>
          <div
            className={`category-part ${filepart[3] == 1 ? 'bg-color1 rounded-t-lg' : 'bg-color2'}`}
            onClick={() => changesetpat(3)}>
            موسیقی
          </div>
          <div
            className={`category-part ${filepart[4] == 1 ? 'bg-color1 rounded-t-lg' : 'bg-color2'}`}
            onClick={() => changesetpat(4)}>
            صدا
          </div>
        </div>
        <div>
          {filepart[0] == 1 ? (
            <Medias />
          ) : filepart[1] == 1 ? (
            <FilePartition />
          ) : filepart[2] == 1 ? (
            <Links />
          ) : filepart[3] == 1 ? (
            <Musics />
          ) : filepart[4] == 1 ? (
            <Voices />
          ) : filepart[5] == 1 ? (
            <div className="mt-3 mr-[-1]">
              {members.map((member, index) => (
                <SearchResult key={index} profile={member} text={member.status} />
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
