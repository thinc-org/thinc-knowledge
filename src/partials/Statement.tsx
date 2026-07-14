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
            if ((p >= 1 && delta > 0) || (p <= 0 && delta < 0)) {
                locked.current = false;
                document.documentElement.style.overflow = '';
            }
        };

        let prevOff: number | null = null;
        const onScroll = () => {
            const y = window.scrollY;
            const down = y > lastY.current;
            lastY.current = y;
            // page frozen via overflow:hidden while locked — nothing to clamp
            if (locked.current) return;
            const r = el.getBoundingClientRect();
            // LOCK_BIAS px above geometric center (fixed navbar + optical weight make true center read low)
            const LOCK_BIAS = 32;
            const off = r.top + r.height / 2 - (window.innerHeight / 2 - LOCK_BIAS);
            // catch slow scrolls near center AND fast scrolls that jump across it
            const crossed = prevOff !== null && prevOff > 0 !== off > 0;
            const inBand = Math.abs(off) < 48;
            if ((crossed || inBand) && ((down && progress.current < 1) || (!down && progress.current > 0))) {
                lockY.current = y + off;
                window.scrollTo({ top: lockY.current }); // snap strip to exact center
                locked.current = true;
                // freeze the page instead of clamping scroll events after paint (clamp loop = visible flicker)
                document.documentElement.style.overflow = 'hidden';
            }
            prevOff = off;
        };

        const onWheel = (e: WheelEvent) => {
            if (!locked.current) return;
            e.preventDefault();
            applyProgress(e.deltaY / 800);
        };
        const onKeyDown = (e: KeyboardEvent) => {
            if (!locked.current) return;
            const steps: Record<string, number> = {
                ArrowDown: 0.15,
                ArrowUp: -0.15,
                PageDown: 0.4,
                PageUp: -0.4,
                End: 1,
                Home: -1,
                ' ': e.shiftKey ? -0.4 : 0.4,
            };
            const delta = steps[e.key];
            if (delta === undefined) return;
            e.preventDefault();
            applyProgress(delta);
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
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        return () => {
            document.documentElement.style.overflow = '';
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
        };
    }, []);

    const lineClass = (shown: boolean) =>
        `block transition-all duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`;

    return (
        <section
            ref={ref}
            className="flex flex-col items-center justify-center overflow-hidden bg-white py-24 text-center md:py-28 lg:py-36"
        >
            <p className="font-display text-5xl font-bold leading-tight text-black sm:text-7xl md:text-8xl">
                <span className={lineClass(stage >= 1)}>STOP IMAGINING</span>
                <span className={lineClass(stage >= 2)}>START BUILDING</span>
            </p>
        </section>
    );
};
