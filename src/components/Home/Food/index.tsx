import Link from 'next/link'
import style from "./style.module.scss"
import type { PropsWithChildren } from 'react'
import { classNames } from '@/utils'
import { imageResize } from '@/utils/links'

export default function Food(props: PropsWithChildren<{ className?: string }>) {
    return (
        <div className={classNames(style.Food, props.className)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={imageResize(`/images/chx-pizza.jpg`, ['format=auto', 'quality=75', 'width=1280'])}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className='absolute h-full w-full bg-black/50 -z-10 inset-0'></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Food</h2>
                    <Link href="/food">
                        <p className="mt-6 p-4 text-lg leading-8 text-white bg-white/5 rounded-xl hover:bg-white/20">
                            We offer a full menu of fresh and delicous items. We also have hot coffee, breakfast sandwiches and burritos, pizza by the slice, and other great grab and go items.
                        </p>
                    </Link>
                </div>
            </div>

        </div>
    )
}
