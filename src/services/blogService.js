
const mainEndpoint = "https://jsonplaceholder.typicode.com/posts";

export const getBlogs = () => {
    
    return fetch(mainEndpoint)
    .then(resp => resp.json())
    .then(blogs => blogs)
    
    
}

export const getSingleBlog = (id) => {
    return fetch(`${mainEndpoint}/${id}`)
    .then(response => response.json())
    .then(blog => blog)
}