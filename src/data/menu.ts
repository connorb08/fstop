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
			price: 7.49,
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
			name: 'Add Chicken or Tuna Salad',
			price: 3.49,
			description: '',
		},
		{
			name: 'Add Grilled Chicken',
			price: 4.49,
			description: '',
		},
		{
			name: 'Add Bacon',
			price: 1.99,
			description: '',
		},
		{
			name: 'Add House Falafel',
			price: 4.49,
			description: '',
		},
	],
	wraps_and_subs: [
		{
			name: 'Greely Institute Wrap',
			price: 11.49,
			description:
				'Creamy ceasar dressing, asiago cheese, croutons, grilled chicken, and romaine.',
		},
		{
			name: 'Prince Memorial Wrap',
			price: 11.49,
			description: 'Cranberry walnut chicken salad and romaine.',
		},
		{
			name: 'Greek Chicken Wrap',
			price: 11.49,
			description:
				'Spiced chicken, lettuce, spinich, olives, cucumber, tomato, red onion, feta, and Greek dressing.',
		},
		{
			name: 'Spicy Thai Wrap',
			price: 10.99,
			description:
				'Fried chicken tossed in spicy thai sauce, picked carrots, cucumber, and mixed greens.',
		},
		{
			name: 'Buffalo Chicken Wrap',
			price: 11.99,
			description:
				'Fried chicken tossed in buffalo sauce, romaine, and ranch.',
		},
		{
			name: 'Falafel Wrap',
			price: 11.49,
			description:
				'House made falafel, lettuce, pickled red onion, tomato, and Moroccan mayo.',
		},
		{
			name: 'Traditional Italian',
			price: [9.99, 7.49],
			description:
				'Ham, Salami, American Cheese, Onion, Olive, Tomato, Green Pepper and Pickles on a Sub Roll',
		},
		{
			name: 'Veggie Italian',
			price: [8.99, 6.49],
			description:
				'Lettuce, Tomato, Onion, Olives, Pickles, Green Peppers, American Cheese',
		},
		{
			name: 'Turkey Italian',
			price: [10.99, 8.49],
			description:
				'Sliced Turkey, American Cheese, Onion, Olive, Tomato, Green Pepper and Pickles on a Sub Roll',
		},
		{
			name: 'BLT',
			price: [9.99, 7.49],
			description: 'Bacon, romaine, and tomato on a sub roll',
		},
		{
			name: 'Tuna or Chicken Salad Italian',
			price: [10.99, 8.49],
			description:
				'Tuna / Chicken Salad, American Cheese, Onion, Olive, Tomato, Green Pepper, and Pickles on a Sub Roll',
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
			name: 'Veggie Philly',
			price: [12.49, 8.49],
			description:
				'Veggie Based Chorizo, Peppers, Onions, Mushrooms and Cheese on a Sub Roll',
		},
		{
			name: 'Cuban',
			price: 10.49,
			description:
				'House Made Cuban Pork and Spicy Pickles, with Ham, Swiss and Spicy Mustard on a Telera Bun',
		},
		{
			name: 'Roasted Pork',
			price: 11.49,
			description:
				'House Roasted Pork, Banana Pepper Mayo, Swiss, and Spinach on a Sourdough Roll',
		},
		{
			name: 'Pastrami',
			price: 12.49,
			description:
				'House Smoked Pastrami, Jalapeno Mayo, Spicy Mustard and Swiss Cheese on a Telera Bun',
		},
		{
			name: 'Pulled Pork',
			price: 9.99,
			description:
				'House Smoked Pulled Pork, Sweet Slaw, and your choice of BBQ Sauce on a Telera Bun',
		},
		{
			name: 'Smoked Brisket Panini',
			price: 12.49,
			description:
				'House Smoked Brisket, BBQ Sauce, Caramelized Onion and Cheddar Cheese on a Telera Bun',
		},
		{
			name: 'House Panini',
			price: 11.49,
			description:
				'Your choice of Grilled Chicken or Sliced Turkey on a Panini with Stop Sauce, Cheddar Cheese, Lettuce, Tomato, and Pickled Red Onion',
		},
		{
			name: 'Caprese',
			price: 11.49,
			description:
				'Fresh Mozzarella, Tomato, Nut Free Basil Pesto, Olive Oil and Balsamic Glaze on a Telera Bun',
		},
		{
			name: 'Chicken Philly',
			price: [10.49, 7.49],
			description:
				'Peppers, Onions, Mushrooms, Grilled Chicken with Fajita Spice and Cheese on a Sub Roll',
		},
		{
			name: 'Steak & Cheese',
			price: [12.99, 8.49],
			description:
				'Pepers, Onions, Mushrooms, Shaved Steak and Cheese on a Sub Roll',
		},
		{
			name: 'Chicken Parmigiana',
			price: 10.49,
			description:
				'Fried Chicken, Marinara and Pizza Cheese on a Telera Bun',
		},
		{
			name: 'Subsitute a gluten free bun',
			price: 1.99,
			description: '',
		},
		{
			name: 'Subsitute a sourdough roll',
			price: 1,
			description: '',
		},
	],
	burgers: [
		{
			name: 'Classic',
			price: 10.99,
			description:
				'American cheese, lettuce, tomato, onion, sweet pickles, and StopSauce',
		},
		{
			name: 'Deluxe',
			price: 12.49,
			description:
				'American cheese, bacon, lettuce, tomato, mayo, pepper relish, and sweet pickles',
		},
		{
			name: 'Cowboy',
			price: 12.49,
			description:
				'House Ground Beef and Smoked Pulled Pork, American Cheese, BBQ Sauce, Stop Sauce and topped with Onion Rings',
		},
		{
			name: 'Trailblazer',
			price: 12.49,
			description:
				'Pepperjack Cheese, Bacon, Lettuce, Tomato, Pickled Jalapeno and Stop Sauce',
		},

		{
			name: 'Ranger',
			price: 12.99,
			description:
				'American Cheese, Bacon, Lettuce, Tomato, Fries, Caramelized Onion, Sweet Pickles and Stop Sauce',
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
				price: [16.49, 9.99],
				list: [],
				description: "16' or 10' cheese pizza.",
			},
			{
				name: 'Veggie Toppings',
				price: [2.49, 1.49],
				list: [
					'Garlic, Green Peppers, Jalapenos, Mushroom, Olives, Onion, Pineapple, Red Onions, Spinach, Tomato',
				],
				description: '',
			},
			{
				name: 'Meat Toppings',
				price: [3.49, 2.49],
				list: [
					'Bacon, Sausage, Chicken, Hamburger, Pepperoni, Ham, Salami',
				],
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
				price: 2,
				list: [],
				description: 'Make any small into a gluten free crust.',
			},
		],
		pies: [
			{
				name: 'Cheeseburger Deluxe',
				price: [23.99, 13.99],
				description:
					'American & pizza cheese blend, mayo, hamburger, bacon, and red onion. Topped with mustard and ketchup.',
			},
			{
				name: 'Pesto Besto',
				price: [24.99, 14.99],
				description: 'Chicken, bacon, pesto, and tomato.',
			},
			{
				name: 'Chicken Florentine',
				price: [23.99, 13.99],
				description:
					'Grilled chicken, spinach, farlic, tomato, and red onion.',
			},
			{
				name: 'Loaded',
				price: [25.99, 15.99],
				description:
					'Pepperoni, sausage, hamburger, ham, mushroom, onion, green peppers, and olives',
			},
			{
				name: 'Meat Lovers',
				price: [24.99, 14.99],
				description: 'Pepperoni, sausage, hamburger, and ham.',
			},
			{
				name: 'Spicy Pulled Pork',
				price: [23.99, 13.99],
				description:
					'Bourbon BBQ, house smoked pulled pork, sriracha, pineapple, and cheddar cheese',
			},
			{
				name: 'Veggie',
				price: [23.99, 13.99],
				description: 'Mushroom, Onion, Green Peppers, and Olives',
			},
			{
				name: 'Greek',
				price: [24.99, 14.99],
				description:
					'Light Sauce, Sausage, Spinach, Tomato, Olives, Feta and Pizza Cheese',
			},
			{
				name: 'BBQ Chicken',
				price: [22.99, 12.99],
				description: 'BBQ Sauce Base, Diced White Chicken and Cheese',
			},
			{
				name: 'Buffalo Chicken',
				price: [22.99, 12.99],
				description:
					'Ranch Base, Diced White Chicken, Red Onion, Cheese and a Buffalo Drizzle',
			},
			{
				name: '5 Cheese',
				price: [20.99, 12.99],
				description:
					'Garlic Butter Base, Ricotta, Mozzarella, Cheddar, Provolone, and Romano Cheese',
			},
		],
	},
};

export default menu;
