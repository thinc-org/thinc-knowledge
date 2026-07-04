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
                'flex w-full rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow transition-all duration-300',
                className,
            )}
        >
            <a
                href={`/roadmap/${slug}`}
                className="flex h-full w-full items-center px-6 py-6 md:px-7 md:py-7 text-center"
            >
                <div className="text-left space-y-2">
                    <LevelTag level={level} />

                    <h3 className="text-xl font-semibold text-slate-800 md:text-2xl">
                        {title}
                    </h3>
                    <p className="text-slate-600">{description}</p>
                </div>
            </a>
        </div>
    );
};
