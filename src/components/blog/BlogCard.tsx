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
            className="group space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition-all duration-300"
        >
            <div className="w-full overflow-hidden rounded-md bg-slate-100">
                <img
                    src={imgSrc}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <h4 className="text-lg font-semibold text-slate-700">{title}</h4>
        </a>
    );
};
