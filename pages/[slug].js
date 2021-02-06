import Layout from "../components/Layout"
import config from "../config"
import fetch from "isomorphic-unfetch";
import { useRouter } from 'next/router'

const DefaultPages = ({pages}) => {
    const router = useRouter()
    const { slug } = router.query
    let page = pages.find( b => b.slug === slug)
    
    return (
        <Layout >
            <section className="content text page header-padding">
    
                <h1>{page.title.rendered}</h1>
                {page.better_featured_image? <img  className="featuredImage" src={page.better_featured_image.source_url}  alt={page.better_featured_image.alt_text}/> : ""}


                <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
                

            </section>
        </Layout>
    )
};


export default DefaultPages;


let headers = new Headers()
headers.append('Authorization', config.wpApi.basicAuth);


export const getStaticProps = async () => {
    // Get pages
    let pages = await fetch(`${config.wpApi.siteURL}/wp-json/wp/v2/pages?status=publish`,
    {
        method:'GET',
        headers: headers
    })
    pages = await pages.json()



    return {
        props: 
        {
            pages    
        }
    }

}

export async function getStaticPaths(ctx) {
    // Get pages
    let pages = await fetch(`${config.wpApi.siteURL}/wp-json/wp/v2/pages?status=publish`,
    {
        method:'GET',
        headers: headers
    })
    pages = await pages.json()

    const filterOut = ['cart', "account", "blog", "shop", "checkout", "my-account"]
    let pagesFilteret = pages.filter ( p => !filterOut.includes(p.slug))
  
    return {
      paths: pagesFilteret.map(({ slug }) => `/${slug}`) || [],
    //   paths: pages.map(({ slug }) => { return filterOut.includes(slug)?  `/${slug}` : null }) || [],
      fallback: false,
    }
}
