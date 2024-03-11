interface MenuItem {
	name: string;
	price: number | [number, number];
	description: string;
}

interface Pizza extends MenuItem {
	// [large, small]
	price: [number, number];
}

interface PizzaModifications {
	standard: {
		// [large, small]
		price: [number, number];
		list: string[];
	};
	premium: {
		// [large, small]
		price: [number, number];
		list: string[];
	};
	extra_cheese: [number, number];
	gluten_free: number;
}

interface Menu {
	sides: MenuItem[];
	salads: MenuItem[];
	grill_items: MenuItem[];
	pizzas: {
		modifications: PizzaModifications;
		pies: Pizza[];
	};
}

export const menu: Menu = {
	sides: [
		{
			name: 'Chicken Tenders',
			price: 8.99,
			description: '',
		},
		{
			name: 'Boardwalk Fries',
			price: 3.99,
			description: 'Classic Fries served with ketchup and salt + pepper.',
		},
		{
			name: 'Rosemary Fries',
			price: 4.99,
			description:
				'French fries tossed in rosemary and olive oil. Topped with flakey sea salt.',
		},
		{
			name: 'Onion Rings',
			price: 5.99,
			description: '',
		},
		{
			name: 'Mozzarella Sticks',
			price: 5.99,
			description: '',
		},
		{
			name: 'Poutine',
			price: 6.99,
			description:
				'French fries smothered in beef gravy with melted cheddar and cheese curds. Add meat for $2.',
		},
	],
	salads: [],
	grill_items: [],
	pizzas: {
		modifications: {
			standard: {
				price: [2.49, 1.49],
				list: [
					'Pepperoni, Ham, Mushroom, Onion, Green Pepper, Kalamata Olive, Pineapple, Spinach, Tomato, Jalapeño, Garlic, Red Onion',
				],
			},
			premium: {
				price: [2.99, 1.99],
				list: ['Bacon, Sausage, Chicken, Hamburger, Pesto'],
			},
			extra_cheese: [3.49, 2.49],
			gluten_free: 1.99,
		},
		pies: [
			{
				name: 'Cheeseburger Deluxe',
				price: [20.99, 11.99],
				description:
					'American & pizza cheese blend, mayo, hamburger, bacon, and red onion. Topped with mustard and ketchup.',
			},
			{
				name: 'Pesto Besto',
				price: [23.99, 14.49],
				description: 'Chicken, bacon, pesto, and tomato.',
			},
			{
				name: 'Chicken Florentine',
				price: [22.99, 13.49],
				description:
					'Grilled chicken, spinach, farlic, tomato, and red onion.',
			},
			{
				name: 'Loaded',
				price: [24.99, 15.49],
				description:
					'Pepperoni, sausage, hamburger, ham, mushroom, onion, green peppers, and olives.',
			},
			{
				name: 'Meat Lovers',
				price: [23.99, 14.49],
				description: 'Pepperoni, sausage, hamburger, and ham.',
			},
			{
				name: 'Spicy Pulled Pork',
				price: [22.99, 13.49],
				description:
					'Bourbon BBQ, house smoked pulled pork, sriracha, pineapple, and cheddar cheese.',
			},
			{
				name: 'Veggie',
				price: [21.99, 12.49],
				description: 'Mushroom, onion, green peppers, and olives.',
			},
			{
				name: 'Greek',
				price: [23.99, 14.49],
				description:
					'Sausage, feta cheese, spinach, tomato, and olives.',
			},
			{
				name: 'Buffalo or BBQ Chicken',
				price: [20.99, 11.99],
				description: '',
			},
			{
				name: 'The Danimal',
				price: [20.99, 11.99],
				description:
					'Diced ham, salami, and pepperoni with minced garlic.',
			},
		],
	},
};

export default menu;
