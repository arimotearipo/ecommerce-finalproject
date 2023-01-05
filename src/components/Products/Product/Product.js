import React, { useContext } from "react";
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const Product = ({ product, onAddToCart }) => {
	return (
		<div>
			<p>Product: {product.name}</p>
			<p>Price: {product.price.formatted_with_symbol}</p>
			<button type="button" onClick={() => onAddToCart(product.id, 1)}>
				Add to Cart
			</button>
		</div>
	);
};

export default Product;
