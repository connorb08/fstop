import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge'

export async function GET() {
    try {
        const bucket = getRequestContext().env.BUCKET;
        const specials = await bucket.get("specials.jpeg");
        if (specials === null) {
            return new Response("Error getting image.", { status: 500 });
        }
        const image = await specials.blob()
        return new Response(image, {
            status: 200, headers: {
                "Content-Type": image.type,
            }
        });

    } catch (error) {
        console.error(error);
        return new Response("Error getting specials.", { status: 500 });
    }
}