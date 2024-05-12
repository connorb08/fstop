import style from './style.module.scss';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { classNames } from '@/utils';
import CloudflareImage from '@/components/CloudflareImage';

export default function Beer(props: PropsWithChildren<{ className?: string }>) {
    return (
        <div className={classNames(style.Beer, props.className)}>
            <CloudflareImage
                src="/images/beer.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                width={1280}
                options={["q=75"]}
            />
            <div className="absolute h-full w-full bg-black/50 -z-10 inset-0"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Beer
                    </h2>
                    <Link href="/beer">
                        <p className="mt-6 p-4 text-lg leading-8 text-white bg-white/5 rounded-xl hover:bg-white/20">
                            We offer a wide selection of craft beers. We have a rotating selection of local and regional beers. We also have a selection of imported beers. With over 150 different beers in stock, we have something for everyone. Come check out our selection today!
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
