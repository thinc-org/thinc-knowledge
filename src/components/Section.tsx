import { twMerge } from 'tailwind-merge';

export const Section = ({
    children,
    className,
    prose,
    wide,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    prose?: boolean;
    wide?: boolean;
    [key: string]: any;
}) => {
    return (
        <section className={twMerge('flex w-full justify-center', className)} {...props}>
            <div
                className={`h-full w-full px-8 ${
                    prose ? 'max-w-prose' : wide ? 'max-w-screen-lg lg:max-w-screen-xl' : 'max-w-screen-lg'
                }`}
            >
                {children}
            </div>
        </section>
    );
};
