import style from './style.module.scss';
const categories = [
    {
        name: 'Produce and Cheese',
        description:
            'Fresh produce and cheeses. From bell peppers and brussels sprouts to sharp cheddar and aged parmesan. We regularly carry local sourced eggs, fresh fruits and veggies, and fine cheeses.',
    },
    {
        name: 'Miscellaneous Grocery',
        description:
            'We have a variety of different grocery items that include sauces, baking necessities, pastas, breads, cat and dog food, and many more.',
    },
    {
        name: "Drinks & Dairy",
        description: "We carry a large variety of Coke, Pepsi, and Hood products. We also have high quality butter, cream cheese, and organic milk."
    },
    {
        name: "Essentials",
        description: "We stock basics like medication, batteries, and other necessities."
    },
    {
        name: "Snacks",
        description: "From chips and pretzels to ice cream and candy, we have something for everyone."
    }
];

export default function Grocery() {
    return (
        <div className={style.Container}>
            <ul className={style.Grid}>
                {categories.map((item, index) => (
                    <li key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
