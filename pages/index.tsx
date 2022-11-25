import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header, Login } from "../components";
import {
  useAddress,
  useContract,
  useMetamask,
  useDisconnect,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import PropagateLoader from "react-spinners/PropagateLoader";

const Home: NextPage = () => {
  const address = useAddress();
  console.log(address);
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  if (isLoading)
    return (
      <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
        <div className="flex items-center space-x -2 mb-10 ">
          <Image
            src="/profile.png"
            alt="banner image"
            width={80}
            height={80}
            className="rounded-full mr-2"
          />
          <h1 className="text-lg text-white font-bold">
            Loading the LUCKY DRAW
          </h1>
        </div>
        <PropagateLoader color="white" size={30} />
      </div>
    );
    if (!address) return <Login />;

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;
