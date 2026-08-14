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
            className="card group block space-y-4 bg-bg-secondary"
        >
            <div className="w-full overflow-hidden rounded-sm bg-bg-secondary">
                <img
                    src={imgSrc}
                    alt=""
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <h3 className="font-display text-lg font-bold text-text-primary transition-colors duration-fast group-hover:text-accent-primary md:text-xl">
                {title}
            </h3>
        </a>
    );
};
