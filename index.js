import express from "express";
import router from "./router/router.js";
import errorHandler from "./middlewares/errorHandler.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

app.listen(8080, () => {
  console.log("server ok in 8080");
});
