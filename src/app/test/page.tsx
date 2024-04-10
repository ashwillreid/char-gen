export default async function Test() {
  let data;
  try {
    const res = await fetch("http://localhost:3000/testRouter/156", {
      method: "GET",
    });
    console.log("data?", data);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return <main>{data.message}</main>;
}
