from pydantic import BaseModel


class ArtistBase(BaseModel):
    name: str
    slug: str
    style: str
    image: str


class ArtistCreate(ArtistBase):
    pass


class ArtistUpdate(ArtistBase):
    pass


class Artist(ArtistBase):
    id: int

    model_config = {
        "from_attributes": True
    }
