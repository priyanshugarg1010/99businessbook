const express = require("express");
const obj = require("./99businessbooks.json");

const app = express();

app.get("/", async (req, res) => {
  try {
    res.json(obj);
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
