import { FiChevronLeft } from 'react-icons/fi';

export const Header = ({
    title,
    description,
    authors,
}: {
    title: string;
    description: string;
    authors: { name: string; image: string }[];
}) => {
    return (
        <div className="relative w-full overflow-hidden">
            <div
                aria-hidden="true"
                className="roadmap-header-gradient inset-0"
            />
            <div className="relative mx-auto flex w-full max-w-[var(--max-width-content)] flex-col px-8 pb-10 pt-24 text-lg md:pt-28 lg:max-w-screen-xl">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <a
                            href="/roadmap"
                            className="hover:text-accent-primary-hover group -mt-2 flex w-fit items-center gap-1 py-2 text-lg font-semibold uppercase tracking-widest text-accent-primary transition-colors duration-fast md:text-xl"
                        >
                            <FiChevronLeft className="text-xl transition-transform group-hover:-translate-x-1 md:text-2xl" />
                            Roadmap
                        </a>
                        <h1 className="font-display text-4xl font-bold text-text-primary md:text-5xl">
                            {title}
                        </h1>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <p className="max-w-xl font-body text-text-secondary">
                            {description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            {authors.map(({ name, image }) => (
                                <div
                                    key={name}
                                    className="flex items-center gap-2"
                                >
                                    <img
                                        alt={name}
                                        src={image}
                                        className="h-8 w-8 rounded-full border border-border-primary bg-bg-secondary object-contain p-1"
                                    />
                                    <span className="text-lg font-semibold text-text-primary">
                                        {name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
