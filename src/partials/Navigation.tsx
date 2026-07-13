import { useEffect, useState } from 'react';
import { FiInstagram, FiMenu, FiX } from 'react-icons/fi';

import { socialLinks } from '@/partials/Footer';

const drawerSocials = socialLinks.filter(
    ({ href }) => href !== 'https://thinc.in.th',
);

const navLinks = [
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Blog', href: '/blog' },
    { label: 'Videos', href: '/videos' },
];

export const Navigation = ({ pathname = '' }: { pathname?: string }) => {
    const [showNav, setShowNav] = useState(false);
    const isActive = (href: string) => pathname.startsWith(href);

    // open drawer: lock page scroll, close on Escape
    useEffect(() => {
        if (!showNav) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setShowNav(false);
        };
        document.documentElement.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.documentElement.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [showNav]);

    return (
        <>
            {showNav && (
                <div className="fixed inset-0 z-[60] flex flex-col bg-black/75 backdrop-blur-xl backdrop-brightness-[.3] backdrop-saturate-[.6] text-text-primary sm:hidden">
                    <div className="flex h-14 items-center justify-between px-8">
                        <a
                            href="/"
                            onClick={() => setShowNav(false)}
                            className="-ml-2 flex items-center gap-2.5"
                        >
                            <img alt="" className="h-7 w-auto" src="/images/thinc-mark.svg" />
                            <span className="text-lg font-semibold tracking-[0.01em] text-text-primary">Thinc.</span>
                        </a>
                        <button
                            onClick={() => setShowNav(false)}
                            aria-label="Close menu"
                            className="flex items-center justify-center text-text-secondary"
                        >
                            <FiX size={22} />
                        </button>
                    </div>

                    <div className="flex flex-1 flex-col items-center justify-center space-y-8 px-8">
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                aria-current={isActive(href) ? 'page' : undefined}
                                className={`text-3xl font-bold font-display duration-fast hover:text-accent-primary ${
                                    isActive(href)
                                        ? 'text-accent-primary'
                                        : 'text-text-primary'
                                }`}
                                onClick={() => setShowNav(false)}
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col items-center space-y-5 px-8 pb-16">
                        <a
                            href="https://thinc.in.th"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center rounded-full bg-accent-primary py-3.5 text-lg font-semibold text-black shadow-sm duration-fast hover:shadow-[0_0_32px_-6px_var(--orange)] active:scale-[0.98]"
                        >
                            Main Site
                        </a>
                        <div className="flex items-center gap-2">
                            {drawerSocials.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-primary text-text-secondary duration-fast hover:border-accent-primary hover:text-accent-primary"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <header className="fixed top-0 left-0 right-0 z-50 flex w-full justify-center border-b border-white/10 bg-black/20 backdrop-blur-md transition-colors duration-normal">
                <div className="flex w-full max-w-screen-lg items-center justify-between px-8 h-14">
                    <div className="flex items-center space-x-10">
                        {/* Logo */}
                        <a
                            href="/"
                            className="-ml-2 flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--sky)]"
                        >
                            <img alt="" className="h-7 w-auto" src="/images/thinc-mark.svg" />
                            <span className="text-lg font-semibold tracking-[0.01em] text-white">Thinc.</span>
                        </a>
                        {/* Nav links */}
                        <nav className="hidden items-center space-x-6 sm:flex">
                            {navLinks.map(({ label, href }) => (
                                <a
                                    key={href}
                                    href={href}
                                    aria-current={isActive(href) ? 'page' : undefined}
                                    className={`text-sm transition-colors ${
                                        isActive(href)
                                            ? 'font-semibold text-accent-primary'
                                            : 'text-white/70 hover:text-white'
                                    }`}
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://thinc.in.th"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden h-8 items-center rounded-lg border border-border-primary px-4 text-sm text-white/70 transition-colors duration-fast hover:border-white/40 hover:text-white sm:flex"
                        >
                            Main Site
                        </a>
                        <a
                            href="https://www.instagram.com/thinc.in.th"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden h-8 w-8 items-center justify-center rounded-lg border border-border-primary text-white/70 transition-colors duration-fast hover:border-white/40 hover:text-white sm:flex"
                        >
                            <FiInstagram size={16} />
                        </a>
                        <button
                            onClick={() => setShowNav(true)}
                            aria-label="Open menu"
                            aria-expanded={showNav}
                            className="flex items-center justify-center text-white/70 sm:hidden"
                        >
                            <FiMenu size={22} />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};
