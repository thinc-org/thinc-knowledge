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
        <a
            href={`/roadmap/${slug}`}
            className={twMerge(
                'card flex w-full items-center bg-bg-secondary',
                className,
            )}
        >
            <div className="space-y-2 text-left">
                <LevelTag level={level} />

                <h3 className="font-display text-xl font-bold text-text-primary md:text-2xl">
                    {title}
                </h3>
                <p className="text-sm leading-normal text-text-secondary md:text-base">
                    {description}
                </p>
            </div>
        </a>
    );
};
