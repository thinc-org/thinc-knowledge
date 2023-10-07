import { useState } from 'react';
import { FiInstagram, FiMenu, FiX } from 'react-icons/fi';

export const Navigation = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            {showNav && (
                <div className="fixed inset-0 z-50 flex flex-col bg-gradient-to-b from-thinc-blue to-slate-950 sm:hidden">
                    <div className="flex justify-end px-8 pt-9">
                        <button
                            onClick={() => setShowNav(false)}
                            className="grid h-10 place-content-center rounded-lg border border-slate-700 px-3 text-lg text-slate-400 duration-200 hover:bg-slate-800"
                        >
                            <FiX />
                        </button>
                    </div>
                </div>
            )}
            <header className="flex w-full justify-center">
                <div className="flex h-24 w-full max-w-screen-lg items-center justify-between px-8">
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
                        </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-4">
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
