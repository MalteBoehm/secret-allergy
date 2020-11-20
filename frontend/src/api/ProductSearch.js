import axios from 'axios';




const searchProductsUrl = "https://de.openfoodfacts.org/cgi/search.pl?search_terms=";
const searchProductsParam = "&sort_by=unique_scans_n&json=true";


const config = {
    method: 'get',
    url: 'https://de.openfoodfacts.org/cgi/search.pl?search_terms=rewe%tortellini&sort_by=unique_scans_n&json=true',
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Secret-Allergy',
        'Authorization': 'Basic bWFsdGViOlhjWVczMTgxMQ=='
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });


