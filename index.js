import express from "express";
import router from "./router/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(8080, () => {
  console.log("server ok in 8080");
});
