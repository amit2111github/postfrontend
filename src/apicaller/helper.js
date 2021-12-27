import { API } from '../backend'
export const getAllPost = () => {
  return fetch(`${API}/post/all`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const postSubmit = (author, title, description) => {
  return fetch(`${API}/post/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ author, title, description }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}
export const getPostById = (postId) => {
  return fetch(`${API}/post/${postId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const getPostOnSkip = (skip) => {
  return fetch(`${API}/post/all?skip=${skip}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const updatePost = (author, title, description, postId) => {
  return fetch(`${API}/post/update/${postId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ author, title, description }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}
