export const CATCH_POKEMON = "CATCH_POKEMON"

export const catchPokemon = (pokemon) => ({
    type: CATCH_POKEMON,
    payload: pokemon
})