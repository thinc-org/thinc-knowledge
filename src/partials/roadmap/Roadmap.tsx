import { RoadmapCard } from '@/components/roadmap/RoadmapCard';
import { Section } from '@/components/Section';

export const Title = () => {
    return (
        <Section className="bg-white py-4 text-slate-600">
            <h1 className="text-2xl font-semibold text-slate-800 sm:text-5xl">
                Developer Roadmaps
            </h1>
            <p className="mt-2">
                แหล่งรวมเส้นทางในการเริ่มต้นเรียนรู้ทักษะการเขียนโปรแกรมและพัฒนา
                Software
            </p>
        </Section>
    );
};

export const Roadmaps = ({
    roadmaps,
}: {
    roadmaps: {
        id: string;
        slug: string;
        data: {
            title: string;
            description: string;
            level: string;
        };
    }[];
}) => {
    return (
        <Section className="h-screen border-t bg-slate-50">
            <div className="space-y-6">
                {roadmaps?.map((roadmap) => (
                    <RoadmapCard
                        key={roadmap.id}
                        slug={roadmap.slug}
                        level={roadmap.data.level}
                        title={roadmap.data.title}
                        description={roadmap.data.description}
                        className="bg-white"
                    />
                ))}
            </div>
        </Section>
    );
};
