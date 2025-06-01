import type { NextRequest } from "next/server";
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function POST(request: NextRequest) {

    try {
        const bucket = getRequestContext().env.BUCKET;
        const specialsImg = await request.blob();
        const result = await bucket.put("specials.jpeg", specialsImg);
        if (result === null) {
            return new Response("Error uploading image.", { status: 500 });
        }
        return new Response("Image uploaded successfully.", { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response("Error uploading image.", { status: 500 });
    }

}