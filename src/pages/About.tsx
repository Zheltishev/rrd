import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <h1>About</h1>
            <Link to='/posts/new'>
                <button>create new post</button>
            </Link>
        </>
    )
}