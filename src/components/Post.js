import React from 'react';
import posts from './../data/posts';
import { useParams, Navigate } from 'react-router-dom';


const Post = (props) => {
    const {id} = useParams();
    console.log()
    return (
        <>
        {posts[id - 1] ?
            <>
                <h1>Post {posts[id - 1].titulo}</h1>
                <p>{posts[id - 1].texto}</p>
            </>
        :
            <Navigate to="/" />

        }
        </>
     );
}
 
export default Post;