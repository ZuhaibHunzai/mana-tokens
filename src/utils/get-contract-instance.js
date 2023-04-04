import { ethers } from "ethers";
import abi from "../assests/abi.json";

export const getContractInstance = (signer) => {
  return new ethers.Contract(
    "0x43df0cA6C9528e7B6A4932F5Efa02c41121A739d",
    abi,
    signer
  );
};
