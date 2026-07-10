import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getArtists } from "@/api/artists";

function AdminArtists() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        async function loadArtists() {
            const data = await getArtists();
            setArtists(data);
        }

        loadArtists();
    }, []);

    return (
        <section>
            <h1>Manage Artists</h1>

            <Link to="/admin/artists/new">
                Add Artist
            </Link>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Style</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {artists.map((artist) => (
                        <tr key={artist.id}>
                            <td>{artist.name}</td>
                            <td>{artist.style}</td>

                            <td>
                                <Link to={`/admin/artists/${artist.id}/edit`}>
                                    Edit
                                </Link>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default AdminArtists;
