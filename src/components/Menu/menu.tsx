import style from "./style.module.scss"
import menu from '@/data/menu'
import Image from 'next/image'

export function Menu() {
    return <div className={style.Container}>
        <Image src="/images/wine_room.jpg" alt="Menu" width={800} height={600} />
        <div className={style.Menu}>
            <section>
                <h1>Sides</h1>
                <ul>
                    {menu.sides.map((side, index) => (
                        <li key={index}>
                            <h2>{side.name}</h2>
                            <p className={style.Price}>${side.price}</p>
                            <p>{side.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h1>Salads</h1>
                <ul>
                    {menu.salads.map((salad, index) => (
                        <li key={index}>
                            <h2>{salad.name}</h2>
                            <p className={style.Price}>${salad.price}</p>
                            <p>{salad.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h1>Grill</h1>
                <ul>
                    {menu.grill_items.map((item, index) => (
                        <li key={index}>
                            <h2>{item.name}</h2>
                            <p className={style.Price}>${item.price}</p>
                            <p>{item.description}</p>

                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h1>Signature Pies</h1>
                <ul>
                    {menu.pizzas.pies.map((pizza, index) => (
                        <li key={index}>
                            <h2>{pizza.name}</h2>
                            <p className={style.Price}>Large ${pizza.price[0]} Small ${pizza.price[1]}</p>
                            <p>{pizza.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h1>Create Your Own Pie</h1>
                <ul>
                    {menu.pizzas.pies.map((pizza, index) => (
                        <li key={index}>
                            <h2>{pizza.name}</h2>
                            <p className={style.Price}>Large ${pizza.price[0]} Small ${pizza.price[1]}</p>
                            <p>{pizza.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    </div>
}