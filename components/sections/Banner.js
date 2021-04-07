import Hero from "../Hero";
import Image from "next/image";

export default function Banner() {
    return (
        <section id="home">
            <Hero />
            <Image src="/images/profile.jpg" width="300" height="300" alt="profile" />
        </section>
    )
}
