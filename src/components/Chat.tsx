import React from 'react';
import { io } from 'socket.io-client';
import { styled } from './style/Style.config';

interface IChatProps {}

interface ChatMessage {
  username: string;
  message: string;
  color: string;
}

const StyledChat = styled('div', {
  overflowY: 'scroll',
  scrollBehavior: 'auto',
  height: 600,
  width: 500,
  display: 'flex',
  flexDirection: 'column',
  gap: 15
});

const StyledMessage = styled('div', {
  color: 'rgba(0,0,0,0.4)'
});

const Div = styled('div', {
  background: 'rgb(255,255,255)',
  padding: '10px 5px',
  borderRadius: 20,
  display: 'flex',
  gap: 10
});

const StyledUsername = styled('span', {
  textTransform: 'uppercase',
  fontWeight: 'bold'
});

const min = 0;
const max = 1;

// Clamp number between two values with the following line:
const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

const Chat: React.FC<IChatProps> = () => {
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);

  React.useEffect(() => {
    console.log('>> useEffect');
    const socket = io('http://localhost:3001');
    socket.on('new-message', (chatMessage: ChatMessage) => {
      setMessages((prevMessages) => [chatMessage, ...prevMessages]);
    });

    return () => {
      socket.removeAllListeners();
    };
  }, []);

  return (
    <StyledChat>
      {messages.reverse().map((message, index) => {
        return (
          <Div
            key={index}
            css={{
              opacity: clamp(2 - messages.length / (messages.length - index), min, max)
            }}
          >
            <StyledUsername css={{ color: message.color }}>{message.username}</StyledUsername>
            <StyledMessage>{message.message}</StyledMessage>
          </Div>
        );
      })}
    </StyledChat>
  );
};

export default Chat;
