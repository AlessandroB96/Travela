import axios from "axios";

import {useQuery} from '@apollo/client';


const headers = {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_PLACES_KEY
}
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

export {
    useSearch
}