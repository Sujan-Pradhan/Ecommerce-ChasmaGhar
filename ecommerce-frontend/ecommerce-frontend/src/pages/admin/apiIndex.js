import { API } from "../../config";

//to add category
export const addcategory = (token, category) => {
  return fetch(`${API}/postcategory`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//to fetch all category
export const allcategory = () => {
  return fetch(`${API}/categorylist`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
//to add product

export const addproduct = (token, product) => {
  return fetch(`${API}/postproduct`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
//to fetch all product
export const allproduct = () => {
  return fetch(`${API}/productlist`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//to fecth all users
export const allcustomer = () => {
  return fetch(`${API}/userlist`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//to fetch all orders
export const allorder = () => {
  return fetch(`${API}/orderlist`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//to get order details
export const orderdetails = (orderId) => {
  return fetch(`${API}/orderdetails/${orderId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateproduct = (productId, product) => {
  return fetch(`${API}/updateproduct/${productId}`, {
    method: "PUT",
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
