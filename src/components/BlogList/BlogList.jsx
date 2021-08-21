import React, { useState, useEffect } from "react";
import { getBlogs } from "../../services/blogService";

import './BlogList.css'

export const BlogList = () => {
    const [blogs, setBlogs] = useState([])
    const [filteredBlogs, setFilteredBlogs] = useState ([])
    const [inputValue, setInputValue] = useState ("")


    useEffect (() => {
        getBlogs ().then((blogs) => {
            setBlogs(blogs);
            setFilteredBlogs(blogs)
        });
    },[])

    const onTyping = (e) => {
        setInputValue (e.target.value)
        const fBlogs = blogs.filter(blog => blog.title.includes(inputValue))
        setFilteredBlogs(fBlogs)
    }

    if (blogs.length === 0) return <div>  Loading....</div>
    return (
        <div className='blogList'>
            <input value = {inputValue} type="text" onChange = {onTyping}/>
            {filteredBlogs.map((post, index) => (
               <div className='blogItem' key={index}>
                   <h2>{post.title}</h2>
                   <p>{post.body}</p>

               </div>
            ))}
        </div>
    ); 
}


// export class BlogList extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             blogs: []
//         }
//     }
    
//     componentDidMount () {
//         getBlogs()
//         .then(blogs => {
//             this.setState({blogs})
//         })
//     }
//     render () {
        // if(this.state.blogs.length === 0) return <div>  Loading....</div>
        // return (
        //     <div className='blogList'>
        //         {this.state.blogs.map((post, index) => (
        //            <div className='blogItem' key={index}>
        //                <h2>{post.title}</h2>
        //                <p>{post.body}</p>
    
        //            </div>
        //         ))}
        //     </div>
        // ); 
//     }
// }



