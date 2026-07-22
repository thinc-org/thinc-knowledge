import { useEffect, useRef, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

type Heading = { depth: number; slug: string; text: string };

export const TableOfContents = ({ headings }: { headings: Heading[] }) => {
    const items = headings.filter((heading) => heading.depth >= 2 && heading.depth <= 3);
    const [activeSlug, setActiveSlug] = useState('');
    const observerRef = useRef<IntersectionObserver | null>(null);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const elements = items
            .map((item) => document.getElementById(item.slug))
            .filter((el): el is HTMLElement => el !== null);

        observerRef.current = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setActiveSlug(visible.target.id);
            },
            { rootMargin: '0px 0px -70% 0px' },
        );

        elements.forEach((el) => observerRef.current?.observe(el));
        return () => observerRef.current?.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!activeSlug || !navRef.current) return;
        const activeLink = navRef.current.querySelector(`a[href="#${CSS.escape(activeSlug)}"]`);
        activeLink?.scrollIntoView({ block: 'nearest' });
    }, [activeSlug]);

    if (items.length === 0) return null;

    const list = (
        <ul className="text-lg">
            {items.map((item) => (
                <li key={item.slug} className={item.depth === 3 ? 'pl-4' : ''}>
                    <a
                        href={`#${item.slug}`}
                        className={`block py-1.5 transition-colors duration-fast ${
                            activeSlug === item.slug
                                ? 'font-semibold text-white'
                                : 'text-text-secondary hover:text-text-primary'
                        }`}
                    >
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            {/* Mobile/tablet: collapsed by default, native disclosure (no JS state needed) */}
            <details className="group mb-6 rounded-lg border border-border-primary bg-bg-secondary px-4 lg:hidden">
                <summary className="flex cursor-pointer select-none items-center justify-between py-3 text-sm font-semibold uppercase tracking-wide text-text-tertiary marker:hidden [&::-webkit-details-marker]:hidden">
                    Table of Contents
                    <FiChevronRight className="transition-transform duration-fast group-open:rotate-90" />
                </summary>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-normal ease-out group-open:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                        <div className="pb-3">{list}</div>
                    </div>
                </div>
            </details>

            {/* Desktop: sticky sidebar with scrollspy */}
            <nav
                ref={navRef}
                aria-label="Table of contents"
                className="sticky top-24 hidden max-h-[calc(100vh-8rem)] shrink-0 basis-56 overflow-y-auto [scrollbar-width:none] lg:block [&::-webkit-scrollbar]:hidden"
            >
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-text-tertiary">Table of Contents</p>
                {list}
            </nav>
        </>
    );
};
