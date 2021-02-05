import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Starterpack from "../components/Starterpack"
import FeaturedProducts from "../components/FeaturedProducts"
import Symbols from "../components/Symbols"
import About from "../components/About"
import BlogTeaser from "../components/BlogTeaser"
import config from "../config"
import fetch from "isomorphic-unfetch";

const Index = (props) => {
    return (
        <Layout light="false" >

            <div id="front-page">

                {/* HERO */}
                <section>
                    <Hero/>
                </section>

                {/* Starter pack CTA */}
                <section className="content mb animate slideIn">
                    <Starterpack/>
                </section>

                {/* Products */}
                <section className="content mb">
                    <FeaturedProducts {...props}/>
                </section>

                {/* Symbols */}
                <section className="content mb ">
                    <Symbols/>
                </section>

                {/* About Greeny juices */}
                <section className="mb">
                    <About/>
                </section>
                
                {/* Blog */}
                <section className="content mb">
                    <BlogTeaser {...props}/>
                </section>

                {/* Newsletter */}
                <section className="content mb animate slideIn">
                    {/* <?php  get_template_part('components/newsletter');?> */}
                </section>
        
                
            </div>
        </Layout>
    )
};

// Index.layout = "default";

let headers = new Headers()
headers.append('Authorization', config.wpApi.basicAuth);

export const getStaticProps = async () => {
    // Get products
    let products = await fetch(`${config.wpApi.siteURL}/wp-json/wc/v3/products`,
    {
        method:'GET',
        headers: headers
    })
    products = await products.json()

    // Get posts
    let posts = await fetch(`${config.wpApi.siteURL}/wp-json/wp/v2/posts`,
    {
        method:'GET',
        headers: headers
    })
    posts = await posts.json()


    return {
        props: 
        {
            products,
            posts
        }
    }

}

export default Index;