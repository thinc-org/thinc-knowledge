// @ts-ignore
import getSrc from 'get-src';
import { FiChevronRight, FiYoutube } from 'react-icons/fi';
import Parser from 'rss-parser';

import { BlogCard } from '@/components/blog/BlogCard';
import { RoadmapCard } from '@/components/roadmap/RoadmapCard';
import { Section } from '@/components/Section';

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen flex-col overflow-hidden bg-black supports-[height:100dvh]:min-h-[100dvh]">
            {/* Hero gradient – orange top-left + blue bottom-right (CSS, see global.css) */}
            <div aria-hidden="true" className="hero-gradient inset-0" />
            {/* Light ray – warm beam, top-left (Figma SVG export) */}
            <img
                aria-hidden="true"
                alt=""
                src="/images/hero-ray.webp"
                className="pointer-events-none absolute -left-6 -top-6 w-[720px]"
            />
            {/* Highlight glow at ray head (Figma SVG export) */}
            <img
                aria-hidden="true"
                alt=""
                src="/images/hero-ray-highlight.webp"
                className="pointer-events-none absolute -left-[27px] -top-[17px] w-[150px]"
            />
            <div className="lg:pt-38 relative z-10 flex w-full flex-1 items-start pb-16 pl-10 pr-10 pt-32 sm:pl-20 sm:pt-36 lg:pl-32">
                <div className="w-full max-w-[1400px]">
                    {/* Wordmark */}
                    <div>
                        <img
                            alt="Thinc."
                            className="-ml-3 w-full max-w-[220px] sm:-ml-5 sm:max-w-[300px] md:max-w-[350px] lg:max-w-[370px]"
                            src="/images/thinc-wordmark.svg"
                        />
                    </div>

                    {/* Phonetic + noun */}
                    <div className="mt-6 sm:mt-[26px]">
                        <p className="font-display text-xl font-normal leading-[1.23] tracking-[0.03em] text-white/90 sm:text-2xl md:text-3xl">
                            /θɪŋk/
                        </p>
                        <p className="font-display text-xl font-normal leading-[1.23] tracking-[0.03em] text-white/70 sm:text-2xl md:text-3xl">
                            noun
                        </p>
                    </div>

                    {/* Description */}
                    <div className="mt-6 sm:mt-[27px]">
                        <p className="text-xl font-normal leading-[1.45] tracking-[0.03em] text-text-primary sm:max-w-[50vw] md:text-2xl lg:text-3xl">
                            A{' '}
                            <strong className="font-bold text-white">
                                knowledge platform
                            </strong>{' '}
                            by Thinc. that gathers real skills and hands‑on
                            experience in building tech, from foundations to
                            real implementation. Covering{' '}
                            <strong className="font-bold text-white">
                                Frontend, Backend, Product, Design
                            </strong>
                            , and beyond, it's built to give everyone a
                            foundation strong enough to create their own impact
                            in the tech era.
                        </p>
                    </div>
                </div>
            </div>
            <div
                aria-hidden="true"
                className="bg-grain pointer-events-none absolute inset-0 z-40 opacity-[0.04] mix-blend-overlay"
            />
        </section>
    );
};

export const Values = () => {
    return (
        <section className="relative flex min-h-[calc(100vh+140px)] flex-col items-center justify-start overflow-hidden bg-black px-10 pb-24 pt-32 sm:px-16 lg:h-[80vh] lg:min-h-0 lg:pb-0 lg:pt-0">
            {/* Values gradient (CSS, see global.css) */}
            <div
                aria-hidden="true"
                className="values-gradient left-0 top-0 h-full w-full"
            />
            <div className="relative z-10 grid w-full max-w-screen-lg gap-16 lg:h-[80vh] lg:max-w-screen-xl lg:grid-cols-3 lg:gap-16">
                {/* Love the Pain */}
                <div className="min-w-0 text-center lg:self-center">
                    <h2 className="whitespace-nowrap font-display text-5xl font-bold text-white">
                        Love the Pain
                    </h2>
                    <div className="relative mt-6">
                        <img
                            aria-hidden="true"
                            alt=""
                            src="/images/values-pillar-1.webp"
                            loading="lazy"
                            className="pointer-events-none absolute -top-[60px] left-1/2 w-full max-w-[350px] -translate-x-1/2 lg:max-w-[480px]"
                        />
                        <p className="relative mx-auto w-fit whitespace-pre-line font-display text-2xl font-semibold leading-[1.4] text-white lg:min-h-[101px]">
                            &ldquo;Empathy is not softness.{'\n'}It is the
                            foundation of{'\n'}everything we build.&rdquo;
                        </p>
                    </div>
                </div>

                {/* Fail out loud */}
                <div className="min-w-0 text-center lg:mb-24 lg:self-end">
                    <h2 className="whitespace-nowrap font-display text-5xl font-bold text-white">
                        Fail out loud
                    </h2>
                    <div className="relative mt-6">
                        <img
                            aria-hidden="true"
                            alt=""
                            src="/images/values-pillar-2.webp"
                            loading="lazy"
                            className="pointer-events-none absolute -top-[48px] left-1/2 w-full max-w-[350px] -translate-x-1/2 lg:max-w-[480px]"
                        />
                        <p className="relative mx-auto w-fit whitespace-pre-line font-display text-2xl font-semibold leading-[1.4] text-white lg:min-h-[101px]">
                            &ldquo;Fail together,{'\n'}laugh together,{'\n'}grow
                            together.&rdquo;
                        </p>
                    </div>
                </div>

                {/* Impact at Scale */}
                <div className="min-w-0 text-center lg:self-center">
                    <h2 className="whitespace-nowrap font-display text-5xl font-bold text-white">
                        Impact at Scale
                    </h2>
                    <div className="relative mt-6">
                        <img
                            aria-hidden="true"
                            alt=""
                            src="/images/values-pillar-3.webp"
                            loading="lazy"
                            className="pointer-events-none absolute -top-[56px] left-1/2 w-full max-w-[350px] -translate-x-1/2 lg:hidden"
                        />
                        <img
                            aria-hidden="true"
                            alt=""
                            src="/images/values-pillar-1.webp"
                            loading="lazy"
                            className="pointer-events-none absolute -top-[60px] left-1/2 hidden w-full max-w-[350px] -translate-x-1/2 lg:block lg:max-w-[480px]"
                        />
                        <p className="relative mx-auto w-fit whitespace-pre-line font-display text-2xl font-semibold leading-[1.4] text-white lg:min-h-[101px]">
                            &ldquo;Knowledge is our fuel.{'\n'}Impact is our
                            footprint.&rdquo;
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
        <Section
            wide
            data-section-theme="dark"
            className="bg-bg-primary py-16 text-text-secondary transition-colors duration-normal md:py-24"
        >
            <div className="flex w-full flex-col space-y-16">
                <div className="space-y-10">
                    <div className="space-y-3">
                        <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
                            Developer Roadmap
                        </h2>
                        <p className="font-body text-lg">
                            แหล่งรวมเส้นทางในการเริ่มต้นเรียนรู้ทักษะการเขียนโปรแกรมและพัฒนาซอฟต์แวร์
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {roadmaps?.slice(0, 4).map((roadmap) => (
                            <RoadmapCard
                                key={roadmap.id}
                                slug={roadmap.slug}
                                level={roadmap.data.level}
                                title={roadmap.data.title}
                                description={roadmap.data.description}
                            />
                        ))}
                    </div>
                    <div className="flex w-full justify-center pt-4">
                        <a
                            href="/roadmap"
                            className="btn-primary group flex items-center gap-2 px-7 py-3.5 text-base font-semibold md:px-8 md:py-3.5"
                        >
                            Explore all roadmaps
                            <FiChevronRight className="text-lg transition-transform group-hover:translate-x-1 md:text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

const parser = new Parser();
const feed = await parser.parseURL('https://medium.com/feed/thinc-org');
const blogs = feed.items.slice(0, 4).map((item) => {
    const imgSrc = getSrc(item['content:encoded']).replace('/1024/', '/800/');
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
        <Section
            wide
            data-section-theme="dark"
            className="bg-white/[0.06] py-16 text-text-secondary transition-colors duration-normal md:py-24"
        >
            <div className="flex w-full flex-col space-y-16">
                <div className="space-y-10">
                    <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-md space-y-3 sm:max-w-[50%]">
                            <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
                                Blogs
                            </h2>
                            <p className="font-body text-lg">
                                บทความให้ความรู้สำหรับการพัฒนาซอฟต์แวร์จากพี่ ๆ
                                ในชมรม
                            </p>
                        </div>

                        <a
                            href="https://medium.com/thinc-org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex shrink-0 items-center gap-1.5 self-start whitespace-nowrap px-4 py-2 text-sm font-semibold sm:self-auto md:px-5 md:py-2.5 md:text-base"
                        >
                            <span>medium.com/thinc-org</span>
                            <FiChevronRight className="text-lg md:text-xl" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                            className="btn-secondary group flex items-center gap-2 px-7 py-3.5 text-base font-semibold md:px-8 md:py-3.5"
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

export const Videos = ({ all = false }: { all?: boolean }) => {
    // standalone /videos page: section heading is the page's h1
    const Heading = all ? 'h1' : 'h2';
    return (
        <Section
            wide={!all}
            data-section-theme="dark"
            className={`bg-bg-primary py-16 text-text-secondary transition-colors duration-normal md:py-24 ${
                all ? 'pt-24 md:pt-28' : ''
            }`}
        >
            <div className="flex w-full flex-col space-y-16">
                <div className="space-y-10">
                    <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-md space-y-3 sm:max-w-[50%]">
                            <Heading className="font-display text-3xl font-bold text-text-primary md:text-4xl">
                                Videos
                            </Heading>
                            <p className="font-body text-lg">
                                วิดีโอสอนการพัฒนาซอฟต์แวร์และวิธีการใช้เครื่องมือต่าง
                                ๆ โดยชมรม Thinc.
                            </p>
                        </div>
                        <a
                            href="https://www.youtube.com/@thinc-org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex shrink-0 items-center gap-1.5 self-start whitespace-nowrap px-4 py-2 text-sm font-semibold sm:self-auto md:px-5 md:py-2.5 md:text-base"
                        >
                            <FiYoutube className="text-lg text-red-500 md:text-xl" />
                            <span>@thinc-org</span>
                            <FiChevronRight className="text-lg md:text-xl" />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {(all
                            ? videosPlaylists
                            : videosPlaylists.slice(0, 2)
                        ).map((video) => (
                            <div
                                key={video.title}
                                className="card flex flex-col items-start gap-4 bg-bg-secondary"
                            >
                                <iframe
                                    width="560"
                                    height="315"
                                    src={video.link}
                                    loading="lazy"
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="relative z-10 aspect-video h-auto w-full rounded-sm border border-border-primary"
                                />
                                <div className="relative z-10 flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-2">
                                        {video.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-border-primary bg-border-secondary px-2.5 py-1 text-xs font-semibold text-accent-primary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-text-primary md:text-2xl">
                                        {video.title}
                                    </h3>
                                    <p className="text-sm leading-normal text-text-secondary md:text-base">
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {!all && (
                        <div className="flex w-full justify-center pt-4">
                            <a
                                href="/videos"
                                className="btn-secondary group flex items-center gap-2 px-7 py-3.5 text-base font-semibold md:px-8 md:py-3.5"
                            >
                                Explore all videos
                                <FiChevronRight className="text-lg transition-transform group-hover:translate-x-1 md:text-xl" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};
