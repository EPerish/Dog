export const fetchAuth = (values)=> fetch('https://api.react-learning.ru/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })

  export const fetchReg= (values)=> fetch('https://api.react-learning.ru/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })

  export const fetchInfoAboutMe = (token) => {
    return fetch('https://api.react-learning.ru/v2/group-11/users/me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
  )}