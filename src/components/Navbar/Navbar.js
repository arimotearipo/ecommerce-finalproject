import React from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import logo from "../../assets/commerce.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
	const location = useLocation();

	return (
		<div>
			<Link to="/">eCommerce</Link>
			<Link to="/cart">Cart {totalItems}</Link>
		</div>
	);
};

export default Navbar;
