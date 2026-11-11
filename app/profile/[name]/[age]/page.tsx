type ProfilePageAgeProps = {
    params : Promise < {name : string, age : string}>;
}

export default async function ProfilePage({ params }: ProfilePageAgeProps){

    const pageParams = await params;

    const username = pageParams.name;
    const age = pageParams.age;

    const users = [
        {
            id : 1 ,
            name : 'Rohan',
            email : "Rohan.gupta@gamil.com" ,
            age : 22
        },
        {
            id : 2 ,
            name : 'Rohit',
            email : "Rohan.gupta@gamil.com" ,
            age : 23
        },
        {
            id : 3 ,
            name : 'neha',
            email : "Rohan.gupta@gamil.com" ,
            age : 26
        },
        {
            id : 4 ,
            name : 'Rahul',
            email : "Rohan.gupta@gamil.com" ,
            age : 27
        },
        
        
    ]
 
    const user = users.find(user=> user.name.toLocaleLowerCase() === username.toLocaleLowerCase()
                  && user.age.toString() === age)

    return(
        <div>
            <h1> {user?.name} Profile Page</h1>
            <p> Email: {user?.email} </p>
            <p> age: {user?.age} </p>
        </div>
    )

}