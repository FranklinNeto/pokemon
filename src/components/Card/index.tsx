interface CardProps {
  nome: string;
}

export const Card = ({ nome }: CardProps) => {
  return (
    <li>
      <div>
        <h2>{nome}</h2>
      </div>
    </li>
  );
};
