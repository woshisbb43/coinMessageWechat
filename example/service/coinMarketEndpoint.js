import axios from 'axios';

var mData;

export function apiData(){
    axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
    .then((response) =>{
        console.log(response.data);  
        this.mData = response.data;      
        return mData;
    });
}

export const coinmarketcapApiData = apiData;



