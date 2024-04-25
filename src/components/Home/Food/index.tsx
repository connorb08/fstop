import Image from 'next/image'
import style from "./style.module.scss"
import { PaperClipIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Food() {
    return (
        <div className={style.About}>
            <Image
                src="/background/pizza.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                height={800}
                width={800}
            />
            <div className='absolute h-full w-full bg-black/50 -z-10 inset-0'></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Food</h2>
                    <p className="mt-6 p-4 text-lg leading-8 text-white bg-white/5 rounded-xl">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
            </div>

        </div>
    )
}
