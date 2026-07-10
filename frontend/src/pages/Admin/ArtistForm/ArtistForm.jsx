import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    createArtist,
    getArtistById,
    updateArtist,
} from "@/api/artists";

function ArtistForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = Boolean(id);

    const [form, setForm] = useState({
        name: "",
        slug: "",
        style: "",
        image: "",
    });
    useEffect(() => {
        if (!isEdit) {
            return;
        }

        async function loadArtist() {
            const artist = await getArtistById(id);

            setForm({
                name: artist.name,
                slug: artist.slug,
                style: artist.style,
                image: artist.image,
            });
        }

        loadArtist();
    }, [id, isEdit]);

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (isEdit) {
            await updateArtist(id, form);
        } else {
            await createArtist(form);
        }

        navigate("/admin/artists");
    }

    return (
        <section>
            <h1>
                {isEdit ? "Edit Artist" : "Create Artist"}
            </h1>

            <form onSubmit={handleSubmit}>

                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />

                <input
                    name="slug"
                    placeholder="Slug"
                    value={form.slug}
                    onChange={handleChange}
                />

                <input
                    name="style"
                    placeholder="Style"
                    value={form.style}
                    onChange={handleChange}
                />

                <input
                    name="image"
                    placeholder="Image URL"
                    value={form.image}
                    onChange={handleChange}
                />

                <button type="submit">
                    Save
                </button>

            </form>
        </section>
    );
}

export default ArtistForm;
