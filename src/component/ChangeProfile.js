import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
  const [newUserName, setNewUserName] = useState("");
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUserName);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
