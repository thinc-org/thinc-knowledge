export const LevelTag = ({ level }: { level: string }) => {
    const colorSchema = {
        beginner: '#4ade80',
        intermediate: '#fbbf24',
        advanced: '#ef4444',
    };

    const color = colorSchema as Record<string, string>;

    return (
        <div className="flex">
            <div
                className="rounded-full px-2 py-1 text-xs font-semibold uppercase"
                style={{
                    color: color[level],
                    backgroundColor: `${color[level]}15`,
                }}
            >
                {level}
            </div>
        </div>
    );
};
