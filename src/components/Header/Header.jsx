export default function Header({ title }) {
  return (
    <header>
      <div className="bg-yellow-200 mx-auto p-4">
        <h1 className="text-center font-semibold text-xl">{title}</h1>
      </div>
    </header>
  );
}
