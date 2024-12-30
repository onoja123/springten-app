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
