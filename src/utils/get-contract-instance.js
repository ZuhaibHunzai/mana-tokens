import { ethers } from "ethers";
import abi from "../assests/abi.json";

export const getContractInstance = (signer) => {
  return new ethers.Contract(
    "0x70ecea464410bad364c4eb90f75d1d51a2ab03bc",
    abi,
    signer
  );
};
