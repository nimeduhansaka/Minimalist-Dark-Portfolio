import { ArrowDown, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import cvFile from '../assets/Nimedu-Hansaka-CV.pdf';

export default function Hero() {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="flex-1 space-y-6">
                        {/* <div className="overflow-hidden">
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter animate-slide-up">
                                Creative
                            </h1>
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter animate-slide-up animation-delay-200">
                                Developer
                            </h1>
                        </div> */}

                        <div className="overflow-hidden">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter animate-slide-up">
                            <span className="gradient-sweep">
                            <span className="base">Creative</span>
                            <span className="fill" aria-hidden>Creative</span>
                            </span>
                        </h1>
                        </div>

                        <div className="overflow-hidden">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter animate-slide-up animation-delay-200">
                            <span className="gradient-sweep">
                            <span className="base">Developer</span>
                            <span className="fill" aria-hidden>Developer</span>
                            </span>
                        </h1>
                        </div>

                        <div className="overflow-hidden">
                            <p className="text-lg md:text-xl text-gray-400 max-w-md animate-slide-up animation-delay-400">
                                Crafting digital experiences with precision and passion.
                                Specialized in modern web development.
                            </p>
                        </div>

                    {/* Download CV button */}
                    <div className="overflow-hidden">
                        <div className="animate-slide-up animation-delay-400">
                            <a
                            href={cvFile}
                            download="Nimedu-Hansaka-CV.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 hover:bg-white hover:text-black transition-colors"
                            aria-label="Download CV"
                            >
                            <Download size={18} />
                            <span>Download CV</span>
                            </a>
                        </div>
                    </div>

                    </div>

                    

                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-400 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500" />
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* Mouse Indicator */}
            {/* <button
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown size={32} className="text-gray-400" />
            </button> */}

        <div class='mouse-container'>
        <div class='mouse'>
            <button class='scroll-down' onClick={scrollToAbout}></button>
        </div>
        </div>

        </section>
    );
}
