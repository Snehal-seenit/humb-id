import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" href="/id/images/logo/favicon.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Public+Sans:wght@500;600;700;800&display=swap"
					rel="stylesheet"
				/>
				
			<script defer="defer" type="text/javascript" src="https://www.humb.support/im_livechat/loader/2"></script>
            <script defer="defer" type="text/javascript" src="https://www.humb.support/im_livechat/assets_embed.js"></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
