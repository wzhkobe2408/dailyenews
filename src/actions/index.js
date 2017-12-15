const URL = 'http://localhost:3004'

export const latestNews = () => {
  const request = fetch(`${URL}/articles?_order=desc&_end=3`,{method:"GET"})
    .then(response => response.json())

  return {
    type:'GET_LATEST',
    payload:request
  }
}

export const otherNews = () => {
  const request = fetch(`${URL}/articles?_order=desc&_start=3&_end=10`,{method:"GET"})
    .then(response => response.json())

  return {
    type:'GET_OTHER',
    payload:request
  }
}

export const latestGallery = () => {
  const request = fetch(`${URL}/galleries?_order=desc&_limit=2`,{method:"GET"})
    .then(response => response.json())

  return {
    type:'GET_LATEST_GALLERY',
    payload:request
  }
}

export const selectedNews = (id) => {
  const request = fetch(`${URL}/articles?id=${id}`,{method:"GET"})
    .then(response => response.json())
  return {
    type:'GET_SELECTED_NEWS',
    payload:request
  }
}

export const clearSelectedNews = () => {
  return {
    type:'CLEAR_SELECTED_NEWS',
    payload:[]
  }
}

export const selectedGallery = (id) => {
  const request = fetch(`${URL}/galleries?id=${id}`,{method:"GET"})
    .then(response => response.json())
  return {
    type:'GET_SELECTED_GALLERY',
    payload:request
  }
}

export const clearSelectedGallery = () => {
  return {
    type:'CLEAR_SELECTED_GALLERY',
    payload:[]
  }
}

export const handleLikes = (array, id, section, type) => {
  const request = fetch(`${URL}/${section}/${id}`,{
    method:'PATCH',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({likes:array})
  })
    .then(response => response.json());
  return {
    type:type,
    payload:request
  }
}
