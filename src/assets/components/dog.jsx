import { useState, useEffect } from "react";

export default function Dog() {
  const [dog, setDog] = useState(null);

  const fetchDog = async () => {
    try {
      const response = await fetch(
        "https://api.thedogapi.com/v1/images/search"
      );
      const data = await response.json();
      setDog(data[0]);
    } catch (error) {
      console.error("Ошибка загрузки", error);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <main>
    <>
    <div style={{ textAlign: "center", padding: "20px" }}>
      {dog && (
  <>
    <h1>🐶 Случайная собачка</h1>
    <h2>С размером {dog.width}px на {dog.height}px</h2>
    <h3>ID: {dog.id}</h3>

    <img src={dog.url} width="300" />
  </>
)}


      <br />
      <button onClick={fetchDog} style={{ marginTop: "20px" }}>
        Получить новую собаку
      </button>
    </div>
    </>
    </main>
  );
}
