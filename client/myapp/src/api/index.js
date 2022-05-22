import axios from "axios";

import {useQuery} from "react-query";


const headers = {
  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
  'X-RapidAPI-Key': '2fbffc015fmshe96bdfb9099802fp104b86jsn692285c0ef60'
}
const useSearch = (searchTerm) => {
  const params = {
    query: searchTerm ,
    lang: "en_US",
    units: "mi"
  }
  const {isLoading, data} = useQuery("googs", () => {
    return axios.get("https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete", {
      params,
      headers
    }).then(res => res.data);
  })
if(data !== undefined){
  console.log({data})
  const arr = data.data.Typeahead_autocomplete.results.map(res => res.detailsV2).filter(value => value !== undefined)

  return {data:arr, isLoading}
} 
  return {isLoading, data: []}
}

export {
  useSearch
}