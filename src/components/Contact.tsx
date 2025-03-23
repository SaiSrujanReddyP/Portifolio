export default () => {
    return (
        <div className="relative p-8 text-center w-full">
            <p className="text-4xl tracking-tight font-semibold text-primary dark:text-white md:text-6xl">Contact Me</p>
            <div className="mt-6 sm:flex w-full lg:max-w-sm mx-auto">
                <form className="w-full" method="POST" action="https://getform.io/f/awnngydb">
                    <div className="flex flex-col sm:flex-row">
                        <div className="mb-4 sm:mr-2 w-full sm:w-1/2">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="text" name="name" id="name" className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-transparent dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Your Name" required />
                        </div>
                        <div className="mb-4 sm:ml-2 w-full sm:w-1/2">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-transparent dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea name="message" id="message" rows={3} className="block w-full px-4 py-2 text-sm text-zinc-500 bg-transparent dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-black dark:hover:text-white  dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-center">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
