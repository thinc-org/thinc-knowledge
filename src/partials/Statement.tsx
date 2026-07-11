import { useEffect, useRef, useState } from 'react';

export const Statement = () => {
    const ref = useRef<HTMLElement>(null);
    const [stage, setStage] = useState(0);
    const progress = useRef(0);
    const locked = useRef(false);
    const lockY = useRef(0);
    const lastY = useRef(0);
    const touchY = useRef(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // page can load already below the section (refresh keeps scroll position):
        // treat the animation as played so scrolling up locks and plays in reverse
        const r0 = el.getBoundingClientRect();
        if (r0.top + r0.height / 2 < window.innerHeight / 2) {
            progress.current = 1;
            setStage(2);
        }

        const applyProgress = (delta: number) => {
            progress.current = Math.min(1, Math.max(0, progress.current + delta));
            const p = progress.current;
            setStage(p >= 0.7 ? 2 : p >= 0.25 ? 1 : 0);
            // animation finished in the travel direction -> release the page
            if ((p >= 1 && delta > 0) || (p <= 0 && delta < 0)) locked.current = false;
        };

        let prevOff: number | null = null;
        const onScroll = () => {
            const y = window.scrollY;
            const down = y > lastY.current;
            lastY.current = y;
            if (locked.current) {
                // momentum/keyboard/scrollbar can still move the page: clamp it back
                if (y !== lockY.current) window.scrollTo({ top: lockY.current });
                return;
            }
            const r = el.getBoundingClientRect();
            const off = r.top + r.height / 2 - window.innerHeight / 2;
            // catch slow scrolls near center AND fast scrolls that jump across it
            const crossed = prevOff !== null && prevOff > 0 !== off > 0;
            const inBand = Math.abs(off) < 48;
            if ((crossed || inBand) && ((down && progress.current < 1) || (!down && progress.current > 0))) {
                lockY.current = y + off;
                window.scrollTo({ top: lockY.current }); // snap strip to exact center
                locked.current = true;
            }
            prevOff = off;
        };

        const onWheel = (e: WheelEvent) => {
            if (!locked.current) return;
            e.preventDefault();
            applyProgress(e.deltaY / 800);
        };
        const onTouchStart = (e: TouchEvent) => {
            touchY.current = e.touches[0].clientY;
        };
        const onTouchMove = (e: TouchEvent) => {
            if (!locked.current) return;
            e.preventDefault();
            const dy = touchY.current - e.touches[0].clientY;
            touchY.current = e.touches[0].clientY;
            applyProgress(dy / 400);
        };

        lastY.current = window.scrollY;
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
        };
    }, []);

    const lineClass = (shown: boolean) =>
        `block transition-all duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`;

    return (
        <section
            ref={ref}
            className="flex flex-col items-center justify-center overflow-hidden bg-white py-24 text-center md:py-28"
        >
            <p className="font-display text-5xl font-bold leading-tight text-black sm:text-7xl md:text-8xl">
                <span className={lineClass(stage >= 1)}>STOP IMAGINING</span>
                <span className={lineClass(stage >= 2)}>START BUILDING</span>
            </p>
        </section>
    );
};
