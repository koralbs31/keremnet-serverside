"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postsRoutes_cjs_1 = __importDefault(require("./routes/posts/postsRoutes.cjs"));
const body_parser_1 = __importDefault(require("body-parser"));
const usersRoutes_cjs_1 = __importDefault(require("./routes/users/usersRoutes.cjs"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 8080;
app.use((0, cors_1.default)());
app.use("/profile-pics", express_1.default.static(path_1.default.join(__dirname, "public/profile-pics")));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/posts", postsRoutes_cjs_1.default);
app.use("api/users", usersRoutes_cjs_1.default);
app
    .listen(PORT, "localhost", function () {
    console.log(`Server is running on port ${PORT}.`);
})
    .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.log("Error: address already in use");
    }
    else {
        console.log(err);
    }
});
