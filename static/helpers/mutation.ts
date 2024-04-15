export const mutation = async (path: string, args: any) => {
  let data;
  try {
    const res = await fetch(`http://localhost:8080/v1/${path}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ args }),
    });
    data = await res.json();
    console.log("data?", data);
  } catch (error) {
    console.log(error);
  }
};
