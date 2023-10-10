export const BlogCard = ({
    title,
    description,
    link,
    imgSrc = '/images/2023-background.png',
    local,
}: {
    title: string;
    description?: string;
    link: string;
    imgSrc?: string;
    local?: boolean;
}) => {
    return (
        <a
            href={local ? `/blog/${link}` : link}
            target="_blank"
            rel="noopener noreferrer"
            className="space-y-4 rounded-lg border bg-white p-4"
        >
            <div className="grid h-36 w-full place-content-center overflow-hidden rounded-md">
                <img src={imgSrc} className="scale-110" />
            </div>
            <div>
                <h4 className="text-lg font-semibold text-slate-700">
                    {title}
                </h4>
                <p className="text-slate-500">{description}</p>
            </div>
        </a>
    );
};
