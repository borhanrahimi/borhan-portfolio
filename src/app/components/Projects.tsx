"use client";

import { FadeInView, Stagger, StaggerItem } from "./Motion";

const projects = [
    {
        title: "MyGrocery",
        desc: "Full-stack grocery app with real Stripe checkout and order history.",
    },
    {
        title: "UTSA Course Planner",
        desc: "Course catalog and planner with admin management features.",
    },
    {
        title: "H-E-B Digital Quest",
        desc: "Industry-style Agile project building real frontend features.",
    },
];

export default function Projects() {
    return (
        <section id="work" className="min-h-screen px-6 md:px-12">
            <div className="max-w-6xl mx-auto py-20">
                <FadeInView>
                    <h2 className="text-4xl md:text-6xl mb-16 font-semibold">
                        Selected Work
                    </h2>
                </FadeInView>

                <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((p) => (
                        <StaggerItem key={p.title}>
                            <div className="group">
                                <div className="aspect-video bg-zinc-100 rounded-2xl mb-6" />
                                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                                <p className="text-zinc-600">{p.desc}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
