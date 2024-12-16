import SectionHeader from "./section-header";
const title = 'Partners we work with';
const subTitle = 'Collaborations That Drive Success';


export default function Partners() {
    return (
        <section id='tokenomics' className='relative overflow-hidden'>
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-primary opacity-90' />
                <img src='./images/partners-bg.png' alt='bg' className='h-full w-full bg-cover object-cover' />
            </div>
            <div className='relative z-20 py-16'>
                <main className='container mx-auto flex flex-col gap-4 px-4 text-center'>
                    <SectionHeader title={title} subTitle={subTitle} />
                    <div className='mx-auto mt-10 max-w-xl'>
                        <img src='./images/partners.png' alt='placeholder' className='mx-auto  object-cover' />
                    </div>
                </main>
            </div>
        </section>
    );
};