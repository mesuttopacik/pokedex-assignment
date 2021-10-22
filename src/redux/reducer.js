import { CATCH_POKEMON } from "./actions";

const initialData = {
  caughtList: [],
};

const pokemonReducer = (state = initialData, action) => {
  switch (action.type) {
    case CATCH_POKEMON:
      let pokemon = action.payload;
      let pokemonFromCatch = state.caughtList.find(
        (CatchPokemon) => pokemon.id === CatchPokemon.id
      );
      return {
        ...state,
        caughtList: pokemonFromCatch
          ? [
              ...state.caughtList.filter(
                (pokemon) => pokemon.id !== pokemonFromCatch.id
              ),
            ]
          : [...state.caughtList, action.payload],
      };
    default:
      return state;
  }
};
export default pokemonReducer;
