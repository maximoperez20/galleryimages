import { urlPath } from "./urlService";

export const fetchLogIn = async (data) => {
  const response = await fetch(urlPath + "auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
