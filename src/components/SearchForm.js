import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
      <form>
        <input
          onChange={() => null}
          placeholder="niame"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
