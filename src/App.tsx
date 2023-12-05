import { useEffect, useState } from "react";

import api from "./services/api";
import { PokemonCard } from "./components/Card";

interface APIResults {
  name: string;
  url: string;
}

/* interface APIResponse {
  count: number,
  next: string | null
  previous: string | null
  results: APIResults[]
}  */

function App() {
  const [pokemons, setPokemons] = useState<APIResults[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    api
      .get(`pokemon`, {
        params: {
          limit: 151,
          offset: 0,
        },
      })

      .then((response) => {
        setPokemons(response.data.results);
        console.log(response);
      })
      .catch((erro) => console.error(erro))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 2000);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <span> Carregando...</span>
      ) : (
        <ul>
          {pokemons.map((pokemon) => {
            return <PokemonCard nome={pokemon.name} key={pokemon.name} />;
          })}
        </ul>
      )}

      <h1>teste</h1>
    </div>
  );
}

export default App;
