const express=require("express")
const app=express();
const rootRouter=express.Router("./roures/index")
app.use("/api/v1",rootRouter)
const cors=require("cors")
app.use(express.json());
app.use(cors())

app.listen(3000);