<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap" rel="stylesheet"></link>
</link>

import Button from "./Button";
import styles from "./Navbar1.module.css";

export default function Navbar() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <image src="LOGO.png" alt="image" />
        </div>
        <div className={styles.message}>
        <h1>RE-PUB</h1>
        </div>
        <div className={styles.content}>
        <Button variant="secondary">
          <link href="/Home"> Home/>
          </Button>
          <Button variant="secondary">
          <link href="/Titles"> Content/>
          </Button>
          <Button variant="secondary">
          <link href="/Create">Create/>
          </Button>
          <Button variant="primary">
          <link href="/Logout">Logout/>
          </Button>
        </div>
      </div>
    );
  }
