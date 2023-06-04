import { useState } from 'react';
import styles from '../../styles/why.module.css';
import Link from 'next/link';

function whyBlock() {

    const [display, setDisplay] = useState({
        display1: styles.show,
        display2: styles.hide,
        display3: styles.hide,
        display4: styles.hide
    })

    const [border, setBorder] = useState({
        border1: styles.borderBottem,
        border2: styles.borderNone,
        border3: styles.borderNone,
        border4: styles.borderNone,
    })

    const whyBlockShowe = (ele) => {
        if (ele == 1) {
            setDisplay({
                display1: styles.show,
                display2: styles.hide,
                display3: styles.hide,
                display4: styles.hide
            })

            setBorder({
                border1: styles.borderBottem,
                border2: styles.borderNone,
                border3: styles.borderNone,
                border4: styles.borderNone,
            })
        }
        else if (ele == 2) {
            setDisplay({
                display1: styles.hide,
                display2: styles.show,
                display3: styles.hide,
                display4: styles.hide
            })

            setBorder({
                border1: styles.borderNone,
                border2: styles.borderBottem,
                border3: styles.borderNone,
                border4: styles.borderNone,
            })
        }
        else if (ele == 3) {
            setDisplay({
                display1: styles.hide,
                display2: styles.hide,
                display3: styles.show,
                display4: styles.hide
            })

            setBorder({
                border1: styles.borderNone,
                border2: styles.borderNone,
                border3: styles.borderBottem,
                border4: styles.borderNone,
            })
        }
        else {
            setDisplay({
                display1: styles.hide,
                display2: styles.hide,
                display3: styles.hide,
                display4: styles.show
            })

            setBorder({
                border1: styles.borderNone,
                border2: styles.borderNone,
                border3: styles.borderNone,
                border4: styles.borderBottem,
            })
        }

    }

    return (
        <>
            <div className={styles.whyBlockMain}>

                <div className={styles.headingWhyBlock}>
                    <h2 onClick={() => { whyBlockShowe(1) }} className={`${border.border1}`}>WHY SELL ONLINE</h2>
                    <h2 onClick={() => { whyBlockShowe(2) }} className={`${border.border2}`}>WHY FLICART?</h2>
                    <h2 onClick={() => { whyBlockShowe(3) }} className={`${border.border3}`}>WHY SHOPSY?</h2>
                    <h2 onClick={() => { whyBlockShowe(4) }} className={`${border.border4}`}>HOW TO BE A SELLER</h2>
                </div>

                <div className={`${styles.whySellOnline} ${display.display1}`}>

                    <div className={styles.whySellFlex}>


                        <div className={styles.whySellOnlineInfo}>
                            <div>
                                <div className={styles.number}>
                                    <h3>1</h3>
                                </div>

                                <br /><br />

                                <div className={styles.heading}>
                                    <h2>Growth in the online retail market</h2>
                                </div>

                                <br /><br />

                                <div className={styles.detailSection}>
                                    <h4>
                                        Witnessing tremendous growth for the past 5 years, retailers are moving towards online selling.
                                    </h4>
                                </div>
                                <br /><br />

                                <div className={styles.detailByCheckBox}>

                                    <div className={styles.firstCheckBox}>
                                        <img width="17px" src="/checkbox.png" alt="check-box" />
                                        <h6>Avoid huge investments.</h6>
                                    </div>

                                    <br />

                                    <div className={styles.secondCheckBox}>
                                        <img width="17px" src="/checkbox.png" alt="check-box" />
                                        <h6>Large customer base to sell online anywhere.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.whySellOnlineInfo}>
                            <div>
                                <div className={styles.number}>
                                    <h3>2</h3>
                                </div>

                                <br /><br />

                                <div className={styles.heading}>
                                    <h2>Get orders across India</h2>
                                </div>

                                <br /><br />

                                <div className={styles.detailSection}>
                                    <h4>
                                        Receive orders from every part of the country and follow the simple steps to fulfill the orders.
                                    </h4>
                                </div>
                                <br /><br />

                                <div className={styles.detailByCheckBox}>

                                    <div className={styles.firstCheckBox}>
                                        <img width="17px" src="/checkbox.png" alt="check-box" />
                                        <h6>Simple dashboard.</h6>
                                    </div>

                                    <br />

                                    <div className={styles.secondCheckBox}>
                                        <img width="17px" src="/checkbox.png" alt="check-box" />
                                        <h6>Sale events, advertising and promotions.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.whySellOnlineInfo}>
                            <div>
                                <div className={styles.number}>
                                    <h3>3</h3>
                                </div>

                                <br /><br />

                                <div className={styles.heading}>
                                    <h2>Ship with ease</h2>
                                </div>

                                <br /><br />

                                <div className={styles.detailSection}>
                                    <h4>
                                        Enjoy easy pick-up and delivery across India with Ekart, our logistics partner.
                                    </h4>
                                </div>
                                <br /><br />

                                <div className={styles.detailByCheckBox}>

                                    <div className={styles.firstCheckBox}>
                                        <img width="17px" src="/checkbox.png" alt="check-box" />
                                        <h6>Efficient pick-up network.</h6>
                                    </div>

                                    <br />

                                    <div className={styles.secondCheckBox}>
                                        <img width="17px" src="/checkbox.png" alt="check-box" />
                                        <h6>Professional packaging support.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.whySellOnlineInfo}>
                            <div>
                                <div className={styles.number}>
                                    <h3>4</h3>
                                </div>

                                <br /><br />

                                <div className={styles.heading}>
                                    <h2>Earn big</h2>
                                </div>

                                <br /><br />

                                <div className={styles.detailSection}>
                                    <h4>
                                        Our payments process is the fastest in the industry - get your payments in as little as 7 days of sales.
                                    </h4>
                                </div>
                                <br /><br />

                                <div className={styles.detailByCheckBox}>

                                    <div className={styles.firstCheckBox}>
                                        <img width="17px" src="/checkbox.png" alt="check-box" />
                                        <h6>Fastest payment settlement.</h6>
                                    </div>

                                    <br />

                                    <div className={styles.secondCheckBox}>
                                        <img width="17px" src="/checkbox.png" alt="check-box" />
                                        <h6>Detailed reports to track your payments.</h6>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={styles.learnMore}>
                        <h2>Learn More</h2>
                    </div>

                </div>



                <div className={`${styles.whyFlicart} ${styles.whyFlicart1} ${display.display2}`}>
                    <div className={styles.whyFlicartFlex}>

                        <div className={styles.video}>
                            <h3>#BachonKaKhel</h3>
                            <img width="320px" src="/video.jpg" alt="" />
                        </div>

                        <div className={styles.whyFlicartDetail}>
                            <h1>Advantages of Selling on Flipkart</h1>
                            <div className={styles.flexWhyFlicartdetail}>
                                <div className={styles.whyFlicartInfo}>
                                    <div className={styles.cartSection}>
                                        <div>
                                            <img width="55px" src="/money.jpg" alt="money" />
                                        </div>
                                        <div className={styles.detailInfo}>
                                            <h3>Growth</h3>
                                            <h4>
                                                Widen your reach to a customer base of 1 billion and grow your online buisness further with the support of Account Managers.
                                            </h4>
                                            <h5>Learn More</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.whyFlicartInfo}>
                                    <div className={styles.cartSection}>
                                        <div>
                                            <img width="55px" src="/pigi.jpg" alt="money" />
                                        </div>
                                        <div className={styles.detailInfo}>
                                            <h3>Lowest Cost of doing Business</h3>
                                            <h4>
                                                Along with the most competitive  rate card in the industry you also get on-time and reliable payments.
                                            </h4>
                                            <h5>Learn More</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.whyFlicartInfo}>
                                    <div className={styles.cartSection}>
                                        <div>
                                            <img width="55px" src="/ease.jpg" alt="money" />
                                        </div>
                                        <div className={styles.detailInfo}>
                                            <h3>Ease</h3>
                                            <h4>
                                                You just need 1 product and 2 documents to start selling online on Flicart..
                                            </h4>
                                            <h5>Learn More</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.whyFlicartInfo}>
                                    <div className={styles.cartSection}>
                                        <div>
                                            <img width="55px" src="/transparency.jpg" alt="money" />
                                        </div>
                                        <div className={styles.detailInfo}>
                                            <h3>Transparency</h3>
                                            <h4>
                                                Equal Opportunities for all the sellers to grow..
                                            </h4>
                                            <h5>Learn More</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <button>How to Be a Seller?</button>
                        </div>

                    </div>
                </div>





                {/* Why Shopsy section start */}
                <div className={`${styles.whyFlicart} ${styles.whyFlicart2} ${display.display3}`}>
                    <div className={styles.whyFlicartFlex}>

                        <div className={styles.video}>
                            <h3>LowestCostOfDoingBusiness</h3>
                            <img width="320px" src="/video.jpg" alt="" />
                        </div>

                        <div className={styles.whyFlicartDetail}>
                            <h1>Brand New Marketplace By Flipkart</h1>
                            <div className={styles.flexWhyFlicartdetail}>
                                <div className={styles.whyFlicartInfo}>
                                    <div className={styles.cartSection}>
                                        <div>
                                            <img width="55px" src="/zero.png" alt="money" />
                                        </div>
                                        <div className={styles.detailInfo}>
                                            <h3>0% Commission platform</h3>
                                            <h4>
                                                This will be applicable to verticals listed only on Shopsy.
                                            </h4>

                                        </div>
                                    </div>
                                </div>

                                <div className={styles.whyFlicartInfo}>
                                    <div className={styles.cartSection}>
                                        <div>
                                            <img width="55px" src="/gst.jpg" alt="money" />
                                        </div>
                                        <div className={styles.detailInfo}>
                                            <h3>No brand regulations</h3>
                                            <h4>
                                                No trademark registration required to sell your own brand..
                                            </h4>

                                        </div>
                                    </div>
                                </div>

                                <div className={styles.whyFlicartInfo}>
                                    <div className={styles.cartSection}>
                                        <div>
                                            <img width="55px" src="/clipboard.jpg" alt="money" />
                                        </div>
                                        <div className={styles.detailInfo}>
                                            <h3>Easy product listings</h3>
                                            <h4>
                                                Image guidelines are relaxed and easy to follow. Sellers can upload tabletop and hanger images clicked with mobile phones.
                                            </h4>

                                        </div>
                                    </div>
                                </div>

                                <div className={styles.whyFlicartInfo}>
                                    <div className={styles.cartSection}>
                                        <div>
                                            <img width="55px" src="/transparency.jpg" alt="money" />
                                        </div>
                                        <div className={styles.detailInfo}>
                                            <h3>Enhanced reach to millions of customers</h3>
                                            <h4>
                                                You capture a huge amount of budget-friendly consumers through resellers. These resellers reach the consumer base through their social media channels.
                                            </h4>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <button>How to Be a Seller?</button>
                        </div>

                    </div>
                </div>



                {/* How to be a seller  */}
                <div className={`${styles.whyFlicart} ${styles.whyFlicart3} ${display.display4}`}>
                    <div className={styles.whyFlicartFlex}>

                        <div className={styles.video}>
                            <h3>3 steps to register as a Flipkart Seller</h3>
                            <img width="320px" src="/video.jpg" alt="" />
                            <div style={{ "width": "100%" }}>
                                <h4 style={{ "marginTop": "30px", "width": "320px", "margin": "auto" }}>
                                    You need just 3 things to become a Flipkart Seller, your basic details & GSTIN, Pick-up address, and 1 unique product to sell. Yes! this is all that you require to register as a seller on Flipkart.
                                </h4>
                            </div>
                        </div>

                        <div className={styles.whyFlicartDetail}>
                            <h1>You need just 3 things to become a Flipkart Seller.</h1>
                            <div className={styles.flexWhyFlicartdetail}>

                                <div className={styles.whyFlicartInfo}>
                                    <div className={styles.cartSection}>
                                        <div>
                                            <img width="55px" src="/sell.jpg" alt="money" />
                                        </div>
                                        <div className={styles.detailInfo}>
                                            <h3>At least 1 product to sell</h3>
                                            <h4>
                                                All you need is a minimum of 1 unique product to start selling on flipcart.
                                            </h4>

                                        </div>
                                    </div>
                                </div>

                                <div className={styles.whyFlicartInfo}>
                                    <div className={styles.cartSection}>
                                        <div>
                                            <img width="55px" src="/gst.jpg" alt="money" />
                                        </div>
                                        <div className={styles.detailInfo}>
                                            <h3>GSTIN details</h3>
                                            <h4>
                                                You are required to furnish the details of your GSTIN to sell products online.
                                            </h4>

                                        </div>
                                    </div>
                                </div>

                                <div className={styles.whyFlicartInfo}>
                                    <div className={styles.cartSection}>
                                        <div>
                                            <img width="55px" src="/map.jpg" alt="money" />
                                        </div>
                                        <div className={styles.detailInfo}>
                                            <h3>Pick-up Address</h3>
                                            <h4>
                                                Sharing your pickup address and pincode will help us pick your products to sell..
                                            </h4>

                                        </div>
                                    </div>
                                </div>

                            </div>

                           <Link href='/signUp'> <button style={{ "backgroundColor": "#ffcc00", "color": "#000000c2" }}>Start Selling</button></Link>
                        </div>

                    </div>
                </div>

            </div>



            {/* 890px before */}

            <div className={styles.whyFlicartMin2}>
                <div className={styles.whyFlicartFlex}>
                    <h1 className={styles.tittle}>WHY FLICART?</h1>
                    <div className={styles.video}>
                        <h3>#BachonKaKhel</h3>
                        <img width="320px" src="/video.jpg" alt="" />
                    </div>

                    <div className={styles.whyFlicartDetail}>
                        <h1>Advantages of Selling on Flipkart</h1>
                        <div className={styles.flexWhyFlicartdetail}>
                            <div className={styles.whyFlicartInfo}>
                                <div className={styles.cartSection}>
                                    <div>
                                        <img width="55px" src="/money.jpg" alt="money" />
                                    </div>
                                    <div className={styles.detailInfo}>
                                        <h3>Growth</h3>
                                        <h4>
                                            Widen your reach to a customer base of 1 billion and grow your online buisness further with the support of Account Managers.
                                        </h4>
                                        <h5>Learn More</h5>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.whyFlicartInfo}>
                                <div className={styles.cartSection}>
                                    <div>
                                        <img width="55px" src="/pigi.jpg" alt="money" />
                                    </div>
                                    <div className={styles.detailInfo}>
                                        <h3>Lowest Cost of doing Business</h3>
                                        <h4>
                                            Along with the most competitive  rate card in the industry you also get on-time and reliable payments.
                                        </h4>
                                        <h5>Learn More</h5>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.whyFlicartInfo}>
                                <div className={styles.cartSection}>
                                    <div>
                                        <img width="55px" src="/ease.jpg" alt="money" />
                                    </div>
                                    <div className={styles.detailInfo}>
                                        <h3>Ease</h3>
                                        <h4>
                                            You just need 1 product and 2 documents to start selling online on Flicart..
                                        </h4>
                                        <h5>Learn More</h5>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.whyFlicartInfo}>
                                <div className={styles.cartSection}>
                                    <div>
                                        <img width="55px" src="/transparency.jpg" alt="money" />
                                    </div>
                                    <div className={styles.detailInfo}>
                                        <h3>Transparency</h3>
                                        <h4>
                                            Equal Opportunities for all the sellers to grow..
                                        </h4>
                                        <h5>Learn More</h5>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <button>How to Be a Seller?</button>
                    </div>

                </div>
                <br />  <hr />
            </div>


            {/* min AMAZING */}
            <br /><br /><br /><br />
            <div className={`${styles.whyFlicart} ${styles.whyFlicartMin2}`}>
                <div className={styles.whyFlicartFlex}>
                    <h1 className={styles.tittle}>WHY AMAZING?</h1>
                    <div className={styles.video}>
                        <h3>LowestCostOfDoingBusiness</h3>
                        <img width="320px" src="/video.jpg" alt="" />
                    </div>

                    <div className={styles.whyFlicartDetail}>
                        <h1>Brand New Marketplace By Flipkart</h1>
                        <div className={styles.flexWhyFlicartdetail}>
                            <div className={styles.whyFlicartInfo}>
                                <div className={styles.cartSection}>
                                    <div>
                                        <img width="55px" src="/zero.png" alt="money" />
                                    </div>
                                    <div className={styles.detailInfo}>
                                        <h3>0% Commission platform</h3>
                                        <h4>
                                            This will be applicable to verticals listed only on Shopsy.
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className={styles.whyFlicartInfo}>
                                <div className={styles.cartSection}>
                                    <div>
                                        <img width="55px" src="/gst.jpg" alt="money" />
                                    </div>
                                    <div className={styles.detailInfo}>
                                        <h3>No brand regulations</h3>
                                        <h4>
                                            No trademark registration required to sell your own brand..
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className={styles.whyFlicartInfo}>
                                <div className={styles.cartSection}>
                                    <div>
                                        <img width="55px" src="/clipboard.jpg" alt="money" />
                                    </div>
                                    <div className={styles.detailInfo}>
                                        <h3>Easy product listings</h3>
                                        <h4>
                                            Image guidelines are relaxed and easy to follow. Sellers can upload tabletop and hanger images clicked with mobile phones.
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className={styles.whyFlicartInfo}>
                                <div className={styles.cartSection}>
                                    <div>
                                        <img width="55px" src="/transparency.jpg" alt="money" />
                                    </div>
                                    <div className={styles.detailInfo}>
                                        <h3>Enhanced reach to millions of customers</h3>
                                        <h4>
                                            You capture a huge amount of budget-friendly consumers through resellers. These resellers reach the consumer base through their social media channels.
                                        </h4>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <button>How to Be a Seller?</button>
                    </div>

                </div>
                <br />  <hr />
            </div>

            {/* How to seller */}
            <br /><br /><br /><br />
            <div className={`${styles.whyFlicart} ${styles.whyFlicartMin2} `}>
                <div className={styles.whyFlicartFlex}>
                    <h1 className={styles.tittle}>HOW TO BE A SELLER</h1>
                    <div className={styles.video}>
                        <h3>3 steps to register as a Flipkart Seller</h3>
                        <img width="320px" src="/video.jpg" alt="" />
                        <div style={{ "width": "100%" }}>
                            <h4 style={{ "marginTop": "30px", "width": "320px", "margin": "auto" }}>
                                You need just 3 things to become a Flipkart Seller, your basic details & GSTIN, Pick-up address, and 1 unique product to sell. Yes! this is all that you require to register as a seller on Flipkart.
                            </h4>
                        </div>
                    </div>

                    <div className={styles.whyFlicartDetail}>
                        <h1>You need just 3 things to become a Flipkart Seller.</h1>
                        <div className={styles.flexWhyFlicartdetail}>

                            <div className={styles.whyFlicartInfo}>
                                <div className={styles.cartSection}>
                                    <div>
                                        <img width="55px" src="/sell.jpg" alt="money" />
                                    </div>
                                    <div className={styles.detailInfo}>
                                        <h3>At least 1 product to sell</h3>
                                        <h4>
                                            All you need is a minimum of 1 unique product to start selling on flipcart.
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className={styles.whyFlicartInfo}>
                                <div className={styles.cartSection}>
                                    <div>
                                        <img width="55px" src="/gst.jpg" alt="money" />
                                    </div>
                                    <div className={styles.detailInfo}>
                                        <h3>GSTIN details</h3>
                                        <h4>
                                            You are required to furnish the details of your GSTIN to sell products online.
                                        </h4>

                                    </div>
                                </div>
                            </div>

                            <div className={styles.whyFlicartInfo}>
                                <div className={styles.cartSection}>
                                    <div>
                                        <img width="55px" src="/map.jpg" alt="money" />
                                    </div>
                                    <div className={styles.detailInfo}>
                                        <h3>Pick-up Address</h3>
                                        <h4>
                                            Sharing your pickup address and pincode will help us pick your products to sell..
                                        </h4>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <Link href='/signUp'>  <button style={{ "backgroundColor": "#ffcc00", "color": "#000000c2" }}> Start Selling    </button></Link> 
                    </div>

                </div>
            </div>

        </>
    );
}

export default whyBlock;