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
      // never display more than MAX_MESSAGES
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
      // for some reasons I couldn't do a simple setState here, so I used dispatch
      dispatch({ type: ReducerActionType.ADD_MESSAGE, payload: chatMessage });
    });

    return () => {
      socket.removeAllListeners();
    };
  }, []);

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
