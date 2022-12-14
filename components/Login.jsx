<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
</link>

import React, { useState } from "react";
import styles from "./Login.module.css";

export default function Login (){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState(false)

  const handleSubmit=(e)=>{
      e.preventDefault();
      if(email.length==0||password.length==0){
          setError(true)
          alert("Empty Fields")
      }
      if(email&&password)
      {
      console.log("Email: ",email,"\nPassword: ",password)
      }
  }
 
    return (
        <div className={styles.main}>
         <div className={styles.submain}>
           <div>
             <div className={styles.imgs}>
               <div className={styles.container_image}>
                 <image src={"MARIALOGO.png"} alt="profile" className={styles.profile}/>
               </div>
             </div>
             <div>
              <form onSubmit={handleSubmit}>
                  <h1>Sign in to Re-Pub</h1>
               <div className={styles.input}>
                <label>Email:</label>
                <input type="text" className={styles.name} onChange={e=>setEmail(e.target.value)} />
               </div>
               <div className={styles.second_input}>
                <label>Password:</label>
                <input type="password" className={styles.name} onChange={e=>setPassword(e.target.value)} />
                </div>
                <div className={styles.error}>
               {error&&email.length<=0?
                 <label1>Email is Required</label1>:""}
                 {error&&password.length<=0?
                <label2>Password is Required</label2>:""}
              </div>
              <div className={styles.login_button}>
              <button>
                <link href="/Titles"> Login</link>
              </button>
              </div>
                <p className={styles.link}>
                  <link href="#">Forgot password?</link>
                </p>
              <div className={styles.signup}>
                <p> 
                Don&apos;t have an account? <link href="/SignUp">Sign Up</link>
                </p>
                </div>
              </form>
               </div>
             </div>
           </div>
         </div>
      );            
    }
