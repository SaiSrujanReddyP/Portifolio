import "./styles.css"; 

export default () => {
  return (
    <div className="container flex flex-col  h-full">
      <div className="content h-[87%]">
        <div className="slideshow">
          <div className="slideshow-wrapper">


            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                      <img src="\myweather.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                  SkyCast
                </p>
                
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                SkyCast is a Flutter application that provides current weather information for a given location. 
                It utilizes the Open Weather GeoCoder API to convert a place name to 
                coordinates and then fetches the current weather using the Open Weather Current Weather API.
                </p>
                <div className="h-[170px]"></div>
              </div>
            </div>


            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                    <img src="\physXForge.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                PhysXForge
                </p>
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                PhysXForge is a Java-based 2D physics simulator that models sphere motion with gravity, drag, and gravitational interactions. Built with Java Swing, it offers an interactive interface to adjust parameters like gravity and sphere placement. With collision detection, it accurately simulates sphere interactions, providing a visual tool for exploring physics concepts.</p>
              </div>
            </div>


            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                    <img src="\OpenCVE.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                OpenCVE
                </p>
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                OpenCVE is a web-based CVE management system offering an organized and efficient system for handling CVE records. It supports viewing, adding, editing, and deleting CVE records, with OAuth authentication. CSV import allows for efficient batch record management, offering a complete solution to vulnerability tracking.</p>
                <div className="h-[170px]"></div>
              </div>
            </div>


            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                    <img src="\picsort.png" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                  VisualSort
                </p>
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                VisualSort is a unique sorting visualizer developed by User, where pixels of 
                images are shuffled and sorted using various sorting algorithms, 
                providing a novel way to visualize sorting processes.
                </p>
              </div>
            </div>
            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                      <img src="\cropped.jpg" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                  Building Analyser
                </p>
                
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                Building Analyzer is an indoor navigation and security optimization app built with Kotlin and Jetpack Compose. It uses Google's Geolocation API to mark key nodes and process real-time location data for accurate camera placement and shortest paths, helping facility managers enhance security and streamline indoor navigation.</p>
                <div className="h-[170px]"></div>
              </div>
            </div>

            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                      <img src="\Vivalyse.jpeg" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                Vivalyse
                </p>
                
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                Vivalyse 

                Vivalyse is a powerful Ml model that quantifies student confidence and clarity in viva speeches. By combining audio feature extraction techniques such as MFCC and LPC with advanced machine learning algorithms like random forests and K-means clustering, Vivalyse empowers educators to understand and enhance student performance.
                </p>
                <div className="h-[170px]"></div>
              </div>
            </div>

            <div className="slide">
              <div className="mt-8">
                <div className="flex flex-wrap">
                  <div className="flex items-center text-sm font-medium text-primary dark:text-white">
                    <div className="flex flex-col">
                      <img src="\ctf.jpg" />
                    </div>
                    <br />
                  </div>
                </div>
                <p className="text-5xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6">
                  CTF Writeups
                </p>
                
                <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 font-light">
                As a cybersecurity enthusiast and avid CTF player, I actively participate in CTF competitions to sharpen my skills and explore web security challenges. This repository showcases detailed write-ups of select web-based CTF challenges, offering insights into solutions and techniques. If you've made it this far, feel free to dive into my CTF write-ups!
                </p>
                <div className="h-[170px]"></div>
              </div>
            </div>

        


          </div>
        </div>
      </div>

      {/*<div className='block sm:hidden'> hello phone</div>*/}

      <div className="w-100 mt-8 md:max-w-xs lg:max-w-none hello   h-[7%]">
      <a href="https://github.com/SaiSrujanReddyP" target='blank'> 
        <button
          type="button"
          className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-black dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
        >
          Check out my GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github h-6 w-6 "
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
        </button>
        </a>
      </div>
    </div>      


  );
};
