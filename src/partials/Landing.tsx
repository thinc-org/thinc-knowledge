import { LevelTag } from '@/components/LevelTag';
import { Section } from '@/components/Section';

export const Hero = () => {
    return (
        <Section className="h-[60vh] bg-gradient-to-b from-thinc-blue to-slate-950 md:h-[65vh]">
            <div className="flex flex-col items-center space-y-6 py-16 text-center md:py-20">
                <span className="-mb-3.5 font-semibold uppercase text-thinc-accent">
                    Get Ready For
                </span>
                <h1 className="text-3xl font-semibold md:text-5xl">
                    Thinc First Act 2023
                </h1>
                <p className="max-w-xl text-slate-400">
                    กิจกรรมที่พี่ ๆ ในชมรม Thinc.
                    จะมาสอนและแชร์วิชาในการพัฒนาโปรแกรมพร้อมทั้งวิธีการ
                    Implement ผลงานตัวเองในแบบพื้นฐานที่สุด
                    ในหลากหลายสายงานอย่าง Frontend, Backend, Project Manager,
                    และ UX/UI
                </p>
                <div className="pt-10">
                    <a
                        href="https://thinc.in.th/link/first_act"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-slate-50 px-8 py-3 font-semibold text-thinc-blue"
                    >
                        ลงทะเบียน
                    </a>
                </div>
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
            level: string;
        };
    }[];
}) => {
    return (
        <Section className="min-h-screen bg-white text-slate-600">
            <div className="flex w-full flex-col space-y-16">
                <div className="space-y-6">
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold text-slate-800 md:text-2xl">
                            Developer Roadmap
                        </h2>
                        <p>เริ่มต้นเรียนรู้ก่อนใคร...</p>
                    </div>
                    {roadmaps?.map((roadmap) => (
                        <div
                            key={roadmap.id}
                            className="flex w-full rounded-lg border-2 bg-slate-50"
                        >
                            <a
                                href={`/roadmap/${roadmap.slug}`}
                                className="flex h-full w-full items-center px-10 py-8 text-center"
                            >
                                <div className="text-left">
                                    <LevelTag level={roadmap.data.level} />
                                    {/* <div className="flex">
                                        <div className="rounded-full bg-thinc-accent/10 px-2 py-1 text-xs font-semibold uppercase text-thinc-accent">
                                            {roadmap.data.level}
                                        </div>
                                    </div> */}
                                    <h3 className="mt-1 text-2xl font-semibold text-slate-800">
                                        {roadmap.data.title}
                                    </h3>
                                    <p>{roadmap.data.description}</p>
                                </div>
                            </a>
                        </div>
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
