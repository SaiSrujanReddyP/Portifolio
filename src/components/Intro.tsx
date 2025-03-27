export default () => {
  return (
    <div>
      <div className="relative flex items-center gap-x-4">
        <img
          src="\pfp.jpg"
          alt=""
          className="h-11 w-11 rounded-full ring-1"
        />
        <div className="text-lg leading-6">
          <p className="font-semibold text-primary">
            <a href="#">
              <span className="absolute inset-0"></span>
              Sai Srujan Reddy P
            </a>
          </p>
          <p className="text-zinc-500">
            a.k.a omnsicientchaos
          </p>
        </div>
      </div>
      <p className="text-4xl mt-6 font-medium lg:text-4xl tracking-tight text-primary">
        Hey, welcome to my portifolio!
      </p>
      <p className="mt-4 text-xl text-zinc-500  className font-light lg:text-xl">
      As a full-stack developer, I specialize in building dynamic, responsive web solutions with scalable back-end systems. My focus is on delivering impactful results that elevate user experience and drive innovation.        <br />
        <br />
        In addition to development, I actively engage as a web security researcher, participating in CTF challenges with team bi0sblr. I explore and mitigate vulnerabilities in web applications, ensuring secure, reliable, and optimized digital environments.
      </p>
    </div>
  );
};