import React from 'react';
import { io } from 'socket.io-client';

const MAX_MESSAGES = 3;

interface IChatProps {}

interface ChatMessage {
  username: string;
  message: string;
}

enum ReducerActionType {
  ADD_MESSAGE
}

interface Action {
  type: ReducerActionType;
  payload: ChatMessage;
}

const reducer = (state: ChatMessage[], action: Action) => {
  switch (action.type) {
    case ReducerActionType.ADD_MESSAGE:
      const newState = [...state];
      if (newState.length >= MAX_MESSAGES) {
        newState.shift();
      }
      return [...newState, action.payload];
    default:
      return state;
  }
};

const Chat: React.FC<IChatProps> = () => {
  const [messages, dispatch] = React.useReducer(reducer, []);

  React.useEffect(() => {
    console.log('>> useEffect');
    const socket = io('http://localhost:3001');
    socket.on('new-message', (chatMessage: ChatMessage) => {
      console.log('messages in socket', chatMessage);
      dispatch({ type: ReducerActionType.ADD_MESSAGE, payload: chatMessage });
    });

    return () => {
      console.log('destruction');
      socket.removeAllListeners();
    };
  }, []);

  console.log('messages', messages);

  // return to be changed with Threejs
  return (
    <div>
      {messages.map((message, index) => {
        return (
          <div key={index}>
            <div>{message.username}</div>
            <div>{message.message}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Chat;
