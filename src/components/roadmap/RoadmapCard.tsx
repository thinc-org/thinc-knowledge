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
                'flex w-full rounded-lg border-2 bg-slate-50',
                className,
            )}
        >
            <a
                href={`/roadmap/${slug}`}
                className="flex h-full w-full items-center px-10 py-8 text-center"
            >
                <div className="text-left">
                    <LevelTag level={level} />

                    <h3 className="mt-1 text-2xl font-semibold text-slate-800">
                        {title}
                    </h3>
                    <p className="text-slate-600">{description}</p>
                </div>
            </a>
        </div>
    );
};
