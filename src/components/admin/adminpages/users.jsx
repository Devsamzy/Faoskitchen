function User(){
    const users=[
        {
            "username":"samuel",
            "email":"developersamzy@gmail.com",
            "phonenumber":"08128068658"
        },
        {
            "username":"adeolu",
            "email":"adeolu@gmail.com",
            "phonenumber":"08128068658"
        },
    ]
    return(
        <>
        <h1>User Data</h1>
        <table className="border ">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>

            {users.map((user,index)=>(
                <tbody key={index}>
                    <tr>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phonenumber}</td>
                    </tr>
                </tbody>
            ))}
                </table>
        </>
    )
}
export default User