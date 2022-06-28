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
  gap: 6
});

const StyledMessage = styled('div', {
  color: 'rgba(0,0,0,0.75)',
  fontSize: 18,
  lineHeight: '1.2'
});

const Div = styled('div', {
  background: 'rgb(255,255,255, 0.85)',
  padding: '10px 15px',
  borderRadius: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 2
});

const StyledUsername = styled('span', {
  fontWeight: 'bold',
  fontSize: 14
});

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
          <Div key={index}>
            <StyledUsername css={{ color: message.color }}>{message.username}</StyledUsername>
            <StyledMessage>{message.message}</StyledMessage>
          </Div>
        );
      })}
    </StyledChat>
  );
};

export default Chat;
