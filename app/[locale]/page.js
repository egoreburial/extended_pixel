import { setStaticParamsLocale } from 'next-international/server'
import Head from "next/head";
import Hero from "@/components/Hero";
import WeProvide from "@/components/WeProvide/index";
import OurServices from "@/components/OurServices";
import OurProjects from "@/components/OurProjects/index";
import OurBrands from "@/components/Brands";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact/index";
import FloatingButton from "@/components/FloatingButton";

export default function Home({ params: { locale } }) {
    setStaticParamsLocale(locale)

    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Extended Pixel</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navigation />
            <FloatingButton />

            <Hero/>
            <WeProvide />
            <OurServices />
            <OurProjects />
            <OurBrands />
            <Contact />

            <Footer />
        </div>
    );
}
