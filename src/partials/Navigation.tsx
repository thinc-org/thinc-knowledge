export const Navigation = () => {
    return (
        <header className="flex w-full justify-center">
            <div className="h-20 w-full max-w-screen-lg px-8 md:h-24">
                <div className="mt-2 h-20 py-5">
                    <a href="/">
                        <img
                            className="h-full w-auto select-none"
                            src="/images/thinc-logo-alt.svg"
                            alt="Thinc Logo"
                            loading="eager"
                        />
                    </a>
                </div>
            </div>
        </header>
    );
};
