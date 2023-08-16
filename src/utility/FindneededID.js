function CustomsortInc(a, b) {
  // console.log(a.messageID,b.messageID)
  return a.messageID - b.messageID;
  // else
  // return b.profile.profileID-a.profile.profileID;}
}

function CustomsortDec(a, b) {
  console.log(a.messageID, b.messageID);
  return b.messageID - a.messageID;
  // else
  // return b.profile.profileID-a.profile.profileID;}
}

function NeededId(direction, lists) {
  let neededId = lists[0].messageID;
  console.log(lists);
  lists.forEach((element) => {
    let accept_the_value =
      direction == 'Down' ? element.messageID > neededId : element.messageID < neededId;
    if (accept_the_value) {
      neededId = element.messageID;
    }
  });
//   console.log();
  return neededId;
}
export { NeededId };
