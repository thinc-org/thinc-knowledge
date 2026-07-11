import { useState } from 'react';
import { FiInstagram, FiMenu, FiX } from 'react-icons/fi';

export const Navigation = () => {
    const [showNav, setShowNav] = useState(false);

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
                            className="flex items-center justify-center text-text-secondary"
                        >
                            <FiX size={22} />
                        </button>
                    </div>

                    <div className="flex flex-1 flex-col items-center justify-center space-y-8 px-8">
                        <a
                            href="/roadmap"
                            className="text-3xl font-bold font-display text-text-primary duration-fast hover:text-accent-primary"
                            onClick={() => setShowNav(false)}
                        >
                            Roadmap
                        </a>
                        <a
                            href="/blog"
                            className="text-3xl font-bold font-display text-text-primary duration-fast hover:text-accent-primary"
                            onClick={() => setShowNav(false)}
                        >
                            Blog
                        </a>
                        <a
                            href="/videos"
                            className="text-3xl font-bold font-display text-text-primary duration-fast hover:text-accent-primary"
                            onClick={() => setShowNav(false)}
                        >
                            Videos
                        </a>
                    </div>

                    <div className="flex flex-col items-center space-y-6 px-8 pb-16">
                        <a
                            href="https://thinc.in.th"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center rounded-xl border border-border-primary py-3 text-text-primary duration-fast hover:bg-bg-secondary hover:border-accent-primary"
                        >
                            Main Site
                        </a>
                        <a
                            href="https://www.instagram.com/thinc.in.th"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-text-secondary duration-fast hover:text-accent-primary"
                        >
                            <FiInstagram size={20} />
                            <span>Instagram</span>
                        </a>
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
                            <a href="/roadmap" className="text-sm text-white/70 transition-colors hover:text-white">Roadmap</a>
                            <a href="/blog" className="text-sm text-white/70 transition-colors hover:text-white">Blog</a>
                            <a href="/videos" className="text-sm text-white/70 transition-colors hover:text-white">Videos</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://thinc.in.th"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden h-8 items-center rounded-lg border border-white/15 px-4 text-sm text-white/70 transition-colors duration-fast hover:border-white/40 hover:text-white sm:flex"
                        >
                            Main Site
                        </a>
                        <a
                            href="https://www.instagram.com/thinc.in.th"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors duration-fast hover:border-white/40 hover:text-white sm:flex"
                        >
                            <FiInstagram size={16} />
                        </a>
                        <button
                            onClick={() => setShowNav(true)}
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
