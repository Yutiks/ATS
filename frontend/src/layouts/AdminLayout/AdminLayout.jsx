import { Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <div>
            <aside>
                <h2>InkFlow Admin</h2>

                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>Artists</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Bookings</li>
                    </ul>
                </nav>
            </aside>

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
