"use client";
import { Button, Card, Inset, Text } from "@radix-ui/themes";
import Link from "next/link";
import SimpleImageSlider from "react-simple-image-slider";
import style from "./style.module.scss"

const images = [
    { url: "/images/P1250471.jpg" },
    { url: "/images/P1250491.jpg" },
    { url: "/images/P1250505.jpg" },
    { url: "/images/food/pastries.jpg" },
    { url: "/images/food/grabngo.jpg" },
    { url: "/images/food/bec.jpg" },
    { url: "/images/food/coffee-breakfast.jpg" },
];

export default function FoodPage() {
    return (
        <div className={style.Container}>
            <Card size="2" className={style.Card}>
                <Inset clip="padding-box" side="top" pb="current" className={style.ImageInset}>
                    <SimpleImageSlider
                        width={"100%"}
                        height={600}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                    />
                </Inset>
                <div className={style.Content}>
                    <Text as="p" size="3">
                        Our food is made fresh daily and is perfect for a quick breakfast or lunch on the go. We offer a variety of pastries, breakfast sandwiches, and grab-and-go items. Our coffee is locally roasted and brewed fresh daily. We also offer a variety of teas and other beverages. We also offer a full takeout menu.
                    </Text>
                    <Link href="/menu">
                        <Button className="max-w-fit">
                            View our menu
                        </Button>
                    </Link>
                </div>
            </Card>

        </div>
    );
}
