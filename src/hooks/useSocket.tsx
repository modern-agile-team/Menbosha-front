import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { io, Socket } from 'socket.io-client';

interface SocketProviderProps {
  children: ReactNode;
}

type SocketContextType = Socket<any, any> | null;

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const [socket, setSocket] = useState<SocketContextType | null>(null);

  useEffect(() => {
    //수정 해야함
    // const socket = io('http://54.180.108.185:3000/chat');
    const socket = io(`${process.env.NEXT_PUBLIC_API_BASE_URL}chat`);
    setSocket(socket);
    console.log('socketsocketsocketsocket', socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = (): SocketContextType | undefined => {
  return useContext(SocketContext);
};
