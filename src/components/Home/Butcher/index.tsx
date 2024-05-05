import Image from 'next/image';
import style from './style.module.scss';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { classNames } from '@/utils';

export default function Butcher(props: PropsWithChildren<{ className?: string }>) {
    return (
        <div className={classNames(style.Beer, props.className)}>
            <Image
                src="/images/meat.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                height={800}
                width={800}
            />
            <div className="absolute h-full w-full bg-black/50 -z-10 inset-0"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Butcher Shop
                    </h2>
                    <Link href="/butcher">
                        <p className="mt-6 p-4 text-lg leading-8 text-white bg-white/5 rounded-xl hover:bg-white/20">
                            We sell fresh, never frozen meats. We regularly carry fresh ground beef, burger patties, sesame soy marinated beef tips, ribeye steak, strip steak, pork chops, house smoked pulled pork, hot and sweet sausage, and shrimp.
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
