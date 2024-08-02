const express = require("express");
const bodyParser = require("body-parser");
const notify = require("./lineNotify");
// require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// app.get("/api", (req, res) => {
//   res.send({ message: "Hello from the backend!" });
// });

// // The "catchall" handler: for any request that doesn't
// // match one above, send back Vue's index.html file.
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
// });

// let messages = [];

// app.post("/webhook", (req, res) => {
//   const events = req.body.events;
//   events.forEach((event) => {
//     if (event.type === "message" && event.message.type === "text") {
//       messages.push({ id: event.message.id, text: event.message.text });
//       notify(event.message.text)
//         .then((response) => console.log("Notification sent:", response))
//         .catch((error) => console.error("Failed to send notification:", error));
//     }
//   });
//   res.sendStatus(200);
// });

// app.get("/api/messages", (req, res) => {
//   res.json(messages);
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
