const key = '6fUGt6OP7G5ZAbs7Pd9hlhonPsdLAGw3'

const getWether = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
    //console.log(data);
}

//getWether(1315396);

//async-await -> 항상 함께 사용됨~
const getCity = async (city) => {
    const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json()

    return data[0];
    //console.log(data);
}

getCity('Yangpyeong-gun');