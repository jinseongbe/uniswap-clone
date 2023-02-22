import React, { useEffect, useState } from "react";
import styles from "./InputCard.module.css";
import TokenSelectModal from "../components/TokenSelectModal";
import { TokenData, tokenData } from "../data/tokenData";
import chevronDown from "../assets/chevronDown.svg";

interface InputCardProps {
  tokenName: string;
  tokenLogo: string;
  usd: number;
  currentNum: number | string;
  setToken: (tokenData: TokenData) => void;
  setNum: (price: number) => void;
  setOtherPrice: (price: number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTokenSelectClike: () => void;
}

const InputCard = (props: InputCardProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const tokenSelectBtnClickHandler = (): void => {
    props.onTokenSelectClike();
    setShowModal(true);
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.priceContainer}>
        <input
          className={styles.priceInput}
          type="number"
          placeholder="0.0"
          value={props.currentNum.toString() != "" ? props.currentNum : ""}
          onChange={props.onChange}
        ></input>
        <div
          className={styles.tokenSelectBtn}
          onClick={tokenSelectBtnClickHandler}
        >
          <img className={styles.tokenSymbol} src={props.tokenLogo} />
          <div className={styles.tokenName}>{props.tokenName}</div>
          <img className={styles.bottomArrow} src={chevronDown} />
        </div>
      </div>
      {props.usd > 0 && (
        <div className={styles.usdtPrice}>
          ${parseFloat(props.usd.toFixed(10))}
        </div>
      )}
      {showModal && (
        <TokenSelectModal
          setShowModal={setShowModal}
          setToken={props.setToken}
        />
      )}
    </div>
  );
};

export default InputCard;
