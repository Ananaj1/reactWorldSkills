import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Emoji from "./emoji";
import Dog from "./dog";
import Fox from "./fox";
import Goku from "./Goku";
import Users from "./users";
import UsersTwo from "./usersTwo";



export default function Header(){
  return (
    <BrowserRouter>
      <nav>
        <Link to="/dog">Собачки</Link>

        <Link to="/emoji">Емодзи</Link>

        <Link to="/fox">Лисы</Link>

        <Link to= "/goku">Гоку</Link>

        <Link to="/users">Пользователи</Link>
        <Link to="/usersTwo">Пользователи 2</Link>


      </nav>

      <Routes>
        <Route path="/dog" element={<Dog />} />
        <Route path="/emoji" element={<Emoji />} />
        <Route path="/fox" element={<Fox />} />
        <Route path="/goku" element={<Goku />} />
        <Route path="/users" element={<Users />} />
        <Route path="/usersTwo" element={<UsersTwo/>} />
      </Routes>
    </BrowserRouter>
  );
}
