import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);

    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]);


    function openMobileNavbar() {
        const navbar = document.getElementsByClassName("navbar")[0];
        navbar.classList.add("opened");
    }

    function closeMobileNavbar() {
        const navbar = document.getElementsByClassName("navbar")[0];
        navbar.classList.remove("opened");
    }

    const navbarToggle = () => {
        const navbar = document.getElementsByClassName("navbar")[0];
        if (navbar.classList.contains("opened")) {
            closeMobileNavbar();
        } else {
            openMobileNavbar();
        }
    }

    return (
        <div className="navbar">
            <Link className="name" to="/">Harrison Vijay</Link>
            <button type="button" className="navbar-toggle" aria-label="Open navigation menu" onClick={navbarToggle}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <div className="navbar-menu">
                <Link className={selected === "/" ? "selected" : ""} onClick={closeMobileNavbar} to="/" >About Me</Link>
                <Link className={selected === "/experience" ? "selected" : ""} onClick={closeMobileNavbar} to="/experience">Work Experience</Link>
                <Link className={selected === "/education" ? "selected" : ""} onClick={closeMobileNavbar} to="/education">Education</Link>
                <Link className={selected === "/skills" ? "selected" : ""} onClick={closeMobileNavbar} to="/skills">Skills</Link>
                <Link className={selected === "/projects" ? "selected" : ""} onClick={closeMobileNavbar} to="/projects">Projects</Link>
                <Link className={selected === "/achievements" ? "selected" : ""} onClick={closeMobileNavbar} to="/achievements">Programming Achievements</Link>
                <Link className={selected === "/courses" ? "selected" : ""} onClick={closeMobileNavbar} to="/courses">Courses</Link>
                <Link className={selected === "/clubs" ? "selected" : ""} onClick={closeMobileNavbar} to="/clubs">Clubs</Link>
            </div>
        </div>
    )
}

export default Navbar;