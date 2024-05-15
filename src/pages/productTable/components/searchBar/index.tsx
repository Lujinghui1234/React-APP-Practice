const SearchBar = () => {
  return (
    <>
      <input type="text" placeholder="Search..." />
      <div className="title">
        <input type="checkbox" />
        <p>Only show products in stock</p>
      </div>
    </>
  );
};

export default SearchBar;
