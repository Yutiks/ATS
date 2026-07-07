import styles from "./Hero.module.css";
import Button from "../../../../components/Button/Button";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <span className={styles.label}>
                    Premium Tattoo Studio
                </span>

                <h1 className={styles.title}>
                    INKFLOW
                </h1>

                <p className={styles.subtitle}>
                    Custom tattoos created by experienced artists.
                </p>

                <div className={styles.buttons}>
                    <Button variant="primary">
                        Book Session
                    </Button>

                    <Button variant="secondary">
                        View Portfolio
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Hero;