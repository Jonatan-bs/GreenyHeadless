import Head from "next/head"
const Layout = (props) => {
    return (
        <div>
            <Head></Head>


            { props.children }
        </div>
    )

}
export default Layout