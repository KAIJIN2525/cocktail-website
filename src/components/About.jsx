import gsap from "gsap";
import {SplitText} from "gsap/all";
import {useGSAP} from "@gsap/react";
import {profileLists} from "../../constants/index.js";

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type: 'words'
        })

        const  scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        scrollTimeline.from(titleSplit.words, {
            opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02,
        })
            .from('.top-grid div, .bottom-grid div', {
                opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
            }, '-=0.5')
    },[])
    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>
                        <h2>
                            Where every detail matters <span className="text-white">-</span>
                            from muddle to garnish
                        </h2>
                    </div>
                    <div className="sub-content">
                        <p>
                            Every cocktail we serve is a reflection of our obsession with detail- from the first muddle to the final garnish. That care is what turns a simple drink into something memorable.
                        </p>

                        <div className="flex flex-row gap-4 items-center justify-between">
                            {/* Rating section */}
                            <div>
                                <p className="md:text-3xl text-xl font-bold">
                                    <span>4.5</span>/5
                                </p>
                                <p className="text-sm text-white-100">
                                    More than +12,000 customers
                                </p>
                            </div>

                            {/* Vertical divider */}
                            <div className="relative h-16 w-[2px]">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
                            </div>

                            {/* Profile images container */}
                            <div className="relative flex items-center justify-center">
                                <div className="relative h-16 w-34 flex items-center justify-center image-radial-gradient  rounded-full">
                                    {/* Profile images */}
                                    <div className="relative flex flex-row items-center h-12 z-10">
                                        {profileLists.map((profile, index) => (
                                            <div
                                                key={index}
                                                className="relative transition-all hover:-translate-y-1"
                                                style={{
                                                    zIndex: profileLists.length - index,
                                                    marginLeft: index > 0 ? '-12px' : '0',
                                                }}
                                            >
                                                <img
                                                    src={profile.imgPath}
                                                    alt={`Profile ${index + 1}`}
                                                    className="size-8 rounded-full border-2 border-white object-cover shadow-md"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy">
                        <img src="/images/abt1.png" alt="grid-img-1" />
                    </div>
                </div>

                <div className="md:col-span-6">
                    <div className="noisy">
                        <img src="/images/abt2.png" alt="grid-img-2" />
                    </div>
                </div>

                <div className="md:col-span-3">
                    <div className="noisy">
                        <img src="/images/abt5.png" alt="grid-img-5" />
                    </div>
                </div>
            </div>

            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy">
                        <img src="/images/abt3.png" alt="grid-img-3" />
                    </div>
                </div>
                <div className="md:col-span-4">
                    <div className="noisy">
                        <img src="/images/abt4.png" alt="grid-img-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;