import { useState } from "react";

const useDeleteData = (url) => {
  const [response, setResponse] = useState("");
  fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => setResponse(data));

  return [response];
};

export default useDeleteData