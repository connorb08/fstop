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
            <Card size="2" className="flex flex-col gap-3 items-center my-5 mx-2 p-0">
                <Inset clip="padding-box" side="top" pb="current" className="h-full w-full flex">
                    <SimpleImageSlider
                        width={"100%"}
                        height={600}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        style={{
                            left: 0
                        }}
                    />
                    {/* <img src="images/pastries.jpg" className="w-[200px]" /> */}
                </Inset>
                <div className="p-5 pt-0 flex flex-col gap-3 items-center">
                    <Text as="p" size="3">
                        Food: We offer hot coffee, breakfast sandwhiches and burritos, pizza
                        by the slice, and other great grab and go items.
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
