import { twMerge } from 'tailwind-merge';

export const Section = ({
    children,
    className,
    prose,
}: {
    children: React.ReactNode;
    className?: string;
    prose?: boolean;
}) => {
    return (
        <section
            className={twMerge('flex w-full justify-center px-9', className)}
        >
            <div
                className={`h-full w-full py-8 ${
                    prose ? 'max-w-prose' : 'max-w-screen-lg'
                }`}
            >
                {children}
            </div>
        </section>
    );
};
