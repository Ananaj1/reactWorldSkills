import { useState, useEffect } from "react";

export default function Goku(){


    const [goku, setGoku] = useState(null)

    const fetchGoku = async () =>{

        try{
            const response = await fetch(
                "https://dragonball-api.com/api/characters/1"
            )
            const data = await response.json()
            setGoku(data)

        } catch (error){
            console.error(error)
        };};

        useEffect(()=>{
            fetchGoku()}, [])

            return(
                <>
                {goku &&(

                    <>
                    <h1>ID: {goku.transformations[0].id}</h1>
                    <h2>{goku.transformations[0].ki}</h2>
                    <img src={goku.transformations[0].image} alt="" />

                    <button onClick={()=>{
                        fetchGoku

                    }}>Следующий гоку</button>
                    </>
                    
                    

                )}
                </>
                )

}