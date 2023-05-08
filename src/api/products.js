export const fetchProducts = (token)=> fetch("https://api.react-learning.ru/products", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });