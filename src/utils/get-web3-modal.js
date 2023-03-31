import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const getWeb3Modal = () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        // infuraId: "",
        rpc: {
          1: "https://mainnet.infura.io",
          56: "https://bsc-dataseed.binance.org",
          66: "https://exchainrpc.okex.org",
          97: "https://data-seed-prebsc-1-s1.binance.org:8545",
          100: "https://rpc.gnosischain.com/",
          128: "https://http-mainnet.hecochain.com",
          137: "https://polygon-rpc.com",
          250: "https://rpc.ftm.tools/",
          321: "https://rpc-mainnet.kcc.network",
          42220: "https://forno.celo.org",
          43114: "https://api.avax.network/ext/bc/C/rpc",
          42161: "https://arb1.arbitrum.io/rpc",
          1666600000: "https://api.s0.t.hmny.io",
        },
        chainId: 137,
        network: "matic",
      },
    },
  };
  return new Web3Modal({
    cacheProvider: true,
    providerOptions,
  });
};
