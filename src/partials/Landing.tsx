// @ts-ignore
import getSrc from 'get-src';
import { FiChevronRight, FiYoutube } from 'react-icons/fi';
import Parser from 'rss-parser';

import { BlogCard } from '@/components/blog/BlogCard';
import { RoadmapCard } from '@/components/roadmap/RoadmapCard';
import { Section } from '@/components/Section';

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
            {/* Hero gradient – orange top-left + blue bottom-right (CSS, see global.css) */}
            <div
                aria-hidden="true"
                className="hero-gradient inset-0"
            />
            {/* Light ray – warm beam, top-left (Figma SVG export) */}
            <img
                aria-hidden="true"
                alt=""
                src="/images/hero-ray.webp"
                className="pointer-events-none absolute -top-6 -left-6 w-[720px]"
            />
            {/* Highlight glow at ray head (Figma SVG export) */}
            <img
                aria-hidden="true"
                alt=""
                src="/images/hero-ray-highlight.webp"
                className="pointer-events-none absolute -top-[17px] -left-[27px] w-[150px]"
            />
            <div className="relative z-10 flex w-full flex-1 items-start pl-10 pb-16 sm:pl-32 pt-40">
                <div className="w-full max-w-[1400px]">
                    {/* Wordmark */}
                    <div>
                        <img
                            alt="Thinc."
                            className="-ml-3 w-full max-w-[220px] sm:-ml-5 sm:max-w-[380px]"
                            src="/images/thinc-wordmark.svg"
                        />
                    </div>

                    {/* Phonetic + noun */}
                    <div className="mt-6 sm:mt-[26px]">
                        <p className="font-display font-normal text-2xl leading-[1.23] tracking-[0.03em] text-white/90 sm:text-[26px]">
                            /θɪŋk/
                        </p>
                        <p className="font-display font-normal text-2xl leading-[1.23] tracking-[0.03em] text-white/70 sm:text-[26px]">
                            noun
                        </p>
                    </div>

                    {/* Description */}
                    <div className="mt-6 sm:mt-[27px]">
                        <p className="font-display font-normal text-2xl leading-[1.45] tracking-[0.03em] text-text-primary sm:text-[30px]">
                            The real <strong className="font-bold text-white">startup incubator</strong>.{' '}
                            <br className="sm:hidden" />
                            Where builders and dreamers{' '}
                            <br className="sm:hidden" />
                            turn <strong className="font-bold text-white">ideas</strong> into{' '}
                            <strong className="font-bold text-white">real startups</strong>{' '}
                            <br className="sm:hidden" />
                            through close <strong className="font-bold text-white">mentorship</strong>{' '}
                            <br className="sm:hidden" />
                            from founder alumni and{' '}
                            <br className="sm:hidden" />
                            take full ownership.
                        </p>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-40 opacity-[0.04] mix-blend-overlay bg-grain" />
        </section>
	);
};

export const Values = () => {
    return (
        <section className="relative flex min-h-[calc(100vh+140px)] flex-col items-center justify-start overflow-hidden bg-black px-10 pb-24 pt-32 sm:px-32 md:min-h-0 md:h-screen md:pb-0 md:pt-44">
            {/* Values gradient (CSS, see global.css) */}
            <div
                aria-hidden="true"
                className="values-gradient top-0 left-0 h-full w-full"
            />
            <div className="relative z-10 grid w-full max-w-screen-lg gap-16 md:grid-cols-3">
                {/* Love the Pain */}
                <div className="text-center md:text-left">
                    <h2 className="font-display text-5xl font-bold text-white">
                        Love the Pain
                    </h2>
                    <div className="relative mt-6">
                        <img
                            aria-hidden="true"
                            alt=""
                            src="/images/values-pillar-1.webp"
                            className="pointer-events-none absolute left-1/2 -top-[60px] w-full max-w-[350px] -translate-x-1/2"
                        />
                        <p className="relative whitespace-pre-line font-display text-2xl font-semibold leading-[1.4] text-white">
                            &ldquo;Empathy is not softness.{'\n'}It is the foundation of{'\n'}everything we build.&rdquo;
                        </p>
                    </div>
                </div>

                {/* Fail out loud */}
                <div className="text-center md:text-left">
                    <h2 className="font-display text-5xl font-bold text-white">
                        Fail out loud
                    </h2>
                    <div className="relative mt-6">
                        <img
                            aria-hidden="true"
                            alt=""
                            src="/images/values-pillar-2.webp"
                            className="pointer-events-none absolute left-1/2 -top-[48px] w-full max-w-[350px] -translate-x-1/2"
                        />
                        <p className="relative whitespace-pre-line font-display text-2xl font-semibold leading-[1.4] text-white">
                            &ldquo;Fail together,{'\n'}laugh together,{'\n'}grow together.&rdquo;
                        </p>
                    </div>
                </div>

                {/* Impact at Scale */}
                <div className="text-center md:text-left">
                    <h2 className="font-display text-5xl font-bold text-white">
                        Impact at Scale
                    </h2>
                    <div className="relative mt-6">
                        <img
                            aria-hidden="true"
                            alt=""
                            src="/images/values-pillar-3.webp"
                            className="pointer-events-none absolute left-1/2 -top-[56px] w-full max-w-[350px] -translate-x-1/2"
                        />
                        <p className="relative whitespace-pre-line font-display text-2xl font-semibold leading-[1.4] text-white">
                            &ldquo;Knowledge is our fuel.{'\n'}Impact is our footprint.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </section>
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
        <Section data-section-theme="dark" className="border-t border-border-primary bg-bg-primary py-16 md:py-24 text-text-secondary transition-colors duration-normal">
            <div className="flex w-full flex-col space-y-16">
                <div className="space-y-10">
                    <div className="space-y-3 border-t border-border-primary pt-4">
                        <h2 className="text-3xl font-bold font-display text-text-primary md:text-4xl">
                            Developer Roadmap
                        </h2>
                        <p className="text-lg font-body">
                            แหล่งรวมเส้นทางในการเริ่มต้นเรียนรู้ทักษะการเขียนโปรแกรมและพัฒนาซอฟต์แวร์
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {roadmaps?.map((roadmap) => (
                            <RoadmapCard
                                key={roadmap.id}
                                slug={roadmap.slug}
                                level={roadmap.data.level}
                                title={roadmap.data.title}
                                description={roadmap.data.description}
                                className="border-border-primary bg-bg-secondary hover:border-accent-primary"
                            />
                        ))}
                    </div>
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
        <Section data-section-theme="dark" className="border-t border-border-primary bg-bg-secondary py-16 md:py-24 text-text-secondary transition-colors duration-normal">
            <div className="flex w-full flex-col space-y-16">
                <div className="space-y-10">
                    <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-t border-border-primary pt-4">
                        <div className="space-y-3 max-w-md">
                            <h2 className="text-3xl font-bold font-display text-text-primary md:text-4xl">
                                Blogs
                            </h2>
                            <p className="text-lg font-body">
                                บทความให้ความรู้สำหรับการพัฒนาซอฟต์แวร์จากพี่ ๆ
                                ในชมรม
                            </p>
                        </div>

                        <a
                            href="https://medium.com/thinc-org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex shrink-0 whitespace-nowrap items-center gap-1.5 rounded-full border border-border-primary bg-bg-primary px-4 py-2 text-sm font-semibold text-text-primary transition-all duration-fast hover:border-accent-primary hover:text-accent-primary self-start sm:self-auto md:px-5 md:py-2.5 md:text-base"
                        >
                            <span>medium.com/thinc-org</span>
                            <FiChevronRight className="text-lg md:text-xl" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
                    <div className="flex w-full justify-center pt-4">
                        <a
                            href="/blog"
                            className="group flex items-center gap-2 rounded-full bg-accent-primary px-7 py-3.5 text-base font-semibold text-black shadow-sm transition-all duration-normal hover:shadow-[0_0_32px_-6px_var(--orange)] md:px-8 md:py-3.5"
                        >
                            Explore all blogs
                            <FiChevronRight className="text-lg transition-transform group-hover:translate-x-1 md:text-xl" />
                        </a>
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
        <Section data-section-theme="dark" className="border-t border-border-primary bg-bg-primary py-16 md:py-24 text-text-secondary transition-colors duration-normal">
            <div className="flex w-full flex-col space-y-16">
                <div className="space-y-10">
                    <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-t border-border-primary pt-4">
                        <div className="space-y-3 max-w-md">
                            <h2 className="text-3xl font-bold font-display text-text-primary md:text-4xl">
                                Videos
                            </h2>
                            <p className="text-lg font-body">
                                วิดีโอสอนการพัฒนาซอฟต์แวร์และวิธีการใช้เครื่องมือต่าง
                                ๆ โดยชมรม Thinc.
                            </p>
                        </div>
                        <a
                            href="https://www.youtube.com/@thinc-org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex shrink-0 whitespace-nowrap items-center gap-1.5 rounded-full border border-border-primary bg-bg-secondary px-4 py-2 text-sm font-semibold text-text-primary transition-all duration-fast hover:border-accent-primary hover:text-accent-primary self-start sm:self-auto md:px-5 md:py-2.5 md:text-base"
                        >
                            <FiYoutube className="text-lg text-red-500 md:text-xl" />
                            <span>@thinc-org</span>
                            <FiChevronRight className="text-lg md:text-xl" />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {videosPlaylists.map((video) => (
                            <div
                                key={video.title}
                                className="group/tilt flex flex-col items-start gap-4 rounded-xl border border-border-primary bg-bg-secondary p-5 shadow-lg transition-all duration-slow hover:shadow-2xl liquid-glass relative overflow-hidden"
                            >
                                <iframe
                                    width="560"
                                    height="315"
                                    src={video.link}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="aspect-video h-auto w-full rounded-lg relative z-10 border border-border-primary"
                                />
                                <div className="flex flex-col gap-2 relative z-10">
                                    <div className="flex flex-wrap gap-2">
                                        {video.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-border-secondary px-2.5 py-1 text-xs font-semibold text-accent-primary border border-border-primary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-text-primary">
                                        {video.title}
                                    </h3>
                                    <p className="text-text-tertiary text-sm leading-normal">
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
