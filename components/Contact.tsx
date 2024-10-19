const title = 'Contact Us';
const subTitle = 'Where Myths, Augmented Reality, and Blockchain Unite';

export default function Contact() {
    return (
        <section id='contact' className=' bg-gradient-to-br from-black/20 to-orange-950 py-16'>
            <div className='container mx-auto px-4'>
                <div className='mb-12 text-center'>
                    <h2 className='mb-3 font-bold text-4xl text-yellow-500'>Reach Out to Us!</h2>
                    <p className='text-gray-300'>Reach out, and let's create a universe of possibilities together!</p>
                </div>
                <div className='mx-auto max-w-6xl rounded-lg bg-accent/10 p-6 backdrop-blur-sm'>
                    <div className='grid gap-8 md:grid-cols-2'>
                        {/* Form Section */}
                        <div>
                            <p className='mb-6 text-gray-300'>
                                For inquiries about MetaQuest, potential partnerships, or general questions, feel free to reach out.
                            </p>
                            <form className='space-y-4'>
                                <input
                                    type='text'
                                    placeholder='First Name'
                                    className='w-full rounded-[6px] border-2 border-white/10 bg-white/10 p-3 text-white placeholder:text-white/40 focus:border-yellow-500 focus:outline-none'
                                />
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className='w-full rounded-[6px] border-2 border-white/10 bg-white/10 p-3 text-white placeholder:text-white/40 focus:border-yellow-500 focus:outline-none'
                                />
                                <textarea
                                    placeholder='Message'
                                    rows={5}
                                    className='w-full rounded-[6px] border-2 border-white/10 bg-white/10 p-3 text-white placeholder:text-white/40 focus:border-yellow-500 focus:outline-none'
                                    defaultValue={''}
                                />
                                <button
                                    type='submit'
                                    className='w-full rounded bg-yellow-500 px-6 py-3 font-semibold text-black transition duration-300 hover:bg-yellow-600'>
                                    Submit
                                </button>
                            </form>
                        </div>
                        {/* Image Section */}
                        <div className='hidden md:block'>
                            <img src='/images/ancient-ruins.png' alt='Ancient ruins at sunset' className='h-full w-full rounded-lg object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
