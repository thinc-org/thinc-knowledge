import { FiFacebook, FiGithub, FiGlobe, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaMedium } from 'react-icons/fa6';

const exploreLinks = [
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'Blog', href: '/blog' },
    { label: 'Videos', href: '/videos' },
];

export const socialLinks = [
    { label: 'thinc.in.th', href: 'https://thinc.in.th', Icon: FiGlobe },
    { label: 'Instagram', href: 'https://instagram.com/thinc.in.th', Icon: FiInstagram },
    { label: 'Facebook', href: 'https://facebook.com/ThailandIncubator', Icon: FiFacebook },
    { label: 'GitHub', href: 'https://github.com/thinc-org', Icon: FiGithub },
    { label: 'Medium', href: 'https://medium.com/thinc-org', Icon: FaMedium },
    { label: 'YouTube', href: 'https://youtube.com/@thinc-org', Icon: FiYoutube },
];

export const Footer = () => {
    return (
        <footer className="relative flex w-full justify-center overflow-hidden border-t border-white/10 bg-black">
            <div aria-hidden="true" className="footer-gradient inset-0" />
            <div className="relative w-full max-w-screen-lg px-8 pb-10 pt-12">
                <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <a href="/" className="flex items-center">
                            <img alt="Thinc." className="h-7 w-auto select-none" src="/images/thinc-mark.svg" />
                        </a>
                        <p className="max-w-[320px] text-sm leading-relaxed text-white/70 lg:text-base">
                            A student club under the Faculty of Engineering,{' '}
                            <span className="whitespace-nowrap">Chulalongkorn University</span>.
                            <br />
                            Open to every faculty.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-16">
                        {/* Explore */}
                        <div className="flex flex-col gap-1">
                            <p className="pb-2 text-sm font-semibold text-white lg:text-base">Explore</p>
                            {exploreLinks.map(({ label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="py-1 text-sm text-white/70 transition-colors hover:text-white lg:text-base"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>

                        {/* Connect */}
                        <div className="flex flex-col gap-1">
                            <p className="pb-2 text-sm font-semibold text-white lg:text-base">Connect</p>
                            {socialLinks.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 py-1 text-sm text-white/70 transition-colors hover:text-white lg:text-base"
                                >
                                    <Icon size={16} />
                                    <span>{label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="mt-10 border-t border-white/10 pt-6 text-center text-text-tertiary font-mono text-xs tracking-wide sm:text-left lg:text-sm">
                    © THINC. 2023-2026
                </p>
            </div>
        </footer>
    );
};
