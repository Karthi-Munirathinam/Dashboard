

export default function Sidebar() {
    return (

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>


            <hr className="sidebar-divider" />


            <div className="sidebar-heading text-uppercase">
                Informations
            </div>


            <li className="nav-item active">
                <a className="nav-link" href="..." >
                    <i className="fas fa-fw fa-user"></i>
                    <span>Users</span>
                </a>
            </li>


            <li className="nav-item">
                <a className="nav-link" href="..." >
                    <i className="fas fa-fw fa-mobile"></i>
                    <span>Products</span>
                </a>
            </li>
            <hr className="sidebar-divider" />
        </ul>

    )
}