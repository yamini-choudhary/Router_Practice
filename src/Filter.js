import { useSearchParams } from "react-router-dom";
export default function Filter() {
  const [searchParam, setSearchParam] = useSearchParams();
  const age = searchParam.get("age");
  const city = searchParam.get("city");

  return (
    <>
      <h3>{age}</h3>
      <h3>{city}</h3>
    </>
  );
}
