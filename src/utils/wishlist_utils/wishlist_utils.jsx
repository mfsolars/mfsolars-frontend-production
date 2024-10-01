// wishlistUtils.js
import axios from "axios";
export const getWishlist = async() => {
    let response =  await axios.get("/api/mfsolars/v1/product/wishlist");
    return response.data.wishlist;
};

export const setWishlist = (wishlist) => {
    sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
};

export const addToWishlist = (product) => {
    const wishlist = getWishlist();
    wishlist[product.id] = { ...product };
    setWishlist(wishlist);
};

export const removeFromWishlist = (productId) => {
    const wishlist = getWishlist();
    delete wishlist[productId];
    setWishlist(wishlist);
};

export const getWishlistItems = () => {
    return Object.values(getWishlist());
};
