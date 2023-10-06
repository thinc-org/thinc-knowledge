import { Section } from '@/components/Section';

export const Hero = () => {
    return (
        <Section className="h-[65vh] bg-gradient-to-b from-thinc-blue to-slate-950 md:h-[70vh]">
            <div className="flex flex-col items-center space-y-6 py-16 text-center md:py-20">
                <h1 className="text-3xl font-semibold md:text-5xl">
                    Thinc First Act 2023
                </h1>
                <p className="max-w-xl text-slate-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci beatae eveniet vero a consectetur pariatur at
                    laboriosam perferendis libero dolorum autem non blanditiis
                    nostrum.
                </p>
            </div>
        </Section>
    );
};

export const Roadmap = ({
    roadmaps,
}: {
    roadmaps: {
        id: string;
        slug: string;
        data: {
            title: string;
            description: string;
        };
    }[];
}) => {
    return (
        <Section className="min-h-screen bg-white text-slate-600">
            <div className="flex w-full flex-col space-y-16">
                <div className="space-y-6">
                    <div className="space-y-1 pb-6">
                        <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
                            Developer Roadmap
                        </h2>
                        <p>เริ่มต้นเรียนรู้ก่อนใคร...</p>
                    </div>
                    {roadmaps.map((roadmap) => (
                        <a key={roadmap.id} href={`/roadmap/${roadmap.slug}`}>
                            <div className="h-40 w-full cursor-pointer rounded-lg border-2 bg-slate-50"></div>
                        </a>
                    ))}
                    <div className="relative h-40 select-none opacity-80">
                        <div className="absolute z-10 grid h-full w-full place-content-center bg-gradient-to-b from-transparent to-white"></div>
                        <div className="absolute grid h-full w-full place-content-center rounded-lg border-2 bg-slate-50">
                            <p>Coming Soon...</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
                        Blogs
                    </h2>
                </div>
            </div>
        </Section>
    );
};
