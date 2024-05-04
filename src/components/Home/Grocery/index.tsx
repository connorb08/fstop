import Image from 'next/image';
import style from './style.module.scss';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { classNames } from '@/utils';

export default function Grocery(props: PropsWithChildren<{ className?: string }>) {
    return (
        <div className={classNames(style.Beer, props.className)}>
            <Image
                src="/images/gp.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                height={800}
                width={800}
            />
            <div className="absolute h-full w-full bg-black/50 -z-10 inset-0"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Grocery
                    </h2>
                    <Link href="/grocery">
                        <p className="mt-6 p-4 text-lg leading-8 text-white bg-white/5 rounded-xl hover:bg-white/20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae aliquet arcu, et imperdiet eros. Morbi ornare felis sem, sed lobortis eros tempus ut. In at nibh mi. Praesent pharetra ante ut accumsan eleifend. Mauris posuere quis nunc at maximus. Sed molestie risus non quam dictum sagittis. Proin sem nulla, viverra ac vehicula at, fermentum et turpis. Fusce venenatis id sem sed ornare. Ut porttitor suscipit molestie. Curabitur ipsum ante, lacinia ut fermentum ut, blandit facilisis turpis.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
