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

export function getTickets () {
    return fetch("https://api.coinmarketcap.com/v1/ticker/?convert=CNY&limit=100").then(x => x.json())
    // return axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10").then((response) => response);
}


// export const coinmarketcapApiData = apiData;
// export {
//     getTickets
// }



