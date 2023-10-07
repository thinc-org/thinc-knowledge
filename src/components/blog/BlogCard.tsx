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
            className="space-y-4 rounded-lg border bg-white p-4"
        >
            <div className="grid h-36 w-full place-content-center overflow-hidden rounded-md">
                <img src={imgSrc} className="scale-110" />
            </div>
            <h4 className="text-lg font-semibold text-slate-700">{title}</h4>
        </a>
    );
};
