import { RoadmapCard } from '@/components/roadmap/RoadmapCard';
import { Section } from '@/components/Section';

export const Title = () => {
    return (
        <Section data-section-theme="dark" className="bg-bg-primary pt-24 pb-10 text-text-secondary md:pt-28">
            <div className="space-y-3">
                <h1 className="text-3xl font-bold font-display text-text-primary md:text-4xl">
                    Developer Roadmaps
                </h1>
                <p className="text-lg font-body">
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
        <Section data-section-theme="dark" className="bg-bg-primary pb-16 text-text-secondary md:pb-24">
            <div className="grid gap-6 sm:grid-cols-2">
                {roadmaps?.map((roadmap) => (
                    <RoadmapCard
                        key={roadmap.id}
                        slug={roadmap.slug}
                        level={roadmap.data.level}
                        title={roadmap.data.title}
                        description={roadmap.data.description}
                    />
                ))}
            </div>
        </Section>
    );
};
