import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
    const socials = [
        { icon: Github, label: 'GitHub', href: 'https://github.com/nimeduhansaka' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nimedu-hansaka-9721b4383' },
        { icon: Twitter, label: 'Twitter', href: 'https://x.com/nimedu' },
        { icon: Mail, label: 'Email', href: 'mailto:nimeduhansaka@gmail.com' },
    ];

    return (
        <section id="contact" className="min-h-screen flex items-center py-20">
            <div className="container mx-auto px-8">
                <div className="max-w-4xl mx-auto text-center">

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter pb-4 mb-8 text-transparent bg-clip-text bg-[linear-gradient(90deg,#06b6d4,#8b5cf6,#f59e0b,#10b981)]">
                        Let's Work Together
                    </h2>

                    <p className="text-xl text-gray-400 mb-12 -mt-4 max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. Drop me a line and let's
                        create something amazing together.
                    </p>

                    <a
                        href="mailto:nimeduhansaka@gmail.com"
                        className="inline-block text-3xl md:text-5xl font-bold hover:text-gray-300 transition-colors mb-16 group"
                    >
                        nimeduhansaka@gmail.com
                        <span className="block h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500" />
                    </a>

                    <div className="flex items-center justify-center gap-8 mb-16">
                        {socials.map((social, index) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target='blank'
                                className="p-4 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                                aria-label={social.label}
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>

                    <div className="text-gray-500 text-sm">
                        <p>&copy; 2025 Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
