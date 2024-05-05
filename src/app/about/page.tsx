import { facebook, telephone } from '@/utils/links';
import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <div className="relative h-full flex flex-col gap-3 items-center justify-center">
            <div className='h-[50vh] sm:h-[100vh] w-[100vw]'>
                <Image
                    src="/images/fstop.jpg"
                    className="object-cover w-full h-full"
                    height={0}
                    width={0}
                    sizes="100vw"
                    alt=""
                />
            </div>
            <div className='absolute inset-0 sm:bg-black/50'></div>
            <div className="relative sm:absolute my-10 flex flex-col gap-2 items-center">
                <p className="text-center">
                    We are located at 318 Main St, Cumberland, ME.
                </p>
                <div className="flex gap-2">
                    <Link href="https://www.google.com/maps/dir//Cumberland%20Foodstop,%20318%20Main%20St,%20Cumberland,%20ME%2004021">
                        <Button>Get Directions</Button>
                    </Link>
                    <Link href={facebook}><Button>Facebook</Button></Link>
                    <Link href={telephone}><Button>Call Us</Button></Link>
                </div>
            </div>
        </div>
    );
}
