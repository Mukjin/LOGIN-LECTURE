import express from "express";
import home from "./routes/home/index.js"; //라우팅

const app = express();

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

export default app;
