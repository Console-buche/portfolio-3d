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
  boxShadow: 'inset 0 0 78px',
  padding: '10px',
  '&::after': {
    content: '',
    position: 'absolute',
    inset: 0,
    opacity: 0.25,
    backgroundImage: 'url("src/assets/img/texture-chat.jpg")',
    mixBlendMode: 'overlay'
  }
});

const StyledMessage = styled('div', {
  color: 'rgb(255, 168, 41)',
  fontSize: 18,
  lineHeight: '1.2',
  textShadow:
    'rgb(255 168 41) 0px 0px 4px, rgb(255 168 41) 0px 0px 11px, rgb(255 168 41) 0px 0px 19px, rgb(153 94 15) 0px 0px 40px, rgb(153 94 15) 0px 0px 80px, rgb(153 94 15) 0px 0px 90px, rgb(153 94 15) 0px 0px 100px, rgb(153 94 15) 0px 0px 150px',
  animation: 'flickerMessage 1.5s infinite'
});

const Div = styled('div', {
  padding: '6px 15px',
  borderRadius: 16,
  display: 'flex',
  gap: 8
});

const StyledUsername = styled('span', {
  fontWeight: 'bold',
  fontSize: 15,
  color: 'var(--clr-username, #fff)',
  textShadow:
    'var(--clr-username, #fff) 0px 0px 4px, var(--clr-username, #fff) 0px 0px 11px, var(--clr-username, #fff) 0px 0px 19px, rgb(153 94 15) 0px 0px 40px, rgb(153 94 15) 0px 0px 80px, rgb(153 94 15) 0px 0px 90px, rgb(153 94 15) 0px 0px 100px, rgb(153 94 15) 0px 0px 150px',
  animation: 'flickerUsername 1.5s infinite',
  whiteSpace: 'nowrap'
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
            <StyledUsername style={{ '--clr-username': message.color } as React.CSSProperties}>
              {message.username} &gt;
            </StyledUsername>
            <StyledMessage>{message.message}</StyledMessage>
          </Div>
        );
      })}
    </StyledChat>
  );
};

export default Chat;
