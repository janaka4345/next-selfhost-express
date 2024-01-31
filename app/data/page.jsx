"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function page() {
  const [data, setData] = useState(null);
  const [axiosData, setAxiosData] = useState(null);
  function handleClick() {
    axios
      .post("/user", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));

    return () => {};
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        // handle success
        setAxiosData(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("axios executed");
      });

    return () => {};
  }, []);

  return (
    <>
      <button onClick={handleClick}>post data</button>
      <div className="flex flex-row justify-between ">
        <pre className="border border-red-500 w-1/2 ">
          {JSON.stringify(data, null, 2)}
        </pre>
        <pre className="border border-red-500 w-1/2">
          {JSON.stringify(axiosData, null, 2)}
        </pre>
      </div>
    </>
  );
}
