const axios = require("axios");
const queryString = require("query-string")


const placesRoot = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"


const searchRoot = "https://maps.googleapis.com/maps/api/place/textsearch/json"
const getPlaces = async ({loc, radius, type, keyword}) => {
    console.log(loc)
    const location = [loc.lat, loc.lng]
    const queryParams = queryString.stringify({location, radius, type, key: process.env.PLACE_API, keyword}, {
        arrayFormat: "comma"
    })
    const requestURL = `${placesRoot}?${queryParams}`
    console.log(requestURL)
    const response = await axios.get(requestURL).then(res => res.data)
    const results = response.results;
    return results.map(result => {
        const location = result.geometry.location;
        const name = result.name;
        const image = result.icon;
        const types  = result.types;
        const rating = result.rating;
        const placeId = result.place_id
        return {
            location,
            name,
            image,
            types,
            rating,
            placeId
        }
    })
}


const searchPlaceName = async (query) => {
    const queryParams = queryString.stringify({query, key: process.env.PLACE_API}, {
        arrayFormat: "comma"
    })
    const requestURL = `${searchRoot}?${queryParams}`
    const response = await axios.get(requestURL).then(res => res.data)
    const results = response.results;

    // Return the first value
    if (results.length > 0) {
        return results[0].geometry.location;
    }
}
module.exports = {
    getPlaces,
    searchPlaceName
}