export const approvePhoto = async (id) => {
  const data = { id: id };
  const response = await fetch("http://localhost:4000/admin/photos/approve/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};
export const rejectPhoto = async (id) => {
  const data = { id: id };
  const response = await fetch("http://localhost:4000/admin/photos/reject/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};
