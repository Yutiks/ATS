from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.artist import Artist, ArtistCreate
from app.services.artist_service import ArtistService
from app.schemas.artist import ArtistUpdate
router = APIRouter()


@router.post("/", response_model=Artist)
def create_artist(
    artist: ArtistCreate,
    db: Session = Depends(get_db),
):
    return ArtistService.create(db, artist)


@router.get("/id/{artist_id}", response_model=Artist)
def get_artist_by_id(
    artist_id: int,
    db: Session = Depends(get_db),
):
    artist = ArtistService.get_by_id(db, artist_id)

    if artist is None:
        raise HTTPException(
            status_code=404,
            detail="Artist not found",
        )

    return artist


@router.get("/", response_model=list[Artist])
def get_artists(db: Session = Depends(get_db)):
    return ArtistService.get_all(db)


@router.get("/{slug}", response_model=Artist)
def get_artist(slug: str, db: Session = Depends(get_db)):
    artist = ArtistService.get_by_slug(db, slug)

    if artist is None:
        raise HTTPException(
            status_code=404,
            detail="Artist not found",
        )

    return artist


@router.put("/{artist_id}", response_model=Artist)
def update_artist(
    artist_id: int,
    artist: ArtistUpdate,
    db: Session = Depends(get_db),
):
    updated = ArtistService.update(db, artist_id, artist)

    if updated is None:
        raise HTTPException(status_code=404, detail="Artist not found")

    return updated


@router.delete("/{artist_id}")
def delete_artist(
    artist_id: int,
    db: Session = Depends(get_db),
):
    deleted = ArtistService.delete(db, artist_id)

    if not deleted:
        raise HTTPException(status_code=404, detail="Artist not found")

    return {
        "message": "Artist deleted"
    }
