let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hey how are you?", likes: 50, views: 200},
        {id: 2, message: "It's my second post", likes: 30, views: 100},
        {id: 3, message: "Yo what's up guys?", likes: 60, views: 300},
      ],
      newText: "",
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: "Leo"},
        {id: 2, name: "Jes"},
        {id: 3, name: "Mum"},
        {id: 4, name: "Gra"},
        {id: 5, name: "Alex"},
      ],
      messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Let's meet tomorrow, bro"},
      ],
      newMessage: "",
    },
    sidebar: {
      friends: [
        {id: 1, name: "Leo", img: "img1"},
        {id: 2, name: "Jes", img: "img2"},
        {id: 3, name: "Mum", img: "img3"},
        {id: 4, name: "Gra", img: "img4"},
        {id: 5, name: "Alex", img: "img5"},
      ],
    },
  },
  _rerenderEntireTree() {
    console.log("state is changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    //{type: 'METHOD-NAME'}
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.profilePage.posts.length,
        message: this._state.profilePage.newText,
        likes: 0,
        views: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newText = ""; //обнулили окно ввода теперь здесь в BLL
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newText = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogsPage.newMessage = action.newMessage;
      this._rerenderEntireTree(this._state);
    } else if (action.type === SEND_MESSAGE)  {
      let newMessage = {
        id: this._state.dialogsPage.messages.length,
        message: this._state.dialogsPage.newMessage
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessage = "";
      this._rerenderEntireTree(this._state);
    }
  },
};

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageActionCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE,
  newMessage: message,
});

window.store = store;

export default store;
