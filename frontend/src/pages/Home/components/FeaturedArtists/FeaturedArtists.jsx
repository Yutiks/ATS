import styles from "./FeaturedArtists.module.css";
import ArtistCard from "../../../../components/ArtistCard/ArtistCard";
import IvanPolitImage from "../../../../assets/artists/IvanPolitImage.jpg";


const artists = [
    {
        id: 1,
        name: "Ivan Polit",
        style: "Blackwork",
        image: IvanPolitImage
    },
    {
        id: 2,
        name: "Emma Stone",
        style: "Fine Line",
        image: "https://picsum.photos/500/700?2"
    },
    {
        id: 3,
        name: "Daniel Fox",
        style: "Realism",
        image: "https://picsum.photos/500/700?3"
    }
];

function FeaturedArtists() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <span className={styles.label}>
                    Our Artists
                </span>

                <h2 className={styles.title}>
                    Meet Our Artists
                </h2>

                <div className={styles.grid}>
                    {artists.map((artist) => (
                        <ArtistCard
                            key={artist.id}
                            {...artist}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FeaturedArtists;