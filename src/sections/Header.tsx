export const Header = () => {
  return( 
  <div className="flex justify-center items-center  top-3 fixed z-10 w-full">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
    <a href="#Home" className="nav-item">Home</a>
        <a href="#Projects" className="nav-item">Projects</a>
        <a href="#About" className="nav-item">About</a>
        <a href="#Contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
    </nav>
  </div>
  );
};