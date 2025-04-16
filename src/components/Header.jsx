import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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

        {/* Бургер */}
        <button
          className="md:hidden text-2xl text-zinc-700 focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Открыть меню"
        >
          ☰
        </button>
      </div>

      {/* Оверлей и боковое меню */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex"
          onClick={closeMenu}
        >
          {/* Затемнённый фон */}
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />

          {/* Меню */}
          <div
            className="ml-auto w-72 max-w-full bg-white h-full shadow-xl p-6 flex flex-col z-50 animate-slide-in"
            onClick={(e) => e.stopPropagation()} // блокирует закрытие при клике ВНУТРИ
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-zinc-800">Меню</span>
              <button onClick={closeMenu} className="text-2xl text-zinc-700">×</button>
            </div>

            <nav className="flex flex-col gap-4 text-base">
              <Link to="/" onClick={closeMenu} className="text-zinc-700 hover:text-blue-600 transition">Главная</Link>
              <Link to="/services" onClick={closeMenu} className="text-zinc-700 hover:text-blue-600 transition">Услуги</Link>
              <Link to="/steps" onClick={closeMenu} className="text-zinc-700 hover:text-blue-600 transition">Этапы</Link>
              <Link to="/contacts" onClick={closeMenu} className="text-zinc-700 hover:text-blue-600 transition">Контакты</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
