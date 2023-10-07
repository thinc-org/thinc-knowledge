// @ts-ignore
import getSrc from 'get-src';
import Parser from 'rss-parser';

import { BlogCard } from '@/components/blog/BlogCard';
import { RoadmapCard } from '@/components/roadmap/RoadmapCard';
import { Section } from '@/components/Section';

export const Hero = () => {
    return (
        <Section className="h-[60vh] bg-gradient-to-b from-thinc-blue to-slate-950 md:h-[65vh]">
            <div className="flex flex-col items-center space-y-6 py-16 text-center md:py-20">
                <span className="-mb-3.5 font-semibold uppercase text-thinc-accent">
                    Get Ready For
                </span>
                <h1 className="text-3xl font-semibold md:text-5xl">
                    Thinc First Act 2023
                </h1>
                <p className="max-w-xl text-slate-400">
                    กิจกรรมที่พี่ ๆ ในชมรม Thinc.
                    จะมาสอนและแชร์วิชาในการพัฒนาโปรแกรมพร้อมทั้งวิธีการ
                    Implement ผลงานตัวเองในแบบพื้นฐานที่สุด
                    ในหลากหลายสายงานอย่าง Frontend, Backend, Project Manager,
                    และ UX/UI
                </p>
                <div className="pt-10">
                    <a
                        href="https://thinc.in.th/link/first_act"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-slate-50 px-8 py-3 font-semibold text-thinc-blue"
                    >
                        ลงทะเบียน
                    </a>
                </div>
            </div>
        </Section>
    );
};

export const Roadmaps = ({
    roadmaps,
}: {
    roadmaps: {
        id: string;
        slug: string;
        data: {
            title: string;
            description: string;
            level: string;
        };
    }[];
}) => {
    return (
        <Section className="bg-white pb-10 text-slate-600">
            <div className="flex w-full flex-col space-y-16">
                <div className="space-y-6">
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
                            Developer Roadmap
                        </h2>
                        <p>
                            แหล่งรวมเส้นทางในการเริ่มต้นเรียนรู้ทักษะการเขียนโปรแกรมและพัฒนาซอฟต์แวร์
                        </p>
                    </div>
                    {roadmaps?.map((roadmap) => (
                        <RoadmapCard
                            key={roadmap.id}
                            slug={roadmap.slug}
                            level={roadmap.data.level}
                            title={roadmap.data.title}
                            description={roadmap.data.description}
                        />
                    ))}
                    {/* <div className="relative h-40 select-none opacity-80">
                        <div className="absolute z-10 grid h-full w-full place-content-center bg-gradient-to-b from-transparent to-white"></div>
                        <div className="absolute grid h-full w-full place-content-center rounded-lg border-2 bg-slate-50">
                            <p>Coming Soon...</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </Section>
    );
};

const parser = new Parser();
const feed = await parser.parseURL('https://medium.com/feed/thinc-org');
const blogs = feed.items.slice(0, 4).map((item) => {
    const imgSrc = getSrc(item['content:encoded']).replace('/1024/', '/400/');
    const content = item['content:encodedSnippet'];
    return {
        title: item.title,
        date: item.pubDate,
        creator: item.creator,
        link: item.link,
        imgSrc,
        content,
    };
});

export const Blogs = () => {
    return (
        <Section className="border-t bg-slate-50 pb-10 text-slate-600">
            <div className="flex w-full flex-col space-y-16">
                <div className="space-y-6">
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
                            Blogs
                        </h2>
                        <p>แหล่งรวมบทความ...</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {blogs.map((blog) => {
                            return (
                                <BlogCard
                                    key={blog.title}
                                    title={blog.title ?? ''}
                                    link={blog.link ?? ''}
                                    imgSrc={blog.imgSrc}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
};
