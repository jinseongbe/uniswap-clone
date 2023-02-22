import React, { useState } from "react";
import styles from "./Swap.module.css";
import InputCard from "../components/InputCard";
import ExchangRate from "../components/ExchangRate";
import { TokenData, tokenData } from "../data/tokenData";
import { useTokenUSD } from "../data/querys";

import setupIcon from "../assets/setupIcon.svg";
import downArrow from "../assets/downArrow.svg";

const Swap = () => {
  const [inputToken, setInputToken] = useState<TokenData>(tokenData.DAI);
  const [outputToken, setOutputToken] = useState<TokenData>(tokenData.USDT);
  const [inputNum, setinputNum] = useState<number | string>("");
  const [outputNum, setoutputNum] = useState<number | string>("");
  const [totalInputPrice, setTotalInputPrice] = useState<number>(0);
  const [totalOutputPrice, setTotalOutputPrice] = useState<number>(0);

  const swapClickHandler = (): void => {
    alert("준비 중입니다");
  };
  const setupClickHandler = (): void => {
    alert("준비 중입니다");
  };

  const { usd_data: inputUSD, refetch: inputUSD_refetch } = useTokenUSD(
    inputToken.id
  );

  const { usd_data: outputUSD, refetch: outputUSD_refetch } = useTokenUSD(
    outputToken.id
  );

  const inputOnchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setinputNum(value);
    setoutputNum((value * inputUSD) / outputUSD);
    setTotalInputPrice(value * inputUSD);
    setTotalOutputPrice(((value * inputUSD) / outputUSD) * outputUSD);
    console.log(inputToken.id, inputUSD, outputToken.id, outputUSD);
  };

  const outputOnchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setoutputNum(value);
    setinputNum((value * outputUSD) / inputUSD);
    setTotalOutputPrice(value * outputUSD);
    setTotalInputPrice(((value * outputUSD) / inputUSD) * inputUSD);
    console.log(inputToken.id, inputUSD, outputToken.id, outputUSD);
  };

  const tokenSelectBtnHandler = () => {
    setinputNum("");
    setoutputNum("");
    setTotalInputPrice(0);
    setTotalOutputPrice(0);
    inputUSD_refetch();
    outputUSD_refetch();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <div className={styles.title}>스왑</div>
          <img
            className={styles.setupIcon}
            src={setupIcon}
            alt="setup icon"
            onClick={setupClickHandler}
          />
        </div>

        <div className={styles.swapContainer}>
          <img className={styles.bottomArrow} src={downArrow} />
          <InputCard
            tokenName={inputToken.tokenName}
            tokenLogo={inputToken.tokenLogo}
            usd={totalInputPrice}
            currentNum={inputNum}
            setToken={setInputToken}
            setNum={setinputNum}
            setOtherPrice={setoutputNum}
            onChange={inputOnchangeHandler}
            onTokenSelectClike={tokenSelectBtnHandler}
          />
          <InputCard
            tokenName={outputToken.tokenName}
            tokenLogo={outputToken.tokenLogo}
            usd={totalOutputPrice}
            currentNum={outputNum}
            setToken={setOutputToken}
            setNum={setoutputNum}
            setOtherPrice={setinputNum}
            onChange={outputOnchangeHandler}
            onTokenSelectClike={tokenSelectBtnHandler}
          />
        </div>

        {inputNum != 0 && outputNum != 0 && (
          <ExchangRate
            inTokenName={inputToken.tokenName}
            outTokenName={outputToken.tokenName}
            inTokenNum={outputUSD / inputUSD}
            exchangeRate={outputUSD}
          />
        )}
        {inputNum != 0 && outputNum != 0 ? (
          <button className={styles.swapBtn} onClick={swapClickHandler}>
            스왑
          </button>
        ) : (
          <div className={styles.swapBtnDisabled}>금액을 입력하세요.</div>
        )}
      </div>
    </div>
  );
};

export default Swap;
