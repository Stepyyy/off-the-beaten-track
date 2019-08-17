const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");

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

// function formatResponse(data) {
// 	const response = {
// 		skateparks: [],
// 		campsites: []
// 	};

// 	data.forEach(data => {
// 		response.skateparks.push({
// 			name: data.name,
// 			address: data.physical_address,
// 			lat: data.latitude,
// 			long: data.longitude
// 		});
// 	});

// 	return response;
// }

function readJSON() {
	const obj = JSON.parse(fs.readFileSync("skate_park.json", "utf8"));

	return obj;
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	const R = 6371; // Radius of the earth in km
	const dLat = deg2rad(lat2 - lat1); // deg2rad below
	const dLon = deg2rad(lon2 - lon1);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(lat1)) *
			Math.cos(deg2rad(lat2)) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const d = R * c; // Distance in km
	return d;
}

function deg2rad(deg) {
	return deg * (Math.PI / 180);
}

app.get("/hello", (req, res) => res.send("Hello World!"));

app.get("/unicorn/", (request, response) => {
	//const responseToSend = formatResponse(readJSON());
	//response.send(responseToSend);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

console.log(
	getDistanceFromLatLonInKm(-39.418986, 175.400629, -39.418147, 175.398438)
);
