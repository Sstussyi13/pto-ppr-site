import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gray-100 py-20 px-4 sm:px-6 text-center sm:text-left">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Производственно-технический отдел <br className="hidden sm:block" /> (ПТО / ППР)
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Подготовим ППР, проекты организации строительства и техническую документацию под ключ.
            Работаем по всей России.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contacts"
              className="inline-block bg-gray-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition"
            >
              Оставить заявку
            </Link>
          </div>
        </div>
      </section>

      {/* О компании */}
      <section className="py-16 px-4 sm:px-6 bg-white border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">О нас</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Мы — команда инженеров и проектировщиков с опытом более 10 лет в области ПТО и ППР...
          </p>
        </div>
      </section>

      {/* Преимущества */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Опыт 10+ лет",
                text: "Проекты любой сложности: ТЦ, ЖК, заводы, ВЛ 110 кВ",
              },
              {
                title: "Работаем по всей РФ",
                text: "Учитываем СП, СНиП и региональные нормы",
              },
              {
                title: "Сжатые сроки",
                text: "Под ключ от 3 рабочих дней с гарантиями и сопровождением",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-md border border-gray-200 shadow-sm hover:shadow-md transition text-left"
              >
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ссылки на разделы */}
      <section className="bg-white py-16 px-4 sm:px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Что мы делаем</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              { label: "Услуги", link: "/services" },
              { label: "Этапы работы", link: "/steps" },
              { label: "Контакты", link: "/contacts" },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="flex justify-between items-center bg-light border border-gray-300 px-5 py-4 rounded-md hover:bg-gray-200 transition group"
              >
                <span className="text-lg font-medium text-primary">{item.label}</span>
                <span className="text-xl text-muted group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-800 text-white py-16 px-4 sm:px-6 text-center mt-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Нужен ППР или проект? Мы всё сделаем за вас!
          </h3>
          <p className="mb-6 text-gray-300 text-sm sm:text-base">
            Отправьте заявку — мы свяжемся с вами в течение 15 минут
          </p>
          <Link
            to="/contacts"
            className="inline-block w-full sm:w-auto bg-white text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-300 transition"
          >
            Оставить заявку
          </Link>
        </div>
      </section>
    </div>
  );
}
