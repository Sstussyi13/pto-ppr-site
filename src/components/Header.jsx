import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-zinc-800 hover:text-zinc-600 transition">
  ПТО / ППР
</Link>


        {/* Десктоп меню */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-zinc-700 hover:text-blue-600 transition">Главная</Link>
          <Link to="/services" className="text-zinc-700 hover:text-blue-600 transition">Услуги</Link>
          <Link to="/steps" className="text-zinc-700 hover:text-blue-600 transition">Этапы работы</Link>
          <Link to="/contacts" className="text-zinc-700 hover:text-blue-600 transition">Контакты</Link>
        </nav>

        {/* Мобильная кнопка */}
        <button
          className="md:hidden text-2xl text-zinc-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-6 pb-4 space-y-2 bg-zinc-100">
          <Link
            to="/"
            className="block text-zinc-700 hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Главная
          </Link>
          <Link
            to="/services"
            className="block text-zinc-700 hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Услуги
          </Link>
          <Link
            to="/steps"
            className="block text-zinc-700 hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Этапы работы
          </Link>
          <Link
            to="/contacts"
            className="block text-zinc-700 hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Контакты
          </Link>
        </div>
      )}
    </header>
  );
}
