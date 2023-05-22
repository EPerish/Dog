export const fetchProducts = (token)=> fetch("https://api.react-learning.ru/products", {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // export const fetchCurruntProduct = (id, token) => fetch(`https://api.react-learning.ru/products/${id}`, {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   }
  // })

  export const fetchCurruntProduct = async (id, token) => {
  const res = await fetch(`https://api.react-learning.ru/products/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })

  if (res.ok) {
    const responce = await res.json()
  }

  return false
  
}