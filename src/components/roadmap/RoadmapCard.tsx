import { twMerge } from 'tailwind-merge';

import { LevelTag } from './LevelTag';

export const RoadmapCard = ({
    className,
    slug,
    level,
    title,
    description,
}: {
    className?: string;
    slug: string;
    level: string;
    title: string;
    description: string;
}) => {
    return (
        <div
            className={twMerge(
                'flex w-full rounded-xl border border-border-primary bg-bg-primary shadow-sm hover:shadow-md hover:border-accent-primary transition-all duration-normal',
                className,
            )}
        >
            <a
                href={`/roadmap/${slug}`}
                className="flex h-full w-full items-center px-6 py-6 md:px-7 md:py-7 text-center"
            >
                <div className="text-left space-y-2">
                    <LevelTag level={level} />

                    <h3 className="text-xl font-bold font-display text-text-primary md:text-2xl">
                        {title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-normal">{description}</p>
                </div>
            </a>
        </div>
    );
};
