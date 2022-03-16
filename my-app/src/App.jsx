import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { TailwindCss } from "./components/TailwindCss";
import './index.css';

export const App = () => {
  console.log("レンダリング");
  // Stateの定義
  const [num, setNum] = useState(1);

  // ボタンを押したときに実行する関数を定義
  const onClickButton = () => {
    setNum(num + 1);
    // setNum((prev) => prev + 1);
  };


  // ピンク用に追加
  // const contentPinkStyle = {
  //   color: "pink",
  //   fontSize: "20px"
  // };

  return (
    <>
      <h1 style={{color: "red"}}>こんにちは!</h1>
      <ColoredMessage color="blue"> お元気ですか? </ColoredMessage>
      <ColoredMessage color="pink"> 元気です! </ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <TailwindCss/>
    </>
  );
};