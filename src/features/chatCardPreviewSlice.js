import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMessage: null,
  messages: [
    {
      profile: {
        profileID: 1032,
        profileName: 'Armand Salkild',
        type: 0,
        defaultProfileColor: '#9573e6',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 32,
        text: 'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
        time: '2023-08-16T20:37:45.579914',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1031,
        profileName: 'Yetta Smallcomb',
        type: 0,
        defaultProfileColor: '#8a73e6',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 31,
        text: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
        time: '2023-08-16T20:37:45.523278',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1030,
        profileName: 'Connie Gowanlock',
        type: 0,
        defaultProfileColor: '#b6e673',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 30,
        text: 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
        time: '2023-08-16T20:37:45.462193',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1029,
        profileName: 'Maggy Rendbaek',
        type: 0,
        defaultProfileColor: '#e673d8',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 29,
        text: 'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
        time: '2023-08-16T20:37:45.382561',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1028,
        profileName: 'Ayn Mingey',
        type: 0,
        defaultProfileColor: '#d473e6',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 28,
        text: 'Proin risus. Praesent lectus.',
        time: '2023-08-16T20:37:45.31322',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1027,
        profileName: 'Rooney Crowley',
        type: 0,
        defaultProfileColor: '#73e67a',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 27,
        text: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
        time: '2023-08-16T20:37:45.249211',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1026,
        profileName: 'Sybyl Jenckes',
        type: 0,
        defaultProfileColor: '#73a6e6',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 26,
        text: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
        time: '2023-08-16T20:37:45.184225',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1025,
        profileName: 'Gilberta McVaugh',
        type: 0,
        defaultProfileColor: '#73a6e6',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 25,
        text: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
        time: '2023-08-16T20:37:45.116845',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1024,
        profileName: 'Barry Ridehalgh',
        type: 0,
        defaultProfileColor: '#e6d673',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 24,
        text: 'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
        time: '2023-08-16T20:37:45.052831',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1023,
        profileName: 'Nikolas Leaves',
        type: 0,
        defaultProfileColor: '#e673c5',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 23,
        text: 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        time: '2023-08-16T20:37:44.99468',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1022,
        profileName: 'Sibel McEwen',
        type: 0,
        defaultProfileColor: '#8673e6',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 22,
        text: 'Suspendisse potenti. Nullam porttitor lacus at turpis.',
        time: '2023-08-16T20:37:44.939016',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1021,
        profileName: 'Sheelah Longson',
        type: 0,
        defaultProfileColor: '#9173e6',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 21,
        text: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
        time: '2023-08-16T20:37:44.875008',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1020,
        profileName: 'Robinett Hillburn',
        type: 0,
        defaultProfileColor: '#a6e673',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 20,
        text: 'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
        time: '2023-08-16T20:37:44.793419',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1019,
        profileName: 'Leanor Darnell',
        type: 0,
        defaultProfileColor: '#73e6e0',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 19,
        text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        time: '2023-08-16T20:37:44.730926',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1018,
        profileName: 'Andrea Ellicock',
        type: 0,
        defaultProfileColor: '#73e69d',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 18,
        text: 'Nulla nisl. Nunc nisl.',
        time: '2023-08-16T20:37:44.670819',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1017,
        profileName: 'Meta Henker',
        type: 0,
        defaultProfileColor: '#e67e73',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 17,
        text: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
        time: '2023-08-16T20:37:44.606809',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1016,
        profileName: 'Clemens Garrood',
        type: 0,
        defaultProfileColor: '#73b4e6',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 16,
        text: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        time: '2023-08-16T20:37:44.542354',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1015,
        profileName: 'Vivianne Micco',
        type: 0,
        defaultProfileColor: '#93e673',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 15,
        text: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        time: '2023-08-16T20:37:44.48323',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1014,
        profileName: 'Nadean Noulton',
        type: 0,
        defaultProfileColor: '#e673d6',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 14,
        text: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        time: '2023-08-16T20:37:44.373318',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    },
    {
      profile: {
        profileID: 1013,
        profileName: 'Idaline Ivamy',
        type: 0,
        defaultProfileColor: '#e673c5',
        lastProfilePicture: null
      },
      lastMessage: {
        messageID: 13,
        text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        time: '2023-08-16T20:37:44.269269',
        viewCount: 1
      },
      unreadMessageCount: 0,
      updated: false
    }
  ],
  finished: false
};

/**
[
    messages: [
        {
            "messageID": 1,
            "text": "سلام خوبی ؟",
            "time": "2023-08-14T13:57:37.447431",
            "media": null,
            "viewCount": 2,
            "sender": {
                "profileID": 1000,
                "profileName": "Ali",
                "defaultProfileColor": "#e6c773",
                "lastProfilePicture": null
            },
            "isPinned": false,
            "isEdited": false
        },
        {
            "messageID": 2,
            "text": "سلام. خوبم ممنون تو چطوری ؟",
            "time": "2023-08-14T13:57:41.209955",
            "media": null,
            "viewCount": 1,
            "sender": {
                "profileID": 1001,
                "profileName": "Sara",
                "defaultProfileColor": "#e68873",
                "lastProfilePicture": {
                    "preLoadingContent": "/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z"
                }
            },
            "isPinned": false,
            "isEdited": false
        }
    ],
    "messageId": 1,
    "downFinished": true,
    "upFinished": true
]

 * 
 * 
 * */

const chatCardPreviewSlice = createSlice({
  name: 'messageList',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload.chatDisplayList;
    },
    setActiveMessage: (state, action) => {
      state.activeMessage = state.messages.at(action.payload);
    },
    removeActiveMessage: (state) => {
      state.activeMessage = null;
    }
  }
  // extraReducers: {
  //   improveProfpic: (state, action) => {

  //   }
  // }
});
export const { setMessages, setActiveMessage, removeActiveMessage } = chatCardPreviewSlice.actions;
export default chatCardPreviewSlice.reducer;
