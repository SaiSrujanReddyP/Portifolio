import "./styles.css"; 

export default () => {
  return (
    <div className="container flex flex-col  h-full">
      <div className="content h-[88%]">
        <div className="slideshow-blog">
          <div className="slideshow-wrapper-blog">


            <div className="slide-blog">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                      <img src="\coming.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-4xl tracking-tight font-medium text-primary dark:text-white md:text-4xl mt-6">
                  Coming Soon...
                </p>
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                </p>
                <div className="h-[170px]"></div>
              </div>
            </div>

{/* 
            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                    <img src="\quantoomloom_2.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">
                  Lexington
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Free and premium multipage themes and UI Kits for freelancers,
                  developers, businesses, and personal use. Beautifully crafted
                  with Astro.js, and Tailwind CSS — Simple & easy to customise.
                </p>
              </div>
            </div>


            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                    <img src="\quantoomloom_2.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">
                  Lexington
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Free and premium multipage themes and UI Kits for freelancers,
                  developers, businesses, and personal use. Beautifully crafted
                  with Astro.js, and Tailwind CSS — Simple & easy to customise.
                </p>
                <div className="h-[170px]"></div>
              </div>
            </div>


            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                    <img src="\quantoomloom_2.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">
                  Lexington
                </p>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Free and premium multipage themes and UI Kits for freelancers,
                  developers, businesses, and personal use. Beautifully crafted
                  with Astro.js, and Tailwind CSS — Simple & easy to customise.
                  Free and premium multipage themes and UI Kits for freelancers,
                  developers, businesses, and personal use. Beautifully crafted
                  with Astro.js, and Tailwind CSS — Simple & easy to customise.
                  Free and premium multipage themes and UI Kits for freelancers,
                  developers, businesses, and personal use. Beautifully crafted
                  with Astro.js, and Tailwind CSS — Simple & easy to customise.
                </p>
              </div>
            </div>
 */}



          </div>
        </div>
      </div>



      

      <div className="w-100 mt-8 md:max-w-xs lg:max-w-none hello   h-[7%]">
        <a href="https://medium.com/@srujansaireddy.p" target='blank'>
        <button
          type="button"
          className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-black dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
        >
          Checkout my  blogs
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            className="lucide lucide-external-link">
                <path d="M15 3h6v6"/>
                <path d="M10 14 21 3"/>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          </svg>


          {/* <svg xmlns="http://www.w3.org/2000/svg" className='h-7 w-7' data-name="Layer 1" viewBox="0 0 24 24" id="github"><path fill="currentColor"stroke="currentColor"  d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg> */}
        </button>
        </a>
      </div>
    </div>
  );
};
