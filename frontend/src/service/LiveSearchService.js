import axios from "axios";


const header = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

const url = "http://192.168.178.76:8080/api/product?products=";

export const getLiveSearchData = (searchInput, token) =>
        axios
            .get(url + searchInput, header(token))
            .then((response) => response.data)
            .catch((error) => console.log(error));

