import { twMerge } from 'tailwind-merge';

export const Section = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) => {
    return (
        <section
            className={twMerge('flex w-full justify-center px-5', className)}
        >
            <div className="h-full w-full max-w-screen-lg py-8">{children}</div>
        </section>
    );
};
