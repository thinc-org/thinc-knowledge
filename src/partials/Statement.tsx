import { useEffect, useRef, useState } from 'react';

export const Statement = () => {
    const ref = useRef<HTMLElement>(null);
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStage(1);
                    setTimeout(() => setStage(2), 400);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.5 },
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    const lineClass = (shown: boolean) =>
        `block transition-all duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`;

    return (
        <section
            ref={ref}
            className="border-black/10 flex flex-col items-center justify-center overflow-hidden border-t bg-white py-24 text-center md:py-28 lg:py-36"
        >
            <p className="font-display text-5xl font-bold leading-tight text-black sm:text-7xl md:text-8xl">
                <span className={lineClass(stage >= 1)}>STOP IMAGINING</span>
                <span className={lineClass(stage >= 2)}>START BUILDING</span>
            </p>
        </section>
    );
};
