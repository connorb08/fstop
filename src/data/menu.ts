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

// Update pizza menu board (1st) and panini + grill (3rd)
export const menu: Menu = {
	sides: [
		{
			name: 'Chicken Tenders',
			price: 9.99,
			description:
				'Crispy chicken tenders served with your choice of dipping sauce.',
		},
		{
			name: 'Boardwalk Fries',
			price: 4.99,
			description: 'Classic Fries served with ketchup and salt + pepper.',
		},
		{
			name: 'Rosemary Fries',
			price: 5.99,
			description:
				'French fries tossed in rosemary and olive oil. Topped with flakey sea salt.',
		},
		{
			name: 'Onion Rings',
			price: 6.99,
			description: 'Classic onion rings served with ketchup.',
		},
		{
			name: 'Mozzarella Sticks',
			price: 6.99,
			description:
				'Golden fried mozzarella sticks served with marinara sauce.',
		},
		{
			name: 'Poutine',
			price: 7.99,
			description:
				'French fries smothered in beef gravy with melted cheddar and cheese curds. Add meat for $2.',
		},
	],
	salads: [
		{
			name: 'Caesar',
			price: 6.99,
			description:
				'Romaine, croutons, and asiago cheese. Served with Caesar dressing.',
		},
		{
			name: 'Garden',
			price: 7.49,
			description:
				'Romaine, tomato, green pepper, mushroom, red onion, cucumber, and shredded carrots.',
		},
		{
			name: 'Greek',
			price: 8.99,
			description:
				'Mix of romaine and spinach, tomato, cucumber, feta cheese, red onion, and olives.',
		},
		{
			name: 'Chicken or Tuna Salad',
			price: 3.49,
			description: '',
		},
		{
			name: 'Grilled Chicken',
			price: 4.49,
			description: '',
		},
	],
	wraps_and_subs: [
		{
			name: 'Greely Institute Wrap',
			price: 9.99,
			description:
				'Creamy ceasar dressing, asiago cheese, croutons, grilled chicken, and romaine.',
		},
		{
			name: 'Buffalo Chicken Wrap',
			price: 10.49,
			description:
				'Fried chicken tossed in buffalo sauce, romaine, and ranch.',
		},
		{
			name: 'Greek Chicken Wrap',
			price: 10.99,
			description:
				'Spiced chicken, lettuce, spinich, olives, cucumber, tomato, red onion, feta, and Greek dressing.',
		},
		{
			name: 'Falafel Wrap',
			price: 10.99,
			description:
				'House made falafel, lettuce, pickled red onion, tomato, and Moroccan mayo.',
		},
		{
			name: 'Prince Memorial Wrap',
			price: 10.49,
			description: 'Cranberry walnut chicken salad and romaine.',
		},
		{
			name: 'Traditional Italian',
			price: [8.99, 6.49],
			description: 'Cranberry walnut chicken salad and romaine.',
		},
		{
			name: 'BLT',
			price: [8.99, 6.49],
			description: 'Bacon, romaine, and tomato on a sub roll.',
		},
		{
			name: 'Tuna or Chicken Salad',
			price: [10.49, 7.99],
			description: '',
		},
		{
			name: 'Spicy Thai Wrap',
			price: 10.99,
			description:
				'Fried chicken tossed in spicy thai sauce, picked carrots, cucumber, and mixed greens.',
		},
		{
			name: 'Turkey Italian',
			price: [10.49, 7.99],
			description: '',
		},
		{
			name: 'Subsitute a gluten free bun',
			price: 1.99,
			description: '',
		},
		{
			name: 'Subsitute any protien with house made falafel',
			price: 0,
			description: '',
		},
	],
	grill_items: [
		{
			name: 'House Panini',
			price: 10.49,
			description:
				'Mixed greens, tomato, pickled red onion, cheddar and StopSauce on a torta bun with choice of grilled chicken, sliced turkey, or sliced smoked brisket.',
		},
		{
			name: 'Caprese',
			price: 9.99,
			description:
				'Fresh mozzarella, tomato, basil, olive oil, and balsamic glaze on a torta bun.',
		},
		{
			name: 'Chicken Philly',
			price: [9.99, 6.99],
			description:
				'Peppers, onion, mushroom, fajita spice, and cheese on a sub roll.',
		},
		{
			name: 'Steak & Cheese',
			price: [11.99, 7.99],
			description: 'Peppers, onion, mushroom, and cheese on a sub roll.',
		},
		{
			name: 'Veggie Philly',
			price: [10.99, 7.49],
			description:
				'Veggie based chorizo, peppers, onion, mushrooms, and fajita spice on a sub roll, with or without cheese.',
		},
		{
			name: 'Cuban',
			price: 9.99,
			description:
				'Sliced pork, swiss, house spicy pickle, and spicy mustard on a torta bun.',
		},
		{
			name: 'Chicken Parmigiana',
			price: 9.99,
			description:
				'Chicken tenders, marinara, and pizza cheese on a torta bun.',
		},
		{
			name: 'Pulled Pork',
			price: 9.49,
			description:
				'House smoked pulled pork, sweet slaw, on a torta bun with a choice of traditional, carolina, and bourbon BBQ sauce.',
		},
		{
			name: 'Smoked Brisket',
			price: 10.99,
			description: 'Cheddar, BBQ, and caramelized onion on a torta bun.',
		},
		{
			name: 'Pastrami',
			price: 10.99,
			description:
				'House smoked pastrami, jalapeño mayo, spicy mustard, and swiss on a torta bun.',
		},
		{
			name: 'Subsitute a gluten free bun',
			price: 1.99,
			description: '',
		},
		{
			name: 'Subsitute any protien with house made falafel',
			price: 0,
			description: '',
		},
	],
	burgers: [
		{
			name: 'Classic',
			price: 10.49,
			description:
				'American cheese, lettuce, tomato, onion, sweet pickles, and StopSauce.',
		},
		{
			name: 'Trailblazer',
			price: 11.99,
			description:
				'Pepperjack cheese, bacon, lettuce, tomato, pickled jalapeños, and StopSauce.',
		},
		{
			name: 'Deluxe',
			price: 11.99,
			description:
				'American cheese, bacon, lettuce, tomato, mayo, pepper relish, and sweet pickles.',
		},
		{
			name: 'Ranger',
			price: 12.49,
			description:
				'American cheese, bacon, lettuce, tomato, fries, caramelized onion, sweet pickles, and StopSauce.',
		},
		{
			name: 'Cowboy',
			price: 11.99,
			description:
				'American cheese, BBQ pulled pork, onion rings, and StopSauce.',
		},
		{
			name: 'Subsitute a gluten free bun',
			price: 1.99,
			description: '',
		},
		{
			name: 'Subsitute an impossible burger patty',
			price: 1.49,
			description: '',
		},
	],
	pizzas: {
		modifications: [
			{
				name: 'Cheese Pizza',
				price: [14.99, 8.49],
				list: [],
				description: "16' or 10' cheese pizza.",
			},
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
				price: [21.99, 12.49],
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
				price: [22.99, 13.49],
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
				price: [21.99, 12.49],
				description: '',
			},
			{
				name: '5 Cheese',
				price: [19.99, 12.49],
				description:
					'Garlic butter, moozzarella, cheddar, provolone, ricotta, and romano cheese.',
			},
		],
	},
};

export default menu;
