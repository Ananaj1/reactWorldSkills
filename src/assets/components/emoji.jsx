import { useState, useEffect } from "react";

export default function Emoji() {
  const [yurace, setYurace] = useState(null);

  const fetchYurace = async () => {
    try {
      const response = await fetch(
        "https://emojihub.yurace.pro/api/random"
      );
      const data = await response.json();
      setYurace(data);
    } catch (error) {
      console.error("Ошибка загрузки", error);
    }
  };

  useEffect(() => {
    fetchYurace();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {yurace && (
        <>
        <main>
          <h1>Случайный Emoji</h1>
          <h2>Название: {yurace.name}</h2>
          <h3>Категория: {yurace.category}</h3>
          <h3>Группа: {yurace.group}</h3>
          <h3>{yurace.htmlCode[0]}</h3>
          <h3>{yurace.unicode[0]}</h3>
        </main>
        </>
        
      )}

      <br />
      <button onClick={fetchYurace} style={{ marginTop: "20px" }}>
        Получить новый emoji
      </button>
    </div>
  );
}
