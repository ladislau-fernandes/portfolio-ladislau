// Navbar.tsx
const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Ladislau.dev</h1>
        <ul className="flex space-x-6">
          <li><a href="#inicio" className="hover:text-blue-500 transition">Início</a></li>
          <li><a href="#projetos" className="hover:text-blue-500 transition">Projetos</a></li>
          <li><a href="#contato" className="hover:text-blue-500 transition">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
