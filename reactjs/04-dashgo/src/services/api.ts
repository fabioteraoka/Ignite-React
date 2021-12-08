import axios from "axios";

export const api = axios.create({
    baseURL: 'http://www.localhost:3000/api'
})