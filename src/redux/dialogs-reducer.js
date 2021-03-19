const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

//state по умолчанию
let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
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
