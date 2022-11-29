import React, { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { currency } from "../constants";
import toast from "react-hot-toast";

function TicketPrice() {
  const { countdownEnded, quantity, setQuantity, userTickets, setUserTickets } =
    useContext(GlobalContext);

  const address = useAddress();

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: ticketPrice } = useContractRead(contract, "ticketPrice");
  const { data: ticketCommission } = useContractRead(
    contract,
    "ticketCommission"
  );
  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const { data: tickets } = useContractRead(contract, "getTickets");

  const { mutateAsync: BuyTickets } = useContractWrite(contract, "BuyTickets");

  useEffect(() => {
    if (!tickets) return;
    const totalTickets: string[] = tickets;
    const noOfUserTickets = totalTickets.reduce(
      (total, ticketAddress) => (ticketAddress === address ? total + 1 : total),
      0
    );
    setUserTickets(noOfUserTickets);
  }, [tickets, address]);
  // console.log(userTickets);

  const handleClick = async () => {
    if (!ticketPrice) return;
    const notification = toast.loading("Buying your tickets...");
    try {
      const data = await BuyTickets([
        {
          value: ethers.utils.parseEther(
            (
              Number(ethers.utils.formatEther(ticketPrice)) * quantity
            ).toString()
          ),
        },
      ]);
      toast.success("Tickets purchased successfully!", { id: notification });
      console.log("Contract call success!", data);
      setQuantity(1);
    } catch (err) {
      toast.error("Whoops, something went wrong!", { id: notification });
      console.log("Contract call failure!", err);
    }
  };

  return (
    <div className="stats-container space-y-2">
      <div className="stats-container">
        <div className="flex justify-between items-center text-white pb-2">
          <h2>Price per ticket</h2>
          <p>
            {ticketPrice && ethers.utils.formatEther(ticketPrice.toString())}{" "}
            {currency}
          </p>
        </div>
        <div className="flex text-white items-center space-x-2 bg-[#091B18]  border-[#004337] border p-4">
          <p>TICKETS</p>
          <input
            type="number"
            className="flex w-full bg-transparent text-right outline-none"
            min={1}
            max={10}
            value={quantity}
            //   onChange={(e) => setQuantity(parseInt(e.target.value))}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2 mt-5">
          <div className="fees font-extrabold text-sm">
            <p>Total cost of tickets</p>
            <p>
              {ticketPrice &&
                Number(ethers.utils.formatEther(ticketPrice?.toString())) *
                  quantity}{" "}
              {currency}
            </p>
          </div>
          <div className="fees">
            <p>Service fees</p>
            <p>
              {" "}
              {ticketCommission &&
                ethers.utils.formatEther(ticketCommission.toString())}{" "}
              {currency}
            </p>
          </div>
          <div className="fees">
            <p>+ Network Fees</p>
            <p>TBC</p>
          </div>
        </div>
        <button
          onClick={handleClick}
          disabled={countdownEnded || remainingTickets?.toNumber === 0}
          className="mt-5 w-full bg-gradient-to-br from-orange-500 to-emerald-600 px-10 py-5 rounded-md font-semibold text-white shadow-xl disabled:from-gray-600 disabled:to-gray-100 disabled:text-gray-100 disabled:cursor-not-allowed"
        >
          Buy {quantity} tickets for{" "}
          {ticketPrice &&
            Number(ethers.utils.formatEther(ticketPrice.toString())) *
              quantity}{" "}
          {currency}
        </button>
      </div>
      {userTickets > 0 && (
        <div className="stats">
          <p className="text-lg mb-2">
            You have {userTickets} Tickets in this draw
          </p>
          <div className="flex max-w-sm flex-wrap gap-x-2 gap-y-2">
            {Array(userTickets)
              .fill("")
              .map((_, index) => (
                <p
                  key={index}
                  className="text-emerald-300 h-20 w-12 bg-emerald-500/30 rounded-lg flex flex-shrink-0 items-center justify-center text-xs italic"
                >
                  {index + 1}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TicketPrice;
