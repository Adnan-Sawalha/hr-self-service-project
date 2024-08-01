import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

function Form({ close }) {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [type, setType] = useState();
  const [reason, setReason] = useState();
  return (
    <div className="modal" style={{ padding: 20, height: 500 }}>
      <div style={{ textAlign: "center", fontSize: 25, marginBottom: 15 }}>
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
        <Button label="Submit" onClick={close} />
      </div>
    </div>
  );
}

export default Form;
