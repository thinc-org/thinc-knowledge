import { RoadmapCard } from '@/components/roadmap/RoadmapCard';
import { Section } from '@/components/Section';

export const Title = () => {
    return (
        <Section className="bg-white py-4 md:py-6 text-slate-600">
            <div className="space-y-3">
                <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">
                    Developer Roadmaps
                </h1>
                <p>
                    แหล่งรวมเส้นทางในการเริ่มต้นเรียนรู้ทักษะการเขียนโปรแกรมและพัฒนาซอฟต์แวร์
                </p>
            </div>
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
        <Section className="min-h-screen border-t bg-slate-50 py-4 md:py-6">
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
