import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const space_grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' });

export const metadata: Metadata = {
    title: 'Metaquest',
    description:
        'MetaQuest is a cutting-edge gaming platform built on the belief that gaming can go beyond the screen and bridge the gap between the digital and physical worlds. Our mission is to revolutionize mobile gaming through the power of augmented reality (AR), immersive mythological storytelling, and blockchain technology. With MetaQuest, players experience a world where ancient myths come to life, and digital assets can be truly owned, traded, and valued.',
    openGraph: {
        type: 'website',
        url: 'https://metaquest.com',
        title: 'Metaquest',
        description:
            'MetaQuest is a cutting-edge gaming platform built on the belief that gaming can go beyond the screen and bridge the gap between the digital and physical worlds. Our mission is to revolutionize mobile gaming through the power of augmented reality (AR), immersive mythological storytelling, and blockchain technology. With MetaQuest, players experience a world where ancient myths come to life, and digital assets can be truly owned, traded, and valued.',
        images: [
            {
                url: 'https://metaquest.com/metaquest-og-image.png',
                width: 1200,
                height: 630,
                alt: 'Metaquest'
            }
        ]
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={`${space_grotesk.className} bg-primary antialiased`}>{children}</body>
        </html>
    );
}
