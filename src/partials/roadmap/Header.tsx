export const Header = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="flex w-full max-w-screen-lg flex-col px-8 pb-8 pt-6 md:flex-row md:items-end md:justify-between">
            <div>
                <span className="text-sm font-bold uppercase text-thinc-accent">
                    Roadmap
                </span>
                <h1 className="mt-0 text-3xl font-semibold text-white">
                    {title}
                </h1>
                <p className="mt-0.5 text-slate-400 md:text-lg">
                    {description}
                </p>
            </div>
            <button></button>
        </div>
    );
};
