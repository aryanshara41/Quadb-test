const express = require('express');
const { default: mongoose, isValidObjectId } = require('mongoose');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: "http://127.0.0.1:5500",
    methods: "GET"
}));

const db = mongoose.connect('mongodb://127.0.0.1:27017/HodInfo');
const dataModel = require('./models/dataModel');

const getDataAndSave = async () => {

    await dataModel.deleteMany({});
    // deleting the previous top 10 results 

    const data = await axios.get("https://api.wazirx.com/api/v2/tickers");
    let cnt = 0;

    if (data) {
        for (const key in data["data"]) {
            if (cnt++ == 10) break;

            const newdata = new dataModel(data["data"][key]);
            const result = await newdata.save();
        }
    }

    // console.log(data);
}

getDataAndSave();

app.get("/", async (req, res) => {
    try {
        // console.log("Yes");
        // // get all the data from database
        const data = await dataModel.find({name : `${req.query.name}`});

        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})


app.listen(4000, () => {
    console.log("The server is running");
})