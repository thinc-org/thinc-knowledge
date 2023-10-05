export const Header = () => {
    return (
        <header className="flex w-full justify-center px-6 md:px-4">
            <div className="h-20 w-full max-w-screen-lg py-6 md:h-24">
                <img
                    className="h-full w-auto"
                    src="/images/thinc-logo-alt.svg"
                    alt="Thinc Logo"
                    loading="eager"
                />
            </div>
        </header>
    );
};
