import axios from "axios";
import React from 'react';


export const getLiveSearchData = () =>
    axios
        .get("http://192.168.178.76:8080/api/product?products=gustavo%20Pizza")
        .then((response) => response.data)
        .catch((error) => console.log(error));
