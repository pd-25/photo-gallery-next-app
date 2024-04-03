export default function Header() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Photo gallery by pradipta</title>
            <link rel="stylesheet" href="/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
            <link rel="stylesheet" href="/css/templatemo-style.css" />
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <i className="fas fa-film mr-2" />
                        Catalog-Z
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link nav-link-1 active"
                                    aria-current="page"
                                    href="index.html"
                                >
                                    Photos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-2" href="videos.html">
                                    Videos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-3" href="about.html">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-4" href="contact.html">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
