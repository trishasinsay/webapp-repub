<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Graduate&display=swap" rel="stylesheet"></link>
</link>

import styles from "./Content.module.css";

export default function Content() {
  return (
    <div className={styles.container}>
        <div class={styles.cards}>
        <div class={styles.card}>
                <img class={styles.card__image} src="1.png"/>
                <div class={styles.card__content}>
                     <p><Link href="/UNTIL_FRIDAY_NIGHT"> UNTIL FRIDAY NIGHT</Link></p>
                </div>
            <div class={styles.card1}>
                <img class={styles.card__image1} src="2.png"/>
                <div class={styles.card__content1}>
                <p><Link href="/HOW_TO_OVERCOME_YOUR_FEAR_OF_FAILURE">HOW TO OVERCOME YOUR</Link> </p>
                     <p>     FEAR OF FAILURE        </p>
                </div>
            </div>
            <div class={styles.card2}>
                <img class={styles.card__image2} src="3.png"/>
                <div class={styles.card__content2}>
                    <p><Link href="/GLOBE_&_METAVERSEGO">GLOBE & METAVERSEGO</Link></p>
                </div>
            </div>
            <div class={styles.card3}>
                <img class={styles.card__image3} src="4.png"/>
                <div class={styles.card__content3}>
                     <p><Link href="/60_HOURS_NO_SLEEP_IN_SOKOR">60 HOURS NO SLEEP</Link></p>
                     <p>IN SEOUL, SOUTH KOREA</p>
                </div>
            </div>
            <div class={styles.card4}>
                <img class={styles.card__image4} src="5.png"/>
                <div class={styles.card__content4}>
                     <p><Link href="/HOW_TO_DEAL_WITH_TOXIC_PEOPLE">  HOW TO DEAL WITH</Link></p>
                     <p>HATERS/TOXIC PEOPLE</p>
                </div>
            <div class={styles.card5}>
                <img class={styles.card__image5} src="6.png"/>
                <div class={styles.card__content5}>
                     <p><Link href="/HOW_TO_CHANGE_YOUR_LIFE"> HOW TO CHANGE YOUR</Link> </p>
                     <p>LIFE WHEN NOTHING IS</p>
                     <p>     GOING YOUR WAY     </p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  );
}
