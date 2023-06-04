import { useEffect, useState } from 'react'
import styles from '../styles/onboarding.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/component/footer';
import cookies from 'js-cookie';
import { useRouter } from 'next/router';
import 'cors';
import Link from 'next/link';

export default function onbording() {
  const router = useRouter();

  const [onboarding, setOnbording] = useState(false);


  const [mobile, setMobile] = useState(true);
  const [email, setEmail] = useState(true);
  const [display, setDisplay] = useState(false);
  const [address, setAddress] = useState(false);
  const [addproduct, setAddProduct] = useState(false);

  const [getData, setGetdata] = useState({
    mobileSet: "",
    email: "",
    gst: "",
    name: "",
    displayName: "",
    pincode: "",
    add1: "",
    add2: "",
    add3: "",
    city: "",
    state: ""
  });

  const [onboardingData, setOnboardingData] = useState({
    name: "",
    displayName: "",
    pincode: "",
    add1: "",
    add2: "",
    add3: "",
    city: "",
    state: ""
  });




  const handleInput = (e) => {
    if (getData.name && getData.displayName && getData.pincode && getData.add1 && getData.add2 && getData.add3 && getData.city && getData.state) {

    } else {
      const name = e.target.name;
      const value = e.target.value;
      setOnboardingData({ ...onboardingData, [name]: value });
    }

  }

  const token = cookies.get('jwt');
  const tokenData = {
    token: token
  }
  // console.log(JSON.stringify(tokenData));

  const check = async () => {
    try {
      const res = await fetch("https://fliacrtserver.onrender.com/login", {
        method: 'post',
        headers: {
          'content-type': "application/json"
        },
        mode: 'cors',
        body: JSON.stringify(tokenData)
      })
      const result = await res.json();
      console.log(`Login check: ${res.status}`);

      if (res.status == 200) {
        setGetdata(result);
        chekerData(result);
        setOnbording(true);
      } else {
        router.push('/');
        cookies.remove('jwt');
      }

    } catch (error) {
      console.log(`error: ${error}`);
      router.push('/');
    }

  }

  // GST Form Section
  const allCategory = () => toast("You select All Categories!");
  const bookCategory = () => toast("You select Book Categories!");
  const [firstH2, setfirstH2] = useState(true);
  const [secondH2, setsecondH2] = useState(false);
  const [gstDiv, setgstDiv] = useState(true);
  const [panDiv, setpanDiv] = useState(false);
  function hideShow1() {
    setfirstH2(true);
    setsecondH2(false);
    setgstDiv(true);
    setpanDiv(false);
    allCategory();
  }
  function hideShow2() {
    setfirstH2(false);
    setsecondH2(true);
    setgstDiv(false);
    setpanDiv(true);
    bookCategory();
  }

  // onbording data insert 
  const mergeData = { ...onboardingData, ...getData }
  const onboardingDataSend = async () => {
    try {
      console.log(mergeData)
      const res = await fetch("https://fliacrtserver.onrender.com/onboarding", {
        method: 'post',
        headers: {
          'Content-Type': "application/json"
        },
        mode: 'cors',
        body: JSON.stringify(mergeData)
      })
      const result = await res.status; //console.log(result);
      if (result == 400) { return console.log(`All Data Not Insert.`) }
      if (result == 200) { location.reload(); return console.log(`All Data Insert.`) }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  // logout function
  const logout = async () => {
    try {
      const res = await fetch("https://fliacrtserver.onrender.com/logout", {
        method: 'post',
        headers: {
          'content-type': "application/json"
        },
        mode: 'cors',
        body: JSON.stringify(tokenData)
      })
      // console.log(token);
      const result = await res.status;
      if (result == 400) { return alert(`Not Logout`) } else { alert("Logout") }
      cookies.remove('jwt');
      router.push("/");

    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  const [barprogres, setBarprogres] = useState(false);

  const [onboardingNav, setOnboardingNav] = useState(false);

  const [submitString, setSubmitString] = useState("Save");

  const chekerData = async (result) => {
    let num = 0;
 
    if (result.displayName != undefined) { num++; setDisplay(true); }
    if (result.add1 != undefined) { num++; setAddress(true); }
    if (num == 2) {setAddProduct(true); setSubmitString("Edit"); setBarprogres(true); setOnboardingNav(true); }
  }

  let init = false;
  useEffect(() => {
    if (!init) {
      init = true;
      check();
    }
  }, []);
  return (
    <>
      <ToastContainer />
      {/* Nav Sectioon Strat */}
      <div className={styles.navBar}>
        <div className={styles.logos}>
          <img width='30px' src="/logoPic.png" alt="logo" />
          <img width='30px' src="/logoPic.png" alt="logo" />
        </div>

        <div className={styles.menuBar}>
          <div className={styles.flex}>
            <img width='15px' src="/correct.png" alt="" style={{ "display": true ? "block" : "none" }} />
            <h3>EMAIL ID & GST</h3>
          </div>

          <div className={styles.line}>
            <h2>__</h2>
          </div>

          <div className={styles.flex}>
            <img width='15px' src="/correct.png" alt="" style={{ "display": true ? "block" : "none" }} />
            <h3>PASSWORD CREATION</h3>
          </div>

          <div className={styles.line}>
            <h2>__</h2>
          </div>

          <div className={styles.flex}>
            <img width='15px' src="/checked.png" alt="" style={{ "display": onboardingNav ? "none" : "block" }} />
            <img width='15px' src="/correct.png" alt="" style={{ "display": onboardingNav ? "block" : "none" }} />
            <h3>ONBOARDING DASHBOARD</h3>
          </div>

        </div>
        <div className={styles.logoutDiv} style={{ "display": "flex" }}>
          <h4 onClick={() => { logout() }}>logout</h4>
          <img onClick={() => { logout() }} className={styles.logout} width="25px" height="25px" src="/logout.png" alt="logout" />
        </div>
      </div>
      {/* Nav section end */}

      {/* Main onBoarding start */}
      <div style={{ "display": onboarding ? "block" : "none" }}>
        <div className={styles.onboarding}>

          <div className={styles.barSection}>

            <div className={styles.barTopSection}>
              <h5>Your onboarding completion status</h5>
              <div className={styles.barProgress}>
                <span>{barprogres ? "100%" : "30%"}</span>
                <div className={styles.barColor}>
                  <div className={styles.orange} style={{ "width": barprogres ? "100%" : "30%" }}></div>
                  <div className={styles.white} style={{ "width": barprogres ? "0%" : "70%" }}></div>
                </div>
              </div>
            </div>

            <div className={styles.completeInfo}>
              <h4>Mobile & Email </h4>
              <div className={styles.correctCheck}>
                <img width="15px" height="15px" src="/correct.png" alt="correct" style={{ "display": mobile ? "block" : "none" }} />
                <img width="15px" height="15px" src="/checked.png" alt="chekc" style={{ "display": !mobile ? "block" : "none" }} />
                <h5>Mobile</h5>
              </div>

              <div className={styles.correctCheck}>
                <img width="15px" height="15px" src="/correct.png" alt="correct" style={{ "display": email ? "block" : "none" }} />
                <img width="15px" height="15px" src="/checked.png" alt="chekc" style={{ "display": !email ? "block" : "none" }} />
                <h5>Email</h5>
              </div>
            </div>

            <div className={styles.completeInfo}>
              <h4>Store & Pickup Details</h4>
              <div className={styles.correctCheck}>
                <img width="15px" height="15px" src="/correct.png" alt="correct" style={{ "display": display ? "block" : "none" }} />
                <img width="15px" height="15px" src="/checked.png" alt="chekc" style={{ "display": !display ? "block" : "none" }} />
                <h5>Display Name</h5>
              </div>

              <div className={styles.correctCheck}>
                <img width="15px" height="15px" src="/correct.png" alt="correct" style={{ "display": address ? "block" : "none" }} />
                <img width="15px" height="15px" src="/checked.png" alt="chekc" style={{ "display": !address ? "block" : "none" }} />
                <h5>Pickup Address</h5>
              </div>
            </div>

      

      <Link href="/dashboard"><button className={styles.addProducts} style={{"display":addproduct?"block":"none"}} >Go to Listing  →</button></Link>  

          </div>


          <div className={styles.formSectionForAddress}>

            <div className={styles.topFormSection}>
           <Link href="/dashboard"><button className={styles.addProducts1} style={{"display":addproduct?"block":"none"}} >Go to Listing  →</button> </Link> 
              <h2>Hello, {getData.displayName}</h2>
              <h4>Mobile & Email Verification</h4>
              <div className={styles.flexSectionInForm}>
                <div className={styles.flexInner}>
                  <img width="25px" height="25px" src="/phonefram.png" alt="mobile" />
                  <h4>{getData.mobileSet}</h4>
                </div>
                <h4 className={styles.verify}>verify</h4>
              </div>
              <div className={styles.flexSectionInForm}>
                <div className={styles.flexInner}>
                  <img width="25px" height="25px" src="/user.png" alt="email" />
                  <h4>{getData.email}</h4>
                </div>
                <h4 className={styles.verify}>verify</h4>
              </div>
            </div>
            <br /><br />

            <div className={styles.middleGstSection}>
              <h4>What are you looking to sell on Flipkart?</h4>
              <br />

              <div className={styles.categories}>

                <div onClick={hideShow1} className={styles.btn1} style={{ "backgroundColor": firstH2 ? "#ebf3fb" : "#fff", "border": firstH2 ? "1px solid #0066cc" : "1px solid #000" }}>
                  <img width="25px" height="25px" src="/box.png" alt="box" />
                  <h2 style={{ "color": firstH2 ? "#0066cc" : "#000" }}>All Categories</h2>
                </div>

                <div onClick={hideShow2} className={styles.btn2} style={{ "backgroundColor": secondH2 ? "#ebf3fb" : "#fff", "border": secondH2 ? "1px solid #0066cc" : "1px solid #000" }}>
                  <img width="25px" height="25px" src="/box.png" alt="box" />
                  <div>
                    <h2 style={{ "color": secondH2 ? "#0066cc" : "#000" }}>Only Books</h2>
                    <h5 style={{ "color": secondH2 ? "#0066cc" : "#000" }}>(PAN is mandatory)</h5>
                  </div>
                </div>

              </div>

              <div style={{ "display": gstDiv ? "block" : "none" }}>
                <div className={styles.gst}>

                  <div className={styles.enterGst}>
                    <input onChange={() => { }} type="text" placeholder='Enter GSTIN' name='gst' value={getData.gst} />
                    <h5>GSTIN is required to sell products on Flipkart.</h5>
                  </div>
                  <br />
                </div>
              </div>

              <div style={{ "display": panDiv ? "block" : "none" }}>
                <div className={styles.gst}>

                  <div className={styles.enterGst}>
                    <input onChange={() => { }} type="text" placeholder='Enter PAN Number' value={getData.gst} />
                    <h5>PAN & Business Details are required to sell books on Flipkart.</h5>
                  </div>
                  <br />
                </div>

              </div>

            </div>
            <br />

            <div className={styles.storeAddress}>
              <h4>Store & Pickup Details</h4>
              <br />
              <div className={styles.gstUse}>
                <div className={styles.enterGst}>
                  <input onChange={handleInput} value={onboardingData.name || getData.name} name='name' type="text" placeholder='Enter Your Full Name' />
                </div>
                <br />
              </div>

              <div className={styles.gstUse}>
                <div className={styles.enterGst}>
                  <input onChange={handleInput} value={onboardingData.displayName || getData.displayName} name='displayName' type="text" placeholder='Enter Display Name' />
                </div>
                <br />
              </div>

              <br />

              <h4>Pickup Pincode</h4>
              <br />

              <div className={styles.gstUse}>
                <div className={styles.enterGst}>
                  <input onChange={handleInput} value={onboardingData.pincode || getData.pincode} name='pincode' type="text" placeholder='Enter Pickup Pinecode' />
                </div>
                <br />
              </div>

              <br />

              <h4>Pickup Address (Minimum 8 letters)</h4>
              <br />

              <div className={styles.gstUse}>
                <div className={styles.enterGst}>
                  <input onChange={handleInput} value={onboardingData.add1 || getData.add1} name='add1' type="text" placeholder='Shop No., Building Name, Floor' />
                </div>
                <br />
              </div>

              <div className={styles.gstUse}>
                <div className={styles.enterGst}>
                  <input onChange={handleInput} value={onboardingData.add2 || getData.add2} name='add2' type="text" placeholder='Road Name, Area, Colony' />
                </div>
                <br />
              </div>

              <div className={styles.gstUse}>
                <div className={styles.enterGst}>
                  <input onChange={handleInput} value={onboardingData.add3 || getData.add3} name='add3' type="text" placeholder='Shop No., Building Name, Floor' />
                </div>
                <br />
              </div>

              <div className={styles.gstUse}>
                <div className={styles.enterGst}>
                  <input onChange={handleInput} value={onboardingData.city || getData.city} name='city' type="text" placeholder='Enter City' />
                </div>
                <br />
              </div>

              <div className={styles.gstUse}>
                <div className={styles.enterGst}>
                  <input onChange={handleInput} value={onboardingData.state || getData.state} name='state' type="text" placeholder='Enter State' />
                </div>
                <br />
              </div>

            </div>

            <div className={styles.saveButton}>
              <button onClick={onboardingDataSend}>{submitString}</button>
            </div>
            <br />
          </div>



          <div className={styles.offerSection}>

          </div>

        </div>

      </div>

      <br />
      <Footer />
    </>
  )
}
