import axios from "axios";
import React from 'react';

const url = "http://192.168.178.76:8080/api/product?products=";

export const getLiveSearchData = (searchInput) =>
    axios
        .get(url + searchInput)
        .then((response) => response.data)
        .catch((error) => console.log(error));

