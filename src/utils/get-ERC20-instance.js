import { ethers } from "ethers";
import abi from "../assests/erc20ABI/erc20Abi.json";

export const getErc20ContractInstance = (signer) => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78"
  );
  return new ethers.Contract(
    "0xcceAd5E14a68483CF6d856a2CB485a50f2F088B8",
    abi,
    signer || provider
  );
};
