import React from 'react';
import londonRestaurants from '../data/london_restaurants.json'
import axios from 'axios';

//import { get } from 'http';


const Map = () => {

    //const [londonRestaurants, setLondonRestaurants] = setState(londonRestaurants);
    //console.log(londonRestaurants);

    const options = {
        method: 'GET',
        url: 'https://yelp-com.p.rapidapi.com/search/nearby/37.788719679657554/-122.40057774847898',
        params: {
            radius: '5',
            term: 'Coffee',
            offset: '0'
        },
        headers: {
            'X-RapidAPI-Key': 'afe98ac037msh3ce3820dfc89dc5p153212jsn68ab7789434e',
            'X-RapidAPI-Host': 'yelp-com.p.rapidapi.com'
        }
    };


    async function getCoffeeShopsFromYelp() {
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <></>
    )
}

export default Map;