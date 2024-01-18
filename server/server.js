const app = require("./app");
const logger = require("./middleware/logger");
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running successfully on port ${port}`);
    logger.info(`Server running successfully on port ${port}`)
    // done();
})