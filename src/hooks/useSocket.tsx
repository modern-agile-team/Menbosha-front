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
    const socket = io('http://54.180.108.185:3000');
    setSocket(socket);

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
