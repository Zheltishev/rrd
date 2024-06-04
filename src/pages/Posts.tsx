import { Link } from "react-router-dom";
import { IPost } from "../models/tsModels";
import { useEffect, useState } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const jsonRes = await res.json()

            setPosts(jsonRes)
        }

        fetchData()
    }, [])

    return (
        <>
            <Link to='/posts/new'>
                <button>create new post</button>
            </Link>
            {posts && posts.map((post: IPost) => (
                <Link to={`/posts/${post.id}`} key={post.id}>
                    <li>{post.title}</li>
                </Link>
            ))}
        </>
    )
}