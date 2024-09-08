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
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function MainPage(props) {
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

  // setTimeout(() => {
  //   writeRow("4", "casual", "3/5/2014", "5/5/2014", "Approved");
  // }, 5000);

  // function writeRow(id, type, sDate, eDate, statu) {
  //   let tr = document.createElement("tr");
  //   let td1 = document.createElement("td");
  //   td1.classList.add(styles.tableCont1);
  //   let td2 = document.createElement("td");
  //   td2.classList.add(styles.tableCont1);
  //   let td3 = document.createElement("td");
  //   td3.classList.add(styles.tableCont1);
  //   let td4 = document.createElement("td");
  //   td4.classList.add(styles.tableCont1);
  //   let td5 = document.createElement("td");
  //   td5.classList.add(styles.tableCont1);
  //   let td6 = document.createElement("td");
  //   td6.classList.add(styles.tableCont1);
  //   td1.innerText = id;
  //   td2.innerText = type;
  //   td3.innerText = sDate;
  //   td4.innerText = eDate;
  //   td5.innerText = statu;
  //   td6.innerHTML = "<button>-</button>";
  //   tr.append(td1, td2, td3, td4, td5, td6);
  //   document.getElementById("requestTable").append(tr);
  // }

  return (
    <div className={styles.bodyWrapper} id="mainpage">
      <Nav onLogout={props.onLogout} />
      <Left />
      <div className={styles.containers}>
        <Container type="Casual" num={casual} num2={7 - casual} day="casual" />
        <Container type="Sick" num={sick} num2={7 - sick} day="sick" />
        <Container type="Unpaid" num={unpaid} num2={10 - unpaid} day="unpaid" />
        <Container
          type="Courtesy"
          num={courtesy}
          num2={3 - courtesy}
          day="courtesy"
        />
        <Container
          type="Paternity"
          num={paternity}
          num2={3 - paternity}
          day="paternity"
        />
        <Container type="PTO" num={pto} num2={14 - pto} day="pto" />
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.table_label} id="apply">
          <h1>Apply for Leave</h1>
        </div>
        <div className={styles.table_content}>
          <table className={styles.table} id="requestTable">
            <tr>
              <th className={styles.tableCont1}>ID</th>
              <th className={styles.tableCont1}>Type</th>
              <th className={styles.tableCont1}>Start Date</th>
              <th className={styles.tableCont1}>End Date</th>
              <th className={styles.tableCont1}>Status</th>
              <th className={styles.tableCont1}>withdraw</th>
            </tr>

            <Tr />

            <LastTR />
          </table>
        </div>
      </div>
      <div className={styles.footer}>
        <a href="https://www.linkedin.com/in/adnan-sawalha-1075bb2b1/">
          <img src={LinkedInIcon} alt="linkeIn" />
          Adnan Sawalha
        </a>
        <h4>&copy; all rights reserved </h4>
        <a href="https://www.linkedin.com/in/ahmad-almanasrah-356475279/">
          <img src={LinkedInIcon} alt="linkeIn" />
          Ahmad Almanasrah
        </a>
      </div>
    </div>
  );
}

export default MainPage;
