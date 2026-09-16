import {
    FaCode,
    FaLaptopCode,
    FaServer,
    FaArrowRight,
} from "react-icons/fa6";

const learningPaths = [
    {
        icon: FaLaptopCode,
        title: "Frontend Developer",
        description:
            "Learn how to build modern, responsive, and interactive web interfaces.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
        color: "bg-blue-50 text-blue-600",
    },
    {
        icon: FaServer,
        title: "Backend Developer",
        description:
            "Build powerful server-side applications and work with databases and APIs.",
        skills: ["JavaScript", "Node.js", "Express", "MongoDB", "REST API"],
        color: "bg-green-50 text-green-600",
    },
    {
        icon: FaCode,
        title: "Full Stack Developer",
        description:
            "Master both frontend and backend technologies to build complete web applications.",
        skills: ["HTML", "JavaScript", "React", "Node.js", "MongoDB"],
        color: "bg-purple-50 text-purple-600",
    },
];

const LearningPaths = () => {
    return (
        <section className="py-20 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-4xl font-semibold text-indigo-600 uppercase tracking-wider">
                        Learning Paths
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                        Choose Your Developer Journey
                    </h2>

                    <p className="text-gray-600 mt-4 leading-6">
                        Follow a structured learning path and build the skills
                        you need to become a confident developer.
                    </p>
                </div>

                {/* Learning Path Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningPaths.map((path) => {
                        const Icon = path.icon;

                        return (
                            <div
                                key={path.title}
                                className="group h-full flex flex-col bg-white border border-gray-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-xl ${path.color} flex items-center justify-center mb-6`}
                                >
                                    <Icon className="text-2xl" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900">
                                    {path.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 leading-6 mt-3 grow">
                                    {path.description}
                                </p>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {path.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Button */}
                                <button
                                    type="button"
                                    className="mt-7 flex items-center gap-2 text-sm font-semibold text-indigo-600 group-hover:text-pink-500 transition-colors"
                                >
                                    Explore Path
                                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LearningPaths;