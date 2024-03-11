import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<div
				style={{ width: '100%', height: '100%', position: 'relative' }}
			>
				<Image
					src="/um_mall.jpeg"
					alt="Background image"
					width={0}
					height={0}
					sizes="100vw"
					className="w-[100%] h-[70%] object-cover"
				/>
			</div>
			<h1>Index</h1>
		</div>
	);
}
