// pages/_document.js

import Document, { Html, Head, Main, Home, Content, Login, Register, Navbar, Navbar1 } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
          </link>
      
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
          </link>
      
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap" rel="stylesheet"></link>
          </link>
      
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          </link>
          
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
          </link>
      
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          </link>
      
        </Head>
        <body>
        <Main />
        <Home/>
        <Content/>
        <Login/>
        <Register/>
        <Navbar/>
        <Navbar1/>
        </body>
      </Html>
    )
  }
