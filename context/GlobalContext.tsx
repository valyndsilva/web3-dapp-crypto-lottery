import React, { createContext, useState, ReactNode } from "react";

interface GlobalProviderProps {
  children: ReactNode;
}
interface Global {
  countdownEnded: boolean;
  setCountdownEnded: (countdownEnded: boolean) => void;
  showCountdown: boolean;
  setShowCountdown: (countdownEnded: boolean) => void;
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
  const [showCountdown, setShowCountdown] = useState(false);
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
        showCountdown,
        setShowCountdown,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
