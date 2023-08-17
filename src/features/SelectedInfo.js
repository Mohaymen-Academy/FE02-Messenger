import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Requests from '../API/Requests';

function CustomsortInc(a, b) {
  // console.log(a.messageID,b.messageID)
  return a.messageID - b.messageID;
  // else
  // return b.profile.profileID-a.profile.profileID;}
}

const initialState = {
  selectedChatID: 1032,
  chatType: 0,
  selectedProfileView: null,
  Chatmessages: [
    {
      messageID: 1,
      text: 'سلام خوبی ؟',
      time: '2023-08-14T13:57:37.447431',
      media: null,
      viewCount: 2,
      sender: {
        profileID: 1000,
        profileName: 'Ali',
        defaultProfileColor: '#e6c773',
        lastProfilePicture: null
      },
      isPinned: false,
      isEdited: false
    },
    {
      messageID: 2,
      text: 'سلام. خوبم ممنون تو چطوری ؟',
      time: '2023-08-14T13:57:41.209955',
      media: null,
      viewCount: 1,
      sender: {
        profileID: 1001,
        profileName: 'Sara',
        defaultProfileColor: '#e68873',
        lastProfilePicture: {
          preLoadingContent:
            '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z'
        }
      },
      isPinned: false,
      isEdited: false
    },
    {
      messageID: 2,
      text: 'سلام. خوبم ممنون تو چطوری ؟',
      time: '2023-08-14T13:57:41.209955',
      media: null,
      viewCount: 1,
      sender: {
        profileID: 1001,
        profileName: 'Sara',
        defaultProfileColor: '#e68873',
        lastProfilePicture: {
          preLoadingContent:
            '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z'
        }
      },
      isPinned: false,
      isEdited: false
    },
    {
      messageID: 5,
      text: 'سلام. خوبم ممنون تو چطوری ؟',
      time: '2023-08-14T13:57:41.209955',
      media: null,
      viewCount: 1,
      sender: {
        profileID: 1001,
        profileName: 'Sara',
        defaultProfileColor: '#e68873',
        lastProfilePicture: {
          preLoadingContent:
            '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z'
        }
      },
      isPinned: false,
      isEdited: false
    },
    {
      messageID: 3,
      text: 'سلام. خوبم ممنون تو چطوری ؟',
      time: '2023-08-14T13:57:41.209955',
      media: null,
      viewCount: 1,
      sender: {
        profileID: 1001,
        profileName: 'Sara',
        defaultProfileColor: '#e68873',
        lastProfilePicture: {
          preLoadingContent:
            '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z'
        }
      },
      isPinned: false,
      isEdited: false
    },
    {
      messageID: 4,
      text: 'سلام. خوبم ممنون تو چطوری ؟',
      time: '2023-08-14T13:57:41.209955',
      media: null,
      viewCount: 1,
      sender: {
        profileID: 1001,
        profileName: 'Sara',
        defaultProfileColor: '#e68873',
        lastProfilePicture: {
          preLoadingContent:
            '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z'
        }
      },
      isPinned: false,
      isEdited: false
    },
    {
      messageID: 7,
      text: 'سلام. خوبم ممنون تو چطوری ؟',
      time: '2023-08-14T13:57:41.209955',
      media: null,
      viewCount: 1,
      sender: {
        profileID: 1001,
        profileName: 'Sara',
        defaultProfileColor: '#e68873',
        lastProfilePicture: {
          preLoadingContent:
            '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z'
        }
      },
      isPinned: false,
      isEdited: false
    },
    {
      messageID: 6,
      text: 'سلام. خوبم ممنون تو چطوری ؟',
      time: '2023-08-14T13:57:41.209955',
      media: null,
      viewCount: 1,
      sender: {
        profileID: 1001,
        profileName: 'Sara',
        defaultProfileColor: '#e68873',
        lastProfilePicture: {
          preLoadingContent:
            '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z'
        }
      },
      isPinned: false,
      isEdited: false
    },
    {
      messageID: 8,
      text: 'سلام. خوبم ممنون تو چطوری ؟',
      time: '2023-08-14T13:57:41.209955',
      media: null,
      viewCount: 1,
      sender: {
        profileID: 1001,
        profileName: 'Sara',
        defaultProfileColor: '#e68873',
        lastProfilePicture: {
          preLoadingContent:
            '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z'
        }
      },
      isPinned: false,
      isEdited: false
    },
    {
      messageID: 9,
      text: 'سلام. خوبم ممنون تو چطوری ؟',
      time: '2023-08-14T13:57:41.209955',
      media: null,
      viewCount: 1,
      sender: {
        profileID: 1001,
        profileName: 'Sara',
        defaultProfileColor: '#e68873',
        lastProfilePicture: {
          preLoadingContent:
            '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z'
        }
      },
      isPinned: false,
      isEdited: false
    },
    {
      messageID: 6,
      text: 'سلام. خوبم ممنون تو چطوری ؟',
      time: '2023-08-14T13:57:41.209955',
      media: null,
      viewCount: 1,
      sender: {
        profileID: 1001,
        profileName: 'Sara',
        defaultProfileColor: '#e68873',
        lastProfilePicture: {
          preLoadingContent:
            '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z'
        }
      },
      isPinned: false,
      isEdited: false
    },
    {
      messageID: 6,
      text: 'سلام. خوبم ممنون تو چطوری ؟',
      time: '2023-08-14T13:57:41.209955',
      media: null,
      viewCount: 1,
      sender: {
        profileID: 1001,
        profileName: 'Sara',
        defaultProfileColor: '#e68873',
        lastProfilePicture: {
          preLoadingContent:
            '/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+b/4ofGDwJ4ns4vgafC2nwveeCfDEtv4m1vVr7WfEWgfGiTwjKuu2OnTpdabY6HpXibxz9li1q1uYNYktoFS3n8yCzs/7FKKKvh+lSweSZdSpwlP2lJYidTE4jFYqrKdZUnNe0r16klTTvKMI2jGU5uzcmfoGczeJzbGQnGnBYaoqMHRp06LdOFqcFNU4qMnGMFaXKpdG3FRUf//Z'
        }
      },
      isPinned: false,
      isEdited: false
    }
  ],
  lastMessage: 0
};
const GetMessages = createAsyncThunk('selectedProf/getmessages', async (requestinfo, params) => {
  try {
    // console.log(requestinfo);
    const data = await Requests().GetChat(requestinfo.ID);
    // console.log(data);
    // return data;
    return { data: data.data, ID: requestinfo.ID, type: requestinfo.type };
  } catch (err) {
    console.log(err);
  }
});
// const UpdateMessages = createAsyncThunk(
//   'selectedProf/updatemessages',
//   async (requestinfo, params) => {
//     try {
//       const data = await Requests().GetChat(requestinfo.ID, params);
//       return { msgId: data.id, newtext: data.text };
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );
const SelectedProf = createSlice({
  name: 'selectedProf',
  initialState,
  // reducers: {
  // },
  reducers: {
    resetChatId: (state, action) => {
      // console.log('hello from reducer');
      state.selectedChatID = null;
    },
    editmsg: (state, action) => {
      console.log(action.payload.msgId);
      state.Chatmessages = state.Chatmessages.map((ele) => {
        if (ele.messageID == action.payload.msgId) {
          return { ...ele, text: action.payload.newtext };
        }
        return ele;
      });
    }
  },
  extraReducers: (builder) =>
    builder.addCase(GetMessages.fulfilled, (state, action) => {
      state.Chatmessages = action.payload.data?.messages;
      state.chatType = action.payload.type;
      state.selectedChatID = action.payload.ID;
    })
});
export { GetMessages };
export const { resetChatId, editmsg } = SelectedProf.actions;
// export const { setChat, setChatType } = SelectedProf.actions;
export default SelectedProf.reducer;
