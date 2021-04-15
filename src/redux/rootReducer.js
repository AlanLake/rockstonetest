const initialState = {
  messages: [],
};

export const sendMsg = {
    type: "SEND"
};

export default function rootReducer(state = initialState, action) {
  if (action.type === "SEND") {
    return { messages: [...state.messages, action.value] };
  }
  return state
}
