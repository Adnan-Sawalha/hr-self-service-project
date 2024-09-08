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
        <tr className={styles.tableCont3} key={request.id}>
          <td className={styles.tableCont1}>{request.id}</td>
          <td className={styles.tableCont1}>{request.type}</td>
          <td className={styles.tableCont1}>{request.sMonth}</td>
          <td className={styles.tableCont1}>{request.eMonth}</td>
          <td className={styles.tableCont1}>{request.status}</td>
          <td className={styles.tableCont1}>
            <button className={styles["add-btn"] + " " + styles["delete-btn"]}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6Zm3.345-2.853A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853ZM2 6h20m-12 5v5m4-5v5"
                  />
                </svg>
                <span style={{ opacity: 0 }}>l</span>
                Delete
              </span>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Tr;
