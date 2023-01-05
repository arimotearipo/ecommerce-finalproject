import React from "react";
import {
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from "@mui/material";

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
	return (
		<div>
			<p>Item Name: {item.name}</p>
			<p>{item.line_total.formatted_with_symbol}</p>
			<div>
				<button onClick={() => handleUpdateCartQty(item.id, -1)}>-</button>
				<button>{item.quantity}</button>
				<button onClick={() => handleUpdateCartQty(item.id, 1)}>+</button>
				<button onClick={() => handleRemoveFromCart(item.id, 1)}>Remove</button>
			</div>
		</div>
	);
};

export default CartItem;
