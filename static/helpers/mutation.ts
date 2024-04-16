export const mutation = async (path: string, args: any) => {
  try {
    const res = await fetch(`http://localhost:8080/v1/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ args }),
    });
    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
};
