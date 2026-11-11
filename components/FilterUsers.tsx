"use client"

type User={
    id : number;
    name : string;
    username : string
}

import { useState } from "react";

//This component accepts a prop named users, and that prop should be an array containing objects that match the User type."

export default function FilterUsers({users}:{users:User[]}){

    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = users.filter(User => {
        return User.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    })

    return (
        <div>
            <input type="text" 
                placeholder="Search Users ..."
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
            />

            <ul>
                {filteredUsers.map((user:User)=>{
                    return (
                        <li key = {user.id}>{user.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}