import Link from 'next/link';
import Navbar from './Navbar';

export default function Hero() {
    return (
        <section id='hero' className='relative min-h-[100dvh] overflow-hidden'>
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-primary opacity-20' />
                <img src='/images/hero-bg.png' alt='hero-bg' className='h-full w-full bg-cover object-cover' />
            </div>
            <div className='relative z-20'>
                <Navbar />
                <main className='container mx-auto flex min-h-[calc(100dvh-220px)] flex-col items-center justify-center gap-4 px-4 text-center'>
                    <h1 className='mb-6 max-w-5xl font-bold text-4xl md:text-6xl'>Mythical Journey Powered by Augmented Reality and Blockchain</h1>
                    <p className='mb-8 max-w-3xl text-xl'>
                        Experience the future of mobile gaming where AR-driven exploration meets the revolutionary ownership of digital assets on the blockchain
                    </p>
                    <Link
                        className='text-nowrap rounded-full bg-yellow-500 px-8 py-3 font-bold text-black text-lg uppercase transition-colors hover:bg-yellow-600'
                        href='#contact'>
                        Join the waiting list
                    </Link>
                    <p className='text-white text-xs'>Enjoy the early bird benefits by joining the waiting list</p>
                </main>
            </div>
        </section>
    );
}
