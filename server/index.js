import express from "express";
import "dotenv/config";
import { db } from "./configs/db.js";
import userRouter from "./routes/user.route.js";
import { errorHandler } from "./configs/middleware.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors";

const app = express();
app.use(
    cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    })
);
app.use(express.json());
const PORT = process.env.PORT;

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.use("", (req, res) => {
    res.status(200).json({
    message: "Hello World",
    });
});

app.use("*", (req, res) => {
    res.status(404).json({
    message: "not found",
    });
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
});

// import express from "express";
// import "dotenv/config";
// import userRouter from "./routes/user.route.js";
// import { errorHandler } from "./configs/middleware.js";
// import authRouter from "./routes/auth.route.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";

// const app = express();
// app.use(express.json());
// const PORT = process.env.PORT;
// // Route auth
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/auth", authRouter);
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//     credentials: true,
//   })
// );

// app.use(cookieParser());

// // Default response
// app.get(" ", (req, res) => {
//   res.status(200).json({
//     message: "hello world",
//   });
// });

// // 404 Error Handler
// app.use("*", (req, res) => {
//   res.status(404).json({
//     message: "not found",
//   });
// });

// // Error Middleware
// app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log(Server Listening on port ${PORT});
// });