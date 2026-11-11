type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div>
      <h1 className="mb-2 text-lg font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
