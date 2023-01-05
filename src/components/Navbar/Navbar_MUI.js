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

	// if (location.pathname === '/')

	return (
		<div>
			<AppBar position="fixed" color="inherit">
				<Toolbar>
					<Typography component={Link} to="/" variant="h6" color="inherit">
						<img src={logo} alt="Commerce.js" height="25px" />
						eCommerce
					</Typography>
					<div />
					{location.pathname === "/" ? (
						<div>
							<IconButton
								component={Link}
								to="/cart"
								aria-label="Show cart items"
								color="inherit"
							>
								<Badge badgeContent={totalItems} color="secondary">
									<ShoppingCart />
								</Badge>
							</IconButton>
						</div>
					) : (
						<div></div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
