import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  const { username } = useContext(AppContext);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>There was an error loading your data</h1>;
  }

  return (
    <>
      <h1>
        This is the home page and the user is: {username}{" "}
        <p>Cat fact: {catData?.fact}</p>
      </h1>
      <button onClick={refetch}>Update</button>
    </>
  );
};
