import { useState } from "react";

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-background py-20 px-4 sm:px-6 text-primary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Связаться с нами</h2>
        <p className="text-center text-muted mb-12 text-sm sm:text-base">
          Оставьте заявку — мы ответим и предложим решение в кратчайшие сроки.
        </p>

        {/* Форма + Контакты */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Форма */}
          <div className="bg-light border border-gray-200 rounded-md p-6 sm:p-8 shadow-sm hover:shadow transition">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Имя</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-md bg-white text-primary focus:outline-none focus:ring focus:ring-primary/30 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Телефон</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border rounded-md bg-white text-primary focus:outline-none focus:ring focus:ring-primary/30 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Сообщение</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border rounded-md bg-white text-primary resize-none focus:outline-none focus:ring focus:ring-primary/30 text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-md hover:bg-accent transition text-sm"
                >
                  Отправить заявку
                </button>
              </form>
            ) : (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 p-5 rounded-md shadow-sm">
                <span className="text-xl">✅</span>
                <div className="text-sm">
                  <p className="font-medium">Спасибо за вашу заявку!</p>
                  <p className="text-green-700 mt-1">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              </div>
              
            )}
          </div>

          {/* Контакты */}
          <div className="space-y-6 text-primary text-sm">
            <div>
              <h3 className="text-lg font-semibold mb-2">Наши контакты</h3>
              <p className="text-muted">Пишите, звоните — мы всегда на связи.</p>
            </div>
            <div>
              <p className="text-primary">
                <strong>Почта:</strong>{" "}
                <a href="mailto:info@pto-ppr.ru" className="text-blue-600 hover:underline">
                  info@pto-ppr.ru
                </a>
              </p>
              <p className="text-primary">
                <strong>Телефон:</strong>{" "}
                <a href="tel:+79184522769" className="text-blue-600 hover:underline">
                  +7 (918) 452-27-69
                </a>
              </p>
              <p className="text-muted">Работаем по всей России</p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-1 text-primary">Режим работы</h4>
              <p className="text-muted">Пн–Сб: 09:00–20:00</p>
              <p className="text-muted">Вс: выходной</p>
            </div>
          </div>
        </div>

        {/* Карта */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-4">Мы на карте</h3>
          <div className="w-full h-64 sm:h-72 rounded-md overflow-hidden border">
            <iframe
              title="Яндекс Карта — Москва, Лечебная 5"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab8c3f7b7559c7d932f69ff633a54504a163e24356c7b95df9587aba328f67d3c&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
