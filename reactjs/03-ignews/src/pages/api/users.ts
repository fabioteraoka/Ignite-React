import { NextApiRequest, NextApiResponse } from "next";

export default (request:NextApiRequest, response:NextApiResponse) =>{
    const users = [
        { id:1, name: "Fabio"},
        { id:2, name: "Silvana"},
        { id:3, name: "Carolina"},
        { id:4, name: "Maggie"},
    ]

    return response.json(users)
}