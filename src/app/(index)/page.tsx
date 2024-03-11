import { Heading } from '@radix-ui/themes';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex-1 flex flex-col relative">
			<Image
				src="/um_mall.jpeg"
				alt="Background image"
				width={0}
				height={0}
				sizes="100vw"
				className="relative w-[100%] object-cover"
				priority
			/>
			<div className="absolute inset-0 bg-black bg-opacity-50">
				<div className="h-full flex flex-col justify-center content-center text-white text-center">
					<Heading>Title</Heading>
				</div>
			</div>
		</div>
	);
}
