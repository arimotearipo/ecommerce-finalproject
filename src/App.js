import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import { Navbar, Products, Cart } from "./components";
import ShopContext from "./ShopContext";

const App = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});

	const fetchProduct = async () => {
		const { data } = await commerce.products.list();
		setProducts(data);
	};

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	};

	const handleAddToCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.add(productId, quantity);
		setCart(cart);
	};

	const handleUpdateCartQty = async (productId, quantity) => {
		console.log("KAJHDKJSAHD");
		const { cart } = await commerce.cart.update(productId, quantity);
		setCart(cart);
	};

	const handleRemoveFromCart = async (productId) => {
		const { cart } = await commerce.cart.remove(productId);
		setCart(cart);
	};

	const handleEmptyCart = async () => {
		const { cart } = await commerce.cart.empty();
		setCart(cart);
	};

	useEffect(() => {
		fetchProduct();
		fetchCart();
	}, []);

	while (cart === undefined);
	// if (cart === undefined) return "Loading...";

	return (
		<Router>
			<ShopContext.Provider
				value={{
					products,
					cart,
					handleAddToCart,
					handleUpdateCartQty,
					handleRemoveFromCart,
					handleEmptyCart,
				}}
			>
				<div>
					<Navbar />
					<Routes>
						<Route path="/" element={<Products />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</div>
			</ShopContext.Provider>
		</Router>
	);
};

export default App;
