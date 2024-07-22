import React, { useEffect, useState } from "react";
import styles from "../MainPage/MainPage.module.css";
import PhoneIcon from "../assets/phoneIcon.png";
import EmailIcon from "../assets/emailIcon.png";
import LinkIcon from "../assets/linkIcon.png";
import LinkedInIcon from "../assets/linkedIn.png";
import ProfilePic from "../assets/profile_picture.jpg";
import axios from "axios";

function Left() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [hday, setHday] = useState("");
  const [hmonth, setHmonth] = useState("");
  const [hyear, setHyear] = useState("");
  const [web, setWeb] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [age, setAge] = useState(0);
  const [workedFor, setWorkedFor] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/").then((response) => {
      setUserId(response.data["userId"]);
      setName(response.data["name"]);
      setEmail(response.data["email"]);
      setPosition(response.data["position"]);
      setCity(response.data["city"]);
      setCountry(response.data["country"]);
      setDay(response.data["day"]);
      setMonth(response.data["month"]);
      setYear(response.data["year"]);
      setHday(response.data["hDay"]);
      setHmonth(response.data["hMonth"]);
      setHyear(response.data["hYear"]);
      setWeb(response.data["web"]);
      setLinkedin(response.data["linkedIn"]);
      setMobile(response.data["mobile"]);
      setRole(response.data["role"]);
      calculateAge(
        parseInt(response.data["year"]),
        convertMonthToNumber(response.data["month"]),
        parseInt(response.data["day"])
      );
      calculateWorkedFor(
        parseInt(response.data["hYear"]),
        convertMonthToNumber(response.data["hMonth"]),
        parseInt(response.data["hDay"])
      );
    });
  }, []);

  const convertMonthToNumber = (month) => {
    const monthMap = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    };
    return monthMap[month] || 0;
  };

  const calculateAge = (birthYear, birthMonth, birthDay) => {
    if (!birthYear || !birthMonth || !birthDay) {
      setAge(0);
      return;
    }
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    setAge(age);
  };

  const calculateWorkedFor = (hireYear, hireMonth, hireDay) => {
    if (!hireYear || !hireMonth || !hireDay) {
      setWorkedFor("");
      return;
    }
    const today = new Date();
    const hireDate = new Date(hireYear, hireMonth - 1, hireDay);
    let yearsWorked = today.getFullYear() - hireDate.getFullYear();
    let monthsWorked = today.getMonth() - hireDate.getMonth();

    if (
      monthsWorked < 0 ||
      (monthsWorked === 0 && today.getDate() < hireDate.getDate())
    ) {
      yearsWorked--;
      monthsWorked += 12;
    }

    if (today.getDate() < hireDate.getDate()) {
      monthsWorked--;
    }

    setWorkedFor(`${yearsWorked} Years, ${monthsWorked} Months`);
  };

  return (
    <div className={styles.left}>
      <div className={styles.welcome}>
        Welcome, {String(name).split(" ")[0]}
      </div>

      <div className={styles.info}>
        <div className={styles.infoLeft}>
          <img src={ProfilePic} className={styles.propic}></img>
          <div className={styles.proinfo}>
            <div className={styles.name}>{name} </div>
            <div className={styles.pos}>{position} </div>
            <div className={styles.live}>
              {city}, {country} <br /> {day}.{month}.{year} ({age} y.o.)
            </div>
          </div>
        </div>
        <div className={styles.vl}></div>
        <div className={styles.infoRight}>
          <div className={styles.emp1}>
            <div className={styles.type}>
              <div className={styles.role}>Role</div>
              <div className={styles.user}>
                {role == "A" ? "Admin" : "User"}
              </div>
            </div>
            <div className={styles.type}>
              <div className={styles.employeeId}>Employee ID</div>
              <div className={styles.user}>{userId}</div>
            </div>
            <div className={styles.type}>
              <div className={styles.role}>Hired Date</div>
              <div className={styles.hiredDate}>
                {hmonth} {hday}, {hyear}
              </div>
            </div>
            <div className={styles.type}>
              <div className={styles.role}>Worked For</div>
              <div className={styles.workedFor}>{workedFor}</div>
            </div>
          </div>
          <hr className={styles.hr}></hr>
          <div className={styles.emp2}>
            <div className={styles.socio}>
              <img src={PhoneIcon} className={styles.Icon} />
              <span className={styles.phone}>{mobile}</span>
            </div>

            <div className={styles.socio}>
              <img src={EmailIcon} className={styles.Icon} />
              <span className={styles.phone}>{email}</span>
            </div>

            <div className={styles.socio}>
              <img src={LinkIcon} className={styles.Icon} />
              <span className={styles.phone}>{web}</span>
            </div>

            <div className={styles.socio}>
              <img src={LinkedInIcon} className={styles.Icon} />
              <span className={styles.phone}>{linkedin}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
