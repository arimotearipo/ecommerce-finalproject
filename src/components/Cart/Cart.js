import React, { useContext } from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import ShopContext from "../../ShopContext";

const Cart = () => {
	const shop = useContext(ShopContext);

	const EmptyCart = () => <h3>Your cart is empty</h3>;

	const FilledCart = () => (
		<>
			{shop.cart.line_items.map((i) => (
				<CartItem
					key={i.id}
					item={i}
					handleUpdateCartQty={shop.handleUpdateCartQty}
					handleRemoveFromCart={shop.handleRemoveFromCart}
				/>
			))}
		</>
	);

	if (!shop.cart.total_items) return "Loading...";

	return (
		<div>
			<h3>Your shopping cart</h3>
			{!shop.cart.line_items ? <EmptyCart /> : <FilledCart />}
		</div>
	);
};

export default Cart;
