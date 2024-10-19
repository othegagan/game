import SectionHeader from './section-header';

const title = 'About Us';
const subTitle = 'Where Myths, Augmented Reality, and Blockchain Unite';

export default function About() {
    return (
        <div className='relative overflow-hidden'>
            <div className='absolute inset-0 hidden h-20 md:block'>
                <div className='absolute inset-0 bg-primary opacity-20' />
                <img src='/images/hero-bg.png' alt='hero-bg' className='h-full w-full bg-cover object-cover object-bottom' />
            </div>
            <div className='relative z-20'>
                <section id='about' className='py-32'>
                    <div className='container mx-auto flex flex-col gap-28'>
                        <div className='mt-10 flex flex-col items-center justify-center gap-10'>
                            <SectionHeader title={title} subTitle={subTitle} className='mt-10' />
                            <p className='mx-auto max-w-5xl px-6 text-center text-muted-foreground text-white leading-7 sm:text-xl'>
                                MetaQuest is a cutting-edge gaming platform built on the belief that gaming can go beyond the screen and bridge the gap between
                                the digital and physical worlds. Our mission is to revolutionize mobile gaming through the power of augmented reality (AR),
                                immersive mythological storytelling, and blockchain technology. With MetaQuest, players experience a world where ancient myths
                                come to life, and digital assets can be truly owned, traded, and valued.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
