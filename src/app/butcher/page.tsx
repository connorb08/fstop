"use client";
import { Card, Inset, Text } from "@radix-ui/themes";
import SimpleImageSlider from "react-simple-image-slider";
import style from "./style.module.scss"

const images = [
    { url: "/images/meat.jpg" },
    // { url: "/images/P1250491.jpg" },
    // { url: "/images/P1250505.jpg" },
    // { url: "/images/food/pastries.jpg" },
    // { url: "/images/food/grabngo.jpg" },
    // { url: "/images/food/bec.jpg" },
    // { url: "/images/food/coffee-breakfast.jpg" },
];

export default function ButcherPage() {
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
                        {"Our butcher shop is a full-service meat counter offering a wide selection of fresh, never frozen, high-quality meats. We offer a variety of cuts, including steaks, chops, roasts, and more. Our knowledgeable staff is always available to help you select the perfect cut for your needs. We also offer a selection of house-made sausages, burgers, and other prepared meats. Whether you're looking for a special cut for a special occasion or just need something quick and easy for dinner, we have you covered."}
                    </Text>
                </div>
            </Card>

        </div>
    );
}
