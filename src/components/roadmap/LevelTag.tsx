export const LevelTag = ({ level }: { level: string }) => {
    return (
        <div className="flex">
            <div
                className={`rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tag-${level}`}
            >
                {level}
            </div>
        </div>
    );
};
