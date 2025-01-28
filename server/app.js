const { startServer } = require("./startServer");
const PORT = 5500;
const app = startServer();

app.listen(PORT, () => console.log(`Server started and listening on port ${PORT}`));