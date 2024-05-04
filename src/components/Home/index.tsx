import About from './About';
import Beer from './Beer';
import Butcher from './Butcher';
import Food from './Food';
import Grocery from './Grocery';
import Hero from './Hero';
import Wine from './Wine';

import styles from "./style.module.scss"

export default function Home() {
    return (
        <div>
            <Hero className={styles.Hero} />
            <Food className={styles.Food} />
            <Wine className={styles.Wine} />
            <About className={styles.About} />
            <Beer className={styles.Beer} />
            <Grocery className={styles.Grocery} />
            <Butcher className={styles.Butcher} />
        </div>
    );
}