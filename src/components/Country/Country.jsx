import Item from "./../Item/Item";
export default function Country({ children: country = null }) {
  if (!country) {
    return <div>Impossível renderizar o país filtrado!</div>;
  }

  const { name, capital, region, population, area } = country;
  const demographicDensity = population / area;

  return (
    <div className="border border-yellow-300 rounded-md p-1 mb-2 flex flex-row items-center ">
      <img
        className="w-50 pr-5"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KR0QlsaQp1YXg9qkABJCCFufGb0FjJ06Zg&usqp=CAU"
        alt="Genérico"
      />
      <ul>
        <li>
          <Item label="Nome:">{name}</Item>
        </li>
        <li>
          <Item label="Capital:">{capital}</Item>
        </li>
        <li>
          <Item label="Região:">{region}</Item>
        </li>
        <li>
          <Item label="População:">{population}</Item>
        </li>
        <li>
          <Item label="Área:">{area}</Item>
        </li>
        <li>
          <Item label="Densidade demográfica:">
            {`${demographicDensity.toFixed(2)} habitantes/km²`}
          </Item>
        </li>
      </ul>
    </div>
  );
}
