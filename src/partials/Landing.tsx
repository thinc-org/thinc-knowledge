// @ts-ignore
import getSrc from 'get-src';
import { FiChevronRight, FiYoutube } from 'react-icons/fi';
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
                    Thinc. 2024
                </h1>
                <p className="max-w-xl text-slate-400">
                    กิจกรรมที่พี่ ๆ ในชมรม Thinc.
                    จะมาสอนและแชร์วิชาในการพัฒนาโปรแกรมพร้อมทั้งวิธีการ
                    Implement ผลงานตัวเองในแบบพื้นฐานที่สุด
                    ในหลากหลายสายงานอย่าง Frontend, Backend, Project Manager,
                    และ UX/UI
                </p>
                {/* <div className="pt-10">
                    <a
                        href="https://thinc.in.th/link/first_act"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-slate-50 px-8 py-3 font-semibold text-thinc-blue"
                    >
                        ลงทะเบียน
                    </a>
                </div> */}
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
                    <div className="flex w-full justify-between">
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
                                Blogs
                            </h2>
                            <p>
                                บทความให้ความรู้สำหรับการพัฒนาซอฟต์แวร์จากพี่ ๆ
                                ในชมรม
                            </p>
                        </div>

                        <a
                            href="https://medium.com/thinc-org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <span className="text-lg font-semibold text-thinc-blue">
                                medium.com/thinc-org
                            </span>
                            <FiChevronRight className="text-2xl text-thinc-blue" />
                        </a>
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

const videosPlaylists = [
    {
        title: 'Basic TypeScript',
        description:
            'การสอนการเขียนโปรแกรมภาษา TypeScript จากกิจกรรม Get Ready, Developer! 2022',
        link: 'https://www.youtube.com/embed/videoseries?si=7ifkGGUWEg-o08Rp&amp;list=PLDE8jVJ4bnxwUu6agtUGu354udaxtVnUN',
        tags: ['TypeScript', 'Basic'],
    },
    {
        title: 'React Sharing Session',
        description: 'กิจกรรม React Sharing Session โดยชมรม Thinc.',
        link: 'https://www.youtube.com/embed/videoseries?si=P6WMVBSZsYc3FWL8&amp;list=PLDE8jVJ4bnxxBA0bcGIjUjmVSQQWnmmc2',
        tags: ['React', 'Frontend', 'Intermediate'],
    },
    {
        title: 'Database Sharing Session',
        description: 'กิจกรรม Database Sharing Session โดยชมรม Thinc.',
        link: 'https://www.youtube.com/embed/UntJ6KzUFJQ?si=A8iMAEwTpHZMP1o',
        tags: ['Database', 'Backend', 'Intermediate'],
    },
    {
        title: 'Docker Session by Cleverse',
        description: 'กิจกรรม React Sharing Session โดยชมรม Thinc.',
        link: 'https://www.youtube.com/embed/mapfxh2cLZ8?si=i5VEbWeSIwRmkQYA',
        tags: ['Docker', 'Backend', 'Intermediate'],
    },
    {
        title: 'Thinc. First Act 2022',
        description:
            'Thinc. First Act 2022 Sessions (Frontend/Backend/UX-UI/Project Management)',
        link: 'https://www.youtube.com/embed/videoseries?si=b0_ZFpw2tjywsIE7&amp;list=PLDE8jVJ4bnxxEDy4yv_lCj91_iU0k9zGA',
        tags: [
            'Frontend',
            'Backend',
            'UX-UI',
            'Project Management',
            'Beginner',
        ],
    },
];

export const Videos = () => {
    return (
        <Section className="bg-white pb-10 text-slate-600">
            <div className="flex w-full flex-col space-y-16">
                <div className="space-y-6">
                    <div className="flex w-full justify-between">
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
                                Videos
                            </h2>
                            <p>
                                วิดีโอสอนการพัฒนาซอฟต์แวร์และวิธีการใช้เครื่องมือต่าง
                                ๆ โดยชมรม Thinc.
                            </p>
                        </div>
                        <a
                            href="https://www.youtube.com/@thinc-org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <FiYoutube className="text-6xl text-red-500 hover:text-red-600" />
                            <span className="text-lg font-semibold text-thinc-blue">
                                @thinc-org
                            </span>
                            <FiChevronRight className="text-2xl text-thinc-blue" />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2">
                        {videosPlaylists.map((video) => (
                            <div
                                key={video.title}
                                className="flex flex-col items-start gap-4 rounded-lg border border-slate-100 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg"
                            >
                                <iframe
                                    width="560"
                                    height="315"
                                    src={video.link}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="aspect-video h-auto w-full rounded-lg"
                                />
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-2">
                                        {video.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        {video.title}
                                    </h3>
                                    <p className="text-slate-400">
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};
