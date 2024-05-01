import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function About() {
    return <>We are located at 318 Main St, Cumberland, ME. <Link href="https://www.google.com/maps/dir//Cumberland%20Foodstop,%20318%20Main%20St,%20Cumberland,%20ME%2004021"><Button>Get Directions</Button></Link></>;
}