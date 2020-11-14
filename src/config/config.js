export const API = process.env.REACT_APP_API_URL

export const getToken = () =>{
      return localStorage.getItem('token');
}

export const setToken = (token) =>{
   localStorage.setItem("token", token)
}

export const removeToken = () => {
  localStorage.removeItem('token');
}