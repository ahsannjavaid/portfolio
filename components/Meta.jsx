import Head from "next/head";

function Meta({
    title = "Ahsan Javed | Software Engineer",
    keywords = "web dev, web development, web development portfolio, portfolio website, ios development, android development",
    description = "Ahsan Javed is a skillful Software Engineer capable of designing, developing, and implementing high-performance applications. Proficient in SDLC methodologies with a strong foundation in algorithms and data structures. Effective collaborator known for problem-solving, attention to detail, and commitment to continuous learning. Aiming to handle diverse nature of projects.",
    seoTitle = "Ahsan Javed | Software Engineer",
    seoDescription = "Ahsan Javed is a skillful Software Engineer capable of designing, developing, and implementing high-performance applications. Proficient in SDLC methodologies with a strong foundation in algorithms and data structures. Effective collaborator known for problem-solving, attention to detail, and commitment to continuous learning. Aiming to handle diverse nature of projects.",
    seoURL = "https://www.ahsanjaved.netlify.app/",
    seoImage = "https://1drv.ms/i/s!AjAeJR8zLLGzkS7ThPCx5QvRsiLi?e=c367o5",
    twitterCreator = "ahsannjavaid",
    theme = "#08001A"
}) {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content={theme} />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />

            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:url" content={seoURL} />
            <meta property="og:image" content={seoImage} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterCreator} />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={seoImage} />

            <meta
                name="google-site-verification"
                content="MmVd2jx28g4STBoysHpnkBesTWl3Az7y-LEI44m87WY"
            />

            <meta charSet="utf-8" />
            <link rel="canonical" href="https://www.ahsanjaved.netlify.app/" />
            <link rel="icon" href="/icon_0.0.png" />
            <title>{title}</title>
        </Head>
    );
}

export default Meta;
