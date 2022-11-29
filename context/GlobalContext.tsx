import React, { createContext, useState, ReactNode } from "react";

interface GlobalProviderProps {
  children: ReactNode;
}
interface Global {
  countdownEnded: boolean;
  setCountdownEnded: (countdownEnded: boolean) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  userTickets: number;
  setUserTickets: (userTickets: number) => void;
}
// create context
const GlobalContext = createContext<Global>({} as Global);

// provider components
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [countdownEnded, setCountdownEnded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [userTickets, setUserTickets] = useState(0);
  return (
    <GlobalContext.Provider
      value={{
        countdownEnded,
        setCountdownEnded,
        quantity,
        setQuantity,
        userTickets,
        setUserTickets,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
