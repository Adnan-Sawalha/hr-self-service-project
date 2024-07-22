import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import styles from "./MainPage.module.css";
import Container from "../Components/Container";
import Left from "../Components/Left";
import Tr from "../Components/tr.jsx";
import Tr2 from "../Components/tr2.jsx";
import LastTR from "../Components/lastTR.jsx";
import LinkedInIcon from "../assets/linkedIn.png";
import axios from "axios";

function MainPage() {
  const [casual, setCasual] = useState(0);
  const [sick, setSick] = useState(0);
  const [unpaid, setUnpaid] = useState(0);
  const [courtesy, setCourtesy] = useState(0);
  const [paternity, setPaternity] = useState(0);
  const [pto, setPto] = useState(0);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/leave").then((response) => {
      setCasual(response.data["casual"]);
      setSick(response.data["sick"]);
      setUnpaid(response.data["unpaid"]);
      setCourtesy(response.data["courtesy"]);
      setPaternity(response.data["paternity"]);
      setPto(response.data["pto"]);
    });
  }, []);

  return (
    <div className={styles.bodyWrapper}>
      <Nav />
      <Left />
      <div className={styles.containers}>
        <Container type="Casual" num={casual} num2={7 - casual} />
        <Container type="Sick" num={sick} num2={7 - sick} />
        <Container type="Unpaid" num={unpaid} num2={10 - unpaid} />
        <Container type="Courtesy" num={courtesy} num2={3 - courtesy} />
        <Container type="Paternity" num={paternity} num2={3 - paternity} />
        <Container type="PTO" num={pto} num2={14 - pto} />
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tr>
            <th className={styles.tableCont1}>ID</th>
            <th className={styles.tableCont1}>Type</th>
            <th className={styles.tableCont1}>Start Date</th>
            <th className={styles.tableCont1}>End Date</th>
            <th className={styles.tableCont1}>Status</th>
            <th className={styles.tableCont1}>withdraw</th>
          </tr>
          <Tr2 />
          <Tr />
          <Tr2 />
          <Tr />
          <Tr2 />
          <Tr />
          <Tr2 />
          <LastTR />
        </table>
      </div>
      <div className={styles.footer}>
        <a href="https://www.linkedin.com/in/adnan-sawalha-1075bb2b1/">
          <img src={LinkedInIcon} alt="linkeIn" />
          Adnan-swalha
        </a>
        <a href="https://www.linkedin.com/in/ahmad-almanasrah-356475279/">
          <img src={LinkedInIcon} alt="linkeIn" />
          Ahmad-Almanasrah
        </a>
        <h4>&copy; all rights reserved </h4>
      </div>
    </div>
  );
}

export default MainPage;
