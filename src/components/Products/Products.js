import React, { useContext } from "react";
import Product from "./Product/Product";
import { Grid } from "@mui/material";
import ShopContext from "../../ShopContext";

const Products = () => {
	const shop = useContext(ShopContext);
	return (
		<main>
			<div>
				{shop.products.map((p) => (
					<Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
						<Product product={p} onAddToCart={shop.handleAddToCart} />
					</Grid>
				))}
			</div>
		</main>
	);
};

export default Products;
