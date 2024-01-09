"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonDataRoute_1 = require("./routes/jsonDataRoute");
const aggregatorRoute_1 = require("./routes/aggregatorRoute");
const mixedRoute_1 = require("./routes/mixedRoute");
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', jsonDataRoute_1.default);
app.use('/api', aggregatorRoute_1.default);
app.use('/api', mixedRoute_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
