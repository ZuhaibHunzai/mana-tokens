import { ethers } from "ethers";
import abi from "../assests/abi.json";

export const getContractInstance = (signer) => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78"
  );
  return new ethers.Contract(
    "0x43df0cA6C9528e7B6A4932F5Efa02c41121A739d",
    abi,
    signer || provider
  );
};
