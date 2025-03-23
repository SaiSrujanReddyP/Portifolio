export default () => {
  return (
    <div className="h-full">
      <div className="h-[75%]">
        <p className="text-4xl text-primary dark:text-white lg:text-7xl tracking-tight">
          Grab my résumé!
        </p>
        <div className='block sm:hidden'> 
        <br />
        
        </div>
        <p className="mt-4 text-3sm lg:text-sm dark:text-zinc-400 md:max-w-xs lg:max-w-none">
          Unlock the doors to explore the rich tapestry of my professional
          journey and accomplishments.
        </p>
      </div>
      <div className="w-full mt-8 md:max-w-xs lg:max-w-none h-[25%] ">
        <button
          type="button"
          className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-black dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
          onClick={() => {
            window.open("\SaiSrujanReddyP_Dev.pdf", "_blank"); // Replace '/path/to/your/pdf' with the actual path to your PDF file
          }}
        >
          Download my CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-download w-4 h-4"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
            <path d="M7 11l5 5l5 -5"></path>
            <path d="M12 4l0 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
