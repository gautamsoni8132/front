import { useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import 'cors';
import cookies from 'js-cookie';
import { useRouter } from 'next/router';

function navbar() {
    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const [type, setType] = useState('password');
    const [login, setLogin] = useState(false);
    const [showView, setShow] = useState(false);
    const [hideView, setHide] = useState(true);
    const hide = () => {
        setType('text');
        setHide(false);
        setShow(true);
    }
    const show = () => {
        setType('password');
        setHide(true);
        setShow(false);
    }
    const loginDisplay = () => {
        setLogin(true);
    }
    const HideLogin = () => {
        setLogin(false)
    }

    const submit = () => {
        toast("Wow Login so easy!")
    }

    // login function
    const loginFunction = async () => {
        try {
            const res = await fetch("https://fliacrtserver.onrender.com/login", {
                method: 'post',
                headers: {
                    'content-type': "application/json"
                },
                mode: 'cors',
                body: JSON.stringify(user)
            })

            const result = await res.status;
            const token = await res.json();
            // console.log(token.jwttoken);
            if (result == 400) { return alert('Not Login') } else {
                alert('login successfully');
                cookies.set('jwt',token.jwttoken);
                router.push("/onboarding");
            }
     
        
        } catch (error) {
            console.log(`error: ${error}`)
        }
    }
    return (
        <>
            <ToastContainer />
            <nav className={styles.nav}>
                <div className={styles.navbar}>

                    <div className={styles.logoMenu}>
                        <img width="150px" src="/logo.png" alt="logo" />
                        <div className={styles.menu}>
                            <ul className={styles.ul}>
                                <Link className={styles.link} href="/fees">  <li>Fee Structure</li></Link>
                                <Link className={styles.link} href="/"> <li>Services</li></Link>
                                <Link className={styles.link} href="/"> <li>Resources</li></Link>
                                <Link className={styles.link} href="/"> <li>FAQs</li></Link>
                                <Link className={styles.link} href="/"> <li>Amazing</li></Link>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.loginButton}>
                        <Link href='/signUp'> <button>Start Selling</button></Link>
                        <button onClick={loginDisplay}>Login</button>
                    </div>

                </div>
            </nav>


            {/* Login */}

            <div className={styles.Login} style={{ "display": login ? "block" : "none" }}>
                <div className={styles.loginContainer}>

                    <div className={styles.top}>
                        <h4>Login</h4>
                        <img onClick={HideLogin} height="20px" width="20px" src="/cancel.png" alt="cancel" />
                    </div>
                    <hr />

                    <div className={styles.inputes}>

                        <div className={styles.inputInfo}>
                            <input type="text" name='email' onChange={inputHandle} value={user.email} placeholder='Enter Mobile or Email...' />
                        </div>

                        <div className={styles.inputInfo}>
                            <input type={type} name='password' onChange={inputHandle} value={user.password} placeholder='Enter Password....' />
                            <img onClick={show} width="20px" height="20px" src="/view.png" alt="show" style={{ "display": showView ? "block" : "none" }} />
                            <img onClick={hide} width="20px" height="20px" src="/hidden.png" alt="hide" style={{ "display": hideView ? "block" : "none" }} />
                        </div>

                        <h5>
                            By continuing, I agree to Flipkart’s <Link href="#">Terms of Use </Link> & <Link href="#"> Privacy Policy </Link>
                        </h5>
                    </div>

                    <div className={styles.footer}>
                        <Link className={styles.link} href="/signUp"> Not your account?</Link>
                        <button onClick={loginFunction}>Login</button>
                    </div>


                </div>
            </div>
        </>
    );
}

export default navbar;