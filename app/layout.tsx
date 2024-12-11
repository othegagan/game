import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Metaquests',
    description:
        'MetaQuests is a cutting-edge gaming platform built on the belief that gaming can go beyond the screen and bridge the gap between the digital and physical worlds. Our mission is to revolutionize mobile gaming through the power of augmented reality (AR), immersive mythological storytelling, and blockchain technology. With MetaQuests, players experience a world where ancient myths come to life, and digital assets can be truly owned, traded, and valued.',
    openGraph: {
        type: 'website',
        url: 'https://www.metaquests.com',
        title: 'Metaquests',
        description:
            'MetaQuests is a cutting-edge gaming platform built on the belief that gaming can go beyond the screen and bridge the gap between the digital and physical worlds. Our mission is to revolutionize mobile gaming through the power of augmented reality (AR), immersive mythological storytelling, and blockchain technology. With MetaQuests, players experience a world where ancient myths come to life, and digital assets can be truly owned, traded, and valued.',
        images: [
            {
                url: 'https://www.metaquests.com/image.png',
                width: 1200,
                height: 630,
                alt: 'Metaquests'
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
            <head>
                <meta
                    name='description'
                    content='MetaQuests is a cutting-edge gaming platform built on the belief that gaming can go beyond the screen and bridge the gap between the digital and physical worlds. Our mission is to revolutionize mobile gaming through the power of augmented reality (AR), immersive mythological storytelling, and blockchain technology. With MetaQuests, players experience a world where ancient myths come to life, and digital assets can be truly owned, traded, and valued.'
                />
                <meta name='title' content='MetaQuests' />
                <meta name='keywords' content='gaming, blockchain, ar, nft, metaverse' />
                <meta name='author' content='Gagan Kumar' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />

                <meta property='og:title' content='MetaQuests' />
                <meta
                    property='og:description'
                    content='MetaQuests is a cutting-edge gaming platform built on the belief that gaming can go beyond the screen and bridge the gap between the digital and physical worlds. Our mission is to revolutionize mobile gaming through the power of augmented reality (AR), immersive mythological storytelling, and blockchain technology. With MetaQuests, players experience a world where ancient myths come to life, and digital assets can be truly owned, traded, and valued.'
                />
                <meta property='og:image' content='https://www.metaquests.com/image.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
                <link rel='manifest' href='/images/site.webmanifest' />
            </head>
            <body className='bg-primary font-space antialiased'>{children}</body>
        </html>
    );
}
