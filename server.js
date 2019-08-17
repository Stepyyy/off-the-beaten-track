const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const dummyData = {
	categories: "Park",
	correctly_placed: 1,
	country: "NZ",
	created_at: "2006-08-06T17:48:39Z",
	facebook_page: "",
	gisprecision: "number",
	id: 1006664,
	latitude: -39.418147,
	longitude: 175.398438,
	name: "Jubilee Park",
	opening_hours: "",
	phone: "",
	physical_address: "50 Clyde St, Ohakune",
	region_1: "Manawatu-Wanganui",
	region_2: "Ohakune",
	region_3: "Ohakune",
	tags: "Park with Playground, Skate park",
	updated_at: "2015-05-11T05:45:52Z",
	updated_by: "zenbu_out010",
	website: ""
};

function formatResponse(data) {
	const response = {
		skateparks: [],
		campsites: []
	};

	const dataName = data.name;
	const dataAddress = data.physical_address;
	const dataLat = data.latitude;
	const dataLong = data.longitude;

	response.skateparks = [
		{
			name: dataName,
			address: dataAddress,
			lat: dataLat,
			long: dataLong
		}
	];

	return response;
}

app.get("/hello", (req, res) => res.send("Hello World!"));

app.get("/unicorn/", (req, res) => {
	res.send(formatResponse(dummyData));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
