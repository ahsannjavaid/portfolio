import React from "react";
import Navigation from "@/components/blogs/Navigation";
// import Image from "next/image";
import BlogItem from "@/components/blogs/layouts/BlogItem";
import TopicItem from "@/components/blogs/layouts/TopicItem";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loader from "@/components/Loaders/Loader";
import useAxios from "@/hooks/useAxios";

export default function Page() {
    const router = useRouter();

    const mode = useSelector((state) => state.darkMode);
    const [selectedTopic, setSelectedTopic] = React.useState(null);
    const [blogList, setBlogList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const blogs = useAxios({
        method: "get",
        url: "/api/getBlogs",
        headers: JSON.stringify({ accept: "*/*" }),
    });

    React.useEffect(() => {
        document.title = "!dea - Read all my latest blogs";

        setLoading(true);
        if (blogs.response !== null) {
            setBlogList(blogs.response);
            setLoading(false);
        }

        if (!router.isReady) return;

        if (router.query.topic) {
            const topicName = router.query.topic;
            setSelectedTopic(topicName);
        }
    }, [router.isReady, router.query, blogs]);

    const handleSelectTopic = (topic) => {
        setSelectedTopic(topic);
        router.push(`/idea?topic=${topic}`);
    };

    const handleDeselectTopic = () => {
        setSelectedTopic(null);
        router.push(`/idea`);
    };

    return (
        <div
            className="text-black h-full"
            style={{ background: `${mode.bg}`, color: `${mode.text}` }}
        >
            {/* Page Nav bar */}
            <Navigation />

            {/* Page body */}
            <div className="w-full h-full pt-[4.5rem]">
                {/* Page banner */}
                {/* <div className="relative w-full h-0 pb-[20%]">
                    <Image
                        src={"/Hero.jpeg"}
                        alt="Image in the blog section banner"
                        fill
                        className="object-cover"
                        loading="lazy"
                    />
                </div> */}

                {/* Page section 1 */}
                <div className="flex flex-row justify-evenly items-start w-full p-5 smallMobile:flex-wrap-reverse mobile:flex-wrap-reverse tablet:flex-wrap-reverse laptop:flex-nowrap desktop:flex-nowrap largeDesktop:flex-nowrap">
                    <div className="smallMobile:w-full mobile:w-full tablet:w-full laptop:w-2/3 desktop:w-2/3 largeDesktop:w-2/3 smallMobile:border-0 mobile:border-0 tablet:border-0 laptop:border-r-[0.05rem] desktop:border-r-[0.05rem] largeDesktop:border-r-[0.05rem] border-gray-300">
                        <div>
                            {/* <div className="font-semibold text-2xl">
                                        Latest blogs
                                </div> */}
                            {!loading ? (
                                blogList?.map((blog, i) => (
                                    <BlogItem
                                        author={blog.author}
                                        blogHead={blog.head}
                                        blogBody={blog.opening.slice(0, 100)+"..."}
                                        date={blog.date}
                                        image={blog.images[0].headImage.src}
                                        text={mode.text}
                                        key={i}
                                    />
                                ))
                            ) : (
                                <Loader />
                            )}
                        </div>
                    </div>

                    <div className="smallMobile:w-full mobile:w-full tablet:w-full laptop:w-1/3 desktop:w-1/3 largeDesktop:w-1/3 pt-3 smallMobile:relative mobile:relative tablet:relative laptop:sticky desktop:sticky largeDesktop:sticky smallMobile:top-0 mobile:top-0 tablet:top-0 laptop:top-[4.5rem] desktop:top-[4.5rem] largeDesktop:top-[4.5rem]">
                        <div className="px-5 flex flex-col justify-start items-start gap-2">
                            <div className="font-semibold text-2xl">Topics</div>

                            <div className="py-2 flex flex-row justify-start items-center flex-wrap gap-3">
                                <TopicItem
                                    selected={selectedTopic === "Programming"}
                                    topic={"Programming"}
                                    onSelect={() =>
                                        handleSelectTopic("Programming")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={selectedTopic === "Data Science"}
                                    topic={"Data Science"}
                                    onSelect={() =>
                                        handleSelectTopic("Data Science")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={selectedTopic === "Technology"}
                                    topic={"Technology"}
                                    onSelect={() =>
                                        handleSelectTopic("Technology")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={
                                        selectedTopic === "Self Improvement"
                                    }
                                    topic={"Self Improvement"}
                                    onSelect={() =>
                                        handleSelectTopic("Self Improvement")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={selectedTopic === "Writing"}
                                    topic={"Writing"}
                                    onSelect={() =>
                                        handleSelectTopic("Writing")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={selectedTopic === "Politics"}
                                    topic={"Politics"}
                                    onSelect={() =>
                                        handleSelectTopic("Politics")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={selectedTopic === "Leet Code"}
                                    topic={"Leet Code"}
                                    onSelect={() =>
                                        handleSelectTopic("Leet Code")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                                <TopicItem
                                    selected={
                                        selectedTopic === "Machine Learning"
                                    }
                                    topic={"Machine Learning"}
                                    onSelect={() =>
                                        handleSelectTopic("Machine Learning")
                                    }
                                    onDeselect={handleDeselectTopic}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
