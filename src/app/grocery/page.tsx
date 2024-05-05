const categories = [
    {
        name: "Produce and Cheese",
        description: "Fresh produce and cheeses. From bell peppers and brussels sprouts to sharp cheddar and aged parmesan. We regularly carry local sourced eggs, fresh fruits and veggies, and fine cheeses."
    },
    {
        name: "Miscellaneous Grocery",
        description: "We have a variety of different grocery items that include sauces, baking necessities, pastas, breads, cat and dog food, and many more."
    }
]

export default function Grocery() {
    return <div>
        {categories.map((item, index) => (
            <li key={index}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </li>
        ))}
    </div>
}