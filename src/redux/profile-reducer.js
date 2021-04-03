const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

//state по умолчанию
let initialState = {
  posts: [
    {id: 1, message: "Hey how are you?", likes: 50, views: 200},
    {id: 2, message: "It's my second post", likes: 30, views: 100},
    {id: 3, message: "Yo what's up guys?", likes: 60, views: 300},
  ],
  newText: "",
};

const profileReducer = (state = initialState, action) => {
  //{type: 'METHOD-NAME'}
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length,
        message: state.newText,
        likes: 0,
        views: 0,
      };
      state.posts.push(newPost);
      state.newText = ""; //обнулили окно ввода здесь в BLL
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
