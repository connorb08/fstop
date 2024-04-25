import style from './style.module.scss';
import menu from '@/data/menu';
import { Box, Card, Inset, Text, Strong, Separator } from '@radix-ui/themes';
import Image from 'next/image';

export function Menu() {
    return (
        <div className={style.Container}>
            <Box maxWidth="1024px" className={style.Specials}>
                <Card size="2">
                    <Inset clip="padding-box" side="top" pb="current">
                        <Image
                            src="https://cumberland-foodstop.com/cdn-cgi/image/format=auto/https://bucket.cumberland-foodstop.com/specials.jpeg"
                            alt="Menu"
                            width={800}
                            height={600}
                        />
                    </Inset>
                    <Text as="p" size="3">
                        <Strong>Our Weekly Specials — Updated every Tuesday</Strong>
                    </Text>
                </Card>
            </Box>
            <div className={style.Menu}>
                <section>
                    <h1>Sides</h1>
                    <Separator className={style.SectionSeparator} />
                    <ul>
                        {menu.sides.map((side, index) => (
                            <li key={index}>
                                <div className={style.Item}>
                                    <div className="flex justify-between">
                                        <span className={style.ItemName}>
                                            {side.name}
                                        </span>
                                        <span className={style.Price}>
                                            ${side.price}
                                        </span>
                                    </div>
                                    <p className={style.Description}>
                                        {side.description}
                                    </p>
                                </div>
                                <Separator my="3" size="4" className={style.Separator} />
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h1>Salads</h1>
                    <Separator className={style.SectionSeparator} />
                    <ul>
                        {menu.salads.map((salad, index) => (
                            <li key={index}>
                                <div className={style.Item}>
                                    <div className="flex justify-between">
                                        <span className={style.ItemName}>
                                            {salad.name}
                                        </span>
                                        <span className={style.Price}>
                                            ${salad.price}
                                        </span>
                                    </div>
                                    <p className={style.Description}>
                                        {salad.description}
                                    </p>
                                </div>
                                <Separator my="3" size="4" className={style.Separator} />
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h1>Grill</h1>
                    <Separator className={style.SectionSeparator} />
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
                <section className={style.DoubleWide}>
                    <h1>Signature Pies</h1>
                    <Separator className={style.SectionSeparator} />
                    <ul>
                        {menu.pizzas.pies.map((pizza, index) => (
                            <li key={index}>
                                <div className={style.Item}>
                                    <div className="flex justify-between">
                                        <span className={style.ItemName}>
                                            {pizza.name}
                                        </span>
                                        <span className={style.Price}>
                                            ${pizza.price[0]} | ${pizza.price[1]}
                                        </span>
                                    </div>
                                    <p className={style.Description}>
                                        {pizza.description}
                                    </p>
                                </div>
                                <Separator my="3" size="4" className={style.Separator} />
                            </li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h1>Pizza Your Way</h1>
                    <Separator className={style.SectionSeparator} />
                    <ul className='w-full'>
                        {menu.pizzas.modifications.map((modification, index) => (
                            <li key={index}>
                                <div className={style.Item}>
                                    <div className="flex justify-between">
                                        <span className={style.ItemName}>
                                            {modification.name}
                                        </span>
                                        <span className={style.Price}>
                                            {(typeof modification.price === "number") ? `$${modification.price}` : `$${modification.price[0]} | $${modification.price[1]}`}
                                        </span>
                                    </div>
                                    <p className={style.Description}>
                                        {(modification.list.length === 0) ? modification.description : modification.list.join(", ")}
                                    </p>
                                </div>
                                <Separator my="3" size="4" className={style.Separator} />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}
