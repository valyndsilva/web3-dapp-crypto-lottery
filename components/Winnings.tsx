import React from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { currency } from "../constants";
import { ethers } from "ethers";
import toast from "react-hot-toast";

interface Props {
  winnings: string;
}
function Winnings({ winnings }: Props) {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { mutateAsync: WithdrawWinnings } = useContractWrite(
    contract,
    "WithdrawWinnings"
  );
  const onWithdrawWinnings = async () => {
    const notification = toast.loading("Withdrawing winnings...");
    try {
      const data = await WithdrawWinnings([{}]);
      toast.success("Winnings withdrawn successfully!", { id: notification });
      console.log("Contract call successful!", data);
    } catch (err) {
      toast.error("Whoops, something went wrong!", { id: notification });
      console.log("Contract call failure!", err);
    }
  };

  return (
    <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mt-5">
      <button
        onClick={onWithdrawWinnings}
        className="p-5 bg-gradient-to-b from-orange-500 to-emerald-600 animate-pulse text-center rounded-xl w-full"
      >
        <p className="font-bold">Winner Winner Chicken Dinner!</p>
        <p>
          Total Winnings:{ethers.utils.formatEther(winnings.toString())}{" "}
          {currency}
        </p>
        <br />
        <p className="font-bold">Click here to withdraw</p>
      </button>
    </div>
  );
}
export default Winnings;
