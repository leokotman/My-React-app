const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
  //{type: 'METHOD-NAME'}
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.newMessage;
      return state;
    case SEND_MESSAGE:
      let newMessage = {
        id: state.messages.length,
        message: state.newMessage,
      };
      state.messages.push(newMessage);
      state.newMessage = "";
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageActionCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE,
  newMessage: message,
});

export default dialogsReducer;
