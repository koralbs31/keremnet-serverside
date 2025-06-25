"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postsController_cjs_1 = __importDefault(require("../../controllers/posts/postsController.cjs"));
const router = express_1.default.Router();
router.route("/").get((req, res) => {
    postsController_cjs_1.default.getPosts(req, res);
});
router.route("/:id").get((req, res) => {
    postsController_cjs_1.default.getPostById(req, res);
});
router.route("/add").post((req, res) => {
    postsController_cjs_1.default.addPost(req, res);
});
router.route("/delete/:author/:title").delete((req, res) => {
    postsController_cjs_1.default.deletePost(req, res);
});
router.route("/update/:author/:title").delete((req, res) => {
    postsController_cjs_1.default.updatePost(req, res);
});
exports.default = router;
