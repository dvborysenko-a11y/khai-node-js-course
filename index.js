const express = require('express');
const productRoutes = require('./product.routes');

const app = express();
const port = 3000;

app.use(productRoutes);

app.listen(port, () => console.log(`server start at http://localhost:${port}/`));
