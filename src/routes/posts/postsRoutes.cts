import express, {Request, Response} from "express";
import _ from '../../controllers/posts/postsController.cjs'

const router = express.Router();

interface PostBody{
    id: string;
    title: string;
    author: string;
    publishedAt: string;
    content: string
}
router.route("/").get((req: Request, res: Response) => {
    _.getPosts(req, res)
});

router.route("/:id").get((req: Request<{ id: string }>, res: Response) => {
    _.getPostById(req, res)
});

router.route("/add").post((req: Request<{},{},PostBody>, res: Response) => {
    _.addPost(req, res)
})

router.route("/delete/:author/:title").delete((req: Request, res: Response) => {
    _.deletePost(req, res)
})

router.route("/update/:author/:title").delete((req: Request<{title: string},{},PostBody>, res: Response) => {
    _.updatePost(req, res)
})


export default router;