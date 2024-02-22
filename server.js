const express = require("express");
const dotenv = require("dotenv").congig();
const app = express();

app.use(express.json());
app.use("/api/booking", require("./routes/bookingRoute"));
app.use("/api/users", require("./routes/userRoute"));

const port = process.env.PORT 

app.listen( port, () => {
    console.log(`Server is running on ${port}`)
})