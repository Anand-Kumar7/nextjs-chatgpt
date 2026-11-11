"use client"

export default function Button(){
    return(
        <button className="rounded bg-gray-900 px-4 py-2 text-white" onClick={()=>
         alert("Button click")
        }>
        Click me!
        </button>
    )
}   