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
            <div className="text-left space-y-2">
                <LevelTag level={level} />

                <h3 className="text-xl font-bold font-display text-text-primary md:text-2xl">
                    {title}
                </h3>
                <p className="text-text-secondary text-sm leading-normal">{description}</p>
            </div>
        </a>
    );
};
