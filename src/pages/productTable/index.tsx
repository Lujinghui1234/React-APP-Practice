// import SearchBar from "./components/searchBar";
// import SearchTable from "./components/searchTable";
// import { mockData } from "./utils";

export default function ProductTable() {
  const handelClick1 = () => {
    console.log(window);
    window.open(`${window.location.origin}/son`, "_blank");
  };

  const handelClick2 = () => {
    window.open(`${window.location.origin}/son`);
  };

  return (
    <>
      {/* <SearchBar /> */}
      {/* <SearchTable data={mockData} /> */}
      <button onClick={handelClick1}>button 1111</button>
      <button onClick={handelClick2}>button 2</button>
    </>
  );
}
