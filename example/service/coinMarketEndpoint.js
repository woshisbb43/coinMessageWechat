import axios from 'axios';

export function apiData(){
    axios.get("https://api.coinmarketcap.com/v1/ticker/")
    .then((response) =>{
        console.log(response.data[0]['id']);        
        return response;
    });
}



