import Header from "./../../components/Header/Header";
import Main from "./../../components/Main/Main";
import { useState } from "react";
import { allCountries } from "./../../data/countries";
import TextInput from "./../../components/TextInput/TextInput";
import Countries from "./../../components/Countries/Countries";

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState("");

  const filteredCountryLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    filteredCountryLowerCase.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(filteredCountryLowerCase);
        })
      : allCountries;
  return (
    <div>
      <Header title="Projeto React Countries" />

      <Main>
        <TextInput
          id="inputFilter"
          description="o nome do país (pelo menos 3 caracteres)"
          value={countryFilter}
          onChange={(event) => setCountryFilter(event.currentTarget.value)}
        />
        <Countries>{filteredCountries}</Countries>
      </Main>
    </div>
  );
}
