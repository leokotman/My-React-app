const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
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
