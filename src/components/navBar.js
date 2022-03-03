import { NavLink } from "react-router-dom";
function NavBar(params) {
    return (
        <>
            <nav>
                <NavLink to="/">
                    <h3>Form 1</h3>
                </NavLink>
                <br/>
                <NavLink to="/form2">
                    <h3>Validate Form 1</h3>
                </NavLink>
            </nav>
        </>
    )
}

export default NavBar