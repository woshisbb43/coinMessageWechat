import axios from 'axios';

// var mData;

// export function apiData(){
//     axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
//     .then((response) =>{
//         console.log(response.data);  
//         this.mData = response.data;      
//         return mData;
//     });
// }


const API = {};

API.getTickets = function() {
    return fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10").then(x => x.json())
    // return axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10").then((response) => response);
}


// export const coinmarketcapApiData = apiData;
export {
    API
}



