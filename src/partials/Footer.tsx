export const Footer = () => {
    return (
        <section className="flex w-full justify-center">
            <div className="flex w-full max-w-screen-lg flex-col items-center px-8 pb-10 pt-10">
                <div className="w-24">
                    <img
                        className="h-full w-auto select-none"
                        src="/images/thinc-logo-alt.svg"
                        alt="Thinc Logo"
                        loading="eager"
                    />
                </div>
                <p className="mb-0 mt-4 text-slate-400">© THINC. 2023-2026</p>
            </div>
        </section>
    );
};
