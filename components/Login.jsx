<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
</link>

import styles from "./Login.module.css";
import React, { useRef } from "react";

export default function Login (){
  const email=useRef()
    const password=useRef()
    const handleSubmit=()=>{
        if(email.current.value=="marias@gmail.com"&&password.current.value=="12345"){
            localStorage.setItem("emailData","marias@gmail.com")
            localStorage.setItem("passwordData","12345")
        }
    }
    return (
        <div className={styles.main}>
         <div className={styles.submain}>
           <div>
             <div className={styles.imgs}>
               <div className={styles.container_image}>
                 <img src={"MARIALOGO.png"} alt="profile" className={styles.profile}/>
               </div>
             </div>
             <div>
              <form onSubmit={handleSubmit}>
                  <h1>Sign in to Re-Pub</h1>
               <div className={styles.input}>
                <label>Email:</label>
                 <input type="text" className={styles.name} required/>
               </div>
               <div className={styles.second_input}>
                <label>Password:</label>
                 <input type="password" className={styles.name} required/>
               </div>
              <div className={styles.login_button}>
              <button>
              <a href="/Titles"> Login</a>
              </button>
              </div>
                <p className={styles.link}>
                  <a href="#">Forgot password?</a>
                </p>
              <div className={styles.signup}>
                <p> Don't have an account? <a href="/SignUp">Sign Up</a> </p>
                </div>
              </form>
               </div>
             </div>
           </div>
         </div>
      );            
    }


  
