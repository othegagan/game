import Link from 'next/link';

const links = [
    { name: 'Features', href: '#features' },
    { name: 'Gameplay', href: '#gameplay' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' }
];

const socials = [
    {
        name: 'X/Twitter',
        herf: 'https://x.com/metaquests_?s=21',
        icon: (
            <svg className='size-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
            </svg>
        )
    },
    {
        name: 'LinkedIn',
        herf: 'https://www.linkedin.com/company/metaquests/',
        icon: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-linkedin size-5'>
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
            </svg>
        )
    }
];

export default function Footer() {
    return (
        <footer id='footer' className='bg-primary text-gray-300'>
            <div className='mx-auto max-w-7xl px-4 py-8'>
                <div className='mb-8 flex flex-col items-center justify-between md:flex-row'>
                    <div className='mb-6 md:mb-0'>
                        <Link href='/'>
                            <img src='/images/logo.png' alt='MetaQuests' className='h-24 w-auto lg:h-40' />
                        </Link>
                    </div>
                    <div className='flex flex-wrap justify-center gap-24 md:justify-end'>
                        <div>
                            <h3 className='mb-4 font-semibold text-yellow-500'>Quick Links</h3>
                            <ul className='space-y-2'>
                                {links.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className='transition-colors hover:text-yellow-500'>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className='mb-4 font-semibold text-yellow-500'>Follow Us</h3>
                            <ul className='space-y-2'>
                                {socials.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.herf} target='_blank' className='flex items-center gap-4 transition-colors hover:text-yellow-500'>
                                            {item.icon}
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-between border-accent border-t pt-4 text-sm md:flex-row'>
                    <p>© 2024 Metaquests. All rights reserved.</p>
                    <div className='mt-2 hidden md:mt-0 md:block'>
                        <Link href='#' className='mr-4 transition-colors hover:text-yellow-500'>
                            Terms & Conditions
                        </Link>
                        <Link href='#' className='transition-colors hover:text-yellow-500'>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
