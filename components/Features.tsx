import SectionHeader from './section-header';

const title = 'Features';
const subTitle = 'A Fusion of Augmented Reality, Mythology, and Blockchain Innovation';

const features = [
    {
        title: 'Augmented Reality Exploration',
        image: '',
        description:
            'MetaQuests uses AR technology to blend the physical and digital worlds, allowing players to explore real environments while discovering ancient mythological locations, rare treasures, and powerful creatures. It creates a unique adventure where reality meets myth.'
    },
    {
        title: 'Blockchain-Powered Ownership',
        image: '',
        description:
            'All in-game items, characters, and creatures are tokenized as NFTs, ensuring players have full ownership of their digital assets. The blockchain provides transparency, security, and verifiable ownership, making every achievement genuinely yours.'
    },
    {
        title: 'Mythical Storytelling & Adventure',
        image: '',
        description:
            'Immerse yourself in a universe inspired by global mythologies, where rich narratives, dynamic quests, and exciting battles await. Collect legendary artifacts and explore mythical cultures as you embark on epic adventures.'
    },
    {
        title: 'Decentralized Marketplace with Cross-Chain Compatibility',
        image: '',
        description:
            'MetaQuest’s peer-to-peer marketplace allows secure trading of digital assets, protected by smart contracts. With cross-chain compatibility, players can transfer assets across different blockchain networks, enhancing flexibility and gameplay possibilities.'
    }
];

export default function Features() {
    return (
        <section id='features' className='relative overflow-hidden'>
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-primary opacity-80' />
                <img src='/images/forest.png' alt='hero-bg' className='h-full w-full bg-cover object-cover' />
            </div>
            <div className='relative z-20 py-16'>
                <main className='container mx-auto flex flex-col gap-4 px-4 text-center'>
                    <SectionHeader title={title} subTitle={subTitle} />
                    <div className='mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2'>
                        {features.map((feature, index) => (
                            <div key={index} className='overflow-hidden rounded-lg'>
                                <div className='relative h-[300px] overflow-hidden rounded-xl shadow-lg'>
                                    {/* <img src={feature.image} alt={feature.title} className='w-full h-full object-cover overflow-hidden rounded-lg' /> */}
                                    <div className='absolute inset-0 flex flex-col justify-end bg-black bg-opacity-60 p-6 text-start'>
                                        <h3 className='mb-2 font-semibold text-xl'>{feature.title}</h3>
                                        <p className='text-gray-300 text-sm'>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
}
