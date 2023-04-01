import { useLayoutEffect, useRef } from "react";
import { WalletConsumer } from "../context/wallet/wallet.context";
import { useWeb3Functions } from "./web3.functions";

// checks the wallet connection status and update state if wallet is connected on page refresh
export const useCheckWalletConnection = () => {
  const hasBeenChecked = useRef(false);
  const { walletConnect } = useWeb3Functions();
  const { dispatch } = WalletConsumer();

  useLayoutEffect(() => {
    (() => {
      const isConnected = localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER");
      if (!isConnected) return dispatch({ isWalletStatusSynced: true });
      if (!hasBeenChecked.current) {
        walletConnect();
        hasBeenChecked.current = true;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

/*** @dev it will listen to provder events and update the states.
 * @returns void
 */
export const useOnProviderChange = () => {
  const { provider, dispatch } = WalletConsumer();
  const { getNetworkInfo, updateSinger } = useWeb3Functions();
  useLayoutEffect(() => {
    provider &&
      (() => {
        // Subscribe to accounts change
        provider.on("accountsChanged", (accounts) => {
          if (accounts && accounts.length)
            return dispatch({
              account: accounts[0],
              isWalletConnected: true,
            });
          dispatch({
            account: null,
            isWalletConnected: false,
          });
        });
        // Subscribe to chainId change
        provider.on("chainChanged", () => {
          getNetworkInfo(provider);
          updateSinger();
        });
      })();
    // eslint-disable-next-line
  }, [provider]);
};
