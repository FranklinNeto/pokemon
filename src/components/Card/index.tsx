import "./styles.css"


interface PokemonCardProps {
  nome: string;
 
}

export const PokemonCard = ({ nome }: PokemonCardProps) => {
  return (
    <li>
      <div className="card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt="Pokemon Image"/>
        <div className="card-content">
            <div className="pokemon-name">{nome}</div>
            <div className="pokemon-type">Electric</div>
        </div>
    </div>
    </li>
  );
};
