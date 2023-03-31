import { ethers } from "ethers";
import { WalletConsumer } from "../context/wallet/wallet.context";
import { getWeb3Modal } from "../utils/get-web3-modal";

export const useWeb3Functions = () => {
  const { dispatch } = WalletConsumer();

  const web3Modal = getWeb3Modal();

  const walletConnect = async () => {
    try {
      const provider = await web3Modal.connect();

      const ethersProvider = new ethers.providers.Web3Provider(provider, "any");
      const signer = ethersProvider.getSigner();
      const account = await signer.getAddress();

      dispatch({
        isWalletConnected: true,
        signer,
        ethersProvider,
        account,
      });
    } catch (err) {
      console.log("wallet connect error: ", err);
    }
  };

  const disconnectWallet = () => {
    web3Modal.clearCachedProvider();
    localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER");
    dispatch({
      isWalletConnected: false,
      signer: null,
      account: null,
    });
  };

  return { walletConnect, disconnectWallet };
};
