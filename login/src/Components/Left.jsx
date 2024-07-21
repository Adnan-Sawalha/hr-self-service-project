import React, {useEffect, useState} from 'react'
import styles from '../MainPage/MainPage.module.css'
import PhoneIcon from '../assets/phoneIcon.png'
import EmailIcon from '../assets/emailIcon.png'
import LinkIcon from '../assets/linkIcon.png'
import LinkedInIcon from '../assets/linkedIn.png'
import ProfilePic from '../assets/profile_picture.jpg'
import axios from 'axios'


function Left() {
    const[userId, setUserId] = useState('');
    const[email, setEmail] = useState('');
    const[name, setName] = useState('');
    const[position, setPosition] = useState('');
    const[city, setCity] = useState('');
    const[country, setCountry] = useState('');
    const[day, setDay] = useState('');
    const[month, setMonth] = useState('');
    const[year, setYear] = useState('');
    const[hday, setHday] = useState('');
    const[hmonth, setHmonth] = useState('');
    const[hyear, setHyear] = useState('');
    const[web, setWeb] = useState('');
    const[linkedin, setLinkedin] = useState('');
    const[mobile, setMobile] = useState('');
    const[role, setRole] = useState('');
    
    

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/')
        .then(
            response => { setUserId(response.data['userId'])
                          setName(response.data['name'])
                          setEmail(response.data['email'])
                          setPosition(response.data['position'])
                          setCity(response.data['city'])
                          setCountry(response.data['country'])
                          setDay(response.data['day'])
                          setMonth(response.data['month'])
                          setYear(response.data['year'])
                          setHday(response.data['hDay'])
                          setHmonth(response.data['hMonth'])
                          setHyear(response.data['hYear'])
                          setWeb(response.data['web'])
                          setLinkedin(response.data['linkedIn'])
                          setMobile(response.data['mobile'])
                          setRole(response.data['role'])
             }
        )
    }, [])


    return(
        <div className={styles.left}>
                <div className={styles.welcome}>Welcome, {String(name).split(' ')[0]}</div>

                <div className={styles.info}>
                    <div className={styles.infoLeft}>
                        <img src={ProfilePic} className={styles.propic}></img>
                        <div className={styles.proinfo}>
                            <div className={styles.name}>{name} </div>
                            <div className={styles.pos}>{position} </div>
                            <div className={styles.live}>{city}, {country} <br/> {day}.{month}.{year} (20 y.o.)</div>
                        </div>
                    </div>
                    <div className={styles.vl}></div>
                    <div className={styles.infoRight}>
                        <div className={styles.emp1}>
                            <div className={styles.type}>
                                <div className={styles.role}>Role</div>
                                <div className={styles.user}>{role == "A" ? "Admin" : "User"}</div>
                            </div>
                            <div className={styles.type}>
                                <div className={styles.employeeId}>Employee ID</div>
                                <div className={styles.user}>{userId}</div>
                            </div>
                            <div className={styles.type}>
                                <div className={styles.role}>Hired Date</div>
                                <div className={styles.hiredDate}>{hmonth} {hday}, {hyear}</div>
                            </div>
                            <div className={styles.type}>
                                <div className={styles.role}>Worked For</div>
                                <div className={styles.workedFor}>4 Years, 3 Months</div>
                            </div>
                        </div>
                        <hr className={styles.hr}></hr>
                        <div className={styles.emp2}>

                            <div className={styles.socio}>
                                <img src={PhoneIcon} className={styles.Icon}/>
                                <span className={styles.phone}>{mobile}</span>
                            </div>

                            <div className={styles.socio}>
                                <img src={EmailIcon} className={styles.Icon}/>
                                <span className={styles.phone}>{email}</span>
                            </div>

                            <div className={styles.socio}>
                                <img src={LinkIcon} className={styles.Icon}/>
                                <span className={styles.phone}>{web}</span>
                            </div>

                            <div className={styles.socio}>
                                <img src={LinkedInIcon} className={styles.Icon}/>
                                <span className={styles.phone}>{linkedin}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default Left