import { useRef } from "react";
import { FaBars, FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";
import logo from "../../Frame 105.png"
import {BiLeftArrowAlt} from 'react-icons/bi'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {HiOutlineArrowLeft} from 'react-icons/hi'

function Navbar() {
	
	return (
		<header>
			{/*<HiOutlineArrowLeft />*/}
			<div className="side-by-side">
				<a href="#"><img src={logo} alt="logo" /></a>
				<div className="Connexion">
					<h3> <AiFillSafetyCertificate className="certificate"/> Connexion</h3>
				</div>
			</div>
		</header>
	);
}

export default Navbar;