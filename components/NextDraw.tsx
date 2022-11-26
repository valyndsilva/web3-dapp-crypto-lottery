import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { currency } from "../constants";
import TicketPrice from "./TicketPrice";

function NextDraw() {
  const [countdownEnded, setCountdownEnded] = useState<boolean>(false);
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const { data: currentWinningReward } = useContractRead(
    contract,
    "CurrentWinningReward"
  );
  const { data: duration } = useContractRead(contract, "duration");
  // console.log(duration);
  return (
    <div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5">
      <div className="stats-container">
        <h1 className="text-5xl text-white font-semibold text-center">
          The Next Draw
        </h1>
        <div className="flex justify-between p-2 space-x-2">
          <div className="stats">
            <h2 className="text-sm">Total Pool</h2>
            <p className="text-xl">
              {currentWinningReward &&
                ethers.utils.formatEther(currentWinningReward.toString())}{" "}
              {currency}
            </p>
          </div>
          <div className="stats">
            <h2 className="text-sm">Tickets Remaing</h2>
            <p className="text-xl">{remainingTickets?.toNumber()}</p>
          </div>
        </div>
        {duration !== undefined && (
          <CountdownTimer setCountdownEnded={setCountdownEnded} />
        )}
      </div>
      <TicketPrice countdownEnded={countdownEnded} />
    </div>
  );
}

export default NextDraw;
