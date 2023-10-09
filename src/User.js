import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
        console.log(data);
        setFilterData(data);
      });
  }, []);
  function handleSearch(value) {
    const searchData = filterData.filter((f) =>
      f.name.toLowerCase().includes(value)
    );
    setUser(searchData);
    console.log(searchData);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => handleSearch(e.target.value)}
      />
      {user.map((user, index) => (
        <div key={index}>
          <h1>{user.id}</h1>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
          <h4>{user.address.street}</h4>
          <h5>{user.phone}</h5>
          <h6>{user.website}</h6>
        </div>
      ))}
    </>
  );
}
