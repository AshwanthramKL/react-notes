import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useGetCat } from "../hooks/useGetCat";

export const Cat = () => {
  const { data, isCatLoading, refetchData } = useGetCat();

  if (isCatLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <button onClick={refetchData}>refetch</button>
      <h1>{data?.fact}</h1>
    </div>
  );
};
