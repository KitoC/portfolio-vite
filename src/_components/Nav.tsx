const Nav = () => {
  const anchorStyles = `cursor-pointer`;

  return (
    <header className="lg:w-1/2 pt-24">
      <div className="text-4xl flex flex-col gap-3">
        <h3 className="font-bold">Kito Clark</h3>

        <h3 className="text-3xl">Fullstack Software Developer</h3>
      </div>

      <nav className="uppercase flex flex-col gap-5 text-2xl py-6 p-4">
        <a className={anchorStyles} href="#About">
          About
        </a>
        <a className={anchorStyles} href="#Skills">
          Skills
        </a>
        <a className={anchorStyles} href="#Experience">
          Experience
        </a>
        <a className={anchorStyles} href="#Projects">
          Projects
        </a>
      </nav>
    </header>
  );
};

export default Nav;
