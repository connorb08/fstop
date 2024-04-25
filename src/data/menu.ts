interface Menu {
	sides: MenuItem[];
	salads: MenuItem[];
	grill_items: MenuItem[];
	wraps_and_subs: MenuItem[];
	burgers: MenuItem[];
	pizzas: {
		modifications: PizzaModifications[];
		pies: Pizza[];
	};
}

interface MenuItem {
	name: string;
	price: number | [number, number];
	description: string;
}

interface Pizza extends MenuItem {
	price: [number, number];
}

interface PizzaModifications {
	name: string;
	price: [number, number] | number;
	list: string[];
	description: string;
}

export const menu: Menu = {
	sides: [
		{
			name: 'Chicken Tenders',
			price: 8.99,
			description:
				'Crispy chicken tenders served with your choice of dipping sauce.',
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
			description: 'Classic onion rings served with ketchup.',
		},
		{
			name: 'Mozzarella Sticks',
			price: 5.99,
			description:
				'Golden fried mozzarella sticks served with marinara sauce.',
		},
		{
			name: 'Poutine',
			price: 6.99,
			description:
				'French fries smothered in beef gravy with melted cheddar and cheese curds. Add meat for $2.',
		},
	],
	salads: [
		{
			name: 'Caesar',
			price: 5.99,
			description:
				'Romaine, croutons, and asiago cheese. Served with Caesar dressing.',
		},
		{
			name: 'Garden',
			price: 5.99,
			description:
				'Romaine, tomato, green pepper, mushroom, red onion, cucumber, and shredded carrots.',
		},
		{
			name: 'Greek',
			price: 7.49,
			description:
				'Mix of romaine and spinach, tomato, cucumber, feta cheese, red onion, and olives.',
		},
		{
			name: 'Add Grilled Chicken or Tuna',
			price: 3.49,
			description: '',
		},
	],
	wraps_and_subs: [],
	grill_items: [],
	burgers: [],
	pizzas: {
		modifications: [
			{
				name: 'Standard Toppings',
				price: [2.49, 1.49],
				list: [
					'Pepperoni, Ham, Mushroom, Onion, Green Pepper, Kalamata Olive, Pineapple, Spinach, Tomato, Jalapeño, Garlic, Red Onion',
				],
				description: '',
			},
			{
				name: 'Premium Toppings',
				price: [2.99, 1.99],
				list: ['Bacon, Sausage, Chicken, Hamburger, Pesto'],
				description: '',
			},
			{
				name: 'Extra Cheese',
				price: [3.49, 2.49],
				list: [],
				description: '',
			},
			{
				name: 'Gluten Free',
				price: 1.99,
				list: [],
				description: 'Make any small into a gluten free crust.',
			},
		],
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
