import { ethers } from "ethers";
import { WalletConsumer } from "../context/wallet/wallet.context";
import { getWeb3Modal } from "../utils/get-web3-modal";

const ACCEPTED_CHAIN_ID = "80001";

export const useWeb3Functions = () => {
  const { dispatch, web3Modal, provider } = WalletConsumer();

  const getNetworkInfo = async (provider) => {
    if (!provider) return;
    const chainId = await provider.request({ method: "eth_chainId" });
    let isCorrectNetworkInfo = false;
    if (parseInt(chainId) === parseInt(ACCEPTED_CHAIN_ID))
      isCorrectNetworkInfo = true;
    dispatch({
      connectedChainId: chainId,
      isCorrectChain: isCorrectNetworkInfo,
    });
    if (!isCorrectNetworkInfo) alert("Switch To Polygon");
  };
  const walletConnect = async () => {
    try {
      const web3Modal = getWeb3Modal();

      const provider = await web3Modal.connect();

      const ethersProvider = new ethers.providers.Web3Provider(provider, "any");
      const signer = ethersProvider.getSigner();
      const account = await signer.getAddress();

      dispatch({
        isWalletConnected: true,
        signer,
        ethersProvider,
        account,
        web3Modal,
        provider,
      });
      // on wallet connect success get network info
      getNetworkInfo(provider);
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
      web3Modal: null,
    });
  };

  const updateSinger = async () => {
    try {
      if (!provider) return;
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      const signer = ethersProvider.getSigner();
      const account = await signer.getAddress();
      dispatch({
        isWalletConnected: true,
        account,
        signer,
      });
    } catch (err) {}
  };

  return { walletConnect, disconnectWallet, getNetworkInfo, updateSinger };
};
