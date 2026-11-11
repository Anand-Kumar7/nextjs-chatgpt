type ProfilePageProps = {
    params: Promise<{ name: string}>;
}

export default async function ProfilePage({ params }: ProfilePageProps){

    const users = [
          {
             id: 1,
             name: 'rohan',
             email: 'rohan.gupta@gamil.com',
             bio: 'Software engineer with a passion for web development and open source contribution',
          },
          {
             id: 2,
             name: 'Neha',
             email: 'neha.sharma@gamil.com',
             bio: 'UI UX designer with a focus on creatong intutive and engaging user experience.'
          },
          {
             id: 3,
             name: 'rahul',
             email: 'rahul.dev@gamil.com',
             bio: 'Full stack developer with expertise in react and Nodejs, building scalable web application.',
          }
    ]

    const pageParams = await params;

    const username = pageParams.name;
    
    const user = users.find((user)=>user.name.toLocaleLowerCase() === username.toLocaleLowerCase());

    if(!user){
        return(
            <div>
                <p>User not found!.</p>
                {/* this is not the error this is only showing. */}
                <p>The user with name &quot;{username}&quot; does not exist. </p> 
            </div>
        )
    }

    return(
        <div>
            <h1> {user?.name} profile page</h1>
            <p>Email : {user?.email}</p>
            <p>Bio: {user?.bio}</p>
        </div>
    )
}
