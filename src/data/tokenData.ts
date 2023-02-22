import ETHlogo from "../assets/tokenLogo/ETH.png";
import AAVElogo from "../assets/tokenLogo/AAVE.png";
import AXSlogo from "../assets/tokenLogo/AXS.png";
import COMPlogo from "../assets/tokenLogo/COMP.png";
import CRVlogo from "../assets/tokenLogo/CRV.png";
import DAIlogo from "../assets/tokenLogo/DAI.png";
import ENSlogo from "../assets/tokenLogo/ENS.png";
import USDClogo from "../assets/tokenLogo/USDC.png";
import USDTlogo from "../assets/tokenLogo/USDT.png";
import WBTClogo from "../assets/tokenLogo/WBTC.png";

export interface TokenData {
  tokenName: string;
  tokenLogo: string;
  id: string;
}

export const tokenData = {
  ETH: {
    tokenName: "ETH",
    tokenLogo: ETHlogo,
    id: "ethereum",
  },
  AAVE: {
    tokenName: "AAVE",
    tokenLogo: AAVElogo,
    id: "aave",
  },
  AXS: {
    tokenName: "AXS",
    tokenLogo: AXSlogo,
    id: "axie-infinity",
  },
  COMP: {
    tokenName: "COMP",
    tokenLogo: COMPlogo,
    id: "compound-coin",
  },
  CRV: {
    tokenName: "CRV",
    tokenLogo: CRVlogo,
    id: "curve-dao-token",
  },
  DAI: {
    tokenName: "DAI",
    tokenLogo: DAIlogo,
    id: "dai",
  },
  ENS: {
    tokenName: "ENS",
    tokenLogo: ENSlogo,
    id: "ethereum-name-service",
  },
  USDC: {
    tokenName: "USDC",
    tokenLogo: USDClogo,
    id: "usd-coin",
  },
  USDT: {
    tokenName: "USDT",
    tokenLogo: USDTlogo,
    id: "tether",
  },
  WBTC: {
    tokenName: "WBTC",
    tokenLogo: WBTClogo,
    id: "bitcoin",
  },
};

export default tokenData;
