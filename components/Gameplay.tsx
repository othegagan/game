import SectionHeader from './section-header';

const title = 'Gameplay';
const subTitle = 'An Epic Adventure Awaits: Explore, Capture, and Own.';

const gameplay = [
    {
        title: 'Mobile Gameplay',
        description:
            'MetaQuests is exclusively designed for mobile devices, harnessing augmented reality to seamlessly blend digital content to the real-world environment while exploring an expansive mythological universe.',
        image: '/images/mobile-gameplay.png'
    },
    {
        title: 'Capture & Collect',
        description:
            'Players use AR tools to capture rare items and mythological beings, expanding their inventory and adding valuable assets for future adventures. These assets can be stored, traded, or used in future quests.',
        image: '/images/capture.png'
    },
    {
        title: 'Real-World Exploration',
        description:
            'Using location-based gameplay, players explore physical locations to discover hidden mythical sites, artifacts, and creatures. Ancient stories and legendary elements are brought to life on your mobile device.',
        image: '/images/real-world.png'
    },
    {
        title: 'Progression & Rewards',
        description:
            'As players capture more assets and explore new realms, they unlock additional game levels, rare items, and unique abilities. The game becomes increasingly challenging the deeper you venture into the world of myths.',
        image: '/images/progression.png'
    }
];

export default function Gameplay() {
    return (
        <section id='gameplay' className=' py-16'>
            <main className='container mx-auto flex flex-col gap-4 px-4 text-center'>
                <SectionHeader title={title} subTitle={subTitle} />
                <div className='mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2'>
                    {gameplay.map((item, index) => (
                        <div key={index} className='relative h-[300px] overflow-hidden rounded-xl shadow-lg'>
                            <img src={item.image} alt={item.title} className='h-full w-full object-cover' />
                            <div className='absolute inset-0 flex flex-col justify-end bg-opacity-60 p-6 text-start'>
                                <h3 className='mb-2 font-semibold text-xl'>{item.title}</h3>
                                <p className='text-gray-300 text-sm'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
}
