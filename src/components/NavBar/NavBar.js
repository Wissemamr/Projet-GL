import "./NavBar.css";
import logo from "../../Frame 105.png"
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import {Link} from "react-router-dom"

function Navbar() {
	
	return (
		<header className="navHeader">
			<HiOutlineArrowLeft className="backArrow" onClick={() => console.log("maria") /*fonction à exécuter*/} />
			<div className="side-by-side">
				<Link to="/"><img src={logo} alt="logo" /></Link>
				<div className="Connexion">
					<h3> <AiFillSafetyCertificate className="certificate"/> Connexion</h3>
				</div>
			</div>
		</header>
	);
}

export default Navbar;

