import Nav from '../Components/Nav'
import styles from './MainPage.module.css'
import Container from '../Components/Container'
import Left from '../Components/Left'
import Tr from '../Components/tr.jsx'
import Tr2 from '../Components/tr2.jsx'


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
                        <th className={styles.tableCont1}>Delete</th>
                    </tr>
                    <Tr2/>
                    <Tr/>
                    <Tr2/>
                    <Tr/>
                    <Tr2/>
                    <Tr/>
                    <Tr2/>
                    <Tr/>
                    
                </table>
            </div>
        </div>
    );
}

export default MainPage