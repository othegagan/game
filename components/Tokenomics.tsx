import SectionHeader from './section-header';

const title = 'Tokenomics';
const subTitle = 'MetaQuests Token (MQT): Your Key to Ownership and Growth.';

const points = [
    'In-Game Transactions: Purchase items like weapons, artifacts, and customization features using MQT.',
    'Upgrades: Enhance your characters, weapons, and assets using MQT to unlock new abilities and powers.',
    'Marketplace Transactions: MQT is used as the primary currency within the decentralized marketplace for buying, selling, and trading assets.',
    'Rewards System: Players earn MQT by completing in-game challenges, quests, and events, allowing for further customization and progression.'
];

export default function Tokenomics() {
    return (
        <section id='tokenomics' className='relative overflow-hidden'>
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-primary opacity-90' />
                <img src='/images/place.jpg' alt='token' className='h-full w-full bg-cover object-cover' />
            </div>
            <div className='relative z-20 py-16'>
                <main className='container mx-auto flex flex-col gap-4 px-4 text-center'>
                    <SectionHeader title={title} subTitle={subTitle} />
                    <div className='mx-auto mt-10 flex max-w-5xl flex-col gap-16 md:flex-row'>
                        <img src='/images/token.png' alt='placeholder' className='mx-auto size-56 rounded-full object-cover md:size-[300px]' />
                        <ul className='mt-10 list-disc space-y-4 px-6 text-left text-white'>
                            {points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </section>
    );
}
