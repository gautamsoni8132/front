import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/single.module.css';
function single() {
    const [secondmenu, setSecondMenu] = useState(false);
    const [dashboardScroll, setdashboardScroll] = useState(true);
    const secondMenu = () => {
        setSecondMenu(true);
        setdashboardScroll(false);
    }
    const hidemenu = () => {
        setSecondMenu(false);
        setdashboardScroll(true);
    }

    const [menutoggle, setMenutoggle] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
    })

    const [arrow, setArrow] = useState({
        1: "/down.png",
        2: "/down.png",
        3: "/down.png",
        4: "/down.png",
        5: "/down.png",
        6: "/down.png"
    });

    const toggleFunction = (ele) => {
        let value = menutoggle[ele];
        let value2 = arrow[ele];
        if (ele == 1) {
            setMenutoggle({
                1: true,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false
            });
            setArrow({
                1: "/up.png",
                2: "/down.png",
                3: "/down.png",
                4: "/down.png",
                5: "/down.png",
                6: "/down.png"
            })

            if (value == true) {
                setMenutoggle({ ...menutoggle, [ele]: !value }); setArrow({
                    1: "/down.png",
                    2: "/down.png",
                    3: "/down.png",
                    4: "/down.png",
                    5: "/down.png",
                    6: "/down.png"
                })
            }
        }
        if (ele == 2) {
            setMenutoggle({
                1: false,
                2: true,
                3: false,
                4: false,
                5: false,
                6: false
            });
            setArrow({
                1: "/down.png",
                2: "/up.png",
                3: "/down.png",
                4: "/down.png",
                5: "/down.png",
                6: "/down.png"
            })

            if (value == true) {
                setMenutoggle({ ...menutoggle, [ele]: !value }); setArrow({
                    1: "/down.png",
                    2: "/down.png",
                    3: "/down.png",
                    4: "/down.png",
                    5: "/down.png",
                    6: "/down.png"
                })
            }
        }
        if (ele == 3) {
            setMenutoggle({
                1: false,
                2: false,
                3: true,
                4: false,
                5: false,
                6: false
            });
            setArrow({
                1: "/down.png",
                2: "/down.png",
                3: "/up.png",
                4: "/down.png",
                5: "/down.png",
                6: "/down.png"
            })

            if (value == true) {
                setMenutoggle({ ...menutoggle, [ele]: !value }); setArrow({
                    1: "/down.png",
                    2: "/down.png",
                    3: "/down.png",
                    4: "/down.png",
                    5: "/down.png",
                    6: "/down.png"
                })
            }
        }
        if (ele == 4) {
            setMenutoggle({
                1: false,
                2: false,
                3: false,
                4: true,
                5: false,
                6: false
            });
            setArrow({
                1: "/down.png",
                2: "/down.png",
                3: "/down.png",
                4: "/up.png",
                5: "/down.png",
                6: "/down.png"
            })

            if (value == true) {
                setMenutoggle({ ...menutoggle, [ele]: !value }); setArrow({
                    1: "/down.png",
                    2: "/down.png",
                    3: "/down.png",
                    4: "/down.png",
                    5: "/down.png",
                    6: "/down.png"
                })
            }
        }
        if (ele == 5) {
            setMenutoggle({
                1: false,
                2: false,
                3: false,
                4: false,
                5: true,
                6: false
            });
            setArrow({
                1: "/down.png",
                2: "/down.png",
                3: "/down.png",
                4: "/down.png",
                5: "/up.png",
                6: "/down.png"
            })

            if (value == true) {
                setMenutoggle({ ...menutoggle, [ele]: !value }); setArrow({
                    1: "/down.png",
                    2: "/down.png",
                    3: "/down.png",
                    4: "/down.png",
                    5: "/down.png",
                    6: "/down.png"
                })
            }
        }
        if (ele == 6) {
            setMenutoggle({
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: true
            });
            setArrow({
                1: "/down.png",
                2: "/down.png",
                3: "/down.png",
                4: "/down.png",
                5: "/down.png",
                6: "/up.png"
            })

            if (value == true) {
                setMenutoggle({ ...menutoggle, [ele]: !value }); setArrow({
                    1: "/down.png",
                    2: "/down.png",
                    3: "/down.png",
                    4: "/down.png",
                    5: "/down.png",
                    6: "/down.png"
                })
            }

        };
    }

    const hideDropmenu = () => {
        setMenutoggle({
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false
        });
        setArrow({
            1: "/down.png",
            2: "/down.png",
            3: "/down.png",
            4: "/down.png",
            5: "/down.png",
            6: "/down.png"
        })
        inputClick(1);
    }


    // single page javscript here 
    const [steps, setSteps] = useState({
        1: true,
        2: false,
        3: false
    })

    const [inputcolor, setInputColor] = useState(false);
    const inputClick = (ele) => {
        if (ele == 0) {
            setInputColor(true);
        } else {
            setInputColor(false);
        }
    }

    const [vertical, setVertical] = useState({
        1: true,
        2: false,
        3: false,
        4: false,
        5: false
    })

    const clickVertical = (ele) => {
        setBreadCrumText("");
        if (ele == 1) { setVertical({ 1: true, 2: false, 3: false, 4: false, 5: false }); setBreadCrumText("") }
        if (ele == 2) { setVertical({ 1: false, 2: true, 3: false, 4: false, 5: false }); setBreadCrumText("Auto Mobile ") }
        if (ele == 3) { setVertical({ 1: false, 2: false, 3: true, 4: false, 5: false }); setBreadCrumText("Books & Media ") }
        if (ele == 4) { setVertical({ 1: false, 2: false, 3: false, 4: true, 5: false }); setBreadCrumText("Mobile, Tablets And Accessories ") }
        if (ele == 5) { setVertical({ 1: false, 2: false, 3: false, 4: false, 5: true }); setBreadCrumText("Clothing ") }
    }

    const [breadCrumText, setBreadCrumText] = useState("");

    return (
        <>
            <Head>
                <title>Add Single Product- become a online seller in india | Flicart Seller Hub</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/fav.ico" />
            </Head>
            <img width="20px" height="20px" className={styles.menuicon} src="/menu.png" alt="menu" onClick={secondMenu} />
            <div className={styles.navbar}>
                <div className={styles.dashboardNav}>
                    <img src="/logoPic.png" alt="logo" width="30px" height="35px" />

                    <div className={styles.navbar}>
                        <ul>
                            <Link href="/onboarding" style={{ "display": "flex", "textDecoration": "none", "margin": "auto 20px" }}><li style={{ "color": "#5f5e5e" }}>Welcome</li></Link>
                            <Link onClick={() => { toggleFunction(1) }} href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}>
                                <li>
                                    <div className={styles.navName} style={{ "borderBottom": "2px solid #0066cc" }}>
                                        Listings <img style={{ "margin": "2px" }} src={arrow[1]} alt="" width="15px" height="15px" />
                                    </div>

                                    <ul className={styles.navabrDropMenu} style={{ "display": menutoggle[1] ? "block" : "none" }}>
                                        <li>My Listings</li>
                                        <li>Add New Listings</li>
                                        <li>Track Approval Request</li>
                                        <li>My Audits</li>
                                    </ul>
                                </li> </Link>
                            <Link onClick={() => { toggleFunction(2) }} href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}>
                                <li>
                                    <div className={styles.navName}>
                                        Inventory <img style={{ "margin": "2px" }} src={arrow[2]} alt="" width="15px" height="15px" />
                                    </div>
                                    <ul className={styles.navabrDropMenu} style={{ "display": menutoggle[2] ? "block" : "none" }}>
                                        <li>Inventory Health</li>
                                        <li>Flicart Warehouse Onboarding</li>
                                    </ul>
                                </li>
                            </Link>
                            <Link onClick={() => { toggleFunction(3) }} href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}>
                                <li>
                                    <div className={styles.navName}>
                                        Orders <img style={{ "margin": "2px" }} src={arrow[3]} alt="" width="15px" height="15px" />
                                    </div>
                                    <ul className={styles.navabrDropMenu} style={{ "display": menutoggle[3] ? "block" : "none" }}>
                                        <li>Active Orders</li>
                                        <li>Returns</li>
                                        <li>Canclellation</li>
                                    </ul>
                                </li>
                            </Link>
                            <Link onClick={() => { toggleFunction(4) }} href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}>
                                <li>
                                    <div className={styles.navName}>
                                        Payments <img style={{ "margin": "2px" }} src={arrow[4]} alt="" width="15px" height="15px" />
                                    </div>
                                    <ul className={styles.navabrDropMenu} style={{ "display": menutoggle[4] ? "block" : "none" }}>
                                        <li>Previous Payment</li>
                                        <li>Invoices</li>
                                        <li>Statments</li>
                                    </ul>
                                </li>
                            </Link>
                            <Link onClick={() => { toggleFunction(5) }} href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}>
                                <li>
                                    <div className={styles.navName}>
                                        Growth <img style={{ "margin": "2px" }} src={arrow[5]} alt="" width="15px" height="15px" />
                                    </div>
                                    <ul className={styles.navabrDropMenu} style={{ "display": menutoggle[5] ? "block" : "none" }}>
                                        <li>Returns</li>
                                        <li>Canclellations</li>
                                        <li>My Freebies</li>
                                    </ul>
                                </li>
                            </Link>
                            <Link onClick={() => { toggleFunction(6) }} href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}>
                                <li>
                                    <div className={styles.navName}>
                                        Reports <img style={{ "margin": "2px" }} src={arrow[6]} alt="" width="15px" height="15px" />
                                    </div>
                                    <ul className={styles.navabrDropMenu} style={{ "display": menutoggle[6] ? "block" : "none" }}>
                                        <li>Reports</li>
                                    </ul>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div className={styles.lastNavbar}>
                    <p>Buyer Questions</p>
                    <img src="/bell.png" alt="bell" width="20px" height="20px" />
                    <p>Guest</p>
                </div>
            </div>

            <div style={{ "display": secondmenu ? "block" : "none" }} className={styles.navbar2}>
                <div className={styles.menu2Section}>
                    <div className={styles.logoCancle}>
                        <img width="80px" src="/logo.png" alt="logo" />
                        <img onClick={hidemenu} width="20px" height="20px" src="/menucancel.png" alt="cancle" />
                    </div>
                    <div className={styles.mainmenu2}>
                        <ul>
                            <Link style={{ "textDecoration": "none", "color": "#697887" }} href="/onboarding"><li><img className={styles.homeicon} width="18px" height="18px" src="/home.png" alt="home" />Welcome</li></Link>
                            <Link onClick={() => { toggleFunction(1) }} style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li className={styles.liststyle}><div><img width="18px" height="18px" src="/list.png" alt="home" />Listing </div><img width="15px" height="15px" src={arrow[1]} alt="down" /></li></Link>
                            <div className={styles.childMenu} style={{ "display": menutoggle[1] ? "block" : "none" }}>
                                <ul>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>My Listings</li></Link>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Add New Listings</li></Link>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Track Approval Request</li></Link>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>My Audits</li></Link>
                                </ul>
                            </div>
                            <Link onClick={() => { toggleFunction(2) }} style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li className={styles.liststyle}><div><img width="18px" height="18px" src="/inventory.png" alt="home" />Inventory</div> <img width="15px" height="15px" src={arrow[2]} alt="down" /></li></Link>
                            <div className={styles.childMenu} style={{ "display": menutoggle[2] ? "block" : "none" }}>
                                <ul>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Inventory Health</li></Link>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Flicart Warehouse Onboarding</li></Link>
                                </ul>
                            </div>
                            <Link onClick={() => { toggleFunction(3) }} style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li className={styles.liststyle}><div><img width="18px" height="18px" src="/order.png" alt="home" />Order</div> <img width="15px" height="15px" src={arrow[3]} alt="down" /></li></Link>
                            <div className={styles.childMenu} style={{ "display": menutoggle[3] ? "block" : "none" }}>
                                <ul>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Active Orders</li></Link>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Returns</li></Link>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Canclellation</li></Link>
                                </ul>
                            </div>
                            <Link onClick={() => { toggleFunction(4) }} style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li className={styles.liststyle}><div><img width="18px" height="18px" src="/payment.png" alt="home" />Payment</div> <img width="15px" height="15px" src={arrow[4]} alt="down" /></li></Link>
                            <div className={styles.childMenu} style={{ "display": menutoggle[4] ? "block" : "none" }}>
                                <ul>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Previous Payment</li></Link>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Invoices</li></Link>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Statments</li></Link>
                                </ul>
                            </div>
                            <Link onClick={() => { toggleFunction(5) }} style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li className={styles.liststyle}><div><img width="18px" height="18px" src="/growth.png" alt="home" />Growth</div> <img width="15px" height="15px" src={arrow[5]} alt="down" /></li></Link>
                            <div className={styles.childMenu} style={{ "display": menutoggle[5] ? "block" : "none" }}>
                                <ul>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Returns</li></Link>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Canclellations</li></Link>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>My Freebies</li></Link>
                                </ul>
                            </div>
                            <Link onClick={() => { toggleFunction(6) }} style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li className={styles.liststyle}><div><img width="18px" height="18px" src="/report.png" alt="home" />Reports</div> <img width="15px" height="15px" src={arrow[6]} alt="down" /></li></Link>
                            <div className={styles.childMenu} style={{ "display": menutoggle[6] ? "block" : "none" }}>
                                <ul>
                                    <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li>Report Center</li></Link>
                                </ul>
                            </div>
                            <br />
                            <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li className={styles.liststyle}><div><img width="18px" height="18px" src="/bell.png" alt="home" />Notifications</div> </li></Link>
                            <Link style={{ "textDecoration": "none", "color": "#697887" }} href="#"><li className={styles.liststyle}><div><img width="18px" height="18px" src="/user2.png" alt="home" />Profile</div> </li></Link>
                            <br /> <br />
                        </ul>
                    </div>
                </div>

            </div>
            <br />

            <div className={styles.main}>
                <div onClick={hideDropmenu} className={styles.topNavbar}>
                    <br />
                    <div className={styles.breadCrum}>
                        <h5>My Listings</h5><img width="15px" src="/right.png" alt="arrow" />
                        <h5>Add New Listings</h5><img width="15px" src="/right.png" alt="arrow" />
                    </div>
                    <h1>Add a Single Listing</h1>
                </div>

                <br />
                <div onClick={hideDropmenu} className={styles.stepNavbar}>
                    <div className={styles.step}>
                        <div style={{ "backgroundColor": steps[1] ? "#0066cc" : "#fff", "border": steps[1] ? "none" : "1px solid #838181", "color": steps[1] ? "#fff" : "#838181" }}><h3>1</h3></div>
                        <h5 style={{ "color": steps[1] ? "#0066cc" : "#838181" }}>Select Vertical</h5>
                    </div>
                    <div className={styles.step}>
                        <div><h3>2</h3></div>
                        <h5>Select Brand</h5>
                    </div>
                    <div className={styles.step}>
                        <div><h3>3</h3></div>
                        <h5>Add Product Info</h5>
                    </div>
                </div>
                <br />
                <div className={styles.mainSection} >
                    <div className={styles.sectionHeader}>
                        <h2>Select The Vertical For Your Product</h2>
                        <h5>You can use the Search or Browse options</h5>
                        <div className={styles.inputSection} onClick={() => { inputClick(0) }} style={{ "border": inputcolor ? "1px solid #0066cc" : "1px solid #838181" }}>
                            <input type="text" placeholder='Enter Product Name, Brand, Flicart URL here ' />
                            <div>
                                <img width="15px" height="15px" src="/inputCancle.png" alt="cancle" />
                                <img width="16px" height="16px" src="/search.png" alt="cancle" />
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <hr />

                    <div className={styles.selectionSection} onClick={() => { inputClick(1) }}>
                        <div className={styles.verticals}>
                            <div className={styles.headVirtical}>
                                <h5>Browse Verticals:</h5>
                                <h5>{breadCrumText}</h5>
                            </div>
                            <div className={styles.verticalInfo}>
                                <ul>
                                    <li style={{ "backgroundColor": vertical[1] ? "#b2d1f0" : "#fff" }} onClick={() => { clickVertical(1) }}><img width="45px" src="/list.png" alt="list" /> <h4>Top Verticals</h4></li>
                                    <li style={{ "backgroundColor": vertical[2] ? "#b2d1f0" : "#fff" }} onClick={() => { clickVertical(2) }}><img width="45px" src="/automobile.jpeg" alt="list" /> <h4>Auto Mobile</h4></li>
                                    <li style={{ "backgroundColor": vertical[3] ? "#b2d1f0" : "#fff" }} onClick={() => { clickVertical(3) }}><img width="45px" src="/booknav.jpeg" alt="list" /> <h4>Books & Media</h4></li>
                                    <li style={{ "backgroundColor": vertical[4] ? "#b2d1f0" : "#fff" }} onClick={() => { clickVertical(4) }}><img width="45px" src="/mobilenav.jpeg" alt="list" /> <h4>Mobile, Tablets and Accessories</h4></li>
                                    <li style={{ "backgroundColor": vertical[5] ? "#b2d1f0" : "#fff" }} onClick={() => { clickVertical(5) }}><img width="45px" src="/clothnav.jpeg" alt="list" /> <h4>Clothing</h4></li>
                                </ul>
                            </div>

                        </div>

                        <div className={styles.topVerticals}>
                            <div className={styles.headVirtical} >
                                <h5 style={{ "visibility": vertical[1] ? "show" : "hidden" }} >Vertical</h5>
                            </div>
                            <div className={styles.virticalDetailInfo}>
                                <div className={styles.topVirticals} style={{ "display": vertical[1] ? "flex" : "none" }}>
                                    <div className={styles.topVirticalInfo}>
                                        <div className={styles.virtilcalHead} >
                                            <h4>Regional Books</h4>
                                            <img width="20px" src="/heart.png" alt="heart" />
                                        </div><br />
                                        <img width="100px" src="/book1.jpg" alt="" />
                                    </div>
                                    <div className={styles.topVirticalInfo}>
                                        <div className={styles.virtilcalHead} >
                                            <h4>Screen Guards</h4>
                                            <img width="20px" src="/heart.png" alt="heart" />
                                        </div><br />
                                        <img width="100px" src="/screen.jpeg" alt="" />
                                    </div>
                                    <div className={styles.topVirticalInfo}>
                                        <div className={styles.virtilcalHead} >
                                            <h4>Kurta</h4>
                                            <img width="20px" src="/heart.png" alt="heart" />
                                        </div><br />
                                        <img width="170px" height="170px" src="/kurta.jpeg" alt="" />
                                    </div>
                                    <div className={styles.topVirticalInfo}>
                                        <div className={styles.virtilcalHead} >
                                            <h4>Cases & Covers</h4>
                                            <img width="20px" src="/heart.png" alt="heart" />
                                        </div><br />
                                        <img width="150px" height="150px" src="/cover.jpeg" alt="" />
                                    </div>
                                    <div className={styles.topVirticalInfo}>
                                        <div className={styles.virtilcalHead} >
                                            <h4>Saree</h4>
                                            <img width="20px" src="/heart.png" alt="heart" />
                                        </div><br />
                                        <img width="100px" src="/sari.jpeg" alt="" />
                                    </div>
                                    <div className={styles.topVirticalInfo}>
                                        <div className={styles.virtilcalHead} >
                                            <h4>Shirt</h4>
                                            <img width="20px" src="/heart.png" alt="heart" />
                                        </div><br />
                                        <img width="120px" height="150px" src="/shirt.jpeg" alt="" />
                                    </div>
                                    <div className={styles.topVirticalInfo}>
                                        <div className={styles.virtilcalHead} >
                                            <h4>T-Shirts</h4>
                                            <img width="20px" src="/heart.png" alt="heart" />
                                        </div><br />
                                        <img width="100px" src="/tshirt.jpeg" alt="" />
                                    </div>



                                </div>

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[2] ? "flex" : "none" }}>
                                    <ul>
                                        <li>Automobile</li>
                                    </ul>
                                </div>

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[3] ? "flex" : "none" }}>
                                    <ul>
                                        <li>Books</li>
                                        <li>Digital Services</li>
                                        <li>Media & Posters</li>
                                        <li>Movies & Music</li>
                                        <li>Software</li>
                                    </ul>
                                </div>

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[4] ? "flex" : "none" }}>
                                    <ul>
                                        <li>E Reader</li>
                                        <li>Landline Phone</li>
                                        <li>Mobile</li>
                                        <li>Movies & Music</li>
                                        <li>Software</li>
                                    </ul>
                                </div>

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[5] ? "flex" : "none" }}>
                                    <ul>
                                        <li>E Reader</li>
                                        <li>Landline Phone</li>
                                        <li>Mobile</li>
                                        <li>Movies & Music</li>
                                        <li>Software</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className={styles.topVerticals}>
                            <div className={styles.headVirtical} >
                                <h5 style={{ "visibility": vertical[1] ? "show" : "hidden" }} >Vertical</h5>
                            </div>
                            <div className={styles.virticalDetailInfo}>
                              
                              {/* AutoMobile Start */}
                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[2] ? "flex" : "none" }}>
                                    <ul>
                                        <li>Electric Vehicles</li>
                                    </ul>
                                </div>
                             {/* AutoMobile End */}  

                         {/* Books and Media start */}
                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[3] ? "flex" : "none" }}>
                                    <ul>
                                        <li>Books</li>
                                        <li>Magazine</li>
                                        <li>Regional Books</li>
                                    </ul>
                                </div>

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[3] ? "flex" : "none" }}>
                                    <ul>
                                        <li>E Learning</li>
                                        <li>Digital Game</li>
                                        <li>ABB</li>
                                    </ul>
                                </div>

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[3] ? "flex" : "none" }}>
                                    <ul>
                                        <li>Posters</li>
                                    </ul>
                                </div>

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[3] ? "flex" : "none" }}>
                                    <ul>
                                        <li>Movie</li>
                                        <li>Music</li>
                                        <li>TV Series</li>
                                    </ul>
                                </div>

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[3] ? "flex" : "none" }}>
                                    <ul>
                                        <li>Educational Media</li>
                                        <li>Multimedia</li>
                                        <li>Office</li>
                                        <li>Operating System</li>
                                        <li>Utility</li>
                                    </ul>
                                </div>

                         {/* Books and Media end */}

                          {/* Mobile and Access. Start */}

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[4] ? "flex" : "none" }}>
                                    <ul>
                                        <li>E Reader</li>
                                    </ul>
                                </div>

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[4] ? "flex" : "none" }}>
                                    <ul>
                                        <li>Landline Phones</li>
                                    </ul>
                                </div>

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[4] ? "flex" : "none" }}>
                                    <ul>
                                        <li>Mobiles</li>
                                    </ul>
                                </div>

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[4] ? "flex" : "none" }}>
                                    <ul>
                                        <li>Battery Chargers</li>
                                        <li>Cable & Power Meter</li>
                                        <li>Data Cables</li>
                                        <li>Mobile Battery</li>
                                        <li>Power Banks</li>
                                    </ul>
                                </div>

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[4] ? "flex" : "none" }}>
                                    <ul>
                                        <li>Tablets</li>
                                        <li>Refurbished tablets</li>
                                    </ul>
                                </div>

                         {/* Mobile and Access. End */}

                                <div className={styles.autoMobileVirticals1} style={{ "display": vertical[5] ? "flex" : "none" }}>
                                    <ul>
                                        <li>E Reader</li>
                                        <li>Landline Phone</li>
                                        <li>Mobile</li>
                                        <li>Movies & Music</li>
                                        <li>Software</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default single;