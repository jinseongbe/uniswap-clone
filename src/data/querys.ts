import { useQuery } from "react-query";
import Axios from "axios";

export const useTokenPrice = (inputTokenId: string) => {
  const { data, isLoading, isError, refetch } = useQuery(
    ["tokenPrice", inputTokenId],
    () => {
      return Axios.get(
        `https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=${inputTokenId}`
      ).then((res) => res.data);
    }
  );

  return { data, isLoading, isError, refetch };
};

export const useTokenUSD = (inputTokenId: string) => {
  let usd_data: number = 0;
  const { data, isLoading, isError, refetch } = useQuery(
    ["tokenUsd", inputTokenId],
    () => {
      return Axios.get(
        `https://api.coingecko.com/api/v3/simple/price?vs_currencies=USD&ids=${inputTokenId}`
      ).then((res) => res.data);
    }
  );

  if (data) {
    usd_data = data[inputTokenId].usd;
  }
  return { usd_data, isLoading, isError, refetch };
};
