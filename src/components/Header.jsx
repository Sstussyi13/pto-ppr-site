import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">ПТО / ППР</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Главная</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">Услуги</Link>
          <Link to="/steps" className="text-gray-700 hover:text-blue-600">Этапы работы</Link>
          <Link to="/contacts" className="text-gray-700 hover:text-blue-600">Контакты</Link>
        </nav>
      </div>
    </header>
  );
}
