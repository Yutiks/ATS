from sqlalchemy.orm import Session

from app.models.artist import Artist

from app.schemas.artist import ArtistCreate
from app.models.artist import Artist

from app.schemas.artist import ArtistUpdate


class ArtistService:
    @staticmethod
    def create(db: Session, artist: ArtistCreate):
        db_artist = Artist(
            name=artist.name,
            slug=artist.slug,
            style=artist.style,
            image=artist.image,
        )

        db.add(db_artist)
        db.commit()
        db.refresh(db_artist)

        return db_artist

    @staticmethod
    def get_all(db: Session):
        return db.query(Artist).all()

    @staticmethod
    def get_by_slug(db: Session, slug: str):
        return (
            db.query(Artist)
            .filter(Artist.slug == slug)
            .first()
        )

    @staticmethod
    def update(db: Session, artist_id: int, artist_data: ArtistUpdate):
        artist = db.get(Artist, artist_id)

        if artist is None:
            return None

        artist.name = artist_data.name
        artist.slug = artist_data.slug
        artist.style = artist_data.style
        artist.image = artist_data.image

        db.commit()
        db.refresh(artist)

        return artist

    @staticmethod
    def delete(db: Session, artist_id: int):
        artist = db.get(Artist, artist_id)

        if artist is None:
            return False

        db.delete(artist)
        db.commit()

        return True

    @staticmethod
    def get_by_id(db: Session, artist_id: int):
        return db.get(Artist, artist_id)
