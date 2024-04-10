export default async function Test() {
  let data;
  try {
    const res = await fetch("http://localhost:3000/testRouter/156", {
      method: "GET",
    });
    data = await res.json();
    console.log("data?", data);
  } catch (error) {
    console.log(error);
  }

  return <main>{data.message}</main>;
}
