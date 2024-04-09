export default async function Test() {

	try {
		const res = await fetch('http://localhost:3000', {
			method: 'GET',
		});
		const data = await res.json()
		console.log( 'data?', data )
	} catch ( error ) {
		console.log( error )
	}

  return (
    <main>
			huh
		</main>
  );
}
