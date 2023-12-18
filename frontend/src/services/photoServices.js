export const getAllVisiblePhotos = async () => {
  const response = await fetch("http://localhost:4000/photos");

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return await response.json();
};

export const getAllPhotos = async () => {
  const response = await fetch("http://localhost:4000/admin/photos/all");

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return await response.json();
};

export const uploadPhoto = async (data) => {
  // const dataJson = JSON.stringify(data);
  console.log(typeof(data));
  const response = await fetch("http://localhost:4000/photos/upload", {
    method: "POST",

    body: data,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.text();
};
