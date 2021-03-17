import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

debugger;
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
    debugger;
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    // this._state.sidebar = sidebarReducer(this._state.sidebarReducer, action);

    this._rerenderEntireTree(this._state);
  },
};

window.store = store;

export default store;
