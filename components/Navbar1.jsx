<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap" rel="stylesheet"></link>
</link>

import Button from "./Button";
import styles from "./Navbar1.module.css";

export default function Navbar() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src="LOGO.png" />
        </div>
        <div className={styles.message}>
        <h1>RE-PUB</h1>
        </div>
        <div className={styles.content}>
        <Button variant="secondary">
          <Link href="/Home"> Home</Link>
          </Button>
          <Button variant="secondary">
          <Link href="/Titles"> Content</Link>
          </Button>
          <Button variant="secondary">
          <Link href="/Create">Create</Link>
          </Button>
          <Button variant="primary">
          <Link href="/Logout">Logout</Link>
          </Button>
        </div>
      </div>
    );
  }
