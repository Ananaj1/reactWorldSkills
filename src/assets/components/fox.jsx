import { useState, useEffect } from "react";



export default function Fox(){

    const [fox, setFox] = useState(null);
    const fetchFox = async ()=> {

        try{
            const response = await fetch(
                "https://randomfox.ca/floof/?ref=dr-pa&utm_medium=public-apis-website"
            );
            const data = await response.json();
            setFox(data)
        }catch (error) {
      console.error("Ошибка загрузки", error);
    }
    };

        useEffect(() => {
        fetchFox();
        }, []);


    return(

        <>
            {fox &&(
                <>
                    <img src={fox.image} alt="" />
                </>
                
            )}

                 <button onClick={fetchFox} style={{ marginTop: "20px" }}>
                    Получить новый FOX
                </button>

        </>

    );
};