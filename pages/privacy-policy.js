
import Head from "next/head";
import Breadcrumb from "../components/about/breadcrumb";

export default function Privacy() {
    return (
        <>
            
            <Head>
				<title>HUMB - Privacy Policy</title>
			</Head>
			<Breadcrumb />
            <div className="container">
                <div className="row">
                    <div>
                            <h2>HUMB - Privacy Policy</h2>
                    </div>
                </div>
            </div>
           
        </>
    );
}

export async function getStaticProps() {
    return { props: { header: "one", footer: "one" } };
}
