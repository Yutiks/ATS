import styles from "./AboutPreview.module.css";
import Button from "../../../../components/Button/Button";

function AboutPreview() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <span className={styles.label}>
                    About Us
                </span>

                <h2 className={styles.title}>
                    Every Tattoo Has a Story
                </h2>

                <p className={styles.text}>
                    We create custom tattoos that combine artistic vision,
                    technical precision and individuality. Every design is
                    crafted specifically for you.
                </p>

                <Button variant="secondary">
                    Learn More
                </Button>
            </div>
        </section>
    );
}

export default AboutPreview;