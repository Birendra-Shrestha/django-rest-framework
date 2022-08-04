import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/post`)
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {posts.map((post, i) => (
                        <div className='col-md-4 shadow' key={i}>
                            <h1>{post.title}</h1>
                            <h3>{post.url}</h3>
                            <p>{post.votes}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Posts