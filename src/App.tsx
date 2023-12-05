import { useEffect, useState } from "react";
import "./App.css";
import api from "./services/api";
import { Card } from "./components/Card";

function App() {
  const [pokemons, setPokemons] = useState();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    api
      .get(``, {
        params: {
          limit: 151,
          offset: 0,
        },
      })

      .then((response) => {
        
        setPokemons(response.data.results)
        console.log(response)
      }
        )
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
            <Card nome={pokemon.name} />;
          })}
        </ul>
      )}

      <h1>teste</h1>
    </div>
  );
}

export default App;
