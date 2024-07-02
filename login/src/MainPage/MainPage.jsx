import Nav from '../Components/Nav'
import styles from './MainPage.module.css'
import Container from '../Components/Container'
import Left from '../Components/Left'
import Tr from '../Components/tr.jsx'
import Tr2 from '../Components/tr2.jsx'
import LastTR from '../Components/lastTR.jsx'
import LinkedInIcon from '../assets/linkedIn.png'

function MainPage() {

    return(
        <div className = {styles.bodyWrapper}>
            <Nav/> 
            <Left/>
            <div className={styles.containers}>
                <Container />
                <Container />
                <Container />
                <Container />
                <Container />
                <Container />
            </div>
            <div className={styles.tableContainer}>
                <table className={styles.table} >
                    <tr>
                        <th className={styles.tableCont1}>ID</th>
                        <th className={styles.tableCont1}>Type</th>
                        <th className={styles.tableCont1}>Start Date</th>
                        <th className={styles.tableCont1}>End Date</th>
                        <th className={styles.tableCont1}>Status</th>
                        <th className={styles.tableCont1}>withdraw</th>
                    </tr>
                    <Tr2/>
                    <Tr/>
                    <Tr2/>
                    <Tr/>
                    <Tr2/>
                    <Tr/>
                    <Tr2/>
                    <LastTR/>
                    
                </table>
            </div>
            <div className={styles.footer}>
                <a href="https://www.linkedin.com/in/adnan-sawalha-1075bb2b1/">
                <img src={LinkedInIcon} alt="linkeIn"/>Adnan-swalha
                </a>
                <a href="https://www.linkedin.com/in/ahmad-almanasrah-356475279/">
                    <img src={LinkedInIcon} alt="linkeIn"/>Ahmad-Almanasrah
                </a>
                <h4>&copy; all rights reserved </h4>
            </div>
        </div>
    );
}

export default MainPage