<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Graduate&display=swap" rel="stylesheet"></link>
</link>

import styles from "./Content.module.css";

export default function Content() {
  return (
    <div className={styles.container}>
        <div class={styles.cards}>
        <div class={styles.card}>
                <image class={styles.card__image} src="1.png" alt="image"/>
                <div class={styles.card__content}>
                     <p><link href="/UNTIL_FRIDAY_NIGHT"> UNTIL FRIDAY NIGHT</link></p>
                </div>
            <div class={styles.card1}>
                <image class={styles.card__image1} src="2.png" alt="image"/>
                <div class={styles.card__content1}>
                <p><link href="/HOW_TO_OVERCOME_YOUR_FEAR_OF_FAILURE">HOW TO OVERCOME YOUR</link> </p>
                     <p>     FEAR OF FAILURE        </p>
                </div>
            </div>
            <div class={styles.card2}>
                <image class={styles.card__image2} src="3.png" alt="image"/>
                <div class={styles.card__content2}>
                    <p>
                      <link href="/GLOBE_&_METAVERSEGO">GLOBE & METAVERSEGO</link>
                    </p>
                </div>
            </div>
            <div class={styles.card3}>
                <image class={styles.card__image3} src="4.png" alt="image"/>
                <div class={styles.card__content3}>
                     <p>
                      <link href="/60_HOURS_NO_SLEEP_IN_SOKOR">60 HOURS NO SLEEP</link>
                     </p>
                     <p>IN SEOUL, SOUTH KOREA</p>
                </div>
            </div>
            <div class={styles.card4}>
                <image class={styles.card__image4} src="5.png" alt="image"/>
                <div class={styles.card__content4}>
                     <p><link href="/HOW_TO_DEAL_WITH_TOXIC_PEOPLE">  HOW TO DEAL WITH</link></p>
                     <p>HATERS/TOXIC PEOPLE</p>
                </div>
            <div class={styles.card5}>
                <image class={styles.card__image5} src="6.png" alt="image"/>
                <div class={styles.card__content5}>
                     <p><link href="/HOW_TO_CHANGE_YOUR_LIFE"> HOW TO CHANGE YOUR</link> </p>
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
