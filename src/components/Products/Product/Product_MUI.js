import React from "react";
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
	// console.log("showing", product);
	// return <div></div>;
	return (
		<Card sx={{ height: 400, width: 300 }}>
			<CardMedia image={product.image.url} sx={{ height: 200, width: 300 }} />
			<CardContent>
				<div>
					<Typography variant="h5" gutterBottom>
						{product.name}
					</Typography>
					<Typography variant="h5">
						{product.price.formatted_with_symbol}
					</Typography>
				</div>
				<Typography
					dangerouslySetInnerHTML={{ __html: product.description }}
					variant="body2"
					color="textSecondary"
				/>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					aria-label="add-to-cart"
					onClick={() => onAddToCart(product.id, 1)}
				>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Product;
