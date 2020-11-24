import axios from 'axios';




const searchProductsUrl = "http://localhost:8080/api/product";

const config = {
    method: 'get',
    url: searchProductsUrl,
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Secret-Allergy',
        'Authorization': ''
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });


