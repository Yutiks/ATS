import styles from "./ArtistCard.module.css";
import Button from "../../components/Button/Button";

function ArtistCard({ name, style, image }) {
    return (
        <article className={styles.card}>
            <img
                src={image}
                alt={name}
                className={styles.image}
            />

            <div className={styles.content}>
                <h3>{name}</h3>

                <p>{style}</p>

                <Button variant="secondary">
                    View Profile
                </Button>
            </div>
        </article>
    );
}

export default ArtistCard;