
import Head from "next/head";
import Breadcrumb from "../components/privacy/breadcrumb";

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
                           
                                        <p >The current version of this Privacy Policy as of July 1st 2024.</p>
                                        <p >1.	ABOUT HUMB </p>
                                        <p >HUMB UAB (hereinafter referred to as <strong>“HUMB” </strong> or <strong>“we”</strong> ) is a virtual currency exchange operator and depository virtual currency wallet operator established and authorized under the laws of the Republic of Lithuania. HUMB operates website <a href="https://humb.io/" target="_blank">https://www.humb.io/</a> and its mobile/tablet application (together hereinafter referred to as <strong>"website"</strong> or <strong>"platform"</strong>) and suggests the following services to both natural persons and legal entities (together hereinafter referred as<strong>“Customers”</strong> , each individually as 
         <strong>“Customer”</strong>, also – as <strog>“You”</strog>):Customer<br />
                •	Exchange services: Customers can exchange (i) virtual currency to fiat, (ii) fiat to virtual currency, (iii) virtual currency to virtual currency.<br />
                •	Custodian and/or non-custodian virtual currency wallet services: We open an account that has its wallet address, and the Customer can use this wallet address to deposit and withdraw virtual currency.<br />
                •	Virtual asset listing services: placing virtual asset on platform enabling exchange services with this virtual asset within HUMB’s platform.<br />
         </p>
         <p>HUMB with its business address at J. Jasinskio st. 16B, Vilnius, LT-03163, Lithuania, registered in the commercial register under Registry Code: 306756840 is the owner and content provider of the platform. As soon as You use HUMB’s platform, You entrust HUMB with the processing of Your personal data. Therefore, in this Privacy Policy You are informed which personal data HUMB collects from You, how HUMB processes it and to whom passes it on in detail. In addition, HUMB informs You about the precautions it takes to protect Your personal data, what rights You have in this context and who You can contact regarding data protection issues. </p>

                   
                    </div>
                </div>
            </div>
           
        </>
    );
}

export async function getStaticProps() {
    return { props: { header: "one", footer: "one" } };
}
