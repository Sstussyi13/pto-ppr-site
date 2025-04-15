export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto text-center text-sm">
          © {new Date().getFullYear()} ПТО / ППР — Работаем по всей России.  
          <br />
          Почта: info@pto-ppr.ru | Тел: +7 (918) 452-27-69
        </div>
      </footer>
    );
  }
  