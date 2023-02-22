import React, { useEffect, useState } from "react";
import styles from "./TokenSelectModal.module.css";
import { TokenData, tokenData } from "../data/tokenData";

import xIcon from "../assets/x.svg";
import editIcon from "../assets/editIcon.svg";

interface TokenSelectModalProps {
  setShowModal: (bool: boolean) => void;
  setToken: (tokenData: TokenData) => void;
}

let tokenArray: [string, TokenData][] = Object.entries(tokenData);

const TokenSelectModal = (props: TokenSelectModalProps) => {
  const [search, setSearch] = useState<string>("");
  const [filterToken, setFilterToken] = useState<[string, TokenData][]>([]);
  const [recentTokens, setRecentTokens] = useState<[string, TokenData][]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const closeModal = () => {
    props.setShowModal(false);
  };

  const tokenSelectClickHander = (token: TokenData) => {
    props.setToken(token);
    const recentTokenLst = [...recentTokens];
    for (let i: number = 0; i < recentTokenLst.length; i++) {
      if (recentTokenLst[i][0] == token.tokenName) {
        closeModal();
        return;
      }
    }
    if (recentTokenLst.length >= 7) {
      recentTokenLst.shift();
    }
    recentTokenLst.push([token.tokenName, token]);
    localStorage.setItem("recentTokenLst", JSON.stringify(recentTokenLst));
    closeModal();
  };

  const editTokenListClickHandler = () => {
    alert("준비 중입니다");
  };

  useEffect(() => {
    setRecentTokens(JSON.parse(localStorage.getItem("recentTokenLst") || "[]"));

    setFilterToken(
      tokenArray.filter((t) => {
        return t[1].tokenName
          .replace(" ", "")
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      })
    );
  }, [search]);

  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={closeModal} />
      <div className={styles.modalContainer}>
        <div className={styles.modalContainerTop}>
          <div className={styles.topContaier}>
            <div className={styles.title}>토큰 선택</div>
            <img
              className={styles.closeBtn}
              src={xIcon}
              alt="x"
              onClick={closeModal}
            />
          </div>
          <input
            className={styles.searchBar}
            placeholder="이름 검색 또는 주소 붙여넣기"
            onChange={onChange}
          />
          <div className={styles.recentList}>
            {recentTokens &&
              recentTokens.map((token, idx) => (
                <div
                  className={styles.recentTokenContainer}
                  key={idx}
                  onClick={() => {
                    tokenSelectClickHander(token[1]);
                  }}
                >
                  <img
                    className={styles.recentTokenLogo}
                    src={token[1].tokenLogo}
                  />
                  <div className={styles.recentTokenName}>
                    {token[1].tokenName}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className={styles.modalContainerBottom}>
          <div className={styles.tokenList}>
            {filterToken.map((token) => (
              <div
                className={styles.tokenContainer}
                key={token[0]}
                onClick={() => {
                  tokenSelectClickHander(token[1]);
                }}
              >
                <img
                  className={styles.logo}
                  src={token[1].tokenLogo}
                  alt={token[0]}
                />
                <div className={styles.tokenName}>{token[1].tokenName}</div>
              </div>
            ))}
          </div>

          <button
            className={styles.editListBtn}
            onClick={editTokenListClickHandler}
          >
            <img src={editIcon} alt="edit icon" />
            <div className={styles.txt}>토큰 목록 관리</div>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TokenSelectModal;
