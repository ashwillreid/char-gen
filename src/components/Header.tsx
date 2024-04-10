import Link from "next/link";

const Header = () => {
  return (
		<div className='flex min-w-full justify-center'>
			<Link href='/'>
				<p className="text-5xl">Character Generator</p>
			</Link>
		</div>
	)
};

export default Header
