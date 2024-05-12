/* eslint-disable @next/next/no-img-element */

import { imageResize } from "@/utils/links";
import type { PropsWithChildren } from "react";

interface CloudflareImageProps extends Partial<HTMLImageElement> {
    src: string;
    alt: string;
    options?: string[];
    width?: number;
}

export default function CloudflareImage(props: PropsWithChildren<CloudflareImageProps>) {
    const options = props.options || [];
    options.push("format=auto")
    if (props.width) {
        options.push(`w=${props.width}`);
    }
    return (
        // @ts-expect-error - img element
        <img
            {...props}
            src={imageResize(props.src, options || [])}
            alt={props.alt}
        />
    );
}