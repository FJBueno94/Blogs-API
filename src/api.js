const express = require('express');

const router = require('./database/routes/index');

const app = express();
app.use(express.json());

app.use(router.userRouter);
app.use(router.categoryRouter);
app.use(router.postRouter);

module.exports = app;
