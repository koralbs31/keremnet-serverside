"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_cjs_1 = __importDefault(require("../../controllers/users/userController.cjs"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    userController_cjs_1.default.getUsers(req, res);
});
router.get("/:uid", (req, res) => {
    userController_cjs_1.default.getUserByUid(req, res);
});
router.post("/add", (req, res) => {
    userController_cjs_1.default.addUser(req, res);
});
router.put("/:uid", (req, res) => {
    userController_cjs_1.default.updateUser(req, res);
});
exports.default = router;
