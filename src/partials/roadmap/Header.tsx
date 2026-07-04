export const Header = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="flex w-full max-w-screen-lg flex-col px-8 pb-8 pt-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col space-y-6">
                <div className="flex flex-col">
                    <span className="mb-2 text-lg font-semibold uppercase tracking-widest text-thinc-accent md:text-xl">
                        Roadmap
                    </span>
                    <h1 className="text-4xl font-semibold text-white md:text-5xl">
                        {title}
                    </h1>
                </div>
                <p className="max-w-xl text-slate-400">{description}</p>
            </div>
            <button></button>
        </div>
    );
};
