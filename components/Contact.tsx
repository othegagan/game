'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';

export default function Contact() {
    // State to track form loading
    const [loading, setLoading] = useState(false);
    const [showThankYouModal, setShowThankYouModal] = useState(false);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission

        // Access form data
        const form = e.target as HTMLFormElement;
        const data = {
            fullname: form.fullname.value,
            email: form.email.value,
            message: form.message.value
        };

        console.log(data);
        // Set loading state to true when the form submission starts
        setLoading(true);

        // Send form data to the Google Apps Script Web App
        fetch('https://script.google.com/macros/s/AKfycbwxtWTxNbe0YwnGmVtGV0RP38NTOR13CNkd4sf36b1Ez2-BzUrUjfwBL6yIAkYd7QnI/exec', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => response.text())
            .then((data) => {
                form.reset(); // Reset the form after submission
                setShowThankYouModal(true);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error submitting the form. Please try again.');
            })
            .finally(() => {
                // Reset loading state after submission is complete
                setLoading(false);
            });
    };

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
                                For inquiries about MetaQuests, potential partnerships, or general questions, feel free to reach out.
                            </p>
                            <form id='contactForm' className='space-y-4' onSubmit={handleSubmit}>
                                <input
                                    id='fullname'
                                    name='fullname'
                                    type='text'
                                    placeholder='Name'
                                    className='w-full rounded-[6px] border-2 border-white/10 bg-white/10 p-3 text-white placeholder:text-white/40 focus:border-yellow-500 focus:outline-none'
                                    required
                                />
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    placeholder='Email'
                                    className='w-full rounded-[6px] border-2 border-white/10 bg-white/10 p-3 text-white placeholder:text-white/40 focus:border-yellow-500 focus:outline-none'
                                    required
                                />
                                <textarea
                                    id='message'
                                    name='message'
                                    placeholder='Message'
                                    rows={5}
                                    className='w-full rounded-[6px] border-2 border-white/10 bg-white/10 p-3 text-white placeholder:text-white/40 focus:border-yellow-500 focus:outline-none'
                                    required
                                />
                                <button
                                    type='submit'
                                    className={`w-full rounded bg-yellow-500 px-6 py-3 font-semibold text-black transition duration-300 hover:bg-yellow-600 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
                                    disabled={loading}>
                                    {loading ? 'Submitting...' : 'Submit'}
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

            <Dialog open={showThankYouModal} onOpenChange={setShowThankYouModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='text-center text-amber-500'>You're on the Priority List!</DialogTitle>
                    </DialogHeader>
                    <div className='py-4 text-center'>
                        Thanks for expressing interest in <span className='text-amber-500'>Metaquests</span>! You're now on our priority waitlist. Get ready for
                        exclusive updates, early access, and a chance to be among the first to experience the ultimate gaming adventure!
                        <br />
                        <br />
                        <b className='text-amber-500'>Stay Tuned!</b>
                        <br />
                        <br />
                        Game Launch Coming Soon!
                    </div>
                    <Button onClick={() => setShowThankYouModal(false)}>Close</Button>
                </DialogContent>
            </Dialog>
        </section>
    );
}
