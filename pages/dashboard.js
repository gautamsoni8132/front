import styles from '../styles/dashboard.module.css';
import Link from 'next/link';

function dashboard() {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.dashboardNav}>
                    <img src="/logoPic.png" alt="logo" width="30px" />

                    <div className={styles.navbar}>
                        <ul>
                            <Link href="onboarding" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 20px" }}><li>Welcome</li></Link>
                            <Link href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}><li>Listings</li> <img style={{ "margin": "2px" }} src="/down.png" alt="" width="15px" height="15px" /></Link>
                            <Link href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}><li>Inventory</li> <img style={{ "margin": "2px" }} src="/down.png" alt="" width="15px" height="15px" /></Link>
                            <Link href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}><li>Orders</li> <img style={{ "margin": "2px" }} src="/down.png" alt="" width="15px" height="15px" /></Link>
                            <Link href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}><li>Payments</li> <img style={{ "margin": "2px" }} src="/down.png" alt="" width="15px" height="15px" /></Link>
                            <Link href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}><li>Growth</li> <img style={{ "margin": "2px" }} src="/down.png" alt="" width="15px" height="15px" /></Link>
                            <Link href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}><li>Listings</li> <img style={{ "margin": "3px" }} src="/down.png" alt="" width="15px" height="15px" /></Link>
                            <Link href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}><li>Reports</li> <img style={{ "margin": "3px" }} src="/down.png" alt="" width="15px" height="15px" /></Link>
                        </ul>
                    </div>
                </div>

                <div className={styles.lastNavbar}>
                    <p>Buyer Questions</p>
                    <img src="/bell.png" alt="bell" width="20px" height="20px" />
                    <p>Guest</p>
                </div>
            </div>

            <div className={styles.dashboardMain}>
                <h2>3 ways to get started</h2>
                <div className={styles.secondNav}>
                    <ul>
                        <Link href="#" style={{ "textDecoration": "none", "margin": "auto 20px" }}><li>SEARCH FLIPKART CATALOG AND LIST</li></Link>
                        <Link href="#" style={{ "textDecoration": "none", "margin": "auto 20px" }}><li>ADD A NEW PRODUCT</li></Link>
                        <Link href="#" style={{ "textDecoration": "none", "margin": "auto 20px" }}><li>UPLOAD VIA EXCEL</li></Link>
                    </ul>
                </div>
            </div>

            <div className={styles.detailInfo}>
                <div className={styles.tittle}>
                    <h2 className={styles.count}>1</h2>
                    <div className={styles.headInfo}>
                        <h2>SEARCH FLIPKART CATALOG AND LIST - Quicker Way</h2>
                        <h4>Check if your product is already listed on Flipkart. If YES, you can reuse the cataloge details to create your listing.</h4>
                    </div>
                </div>
            </div>

        </>
    );
}

export default dashboard;