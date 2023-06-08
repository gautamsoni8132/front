import { useState } from 'react';
import styles from '../styles/listings.module.css';
import Link from 'next/link';
import Head from 'next/head';


function addproduct() {
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
    }
    return (
        <>
            <Head>
                <title>Add Product- Sell online | Flicart Seller Hub</title>
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
                            <Link href="onboarding" style={{ "display": "flex", "textDecoration": "none", "margin": "auto 20px" }}><li style={{ "color": "#5f5e5e" }}>Welcome</li></Link>
                            <Link onClick={() => { toggleFunction(1) }} href="#" style={{ "display": "flex", "textDecoration": "none", "margin": "0px 10px" }}>
                                <li>
                                    <div className={styles.navName}>
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
        </>
    );
}

export default addproduct;