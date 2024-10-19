import Link from 'next/link';

const links = ['Features', 'Gameplay', 'Tokenomics', 'Roadmap', 'Community'];

const socials = [
    {
        name: 'Twitter',
        icon: (
            <svg className='size-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
            </svg>
        )
    },
    {
        name: 'Discord',
        icon: (
            <svg className='size-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z' />
            </svg>
        )
    },
    {
        name: 'Telegram',
        icon: (
            <svg className='size-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.47-1.13 7.25-.14.74-.42 1-.68 1.02-.58.05-1.02-.38-1.58-.75-1.28-.67-2.2-1.16-3.42-1.82-.76-.42-.27-.65.17-.95.11-.07 2.03-1.87 2.07-2.03.01-.04 0-.09-.04-.12-.13-.09-.24-.06-.34-.03-.14.04-2.46 1.57-3.47 2.15-.48.29-1.15.33-1.63.19-.53-.15-1.17-.32-1.58-.52 1.13-.33 2.26-.73 3.35-1.18 1.45-.6 5.32-2.2 5.69-2.35.42-.17.75-.27.71.18z' />
            </svg>
        )
    },
    {
        name: 'YouTube',
        icon: (
            <svg className='size-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
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
                            <img src='/images/logo.png' alt='MetaQuest' className='h-24 w-auto lg:h-40' />
                        </Link>
                    </div>
                    <div className='flex flex-wrap justify-center gap-24 md:justify-end'>
                        <div>
                            <h3 className='mb-4 font-semibold text-yellow-500'>Quick Links</h3>
                            <ul className='space-y-2'>
                                {links.map((item) => (
                                    <li key={item}>
                                        <Link href='#' className='transition-colors hover:text-yellow-500'>
                                            {item}
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
                                        <Link href='#' className='flex items-center gap-2 transition-colors hover:text-yellow-500'>
                                            {item.icon}
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-between border-accent border-t pt-4 text-sm md:flex-row'>
                    <p>© 2024 Metaquest. All rights reserved.</p>
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
