import axios from "axios";

export const donateFetch = axios.create({
    baseURL:'https://payunit-rest.herokuapp.com/api/v1'
})
