import axios from "axios";

import {useQuery} from "react-query";


const headers = {
  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
  'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_PLACES_KEY
}
console.log({headers})
const useSearch = (searchTerm) => {
  console.log({searchTerm})
  const params = {
    query: searchTerm ,
    lang: "en_US",
    units: "mi"
  }
  const {isLoading, data} = useQuery(searchTerm, () =>  axios.get("https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete", {
      params,
      headers
    }, {enabled: searchTerm.length > 0, }).then(res => res.data), {
      staleTime: 50
    }
  )

  console.log({data})
if(data !== undefined){
  console.log({data})
  const arr = data?.data?.Typeahead_autocomplete.results.map(res => res.detailsV2).filter(value => value !== undefined)

  return {data:arr, isLoading}
} 
  return {isLoading, data}
}






const usePlacesData =  (bounds) => {
  console.log("I'm a slippery hoar", bounds)
  const params = {
    tr_longitude: bounds?.ne.lng,
    tr_latitude: bounds?.ne.lat,
    bl_longitude: bounds?.sw.lng,
    bl_latitude: bounds?.sw.lat,
    currency: 'USD',
    lunit: 'mi',
    lang: 'en_US',
  }

  const data1 = {
    "geoId": 293928,
    "startDate": "2022-03-10",
    "endDate": "2022-03-15",
    "pax": [
        {
            "ageBand": "ADULT",
            "count": 2
        }
    ],
    "sort": "TRAVELER_FAVORITE_V2",
    "sortOrder": "asc",
    "filters": [
        {
            "id": "category",
            "value": [
                "40"
            ]
        },
        {
            "id": "rating",
            "value": [
                "40"
            ]
        },
        {
            "id": "navbar",
            "value": [
                "ATTRACTIONOVERVIEW:-true"
            ]
        }
    ],
    "boundingBox": {
        "northEastCorner": {
            "latitude": 12.248278039408776,
            "longitude": 109.1981618106365
        },
        "southWestCorner": {
            "latitude": 12.243407232845051,
            "longitude": 109.1921640560031
        }
    },
    "updateToken": ""
}
      
      const {isLoading, data, error} = useQuery("stroots", () => axios.post("https://travel-advisor.p.rapidapi.com/attractions/v2/list", {
        params,
        headers,
      }, { }).then(res => {
        console.log({res})
        return res.data
      })
      )
      console.log('dataTEST',params)
      console.log({data})
      return {isLoading, data};
} 

export {
  useSearch,
  usePlacesData
}