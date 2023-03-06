import React, { useState } from "react";

export default function SearchBar({ getFligths }) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h2>{search}</h2>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          getFligths(e.target.value);
        }}
        type="text"
        placeholder="Sök destination"
      />
      <button onClick={() => getFligths(search)}>Sök</button>
    </div>
  );
}
