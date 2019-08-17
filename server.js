const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const dummyData = {
	skateparks: [{
		name: "Beyonce",
		address: "4 September Avenue"
	}],
	campsites: [{
		name: "Kanye",
		address: "West Street"
	}]
};

app.get("/hello", (req, res) => res.send("Hello World!"));

app.get("/unicorn/", (req, res) => {
	// const long = req.query.long;
	// const lat = req.params.lat;
	// const distance = req.params.distance;
	res.send(dummyData);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));