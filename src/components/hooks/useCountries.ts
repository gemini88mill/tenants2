import { useEffect, useState } from "react";

export type Country = {
  name: string;
  code: string;
  svg: string;
};

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selected, setSelected] = useState<Country | null>(null);

  //todo: await this
  useEffect(() => {
    fetch("https://gist.githubusercontent.com/almost/7748738/raw/575f851d945e2a9e6859fb2308e95a3697bea115/countries.json")
      .then((res) => res.json())
      .then((data) => {
        const countries = data.map((country: {name: string, code: string}) => ({
          name: country.name,
          code: country.code,
          svg: `https://flagcdn.com/${country.code.toLowerCase()}.svg`
        }));

        setCountries(countries);
      });
  }, []);

  return {
    countries,
    selected,
    setSelected
  };
};
