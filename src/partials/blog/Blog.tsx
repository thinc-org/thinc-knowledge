// @ts-ignore
import getSrc from 'get-src';
import Parser from 'rss-parser';

import { BlogCard } from '@/components/blog/BlogCard';
import { Section } from '@/components/Section';

export const Title = () => {
    return (
        <Section className="bg-white py-4 text-slate-600">
            <h1 className="text-2xl font-semibold text-slate-800 sm:text-5xl">
                Thinc Blogs
            </h1>
            <p className="mt-2">
                บทความให้ความรู้สำหรับการพัฒนาซอฟต์แวร์จากพี่ ๆ ในชมรม
            </p>
        </Section>
    );
};

const parser = new Parser();
const feed = await parser.parseURL('https://medium.com/feed/thinc-org');
const blogs = feed.items.map((item) => {
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
        <Section className="min-h-screen border-t bg-slate-50 pb-10">
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
        </Section>
    );
};
