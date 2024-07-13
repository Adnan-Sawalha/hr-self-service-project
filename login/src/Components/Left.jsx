import React, {useEffect, useState} from 'react'
import styles from '../MainPage/MainPage.module.css'
import PhoneIcon from '../assets/phoneIcon.png'
import EmailIcon from '../assets/emailIcon.png'
import LinkIcon from '../assets/linkIcon.png'
import LinkedInIcon from '../assets/linkedIn.png'
import ProfilePic from '../assets/profile_picture.jpg'
import axios from 'axios'


function Left() {
    const[names, setName] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/')
        .then(
            response => { setName(response.data)}
        )
    }, [])


    return(
        <div className={styles.left}>
                <div className={styles.welcome}>Welcome, {names}</div>

                <div className={styles.info}>
                    <div className={styles.infoLeft}>
                        <img src={ProfilePic} className={styles.propic}></img>
                        <div className={styles.proinfo}>
                            <div className={styles.name}>Adnan Sawalha </div>
                            <div className={styles.pos}>AI Student </div>
                            <div className={styles.live}>Amman, Jordan <br/> 01.05.2004 (20 y.o.)</div>
                        </div>
                    </div>
                    <div className={styles.vl}></div>
                    <div className={styles.infoRight}>
                        <div className={styles.emp1}>
                            <div className={styles.type}>
                                <div className={styles.role}>Role</div>
                                <div className={styles.user}>User</div>
                            </div>
                            <div className={styles.type}>
                                <div className={styles.employeeId}>Employee ID</div>
                                <div className={styles.user}>12345</div>
                            </div>
                            <div className={styles.type}>
                                <div className={styles.role}>Hired Date</div>
                                <div className={styles.hiredDate}>May 15, 2018</div>
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
                                <span className={styles.phone}>+962 7 8793 0432</span>
                            </div>

                            <div className={styles.socio}>
                                <img src={EmailIcon} className={styles.Icon}/>
                                <span className={styles.phone}>admin.admin@gmail.com</span>
                            </div>

                            <div className={styles.socio}>
                                <img src={LinkIcon} className={styles.Icon}/>
                                <span className={styles.phone}>www.adminadmin.com</span>
                            </div>

                            <div className={styles.socio}>
                                <img src={LinkedInIcon} className={styles.Icon}/>
                                <span className={styles.phone}>www.linkedin.com/admin</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
}

export default Left