const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const router = require("./Routes/router");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use('/api', router);

app.listen(2000);