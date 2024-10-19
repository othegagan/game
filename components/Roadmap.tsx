import SectionHeader from './section-header';

const roadmapData = [
    {
        id: 1,
        title: 'Q1 2024: Alpha Launch',
        description: 'Launch of AR exploration gameplay. Initial player feedback gathering and community-building campaigns'
    },
    {
        id: 2,
        title: 'Q2 2024: Public Beta',
        description: 'Public beta release of the game, token sales begin, and the decentralized marketplace is introduced for asset trading.'
    },
    {
        id: 3,
        title: 'Q3 2024: Mythology Expansion',
        description: 'New mythological locations, characters, and digital assets are added to the game, providing fresh quests and challenges for players.'
    },
    {
        id: 4,
        title: 'Q4 2024: Global Challenges & Events',
        description:
            'Large-scale global challenges, seasonal events, and community-driven tournaments are launched, offering rare rewards and player engagement incentives.'
    },
    {
        id: 5,
        title: 'Beyond 2024',
        description:
            'Continuous development with the introduction of new mythologies, enhanced AR features, and expanded blockchain integration for deeper immersion.'
    }
];

export default function Roadmap() {
    return (
        <section id='roadmap' className='z-20 py-20'>
            <main className='container mx-auto flex flex-col gap-4 px-4'>
                <SectionHeader title='Roadmap' subTitle='Charting the Future: The MetaQuest Journey' className='mt-10' />
                <div className='mx-auto mt-10 flex max-w-5xl flex-col gap-16 md:flex-row'>
                    <div className='before:-translate-x-px relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0'>
                        {roadmapData.map((item, index) => (
                            <div key={item.id} className='group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse'>
                                <div className='md:group-odd:-translate-x-1/2 flex h-10 w-10 shrink-0 scale-[2] items-center justify-center md:order-1 md:group-even:translate-x-1/2'>
                                    <img src='/images/dot.png' alt='' className='h-full w-full rounded-full object-cover object-center' />
                                </div>
                                <div className='w-[calc(100%-4rem)] p-4 md:w-[calc(50%-2.5rem)]'>
                                    <h3 className='mb-2 font-bold text-xl text-yellow-500'>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
}
