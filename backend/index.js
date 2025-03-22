import express from "express";
import routeravg from "./routes/averageRoute.js"; // Import the router

const app = express();
const port = 3000;

app.use(express.json());

// Route for GET request
app.get("/", (req, res) => {
    res.send("Welcome! Send a POST request with a JSON body to calculate the average.");
});

// Correctly use the router for '/average'
app.use("/average", routeravg);  // ✅ FIXED

app.listen(port, () => {
    console.log(`✅ Server is running at http://localhost:${port}`);
});
