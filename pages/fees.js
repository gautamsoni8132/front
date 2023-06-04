
import styles from '../styles/fees.module.css'
import Navbar from '@/component/navbar'
import Footer from '@/component/footer'
export default function fees() {

    return (
        <>
            <Navbar />
            <div className={styles.feesDiv}>

                <div className={styles.feesHeading}>
                    <h1>Fee Structure</h1>
                </div>

                <div className={styles.headerSection}>
                    <div className={styles.headerTop}>
                        <img width="60px" src="/pay.png" alt="pay" />
                        <h2>The lowest cost of doing business in the industry</h2>
                    </div>
                    <h4>
                        With the most competitive rate card in the industry, transparent delivery charges based on the weight and dimensions of your products and a small fixed fee, selling on Flipkart is highly cost-efficient.
                    </h4>
                </div>
                <br /> <hr /><br /><br />

                <div className={styles.mainSection}>
                    <h2>FLIPKART'S MARKETPLACE FEE STRUCTURE</h2>

                    <div className={styles.mainSectionTop}>

                        <div className={styles.feeInfo}>

                            <div className={styles.infoImage}>
                                <img width="30px" src="/discount.png" alt="discount" />
                            </div>
                            <h3>Commission fee</h3>
                            <h5>
                                Percentage of Order item value ( depends on category & sub-category
                            </h5>

                        </div>

                        <div className={styles.feeInfo}>

                            <div className={styles.infoImage}>
                                <img width="30px" src="/fast-delivery.png" alt="discount" />
                            </div>
                            <h3>Shipping fee</h3>
                            <h5>
                                Calculated on the basis of product weight and shipping location
                            </h5>

                        </div>

                        <div className={styles.feeInfo}>

                            <div className={styles.infoImage}>
                                <img width="30px" src="/mobile-data.png" alt="discount" />
                            </div>
                            <h3>Collection fee</h3>
                            <h5>
                                Payment gateway or cash collection charges for every sale
                            </h5>

                        </div>

                        <div className={styles.feeInfo}>

                            <div className={styles.infoImage}>
                                <img width="30px" src="/copy.png" alt="discount" />
                            </div>
                            <h3>Fixed fee</h3>
                            <h5>
                                A small fee that Flipkart charges on all transactions
                            </h5>

                        </div>

                    </div>

                    <div className={styles.mathSection}>

                        <div className={styles.mathInfo}>
                            <h2>Settlement Amount</h2>
                            <h5>
                                credited to your bank account within 7-10 business days of dispatch
                            </h5>
                        </div>

                        <div className={styles.mathInfo}>
                            <h2>=</h2>
                        </div>

                        <div className={styles.mathInfo}>
                            <h2>Order Item Value</h2>
                            <h5>
                                Selling price & Shipping charge paid by customer and excludes discount offered by Seller
                            </h5>
                        </div>

                        <div className={styles.mathInfo}>
                            <h2>-</h2>
                        </div>

                        <div className={styles.mathInfo}>
                            <h2>Marketplace Fee</h2>
                            <h5>
                                Includes shipping fee, fixed fee and selling commission
                            </h5>
                        </div>

                        <div className={styles.mathInfo}>
                            <h2>-</h2>
                        </div>

                        <div className={styles.mathInfo}>
                            <h2>GST</h2>
                            <h5>
                                18% of Marketplace Fee
                            </h5>
                        </div>


                    </div>

                </div>
                <br /> <hr /><br />

                {/* Shipping Fess Section Start */}

                <div className={styles.shippingFeesSection}>
                    <h2>SHIPPING FEES</h2>

                    <div className={styles.shippingMainSection}>
                        <h4>
                            To ensure ease of selling and the best possible customer experience, we mandate delivery to all customers via our logistics partners and deduct the shipping cost from the selling price before making a payment to you. Shipping fee is calculated on actual weight or volumetric weight, whichever is higher. This is to account for items which are lightweight but occupy a lot of shipping space.
                        </h4>

                        <i> <h5>Volumetric Weight (kg) = Length (cm) X Breadth (cm) X Height (cm)/5000</h5></i>
                    </div>

                    <div className={styles.shippingTable}>

                        <ul className={styles.topLevelUl}>
                            <li>
                                <ul className={`${styles.fistChild} ${styles.innerLevelUl}`}>
                                    <li>WEIGHT SLAB</li>
                                    <li>0.0 Kg - 0.5 Kg</li>
                                    <li>0.5 Kg - 1.0 Kg ( For every 0.5 kg )</li>
                                    <li>1.0 Kg - 1.5 Kg ( For every 0.5 kg )</li>
                                    <li>1.5 Kg - 2.0 Kg ( For every 0.5 kg )</li>
                                    <li>2.0 Kg - 3.0 Kg ( For every 0.5 kg )</li>
                                    <li>3.0 Kg - 12.0 Kg ( For every 1 kg )</li>
                                    <li>&#62; 12.0 Kg ( For every 1 kg )</li>
                                </ul>
                            </li>
                            <li>
                                <ul className={styles.innerLevelUl}>
                                    <li>LOCAL (INTRACITY)</li>
                                    <li>₹44</li>
                                    <li>₹4</li>
                                    <li>₹13</li>
                                    <li>₹10</li>
                                    <li>₹8</li>
                                    <li>₹7</li>
                                    <li>₹4</li>
                                </ul>
                            </li>
                            <li>
                                <ul className={styles.innerLevelUl}>
                                    <li>ZONAL (INTRAZONE)</li>
                                    <li>₹51</li>
                                    <li>₹19</li>
                                    <li>₹17</li>
                                    <li>₹18</li>
                                    <li>₹11</li>
                                    <li>₹10</li>
                                    <li>₹5</li>
                                </ul>
                            </li>
                            <li>
                                <ul className={styles.innerLevelUl}>
                                    <li>NATIONAL (INTERZONE)</li>
                                    <li>₹65</li>
                                    <li>₹26</li>
                                    <li>₹28</li>
                                    <li>₹22</li>
                                    <li>₹17</li>
                                    <li>₹16</li>
                                    <li>₹8</li>
                                </ul>
                            </li>
                        </ul>

                    </div>

                </div>

                {/* Notes Section Start Below */}
                <br /><br />
                <div className={styles.notesSection}>
                    <h3>Note:</h3>
                    <div className={styles.orderList}>
                        <ol>
                            <li>Shipping rate for forward shipments is applicable for Bronze Sellers only.</li>
                            <li>There is 20% and 10% discount on the forward shipping fee for Gold and Silver Sellers respectively.</li>
                            <li>Mentioned rates are exclusive of all taxes.</li>
                        </ol>
                    </div>
                    <div className={styles.unorderList}>
                        <ul>
                            <li>Local (Intracity): Item shipped within a city.</li>
                            <li>Zonal (Intrazone): Item shipped within the borders of a zone (North, South, East, West).</li>
                            <li>National (Interzone): Item shipped across zones.</li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div className={styles.collectionFees}>
                    <h2>COLLECTION FEES</h2>

                    <h4>
                        A small payment collection fee is charged to you for all prepaid and postpaid orders that you receive. The Collection fee will vary depending on the payment type chosen by the customer (Prepaid/Postpaid) . For a prepaid order - Based on Payment gateway, For a postpaid order - Based on cash collection charges. The collection fee will be calculated on the final selling price of a product. The final selling price is a sum of the amount paid by the Customer including shipping charges, if any (Price of product + Shipping charges). This will remain the same for all sellers irrespective of the category and tier.
                    </h4>
                     <br />
                    <div className={styles.collectionTable}>
                        <ul className={styles.collectionUlTop}>
                            <li >
                                <ul className={styles.collectionUlInner}>
                                    <li>Selling Price</li>
                                    <li>0-750</li>
                                    <li>&#62; 750</li>
                                </ul>
                            </li>
                            <li>
                                <ul className={styles.collectionUlInner}>
                                    <li>Prepaid</li>
                                    <li>2%</li>
                                    <li>2%</li>
                                </ul>
                            </li>
                            <li>
                                <ul className={styles.collectionUlInner}>
                                    <li>Postpaid</li>
                                    <li>₹15</li>
                                    <li>2%</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
                 <br /> <hr />

                 
                <div className={styles.collectionFees}>
                    <h2>FIXED FEES</h2>

                    <h4>
                    Fixed Fee is a small amount charged for every successful sale transaction. A successful sale transaction is an order which has been successfully delivered to the customer. In case of any customer return, this fee is charged. However, no fee is charged in case of a courier return. Also, this fee varies based on the order item value irrespective of the category and seller tier.
                    </h4>
                     <br />
                    <div className={styles.collectionTable}>
                        <ul className={styles.collectionUlTop}>
                            <li >
                                <ul className={`${styles.collectionUlInner} ${styles.fixedUlInner}`}>
                                    <li>Order Item Value</li>
                                    <li>0-300</li>
                                    <li>300-500</li>
                                    <li>500-1000</li>
                                    <li>&#62;1000</li>
                                </ul>
                            </li>
                            <li>
                                <ul className={`${styles.collectionUlInner} ${styles.fixedUlInner}`}>
                                    <li>Rate</li>
                                    <li>₹13</li>
                                    <li>₹11</li>
                                    <li>₹24</li>
                                    <li>₹47</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>


            </div>

            <br /><hr /><br />

            <div className={styles.fulfilmentTypes}>
              <h2>FULFILMENT TYPES</h2><br /><br />

              <div className={styles.infoSectionFlex}>
                 <div className={styles.fulfilmentInfo}>
                      <img width="40px" height="40px" src="/startup.png" alt="startup" />
                      <h3>Seller Fulfilment</h3>
                      <h3>
                      Under seller fulfillment, you are responsible for processing and managing your orders and inventory. Once you have packed your orders and marked RTD, an E-kart agent will collect this... 
                      </h3>
                      <h4>Know More</h4>
                 </div> 
                 <div className={styles.fulfilmentInfo}>
                      <img width="40px" height="40px" src="/startup.png" alt="startup" />
                      <h3>Smart Fulfilment</h3>
                      <h3>
                      Smart Fulfillment is a program wherein you get help from Flipkart for systematically arranging your warehouse, easily maintaining your inventory and getting it smoothly delivered to your customer via... 
                      </h3>
                      <h4>Know More</h4>
                 </div> 
                 <div className={styles.fulfilmentInfo}>
                      <img width="40px" height="40px" src="/startup.png" alt="startup" />
                      <h3>Flipkart Fulfilment</h3>
                      <h3>
                      At Flipkart, we help you have maximum returns with minimum investment. That’s why the Flipkart Fulfilment service offers you the use of our state-of-the-art fulfillment centers at very low costs. You ... 
                      </h3>
                      <h4>Know More</h4>
                 </div>  
                 </div> 
            </div>
            <br />
            
            <br /><br />
            <Footer />

        </>
    )
}
