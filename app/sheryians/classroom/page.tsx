import FilterUsers from "@/components/FilterUsers";

export default async function classroom(){
  
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const users = await response.json();
    return(
        <main>
         <h1>This is  classroom page</h1>
         <FilterUsers users={users}/>
        </main>
    )
}