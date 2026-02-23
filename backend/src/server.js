import express from "express";
import { readFile } from "fs/promises";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/bills/data", async (req, res) => {
  // read data from a database or file in a real application
  // In this case, we will read a json file (db.json) and send its content as response

  try {
    // 1. Read the file from the local directory
    const filePath = new URL("./db.json", import.meta.url);
    const rawData = await readFile(filePath, "utf-8");

    // 2. Parse the string into JSON
    const data = JSON.parse(rawData);

    // 3. Send the JSON response
    res.json(data);
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/bills/data/:id", async (req, res) => {
  // read data from a database or file in a real application
  // In this case, we will read a json file (db.json) and send its content as response
  const { id } = req.params;

  try {
    // 1. Read the file from the local directory
    const filePath = new URL("./db.json", import.meta.url);
    const rawData = await readFile(filePath, "utf-8");

    // 2. Parse the string into JSON
    const data = JSON.parse(rawData);

    let bill = data.expenses.debit.find((item) => item.id === parseInt(id));

    // 3. Send the JSON response
    res.json(bill || { error: "Bill not found" });
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
