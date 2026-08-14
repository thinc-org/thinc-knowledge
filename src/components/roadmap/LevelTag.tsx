export const LevelTag = ({ level }: { level: string }) => {
    return (
        <div className="flex">
            <div
                className={`rounded-lg border px-2.5 py-0.5 text-sm font-semibold capitalize tag-${level}`}
            >
                {level}
            </div>
        </div>
    );
};
