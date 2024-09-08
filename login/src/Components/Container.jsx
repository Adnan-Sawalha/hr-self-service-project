import React, { useState, useEffect } from "react";
import styles from "../MainPage/MainPage.module.css";
import axios from "axios";

function Container(props) {
  const [gradient, setGradient] = useState(
    "conic-gradient( red 0deg, red 51.43deg, green 51.43deg, green 102.86deg, yellow 51.43deg, yellow 154.11deg, blue 154.11deg, blue 205.54deg, orange 205.54deg, orange 256.97deg, #c702c7 256.97deg, #c702c7 308.4deg, cyan 308.4deg, cyan 359.83deg, white 359.83deg, white 360deg )"
  );
  const [days, setDays] = useState(0);
  const [perValue, setPerValue] = useState(0);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/leave").then((response) => {
      setDays(response.data[props.day]);
    });
  }, [props.day]);

  useEffect(() => {
    let newGradient = gradient;
    let per;
    let deg;

    switch (props.day) {
      case "casual":
        per = days / 7;
        deg = per * 360;
        newGradient = `conic-gradient(#F6464B 0deg, #F6464B ${deg}deg, white ${deg}deg, white 360deg)`;
        break;
      case "sick":
        per = days / 7;
        deg = per * 360;
        newGradient = `conic-gradient(#F89444 0deg, #F89444 ${deg}deg, white ${deg}deg, white 360deg)`;
        break;
      case "unpaid":
        per = days / 10;
        deg = per * 360;
        newGradient = `conic-gradient(#FFEF66 0deg, #FFEF66 ${deg}deg, white ${deg}deg, white 360deg)`;
        break;
      case "courtesy":
        per = days / 3;
        deg = per * 360;
        newGradient = `conic-gradient(#75F174 0deg, #75F174 ${deg}deg, white ${deg}deg, white 360deg)`;
        break;
      case "paternity":
        per = days / 3;
        deg = per * 360;
        newGradient = `conic-gradient(#4863F9 0deg, #4863F9 ${deg}deg, white ${deg}deg, white 360deg)`;
        break;
      case "pto":
        per = days / 14;
        deg = per * 360;
        newGradient = `conic-gradient(#C272FD 0deg, #C272FD ${deg}deg, white ${deg}deg, white 360deg)`;
        break;
    }

    setGradient(newGradient);
    setPerValue(per * 100);
  }, [days, props.day]);

  return (
    <div className={styles.container}>
      <div className={styles.container_text_top}>{props.type} Leave</div>
      {/* <div className={styles.circleInner}>    
                <svg height="100%" width="100%" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" className={styles.circle} />
                </svg>
                <div className ={styles.circleText}>05/07</div>
            </div> */}

      {/* <div className={`${styles.progress} ${styles.blue}`}>
        <span className={styles.progress_left}>
          <span className={styles.progress_bar}></span>
        </span>
        <span className={styles.progress_right}>
          <span className={styles.progress_bar}></span>
        </span>
        <div className={styles.progress_value}>
          <span>90%</span>
        </div>
      </div> */}

      <div className={styles.circle} style={{ background: gradient }}>
        <div className={styles.innerCircle}> {`${perValue.toFixed(0)}%`} </div>
      </div>

      <div className={styles.container_text_bottom}>
        Avaliable - {props.num} <br /> Used - {props.num2}
      </div>
    </div>
  );
}

export default Container;
