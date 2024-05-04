import Image from 'next/image';
import style from './style.module.scss';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { classNames } from '@/utils';

export default function Wine(props: PropsWithChildren<{ className?: string }>) {
    return (
        <div className={classNames(style.Wine, props.className)}>
            <Image
                src="/images/wine.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                height={800}
                width={800}
            />
            <div className="absolute h-full w-full bg-black/50 -z-10 inset-0"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Wine
                    </h2>
                    <Link href="/wine">
                        <p className="mt-6 p-4 text-lg leading-8 text-white bg-white/5 rounded-xl hover:bg-white/20">
                            Our assortment is always in such hot demand that no
                            matter how hard we try, we can’t seem to keep them on
                            our shelves for long. Contact us to make sure we have
                            them in stock or ask us for a delicious alternative.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
