import { useState } from "react";
import Output from "./Output";

export default function Greeting(params) {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  //   {!changedText && <p>It's good to see you</p>}
  //   {changedText && <p>Changed!</p>}
  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <Output>It's good to see you</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
}
