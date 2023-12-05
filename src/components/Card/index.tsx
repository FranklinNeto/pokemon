interface CardProps {
  nome: string;
  imagem: string
}

export const Card = ({ nome, imagem }: CardProps) => {
  return (
    <li>
      <div>
        <img src={imagem} alt={nome}/>
        <h2>{nome}</h2>
      </div>
    </li>
  );
};
