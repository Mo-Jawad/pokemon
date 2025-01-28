import { useEffect, useState } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import PokeCard from './PokeCard';

 const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [Error, setError] = useState(null)
    const [search, setSearch] = useState('')

    const API = "https://pokeapi.co/api/v2/pokemon?limit=48";


    const pokeset = async () => {
        try {
            const res = await fetch(API);
            const getData = await res.json();

            const detailedPokeData = getData.results.map( async(curPokemon) => {
                const res = await fetch(curPokemon.url);
                const pokeData = await res.json();
                // console.log(pokeData)
                return pokeData;
                
        })

        const PokemonData = await Promise.all(detailedPokeData);
        console.log(PokemonData)
        setPokemon(PokemonData)
        setLoading(false)


       
        } catch (error) {
            setError(error)
            setLoading(false)

        }
        
        

        
    }
    
    const searchData = pokemon.filter((currPokemon) => {
        return currPokemon.name.toLowerCase().includes(search.toLowerCase())
    })


    if(Error) {
        return <div>
            <h1>{Error.massage}</h1>
        </div>
    }


    // if(loading) {
    //     return <div>
    //         <h1 className="text-center">loading...</h1>
    //     </div>
    // }

    useEffect(() => {
        pokeset();
    }, [])


    return (
        <section className="min-h-screen flex-col items-center dark:bg-slate-700">
        <header >

            <section className="flex justify-between mr-6 ml-2 items-center">
            <h1 className="dark:text-white text-center text-5xl font-bold p-3.5">Pokemon </h1>
            <DarkModeToggle/>
            </section>

            <div className="flex my-4 w-full justify-center">
            <input className="w-1/3 py-2 px-4 focus:outline-none dark:bg-white dark:text-black border-amber-400 border-2 rounded-md" type="text" placeholder="Search here" value={search} onChange={(e) => setSearch(e.target.value)} /> 
            </div>
        </header>
        <section className="w-[90%]  flex ml-18 gap-1  h-full ">
            <ul className="w-[100%] gap-6 m-2 justify-evenly  flex flex-wrap">
                {searchData.map((currPoke) =>   {
                    return <PokeCard key={currPoke.id} pokemonData={currPoke}/> })
                }
            </ul>
                
       </section>
       </section>
    )


}

export default Pokemon;