import Food from './Food';
import Hero from './Hero';
import Wine from './Wine';

export default function Home() {
    return (
        <>
            <Hero />
            {/* <Transition /> */}
            <Food />
            {/* <Transition /> */}
            <Wine />
        </>
    );
}

const Transition = () => {
    return <div className='bg-black h-[100px] z-10'></div>;
}