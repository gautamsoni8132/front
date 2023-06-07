import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from 'react'
export default function Document() {

  const [div,setDiv]=useState(0);

  
  const stopLoader = () => {
    setDiv(1);
  }
  return (
    <Html lang="en" onLoad={stopLoader}>

      <body>
        <div style={{"display":div==0?"none":"block","zIndex":"9999999999999999999999999999", "width": "100%", "height": "100vh", "backgroundColor": "#fff","textAlign":"center","padding":"25% 0%","position":"fixed" }}>
          <img src="/loader.gif" alt="loader" style={{"margin":"0% auto"}} />
        </div>
        <Head />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
