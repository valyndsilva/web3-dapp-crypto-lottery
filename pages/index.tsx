import type { NextPage } from "next";
import Head from "next/head";
import {
  AdminControls,
  Footer,
  Header,
  Loading,
  Login,
  NextDraw,
  Winnings,
} from "../components";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Marquee from "react-fast-marquee";
import { ethers } from "ethers";
import { currency } from "../constants";

const Home: NextPage = () => {
  const address = useAddress();
  // console.log(address);
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: winnings } = useContractRead(
    contract,
    "getWinningsForAddress",
    address
  );

  const { data: lastWinner } = useContractRead(contract, "lastWinner");

  const { data: lastWinnerAmount } = useContractRead(
    contract,
    "lastWinnerAmount"
  );
  const { data: isLotteryOperator } = useContractRead(
    contract,
    "lotteryOperator"
  );

  if (isLoading) return <Loading />;
  if (!address) return <Login />;

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery</title>
      </Head>
      <div className="flex-1">
        <Header />
        <Marquee className="bg-[#0A1F1C] p-5 mb-5" gradient={false} speed={100}>
          <div className="flex space-x-2 mx-10">
            <h4 className="text-white font-bold">
              Last Winner: {lastWinner?.toString()}
            </h4>
            <h4 className="text-white font-bold">
              Previous winnings:{" "}
              {lastWinnerAmount &&
                ethers.utils.formatEther(lastWinnerAmount?.toString())}{" "}
              {currency}{" "}
            </h4>
          </div>
        </Marquee>
        {isLotteryOperator === address && (
          <div className="flex justify-center">
            <AdminControls />
          </div>
        )}

        {winnings > 0 && <Winnings winnings={winnings} />}
        <NextDraw />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
