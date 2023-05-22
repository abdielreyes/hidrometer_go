import React from "react";

export function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <button
        className=" border border-black"
        onClick={async () => {
          const res = await fetch(import.meta.env.VITE_API + "/users");
          const data = await res.json();
          console.log(data);
          console.log(res);
        }}
      >
        Get Data
      </button>
    </div>
  );
}
