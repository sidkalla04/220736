const calculateAverage = (req, res) => {
    console.log("Received Request Body:", req.body);

    const { numbers } = req.body;

    if (!Array.isArray(numbers)) {
        return res.status(400).json({ error: "Invalid input. Please send an array of numbers." });
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const avg = sum / numbers.length;

    res.json({ average: avg });
};

export default calculateAverage;
