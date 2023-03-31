import { ethers } from "ethers";
import abi from "../assests/abi.json";

export const getContractInstance = (signer) => {
  return new ethers.Contract(
    "0x89EC6B92095957601Babba36Cc3eDee7f62a4958",
    abi,
    signer
  );
};
