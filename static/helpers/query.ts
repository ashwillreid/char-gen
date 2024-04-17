export const query = async (path: string, args?: JSON) => {
  let data;
  try {
    const res = await fetch(`http://localhost:8080/v1/${path}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: args ? JSON.stringify({ args }) : undefined,
    });
    data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
