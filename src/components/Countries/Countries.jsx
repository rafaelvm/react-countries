import Country from "./../Country/Country";
export default function Countries({ children: countries = [] }) {
  return (
    <div>
      <h2 className="text-center font-semibold mt-5 mb-5">
        {countries.length}{" "}
        {countries.length > 1 ? "países filtrados" : "país filtrado"}
      </h2>

      {countries.map((country) => {
        return <Country key={country.id}>{country}</Country>;
      })}
    </div>
  );
}
