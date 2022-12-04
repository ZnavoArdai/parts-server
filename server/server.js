const dotenv = require("dotenv");
dotenv.config();
const db = require("./db");
const express = require("express");
const cors = require("cors");
const app = express();
const ordersRouter=require("./routes/ordersRouter")
const productsRouter=require("./routes/productsRouter")
const storesRouter=require("./routes/storeRouter")
const infoRouter=require("./routes/infoRouter")
const categoryRouter=require("./routes/categoryRouter")




app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());

const port = 8080;
app.use("/orders",ordersRouter)
app.use("/products",productsRouter)
app.use("/stores",storesRouter)
app.use("/info",infoRouter)
app.use("/category",categoryRouter)




app.get("/", (req, res) => {
  res.send({ message: "server online" });
});
app.listen(port, () => {});
console.log(`listening to port ${port}`);
