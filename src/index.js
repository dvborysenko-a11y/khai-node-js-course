const express = require('express');
const oldProductRouter = require('./product.routes');
const userRouter = require('./user/user.router');
const newProductRouter = require('./product/product.router');
const { logRequest } = require('./middleware');
const bodyParser = require('body-parser');
const { errorResponder } = require('./error.middleware');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(logRequest);
app.use('/old', oldProductRouter);
app.use(newProductRouter);
app.use(userRouter);
app.use(errorResponder);

app.listen(port, () => console.log(`server start at http://localhost:${port}/`));
