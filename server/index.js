import express from "express";
import "dotenv/config";
import {db} from "./configs/db.js";
import userRouter from "./routes/user.route.js"; 
import { errorHandler } from "./configs/middleware.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use('/api/v1/users', userRouter);

app.use("", (req, res) => {
    res.status(200).json ({
        message: "Hello World",
    });
});

app.use('*', (req, res) => {
    res.status(404).json({message: 'not found'});
});

app.use(errorHandler);

//route/ path
// app.use('*', (req, res) => {
//     res.status(404).json({
//         message: 'not found',
//     });
// });

app.listen(PORT, () =>{
    console.log(`Server Listening on port ${PORT}`);
})