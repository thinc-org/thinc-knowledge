export const Footer = () => {
    return (
        <section className="flex w-full justify-center border-t border-white/10 bg-black">
            <div className="flex w-full max-w-screen-lg flex-col items-center px-8 pb-10 pt-10">
                <div className="flex items-center gap-2.5">
                    <img alt="" className="h-7 w-auto select-none" src="/images/thinc-mark.svg" />
                    <span className="text-lg font-semibold tracking-[0.01em] text-white">Thinc.</span>
                </div>
                <p className="mb-0 mt-4 text-text-tertiary font-mono text-[10px] tracking-wide">© THINC. 2023-2026</p>
            </div>
        </section>
    );
};
