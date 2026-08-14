// @ts-ignore
import getSrc from 'get-src';
import { FiChevronRight } from 'react-icons/fi';
import Parser from 'rss-parser';

import { BlogCard } from '@/components/blog/BlogCard';
import { Section } from '@/components/Section';

export const Title = () => {
    return (
        <Section
            data-section-theme="dark"
            className="bg-bg-primary pb-10 pt-24 text-text-secondary md:pt-28"
        >
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-md space-y-3 sm:max-w-[50%]">
                    <h1 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
                        Thinc Blogs
                    </h1>
                    <p className="font-body text-lg">
                        บทความให้ความรู้สำหรับการพัฒนาซอฟต์แวร์จากพี่ ๆ ในชมรม
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
        </Section>
    );
};

const parser = new Parser();
const feed = await parser.parseURL('https://medium.com/feed/thinc-org');
const blogs = feed.items.map((item) => {
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
            data-section-theme="dark"
            className="bg-bg-primary pb-16 text-text-secondary md:pb-24"
        >
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
        </Section>
    );
};
