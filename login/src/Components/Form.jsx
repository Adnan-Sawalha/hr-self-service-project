import React, { useState, useEffect } from "react";
import "reactjs-popup/dist/index.css";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import styles from "../MainPage/MainPage.module.css";
import axios from "axios";
import MainPage from "../MainPage/MainPage";
import lastTR from "./lastTR";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

function Form({ close }) {
  const [id, setId] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [type, setType] = useState();
  const [reason, setReason] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post(
      "http://127.0.0.1:5000/reques",
      {
        ttype: type,
        sMonth: new Date(date1).toLocaleDateString(),
        eMonth: new Date(date2).toLocaleDateString(),
        status: "P",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await axios.get("http://127.0.0.1:5000/req");

    writeRow(response.data.at(-1)["id"], type, date1, date2, "Pending");

    close();
  }

  function writeRow(id, type, sDate, eDate, statu) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.classList.add(styles.tableCont1);
    let td2 = document.createElement("td");
    td2.classList.add(styles.tableCont1);
    let td3 = document.createElement("td");
    td3.classList.add(styles.tableCont1);
    let td4 = document.createElement("td");
    td4.classList.add(styles.tableCont1);
    let td5 = document.createElement("td");
    td5.classList.add(styles.tableCont1);
    let td6 = document.createElement("td");
    td6.classList.add(styles.tableCont1);
    td1.innerText = id;
    td2.innerText = type;
    td3.innerText = new Date(sDate).toLocaleDateString();
    td4.innerText = new Date(eDate).toLocaleDateString();
    td5.innerText = statu;
    td6.innerHTML = `
      <button style="border: 0;
                     background-color: tomato;
                     border-radius: 0.9em;
                     padding: 0.8em 1em 0.8em 1em;
                     transition: all ease-in-out 0.2s;
                     font-size: 16px;
                     min-width: fit-content;
                     display: flex;
                     justify-content: center;
                     align-items: center;">
                <span style="display: flex;
                             justify-content: center;
                             align-items: center;
                             color: #fff;
                             font-weight: 600;">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6Zm3.345-2.853A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853ZM2 6h20m-12 5v5m4-5v5"/>
                </svg>
                <span style="opacity: 0">l</span>
                Delete
              </span>
            </button>`;
    tr.append(td1, td2, td3, td4, td5, td6);
    let table = document.getElementById("requestTable");
    let lc = table.lastChild;
    lc.remove();
    table.append(tr);
    table.append(lc);
  }

  return (
    <div className="modal" style={{ padding: 20, height: 500 }}>
      <Button
        icon="pi pi-times"
        rounded
        outlined
        severity="danger"
        aria-label="Cancel"
        style={{
          position: "relative",
          marginLeft: "660px",
          marginBottom: "-20px",
          marginTop: -20,
        }}
        onClick={close}
      />

      <div
        style={{
          textAlign: "center",
          fontSize: 25,
          marginBottom: 15,
          marginTop: -20,
        }}
      >
        Apply For a Leave
      </div>
      <div className="content" style={{ marginBottom: 10 }}>
        First Day of absence:
      </div>
      <div>
        <Calendar
          value={date1}
          onChange={(e) => setDate1(e.value)}
          showIcon
          showOnFocus={false}
          required
        />
      </div>
      <div style={{ position: "relative", top: -74, left: 400 }}>
        Last Day of absence:
      </div>
      <div style={{ position: "relative", top: -63, left: 400 }}>
        <Calendar
          value={date2}
          onChange={(e) => setDate2(e.value)}
          showIcon
          showOnFocus={false}
          aria-required
        />
      </div>
      <div style={{ position: "relative", top: -40 }}>Leave Type:</div>
      <div className="flex flex-wrap gap-3">
        <div
          className="flex align-items-center"
          style={{ position: "relative", top: -30, marginLeft: 20 }}
        >
          <RadioButton
            inputId="type1"
            name="leaves"
            value="Casual"
            onChange={(e) => setType(e.value)}
            checked={type === "Casual"}
            required
          />
          <label htmlFor="type1" className="ml-2" style={{ marginLeft: 10 }}>
            Casual
          </label>
        </div>
        <div
          className="flex align-items-center"
          style={{ position: "relative", top: -20, marginLeft: 20 }}
        >
          <RadioButton
            inputId="type2"
            name="leaves"
            value="Sick"
            onChange={(e) => setType(e.value)}
            checked={type === "Sick"}
          />
          <label htmlFor="type2" className="ml-2" style={{ marginLeft: 10 }}>
            Sick
          </label>
        </div>
        <div
          className="flex align-items-center"
          style={{ position: "relative", top: -10, marginLeft: 20 }}
        >
          <RadioButton
            inputId="type3"
            name="leaves"
            value="Unpaid"
            onChange={(e) => setType(e.value)}
            checked={type === "Unpaid"}
          />
          <label htmlFor="type3" className="ml-2" style={{ marginLeft: 10 }}>
            Unpaid
          </label>
        </div>
        <div
          className="flex align-items-center"
          style={{ position: "relative", top: -96, left: 300 }}
        >
          <RadioButton
            inputId="type4"
            name="leaves"
            value="Courtesy"
            onChange={(e) => setType(e.value)}
            checked={type === "Courtesy"}
          />
          <label htmlFor="type4" className="ml-2" style={{ marginLeft: 10 }}>
            Courtesy
          </label>
        </div>
        <div
          className="flex align-items-center"
          style={{ position: "relative", top: -86, left: 300 }}
        >
          <RadioButton
            inputId="type5"
            name="leaves"
            value="Paternity"
            onChange={(e) => setType(e.value)}
            checked={type === "Paternity"}
          />
          <label htmlFor="type5" className="ml-2" style={{ marginLeft: 10 }}>
            Paternity
          </label>
        </div>
        <div
          className="flex align-items-center"
          style={{ position: "relative", top: -76, left: 300 }}
        >
          <RadioButton
            inputId="type6"
            name="leaves"
            value="PTO"
            onChange={(e) => setType(e.value)}
            checked={type === "PTO"}
          />
          <label htmlFor="type6" className="ml-2" style={{ marginLeft: 10 }}>
            PTO
          </label>
        </div>
      </div>
      <div style={{ position: "relative", top: -50 }}>Reason for Leave:</div>
      <div style={{ position: "relative", top: -40, textAlign: "center" }}>
        <InputTextarea
          value={reason}
          onChange={(e) => setReason(e.target.reason)}
          rows={5}
          cols={83}
        />
      </div>
      <div style={{ position: "relative", top: -37, textAlign: "center" }}>
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Form;
