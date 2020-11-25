import axios from "axios";



export const getLiveSearchData = () =>
    axios
        .get("http://localhost:8080/api/product?products=gustavo%20Pizza")
        .then((response) => response.data)
        .catch((error) => console.log(error));

