import styles from '../../styles/moreTools.module.css';
import Link from 'next/link';

function moreTools() {
    return (
        <>
<br />
            <div className={styles.amaigingShow}>

                <div className={styles.brandLogo}>
                    <h1>A</h1>
                    <h3>Amazing</h3>
                    <h6><i> by Flicart</i> </h6>
                </div>

                <div className={styles.zeroCommision}>
                    <h3>Avail 0% Commission for Selling on Amazing!</h3>
                </div>

                <div className={styles.knowMore}>
                    <h3>KNOW MORE</h3>
                </div>
            </div>

            {/* More Tool Section start */}
            <br /><br /><br /><br />
            <div className={styles.moreToolsMain}>
                 <h2>More tools to grow faster</h2><br />
                 <div className={styles.moreToolsDetail}>

                     <div className={styles.moreToolsInfo}>
                        <img width='100px' src="/truck.jpg" alt="" />
                        <h2>Fulfillment by Flicart (FBF)</h2>
                        <h3>
                        Worried about storing, packing, shipping, and delivering your products? Let Flicart do it all for you with FBF, a one stop solution for all your shipping needs.
                        </h3>
                     </div>

                     <div className={styles.moreToolsInfo}>
                        <img width='100px' src="/ad.png" alt="" />
                        <h2>Flicart Ads</h2>
                        <h3>
                        Curious how your products will stand out from your competitors and gain maximum visibility? Flicart Ads will help you achieve your online selling business goals.
                        </h3>
                     </div>

                     <div className={styles.moreToolsInfo}>
                        <img width='55px' src="/festival.png" alt="" />
                        <h2>Shopping Festivals</h2>
                        <h3>
                          Get access to India’s biggest shopping festivals, The Big Billion Day, Big Diwali Sale, and more. Participate in these festivals to see your business grow by up to 5X.
                        </h3>
                     </div>

                     <div className={styles.moreToolsInfo}>
                        <img width='40px' src="/mobileframe.jpg" alt="" />
                        <h2>Flicart Seller Hub App</h2>
                        <h3>
                        Manage your online seller account 24x7 with Flicart Seller Hub App, compatible with all iOS & Android devices..
                        </h3>
                     </div>

                 </div>
            </div>

            {/* Start Selling Button */}
            <br /><br />
            <div className={styles.startSelling}>
              <Link href="/signUp">  <button>Start Selling</button></Link>
            </div>
        </>
    );
}

export default moreTools;