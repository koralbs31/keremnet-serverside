import { Response, Request }from "express"

const posts = [
    {
            "id": "1",
            "title": "first post",
            "author": "Admin",
            "publishedAt": "2024-06-01",
            "content": "This is the first post."
        },
        {
            "id": "2",
            "title": "second post",
            "author": "koral steinberg",
            "publishedAt": "2025-06-02",
            "content": "first hanich post."
        },
        {
            "id": "3",
            "title": "third post",
            "author": "Ran",
            "publishedAt": "2025-06-03",
            "content": "Second hanich post"
        },
        {
            "id": "4",
            "title": "forth post",
            "author": "Eden",
            "publishedAt": "2025-06-08",
            "content": "third hanich post"
        },
        {
            "id": "5",
            "title": "forth post",
            "author": "Eden",
            "publishedAt": "2025-06-08",
            "content": "third hanich post"
        }
]

interface PostBody{
    id: string;
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
        "id" :  req.body.id,
        "title": req.body.title,
        "author": req.body.author,
        "publishedAt": req.body.publishedAt,
        "content": req.body.content
    });
    res.status(200).json(posts);
}

const getPostById = (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  console.log(id)
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.status(200).json(post);
};


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
    getPostById
}

export default _;
