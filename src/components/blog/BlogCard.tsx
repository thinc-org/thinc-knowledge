export const BlogCard = ({
    title,
    link,
    imgSrc,
}: {
    title: string;
    link: string;
    imgSrc: string;
}) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group space-y-4 rounded-xl border border-border-primary bg-bg-primary p-4 shadow-sm hover:shadow-md hover:border-accent-primary transition-all duration-normal"
        >
            <div className="w-full overflow-hidden rounded-lg bg-bg-secondary">
                <img
                    src={imgSrc}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <h4 className="text-lg font-bold font-display text-text-primary transition-colors duration-fast group-hover:text-accent-primary">{title}</h4>
        </a>
    );
};
