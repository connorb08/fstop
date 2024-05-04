import Image from 'next/image';
import style from './style.module.scss';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import { classNames } from '@/utils';

export default function About(props: PropsWithChildren<{ className?: string }>) {
    return (
        <div className={classNames(style.About, props.className)}>
            <Image
                src="/images/fortin.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                height={800}
                width={800}
            />
            <div className="absolute h-full w-full bg-black/50 -z-10 inset-0"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-end mt-40">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-end">
                        About Us
                    </h2>
                    <Link href="/about">
                        <p className="mt-6 p-4 text-lg leading-8 text-white bg-white/5 rounded-xl hover:bg-white/20">
                            We are a family owned and operated business located in Cumberland Center. We have been serving the community for over 30 years. We offer a wide selection of wines, craft beer, and gourmet foods. We also have a full service coffee bar and a variety of grab and go items. We look forward to seeing you soon!
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
