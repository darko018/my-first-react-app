
const endpoint = "https://jsonplaceholder.typicode.com/posts";

export const getBlogs = () => {
    
    return fetch(endpoint)
    .then(resp => resp.json())
    .then(blogs => blogs)
}