import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({
	cart,
	handleUpdateCartQty,
	handleRemoveFromCart,
	handleEmptyCart,
}) => {
	const EmptyCart = () => (
		<Typography variant="subtitle1">
			Your cart is empty. <Link to="/">Go back to shopping.</Link>
		</Typography>
	);

	const FilledCart = () => (
		<>
			<Grid container spacing={3}>
				{cart.line_items.map((i) => (
					<Grid item xs={12} sm={4} key={i.id}>
						<CartItem
							item={i}
							handleUpdateCartQty={handleUpdateCartQty}
							handleRemoveFromCart={handleRemoveFromCart}
						/>
					</Grid>
				))}
			</Grid>
			<div>
				<Typography variant="h4">
					Subtotal: {cart.subtotal.formatted_with_symbol}
				</Typography>
				<div>
					<Button
						onClick={() => handleEmptyCart()}
						size="large"
						type="button"
						variant="contained"
						color="secondary"
					>
						Empty Cart
					</Button>
					<Button
						size="large"
						type="button"
						variant="contained"
						color="primary"
					>
						Checkout
					</Button>
				</div>
			</div>
		</>
	);

	if (!cart.total_items) return "Loading...";

	return (
		<Container>
			<div />
			<Typography variant="h3" gutterBottom>
				Your Shopping Cart
			</Typography>
			{!cart.line_items ? <EmptyCart /> : <FilledCart />}
		</Container>
	);
};

export default Cart;
