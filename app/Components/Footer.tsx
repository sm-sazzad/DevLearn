import Image from "next/image";
import Link from "next/link";
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaEnvelope,
    FaPhone,
    FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer id="footer" className="bg-indigo-950 text-white mt-10">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div className="space-y-5">
                        <Image
                            src="/NavLogo.png"
                            alt="DevLearn"
                            width={150}
                            height={50}
                            className="object-contain"
                        />

                        <p className="text-sm leading-6 text-indigo-200 max-w-xs">
                            Learn practical skills, build real-world projects,
                            and grow your development journey with DevLearn.
                        </p>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/sm-sazzad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-900 hover:bg-pink-500 transition-colors duration-200"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/sm-sazzad/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-900 hover:bg-pink-500 transition-colors duration-200"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://www.facebook.com/sazzad.hossain.5758/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-900 hover:bg-pink-500 transition-colors duration-200"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Quick Links</h3>

                        <ul className="space-y-3 text-sm text-indigo-200">
                            <li>
                                <a
                                    href="/#home"
                                    className="hover:text-pink-400 transition-colors duration-200"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <Link
                                    href="/all"
                                    className="hover:text-pink-400 transition-colors duration-200"
                                >
                                    All Courses
                                </Link>
                            </li>

                            <li>
                                <a
                                    href="/#footer"
                                    className="hover:text-pink-400 transition-colors duration-200"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#footer"
                                    className="hover:text-pink-400 transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Contact Us</h3>

                        <ul className="space-y-4 text-sm text-indigo-200">

                            <li className="flex items-start gap-3">
                                <FaEnvelope className="text-pink-400 text-lg mt-0.5" />
                                <span>hello@devlearn.com</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <FaPhone className="text-pink-400 text-lg mt-0.5" />
                                <span>+880 1XXX-XXXXXX</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <FaLocationDot className="text-pink-400 text-lg mt-0.5" />
                                <span>Dhaka, Bangladesh</span>
                            </li>
                        </ul>

                        <div className="pt-2">
                            <p className="text-xs text-indigo-300 leading-5">
                                Have questions about our courses?
                                <br />
                                We&apos;re here to help you learn.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-indigo-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-indigo-300 text-center md:text-left">
                        © 2026 DevLearn. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 text-sm text-indigo-300">
                        <a
                            href="/privacy-policy"
                            className="hover:text-white transition-colors duration-200"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="/terms"
                            className="hover:text-white transition-colors duration-200"
                        >
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;