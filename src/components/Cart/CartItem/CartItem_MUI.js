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
			<Card>
				<CardMedia image={item.image.url} sx={{ height: 200, width: 300 }} />
				<CardContent>
					<Typography variant="h4">{item.name}</Typography>
					<Typography variant="h5">
						{item.line_total.formatted_with_symbol}
					</Typography>
				</CardContent>
				<CardActions>
					<div>
						<Button
							onClick={() => handleUpdateCartQty(item.id, -1)}
							type="button"
							size="small"
						>
							-
						</Button>
						<Typography>{item.quantity}</Typography>
						<Button
							onClick={() => handleUpdateCartQty(item.id, 1)}
							type="button"
							size="small"
						>
							+
						</Button>
					</div>
					<Button
						onClick={() => handleRemoveFromCart()}
						variant="contained"
						type="button"
						color="secondary"
					>
						Remove
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default CartItem;
