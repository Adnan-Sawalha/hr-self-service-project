import styles from "../MainPage/MainPage.module.css";
import withdrawlButton from "../assets/tableQuit.png";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Tr() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/req").then((response) => {
      const data = response.data.map((req) => {
        return {
          id: req["id"],
          type: req["type"],
          sDay: req["sDay"],
          sMonth: req["sMonth"],
          sYear: req["sYear"],
          eDay: req["eDay"],
          eMonth: req["eMonth"],
          eYear: req["eYear"],
          status: mapStatus(req["status"]),
        };
      });
      setRequests(data);
    });
  }, []);

  const mapStatus = (v) => {
    if (v === "P") {
      return "Pending";
    }
    if (v === "A") {
      return "Approved";
    }
    if (v === "D") {
      return "Denied";
    }
    return "Unknown";
  };

  return (
    <>
      {requests.map((request) => (
        <tr key={request.id}>
          <td className={styles.tableCont1}>{request.id}</td>
          <td className={styles.tableCont1}>{request.type}</td>
          <td className={styles.tableCont1}>
            {request.sMonth} {request.sDay}, {request.sYear}
          </td>
          <td className={styles.tableCont1}>
            {request.eMonth} {request.eDay}, {request.eYear}
          </td>
          <td className={styles.tableCont1}>{request.status}</td>
          <td className={styles.tableCont1}>
            <button>-</button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Tr;
