import BuyIcon from "@/assets/icons/buy.svg";
import SellIcon from "@/assets/icons/sell.svg";
import ReceiveIcon from "@/assets/icons/receive.svg";
import SendIcon from "@/assets/icons/send.svg";
import SwapIcon from "@/assets/icons/swap.svg";
import StakeIcon from "@/assets/icons/stake.svg";

export type StoredCoinListProps = {
  id: number;
  coin: string;
  network: string;
  src: any;
  price: string;
  cost: string;
};
export type ProviderListDataProps = {
  name: string;
  content?: string;
  price: string;
  cost: string;
  src: any;
};
export const PhaseList = [
  {
    id: 1,
    name: "embrace",
  },
  {
    id: 2,
    name: "the",
  },
  {
    id: 3,
    name: "journey",
  },
  {
    id: 4,
    name: "with",
  },
  {
    id: 5,
    name: "courage",
  },
  {
    id: 6,
    name: "explore",
  },
  {
    id: 7,
    name: "new",
  },
  {
    id: 8,
    name: "paths",
  },
  {
    id: 9,
    name: "discover",
  },
  {
    id: 10,
    name: "endless",
  },
  {
    id: 11,
    name: "possibilities",
  },
  {
    id: 12,
    name: "ahead",
  },
];

export const StoredCoinList: StoredCoinListProps[] = [
  {
    id: 1,
    coin: "Ethereum",
    network: "ETH",
    src: require("@/assets/images/eth.png"),
    price: "1.042",
    cost: "$3259.38",
  },
  {
    id: 2,
    coin: "Binance Coin",
    network: "BNB",
    src: require("@/assets/images/bnb.png"),
    price: "0.314922",
    cost: "$197.29",
  },
  {
    id: 3,
    coin: "USD Coin",
    network: "USDC",
    src: require("@/assets/images/usdc.png"),
    price: "36.02",
    cost: "$35.88",
  },
];

export const TradeMenuListData = [
  {
    id: 1,
    title: "Buy",
    subTitle: "Purchase crypto with cash",
    Icon: BuyIcon,
    screen: "buy-stack",
  },
  {
    id: 2,
    title: "Sell",
    subTitle: "Convert crypto to cash",
    Icon: SellIcon,
    screen: "sell-stack",
  },
  // {
  //   id: 3,
  //   title: "Receive",
  //   subTitle: "Get crypto from others",
  //   Icon: ReceiveIcon,
  //   screen: "receive-stack",
  // },
  {
    id: 4,
    title: "Send",
    subTitle: "Send crypto to any account",
    Icon: SendIcon,
    screen: "send-stack",
  },
  {
    id: 5,
    title: "Swap",
    subTitle: "Exchange one token for another",
    Icon: SwapIcon,
    screen: "swap-stack",
  },
  {
    id: 6,
    title: "Stake",
    subTitle: "Lock crypto and earn rewards",
    Icon: StakeIcon,
    screen: "stake-stack",
  },
];

export const currencyTags = ["All", "Ethereum", "Polygon", "Base"];

export const ProviderListData: ProviderListDataProps[] = [
  {
    name: "Rise",
    content: "Lowest Price",
    price: "0.32 LINK",
    cost: "$4.68",
    src: require("@/assets/images/Blockchain.com.png"),
  },
  {
    name: "Rise",
    price: "0.32 LINK",
    cost: "$4.68",
    src: require("@/assets/images/Moonpay.png"),
  },
  {
    name: "Rise",
    price: "0.32 LINK",
    cost: "$4.68",
    src: require("@/assets/images/Unlimit.png"),
  },
  {
    name: "Rise",
    price: "0.32 LINK",
    cost: "$4.68",
    src: require("@/assets/images/Transak.png"),
  },
  {
    name: "Rise",
    price: "0.32 LINK",
    cost: "$4.68",
    src: require("@/assets/images/Rise.png"),
  },
];
export const ValidatorListData: ProviderListDataProps[] = [
  {
    name: "Rocketpool",
    price: "3.12%",
    cost: "0.3432 ETH",
    src: require("@/assets/images/rocketpool.png"),
  },
  {
    name: "Ankr",
    price: "3.11%",
    cost: "0.3430 ETH",
    src: require("@/assets/images/ankr.png"),
  },
  {
    name: "Lido",
    price: "3.08%",
    cost: "0.3428 ETH",
    src: require("@/assets/images/lido.png"),
  },
];

export const TransactionHistoryListData = [
  {
    id: 1,
    title: "11/11/2024 23:05",
    subTitle: "7.43 LINK",
    Icon: BuyIcon,
  },
  {
    id: 2,
    title: "11/10/2024 22:14",
    subTitle: "36.02 USDC",
    Icon: SellIcon,
  },
  {
    id: 3,
    title: "11/08/2024 00:30",
    subTitle: "Get crypto from others",
    Icon: ReceiveIcon,
  },
  {
    id: 4,
    title: "11/07/2024 00:29",
    subTitle: "36.02 USDC",
    Icon: SendIcon,
  },
  {
    id: 5,
    title: "11/01/2024 13:44",
    subTitle: "0.521 ETH for 0.01813402 BTC",
    Icon: SwapIcon,
  },
  {
    id: 6,
    title: "11/01/2024 12:32",
    subTitle: "11.00 ETH - 30d",
    Icon: StakeIcon,
  },
  {
    id: 7,
    title: "10/11/2024 23:05",
    subTitle: "7.43 LINK",
    Icon: BuyIcon,
  },
  {
    id: 8,
    title: "10/10/2024 22:14",
    subTitle: "36.02 USDC",
    Icon: SellIcon,
  },
  {
    id: 9,
    title: "10/08/2024 00:30",
    subTitle: "Get crypto from others",
    Icon: ReceiveIcon,
  },
  {
    id: 10,
    title: "10/07/2024 00:29",
    subTitle: "36.02 USDC",
    Icon: SendIcon,
  },
  {
    id: 11,
    title: "10/01/2024 13:44",
    subTitle: "0.521 ETH for 0.01813402 BTC",
    Icon: SwapIcon,
  },
  {
    id: 12,
    title: "10/01/2024 12:32",
    subTitle: "11.00 ETH - 30d",
    Icon: StakeIcon,
  },
];
