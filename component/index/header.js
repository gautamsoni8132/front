import styles from '../../styles/header.module.css';
import Router from 'next/router';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function header() {
    const router = useRouter();
    const [mobile, setMobile] = useState('');


    function sendProps() {
        console.log(mobile.length);
        if (mobile.length == 10) {
            Router.push({
                pathname: "/signUp",
                query: {
                    mobile
                }
            })

            router.push('/signUp');

        } else {
            setMobile('');
            toast("Please Enter Correct Mobile Number!");
        }
    }
    return (
        <>
            <ToastContainer />
            <div className={styles.header}>
                <div className={styles.main}>
                    <div className={styles.mobileButton}>
                        <h2>Sell online to 50 crores+ customers</h2>
                        <h1>Launch your business in</h1>
                        <h1> 10 minutes</h1>
                        <input placeholder='Enter 10 digit phone number here' type="text" onChange={(e) => { setMobile(e.target.value) }} value={mobile} />
                        <button onClick={() => { sendProps() }}>Start Selling</button>
                    </div>

                    <div className={styles.image}>
                        <img src="/thumb.png" alt="Model" />
                    </div>

                    <div className={styles.online}>
                        <h1>Sell online to</h1>
                        <h1>50 crores+ customers</h1>
                        <div className={styles.details}>

                            <div className={styles.info}>
                                <img src="/wallet.png" alt="" />
                                <h5>7* day payment</h5>
                            </div>

                            <div className={styles.info}>
                                <img src="/location.png" alt="" />
                                <h5>Pan-india delivery</h5>
                            </div>

                            <div className={styles.info}>
                                <img src="/meet.png" alt="" />
                                <h5>500000+ sellers</h5>
                            </div>

                            <div className={styles.info}>
                                <img src="/wallet.png" alt="" />
                                <h5>Account management</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default header;