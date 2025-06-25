import express, { Request, Response } from "express";
import userController from "../../controllers/users/userController.cjs";

const router = express.Router();

interface UserBody {
  uid: string;
  username: string;
  profilePicFileName: string;
}

router.get("/", (req: Request, res: Response) => {
  userController.getUsers(req, res);
});

router.get("/:uid", (req: Request, res: Response) => {
  userController.getUserByUid(req, res);
});

router.post("/add", (req: Request<{}, {}, UserBody>, res: Response) => {
  userController.addUser(req, res);
});

router.put("/:uid", (req: Request<{}, {}, Partial<UserBody>>, res: Response) => {
  userController.updateUser(req, res);
});

export default router;