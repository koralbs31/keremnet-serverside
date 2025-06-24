import { Response, Request }from "express"

const posts = [
    {
            "title": "first post",
            "author": "Admin",
            "publishedAt": "2024-06-01",
            "content": "This is the first post."
        },
        {
            "title": "second post",
            "author": "koral steinberg",
            "publishedAt": "2025-06-02",
            "content": "first hanich post."
        },
        {
            "title": "third post",
            "author": "Ran",
            "publishedAt": "2025-06-03",
            "content": "Second hanich post"
        },
        {
            "title": "forth post",
            "author": "Eden",
            "publishedAt": "2025-06-08",
            "content": "third hanich post"
        },
        {
            "title": "forth post",
            "author": "Eden",
            "publishedAt": "2025-06-08",
            "content": "third hanich post"
        }
]

interface PostBody{
    title: string;
    author: string;
    publishedAt: string;
    content: string
}

const getPosts = (req: Request, res: Response) => {
    res.status(200).json(posts);
}

const addPost = (req: Request<{},{},PostBody>, res: Response)=> {
    posts.push({      
        "title": req.body.title,
        "author": req.body.author,
        "publishedAt": req.body.publishedAt,
        "content": req.body.content
    });
    res.status(200).json(posts);
}


const deletePost = (req: Request, res: Response) => {
    const titleToDelete = req.params.title;
    const index = posts.findIndex(p => p.title === titleToDelete);
    if (index === -1) return res.status(404).json({ error: "Post not found" });

    posts.splice(index, 1);
    res.status(200).json(posts);
}

const updatePost = (req: Request<{ title: string }, {}, PostBody>, res: Response) => {
    const titleToUpdate = req.params.title;
    const index = posts.findIndex(p => p.title === titleToUpdate);
    if (index === -1) return res.status(404).json({ error: "Post not found" });

    posts[index] = req.body;
    res.status(200).json(posts);
}

const _ = {
    getPosts,
    addPost,
    deletePost,
    updatePost,
}

export default _;
