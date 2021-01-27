import http from "http";
import server from "./server";
const app = http.createServer(server);

const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
