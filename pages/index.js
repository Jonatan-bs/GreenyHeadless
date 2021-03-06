import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Starterpack from "../components/Starterpack"
import FeaturedProducts from "../components/products/FeaturedProducts"
import Symbols from "../components/Symbols"
import About from "../components/About"
import BlogTeaser from "../components/blogPosts/BlogTeaser"
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
                    <FeaturedProducts products={props.products}/>
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
                    <BlogTeaser blogPosts={props.blogPosts}/>
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
    let products = await fetch(`${config.wpApi.siteURL}/wp-json/wc/v3/products?status=publish`,
    {
        method:'GET',
        headers: headers
    })
    products = await products.json()

    // Get posts
    let blogPosts = await fetch(`${config.wpApi.siteURL}/wp-json/wp/v2/posts?status=publish`,
    {
        method:'GET',
        headers: headers
    })
    blogPosts = await blogPosts.json()


    return {
        props: 
        {
            products,
            blogPosts
        }
    }

}

export default Index;