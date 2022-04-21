import Hero from "./hero/hero";
import Layout from "./shared/layout";
import FeaturedCollection from "./featured-collection/featured-collection";
import MainSection from "./main-section/main-section";

export default function HomePage (){

    return(
        <>
        <Layout>
            <Hero/>
            <MainSection/>
            <FeaturedCollection/>
        </Layout>
        </>
    )
}