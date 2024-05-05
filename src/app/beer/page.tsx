
import Image from 'next/image';
import { Fragment } from 'react';
import style from './style.module.scss';

const sections = [
    {
        name: 'Local',
        list: [
            "Allagash",
            "Barrled Souls",
            "Baxter",
            "Belleflower",
            "Boothbay",
            "Brewery Extrava",
            "Brickyard Hollow",
            "Bunker",
            "Cushnoc",
            "Definitve",
            "Flight Deck",
            "Fore River",
            "Foulmouthed",
            "Foundation",
            "Funky Bow",
            "Gearys",
            "Gneiss",
            "Lone Pine",
            "Mast Landing",
            "Orono Brewing Company",
            "Oxbow",
            "Peak Organic",
            "Rising Tide",
            "Sebago Brewing Company",
            "Shipyard",
            "Woodland Farms",]

    },
    {
        name: 'Out of State',
        list: [
            "Bell's",
            "Bitburger",
            "Black Hog",
            "Burlington Beer Company",
            "Cigar City",
            "Elysion",
            "Finback",
            "Founders",
            "Hoof Hearted",
            "Lagunitas",
            "Lawson's Finest Liquids",
            "Long Trail",
            "Lord Hobo",
            "Moat Mountain",
            "Radiant Pig",
            "Schilling",
            "Sierra Nevada",
            "Spencer",
            "Stoneface",
            "Switchback]",
        ]
    },
    {
        name: 'Cider',
        list: [
            "Bantam",
            "Cider Creek",
            "Downeast",
            "Norumbega",
            "Stowe",
        ]
    },
    {
        name: 'Seltzer',
        list: ["Bud Light Seltzer", "Truly", "White Claw"]
    },
    {
        name: 'Gluten Free',
        list: ["Departed Soles"
            , "Groundbreaker"]
    },
    {
        name: 'Non-Alcoholic',
        list: ["Athletic", "Wellbeing"]
    },
];

export default function Beer() {

    return (
        <div className="bg-[var(--gray-5)]">
            <div aria-hidden="true" className="relative">
                <Image
                    src={"/images/beer.jpg"}
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    className={style.Image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black" />
            </div>

            <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Our Beer
                    </h2>
                    <p className="mt-4 text-white">
                        With a rotating selection of over 150 beers in stock, we have a wide selection of craft beers, imports, and domestics. From the casual beer drinker to the IPA snob, we have something for everyone. We have a great selection of seasonal beers and a variety of styles to choose from. We also have a great selection of ciders and seltzers. We are always looking for new and exciting beers to add to our selection.
                    </p>
                </div>

                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-5 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                    {sections.map((section, index) => {
                        return (
                            <Fragment key={index}>
                                <dt className="text-xl font-bold text-white w-full col-span-3 sm:col-span-2 lg:col-span-3 text-center">
                                    {section.name}
                                </dt>
                                <div
                                    className="border-t border-gray-200 pt-4 col-span-3 col-start-1 sm:col-start-1 sm:col-span-2 lg:col-start-2 lg:col-span-1"
                                >
                                </div>
                                <div className='col-span-3'>
                                    <div className="grid grid-cols-2 md:grid-cols-4">
                                        {section.list.map((beer, index) => {
                                            return (
                                                <span
                                                    className="mt-2 text-white"
                                                    key={index}
                                                >
                                                    • {beer}

                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Fragment>
                        );
                    })}
                </dl>
            </div>
        </div>
    );
}
