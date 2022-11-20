import axios from "axios";

export function getNews(category = 'General') { // deafult removed in function
    const API_Key = `7bdfb1b10aca41c6becea47611b7c35a`;// mynewsapi-> `3e4fc8f113534c7d8b6e608132314081`; `00125696449f44c0a72b69f068ae7d11`;
    const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;
    
        return axios.get(`${API_Endpoint}&apiKey=${API_Key}`)  //return mentioned
        // .then((response) => {
        //     console.log(response.data.articles)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
}
