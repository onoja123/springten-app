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
  },
  {
    id: 2,
    title: "Sell",
    subTitle: "Convert crypto to cash",
    Icon: SellIcon,
  },
  {
    id: 3,
    title: "Receive",
    subTitle: "Get crypto from others",
    Icon: ReceiveIcon,
  },
  {
    id: 4,
    title: "Send",
    subTitle: "Send crypto to any account",
    Icon: SendIcon,
  },
  {
    id: 5,
    title: "Swap",
    subTitle: "Exchange one token for another",
    Icon: SwapIcon,
  },
  {
    id: 6,
    title: "Stake",
    subTitle: "Lock crypto and earn rewards",
    Icon: StakeIcon,
  },
];

export const currencyTags = ["All", "Ethereum", "Polygon", "Base"];
