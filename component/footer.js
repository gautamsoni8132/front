import styles from '../styles/footer.module.css'

function footer() {
    return (
        <>
            <div className={styles.footerMain}>

                <div className={styles.footerDetail}>
                    <div className={styles.footerMainMenu}>
                        <ul>
                            <h3>Services</h3>
                            <li>Fulfillment Services</li>
                            <li>Account Management</li>
                            <li>Partner Services</li>
                            <li>Packaging Services</li>
                        </ul>

                        <ul>
                            <h3>Resources</h3>
                            <li>Online Selling Guide</li>
                            <li>Products in Demand</li>
                            <li>Success Stories</li>
                            <li>Seller Learning Center</li>
                            <li>NEWS</li>
                            <li>API Documentation</li>
                        </ul>

                        <ul>
                            <h3>FAQs</h3>
                            <li>General</li>
                            <li>Fees and Charges</li>
                            <li>Managing your Account</li>
                            <li>Services and Fulfillment by Flipkart (FBF)</li>
                        </ul>
                    </div>

                    <div className={styles.footerInfo}>
                        <ul>
                            <h3>Contact Us</h3>
                            <li>sell@flicart.com</li>
                        </ul>

                        <ul>
                            <h3>SITEMAP</h3>
                        </ul>

                        <ul>
                            <h3>Download our App</h3>
                        </ul>
                    </div>
                </div>
                 <br />

                 <div className={styles.lastFooterInfo}>
                   <img width='150px' src="/footerLogo.png" alt="logo" />
                   <br />
                   <h4>©2023 Flicart. All rights reserved</h4>
                   <div className={styles.flex}>
                      <h5>Privacy Policy</h5>
                      <h5>Terms of Usage</h5>
                   </div>
                   <div className={styles.flex}>
                      <img width='40px' height='40px' src="/youtube.png" alt="youtube" />
                      <img width='40px' height='40px' src="/facebook.png" alt="facebook" />
                      <img width='40px' height='40px' src="/twitter.png" alt="twitter" />
                   </div>
                 </div>
            </div>
        </>
    );
}

export default footer;