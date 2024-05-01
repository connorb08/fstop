"use client";
import { Button, Card, Inset, Text } from "@radix-ui/themes";
import Link from "next/link";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "images/P1250471.jpg" },
    { url: "images/P1250491.jpg" },
    { url: "images/P1250505.jpg" },
    { url: "images/pastries.jpg" },
];

export default function FooodPage() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center">
            <Card size="2" className="flex flex-col gap-3 items-center">
                <Inset clip="padding-box" side="top" pb="current">
                    <SimpleImageSlider
                        width={900}
                        height={600}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                    />
                </Inset>
                <Text as="p" size="3">
                    Food: We offer hot coffee, breakfast sandwhiches and burritos, pizza
                    by the slice, and other great grab and go items.
                </Text>
                <Link href="/menu">
                    <Button className="max-w-fit">
                        View our menu
                    </Button>
                </Link>
            </Card>

        </div>
    );
}
