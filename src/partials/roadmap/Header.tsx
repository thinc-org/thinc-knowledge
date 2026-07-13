export const Header = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="flex w-full max-w-screen-lg flex-col px-8 pb-10 pt-24 md:pt-28">
            <div className="flex flex-col space-y-6">
                <div className="flex flex-col">
                    <span className="mb-2 text-lg font-semibold uppercase tracking-widest text-accent-primary md:text-xl">
                        Roadmap
                    </span>
                    <h1 className="text-4xl font-bold font-display text-text-primary md:text-5xl">
                        {title}
                    </h1>
                </div>
                <p className="max-w-xl font-body text-text-secondary">{description}</p>
            </div>
        </div>
    );
};
