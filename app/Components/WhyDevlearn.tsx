import {
    GraduationCap,
    Laptop,
    BookOpen,
    Trophy,
} from "lucide-react";

const features = [
    {
        icon: GraduationCap,
        title: "Expert Instructors",
        description:
            "Learn from experienced instructors who focus on practical and industry-relevant skills.",
    },
    {
        icon: Laptop,
        title: "Practical Projects",
        description:
            "Build real-world projects and turn your knowledge into practical development skills.",
    },
    {
        icon: BookOpen,
        title: "Structured Learning",
        description:
            "Follow a clear learning path with organized courses designed for steady progress.",
    },
    {
        icon: Trophy,
        title: "Track Your Progress",
        description:
            "Keep track of your learning journey and stay motivated as you complete your courses.",
    },
];

const WhyDevLearn = () => {
    return (
        <section className="py-10 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-4xl font-semibold text-blue-600 uppercase tracking-wider">
                        Why DevLearn
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mt-3">
                        Everything You Need to Keep Learning
                    </h2>

                    <p className="text-gray-400 mt-4">
                        Learn practical skills, build real projects, and grow your
                        development journey with DevLearn.
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="group rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyDevLearn;