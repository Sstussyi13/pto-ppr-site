import { useState } from "react";
import { Mail, Phone, MessageSquare, Clock, MapPin, ArrowRight } from "lucide-react";

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-background py-20 px-4 sm:px-6 text-primary">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Связаться с нами</h2>
        <p className="text-center text-muted mb-12 text-sm sm:text-base">
          Оставьте заявку — мы ответим и предложим решение в кратчайшие сроки.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Форма */}
          <div className="bg-light border border-gray-200 rounded-xl p-6 sm:p-8 shadow hover:shadow-md transition-all">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-medium mb-1">Имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Ваше имя"
                    className="w-full px-4 py-2 pl-10 border rounded-md bg-white text-primary focus:outline-none focus:ring focus:ring-primary/30 text-sm"
                  />
                  <span className="absolute left-3 top-[38px] text-muted">
                    <MessageSquare size={16} />
                  </span>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium mb-1">Телефон</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 123-45-67"
                    className="w-full px-4 py-2 pl-10 border rounded-md bg-white text-primary focus:outline-none focus:ring focus:ring-primary/30 text-sm"
                  />
                  <span className="absolute left-3 top-[38px] text-muted">
                    <Phone size={16} />
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Сообщение</label>
                  <textarea
                    rows="5"
                    placeholder="Расскажите, что вам нужно — мы предложим решение."
                    className="w-full px-4 py-3 border rounded-md bg-white text-primary resize-none focus:outline-none focus:ring focus:ring-primary/30 text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 bg-primary text-white py-2.5 rounded-md hover:bg-accent transition text-sm font-medium shadow"
                >
                  Отправить заявку <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center gap-3 bg-green-50 border border-green-200 text-green-800 p-5 rounded-md shadow-sm">
                <span className="text-3xl">✅</span>
                <div className="text-sm">
                  <p className="font-medium">Спасибо за вашу заявку!</p>
                  <p className="text-green-700 mt-1">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              </div>
            )}
          </div>

          {/* Контактная информация */}
          <div className="space-y-6">
            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-md font-semibold mb-1 flex items-center gap-2">
                <Mail size={16} /> Почта
              </h3>
              <a href="mailto:info@pto-ppr.ru" className="text-blue-600 hover:underline text-sm">
                info@pto-ppr.ru
              </a>
            </div>
            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-md font-semibold mb-1 flex items-center gap-2">
                <Phone size={16} /> Телефон
              </h3>
              <a href="tel:+79184522769" className="text-blue-600 hover:underline text-sm">
                +7 (918) 452-27-69
              </a>
              <p className="text-muted text-xs mt-1">Работаем по всей России</p>
            </div>
            <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-md font-semibold mb-1 flex items-center gap-2">
                <Clock size={16} /> Режим работы
              </h3>
              <p className="text-muted text-sm">Пн–Сб: 09:00–20:00</p>
              <p className="text-muted text-sm">Вс: выходной</p>
            </div>
          </div>
        </div>

        {/* Карта */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MapPin size={18} /> Мы на карте
          </h3>
          <div className="w-full h-64 sm:h-72 rounded-md overflow-hidden border shadow-sm">
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
