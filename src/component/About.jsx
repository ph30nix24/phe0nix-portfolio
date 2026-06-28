import React from 'react'

const About = () => {

    const experience = [
        {
            value: "2+",
            label: "Years Exp.",
        },
        {
            value: "20+",
            label: "Projects",
        },
        {
            value: "5+",
            label: "Clients",
        },
        {
            value: "∞",
            label: "Coffees",
        },
    ];

    return (
        <section className='w-full lg:w-280 h-fit mx-auto mt-20 bg-white/40 rounded-4xl px-5 md:px-10 py-10 lg:px-20 lg:py-15 backdrop-blur-lg border border-white shadow-lg shadow-primary/10 flex max-lg:flex-col gap-10 items-start' id='about'>
            <div className='w-fit'>
                <h2 className='font-heading text-5xl md:text-7xl opacity-20 text-primary'>01</h2>
                <p className='font-subheading tracking-wide md:tracking-[0.175em] text-xs text-primary uppercase font-medium pt-1'>Digital Craftsmanship</p>
            </div>
            <div className='w-full '>
                <h3 className='text-xl md:text-3xl font-body font-bold text-[#1f1f1f]'>
                    Bridging complex logic with pixel-perfect user interfaces. Precision meets aesthetics.
                </h3>
                <p className='mt-4 font-body tracking-wider mb-10 leading-relaxed max-md:text-sm'>As a specialized Frontend Developer, I architect scalable React applications and craft fluid animations with GSAP — delivering experiences that are as reliable as they are visually striking. My approach is rooted in technical precision and aesthetic sophistication.</p>

                <div className='w-full flex gap-5 items-center max-md:flex-wrap'>
                    { experience.map((item, i) => (
                        <div className='w-[46%] max-md:shrink-0 md:w-1/4 py-8 flex flex-col justify-center items-center bg-white/20 backdrop-blur-sm shadow shadow-primary/10 rounded-xl hover:shadow-xl ' key={i}>
                            <h3 className='text-3xl font-heading text-primary font-semibold'>{item.value}</h3>
                            <p className='font-subheading text-[10px] tracking-wider uppercase mt-2'>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About