const express = require("express")
const app = express();

// app.use("/my", (req,res)=>{
//     console.log("hey this is my url")
// })

app.listen("5000", () => {
    console.log("Backened is running");
})