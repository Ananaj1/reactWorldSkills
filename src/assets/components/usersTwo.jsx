import { useState } from "react";

export default function UsersTwo() {
  const [name, setName] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const data = await response.json();
    setResponseData(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите имя"
        />
        <button type="submit">Отправить</button>
      </form>

      {responseData && (
        <div>
          <h2>Ответ сервера:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}


