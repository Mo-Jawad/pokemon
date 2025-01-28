const PokeCard = ({pokemonData}) => {
    return (
        <section className="w-[28%] flex-col hover:shadow-2xl hover:-mt-3 border-green-400 hover:inset-shadow-indigo-500/50 hover:border-2 justify-center h-96 rounded-md p-2 bg-white ">
            
            <figure className="w-[100%] flex-col mt-4 justify-center mb-4">
                <div className="w-full h-30 flex justify-center">
                <img className="w-[100px] flex justify-center " src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
                </div>
                <h1 className="text-center font-bold text-2xl">{pokemonData.name}</h1>
            </figure>

            <div className="flex w-[100%] justify-center">
            <span className="p-2 px-4 rounded-lg bg-green-500 text-white font-bold">
                {pokemonData.types.map((currType) => currType.type.name).join(", ")}
            </span>
            </div>


            <div className="flex justify-around m-1 mt-8 font-bold">
                <p>
                <span>Height: </span> {pokemonData.height}
                </p>
                <p>
                <span>weight: </span> {pokemonData.weight}
                </p>
                <p>
                <span>speed: </span> {pokemonData.stats[5].base_stat}
                </p>
            </div>


            <section className="flex font-medium justify-around mt-6">
                <div>
                    {pokemonData.base_experience}
                    <p className="font-extrabold">Experience</p>
                </div>
                <div>
                    {pokemonData.stats[1].base_stat}
                    <p className="font-extrabold">Attack</p>
                </div>
                <div>
                    {pokemonData.abilities[0].ability.name}
                    <p className="font-extrabold">Ability</p>
                </div>
            </section>
        </section>
    )
}

export default PokeCard;