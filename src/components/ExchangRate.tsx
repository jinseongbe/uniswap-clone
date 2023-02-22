import React from "react";
import styles from "./ExchangeRate.module.css";
import infoIcon from "../assets/infoIcon.svg";

interface ExchangRateProps {
  inTokenName: string;
  outTokenName: string;
  inTokenNum: number;
  exchangeRate: number;
}

const ExchangRate = (props: ExchangRateProps) => {
  return (
    <div className={styles.exchangeRate}>
      <img src={infoIcon} alt="info icon" />1 {props.outTokenName} ={" "}
      {parseFloat(props.inTokenNum.toFixed(10))} {props.inTokenName}
      <span className={styles.rate}>
        (${parseFloat(props.exchangeRate.toFixed(10))})
      </span>
    </div>
  );
};

export default ExchangRate;
