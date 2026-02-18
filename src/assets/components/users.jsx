import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
  users && (
    <>
      <ul>
        {users.map((user) => (
            <div style={{ margin: "5px", borderBottom:"4px solid red " }}>

          <li key={user.id}>
            name: {user.name}
          </li>
          <li key={user.id}>email: {user.email}</li>
          </div>
        ))}
      </ul>
    </>
  )
);

}
