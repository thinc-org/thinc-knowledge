import { useState } from 'react';
import { FiInstagram, FiMenu, FiX } from 'react-icons/fi';

export const Navigation = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            {showNav && (
                <div className="fixed inset-0 z-50 flex flex-col bg-gradient-to-b from-thinc-blue to-slate-950 sm:hidden">
                    <div className="flex items-center justify-between px-8">
                        <div className="h-20 py-5">
                            <a href="/" onClick={() => setShowNav(false)}>
                                <img
                                    className="h-full w-auto select-none"
                                    src="/images/thinc-logo-alt.svg"
                                    alt="Thinc Logo"
                                    loading="eager"
                                />
                            </a>
                        </div>
                        <button
                            onClick={() => setShowNav(false)}
                            className="grid h-10 place-content-center rounded-lg border border-slate-700 px-3 text-lg text-slate-400 duration-200 hover:bg-slate-800"
                        >
                            <FiX />
                        </button>
                    </div>

                    <div className="flex flex-1 flex-col items-center justify-center space-y-8 px-8">
                        <a
                            href="/roadmap"
                            className="text-3xl font-medium text-slate-300 duration-200 hover:text-thinc-accent"
                            onClick={() => setShowNav(false)}
                        >
                            Roadmap
                        </a>
                        <a
                            href="/blog"
                            className="text-3xl font-medium text-slate-300 duration-200 hover:text-thinc-accent"
                            onClick={() => setShowNav(false)}
                        >
                            Blog
                        </a>
                        <a
                            href="/videos"
                            className="text-3xl font-medium text-slate-300 duration-200 hover:text-thinc-accent"
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
                            className="flex w-full items-center justify-center rounded-lg border border-slate-700 py-3 text-slate-300 duration-200 hover:bg-slate-800"
                        >
                            Main Site
                        </a>
                        <a
                            href="https://www.instagram.com/thinc.in.th"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-slate-400 duration-200 hover:text-white"
                        >
                            <FiInstagram size={20} />
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>
            )}
            <header className="flex w-full justify-center drop-shadow-md">
                <div className="flex w-full max-w-screen-lg items-center justify-between px-8 sm:h-24">
                    <div className="flex items-center space-x-12">
                        <div className="h-20 py-5">
                            <a href="/">
                                <img
                                    className="h-full w-auto select-none"
                                    src="/images/thinc-logo-alt.svg"
                                    alt="Thinc Logo"
                                    loading="eager"
                                />
                            </a>
                        </div>
                        <div className="mt-4 hidden items-center space-x-8 text-slate-400 sm:flex">
                            <a href="/roadmap">Roadmap</a>
                            <a href="/blog">Blog</a>
                            <a href="/videos">Videos</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 sm:mt-4">
                        <a
                            href="https://thinc.in.th"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden h-8 place-content-center rounded-lg border border-slate-700 px-3 text-sm text-slate-400 duration-200 hover:bg-slate-800 sm:grid"
                        >
                            Main Site
                        </a>
                        <a
                            href="https://www.instagram.com/thinc.in.th"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden h-8 place-content-center rounded-lg border border-slate-700 px-2.5 text-slate-400 duration-200 hover:bg-slate-800 sm:grid"
                        >
                            <FiInstagram />
                        </a>
                        <button
                            onClick={() => setShowNav(true)}
                            className="grid h-10 place-content-center rounded-lg border border-slate-700 px-3 text-lg text-slate-400 duration-200 hover:bg-slate-800 sm:hidden"
                        >
                            <FiMenu />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};
