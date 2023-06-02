
export const fetchProducts = (token) => fetch('https://api.react-learning.ru/products', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export const fetchProductsWithSearch = (token, search) =>
  fetch(`https://api.react-learning.ru/products/search?query=${search}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

export const fetchCurrentProduct = (id, token) => fetch(`https://api.react-learning.ru/products/${id}`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export const fetchCartProducts = (token, cart) => Promise.allSettled(cart.map(
  product => fetch(`https://api.react-learning.ru/products/${product._id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json()).then(data => {
    return { _id: product._id, data }
  })))