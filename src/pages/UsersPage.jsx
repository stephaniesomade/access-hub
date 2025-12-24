import { useContext } from "react";
import { UserContext } from "../context/UserContext"; // named import

export default function UsersPage() {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.role})</li>
        ))}
      </ul>
    </div>
  );
}


// <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             {user.name} ({user.role})
//           </li>
//         ))}
//       </ul>