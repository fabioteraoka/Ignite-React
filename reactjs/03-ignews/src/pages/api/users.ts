import { NextApiRequest, NextApiResponse } from "next";

export default (request:NextApiRequest, response:NextApiResponse) =>{
    const users = [
        { id:1, name: "Fabio"},
        { id:1, name: "Silvana"},
        { id:1, name: "Carolina"},
        { id:1, name: "Maggie"},
    ]

    return response.json(users)
}