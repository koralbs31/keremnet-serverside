import express, { Application } from "express";
import postRoutes from './routes/posts/postsRoutes.cjs'
import bodyParser from "body-parser";
import userRoutes from './routes/users/usersRoutes.cjs'
import path from 'path';

const app: Application = express();
const PORT: number = 8080;

app.use("/profile-pics", express.static(path.join(__dirname, "public/profile-pics")));
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", postRoutes)
app.use("api/users", userRoutes)

app
  .listen(PORT, "localhost", function () {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });