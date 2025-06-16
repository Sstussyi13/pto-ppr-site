<<<<<<< HEAD
import { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import PriceTable from "../components/PriceTable";
import { Link, useLocation } from "react-router-dom";

export default function Services() {
  const location = useLocation();
  const services = [
    {
      title: "Разработка ППР",
      description: "Проект производства работ для строительных и монтажных процессов.",
      details: "Схемы, графики, пояснительная записка — всё для сдачи в надзорные органы.",
    },
    {
      title: "Проектирование ПОД",
      description: "Проекты организации дорожного движения на период строительства.",
      details: "Согласуем схемы с ГИБДД. Готовим по ГОСТ с подложкой.",
    },
    {
      title: "ППРк / ППРс",
      description: "ППР для крановых, сварочных и опасных работ.",
      details: "Документация для безопасного проведения работ. Учёт зон действия, ТБ и техники.",
    },
    {
      title: "ПЗР / ППЗ (земляные работы)",
      description: "Проекты земляных работ: схемы, чертежи, расчёты.",
      details: "Разрезы, расчёт объёмов, уклоны, ограждения. Учитываем геологию участка.",
    },
    {
      title: "Технологические карты",
      description: "Карты на технологические процессы: бетон, отделка и т.д.",
      details: "Очередность, оборудование, ТБ, графики. Форматы DOCX + PDF.",
    },
    {
      title: "Сметная документация",
      description: "Составление смет, ВОР, калькуляций.",
      details: "Работаем по ФЕР, ГЭСН, ТСН. Формируем в Excel + PDF. Учитываем регион.",
    },
    {
      title: "Исполнительная документация",
      description: "Акты, схемы, журналы. Сдача ИД под ключ.",
      details: "КС-2, КС-3, акты скрытых работ, ИС. По шаблону заказчика или по нормативу.",
    },
  ];

  const prices = [
    { name: "ППР на общестроительные работы", duration: "2–3 дня", price: "от 8 000 ₽" },
    { name: "ПОД (дорожное движение)", duration: "1–2 дня", price: "от 6 000 ₽" },
    { name: "ППРк", duration: "1–2 дня", price: "от 10 000 ₽" },
    { name: "Смета", duration: "по запросу", price: "от 3 000 ₽" },
  ];

  const [modalContent, setModalContent] = useState(null);

  return (
    <section className="bg-background text-primary py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Услуги ПТО и ППР</h2>
        <p className="text-center text-muted mb-10 text-sm sm:text-base">
          Проектируем, согласуем, сопровождаем — под ключ по всей России.
        </p>

        {/* Карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              onMore={() => setModalContent(service)}
            />
          ))}
        </div>

        {/* Модальное окно */}
        {modalContent && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setModalContent(null)}
          >
            <div
              className="bg-background w-full max-w-md mx-4 sm:mx-0 p-6 rounded shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalContent(null)}
                className="absolute top-2 right-3 text-muted text-lg"
              >
                ×
              </button>
              <h4 className="text-xl font-semibold mb-2">{modalContent.title}</h4>
              <p className="text-muted text-sm">{modalContent.details}</p>
            </div>
          </div>
        )}

        {/* Таблица */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Цены на популярные услуги</h3>
          <div className="overflow-x-auto">
            <PriceTable prices={prices} />
          </div>
          <div className="text-center mt-8">
            <Link
              to="/contacts"
              className="inline-block bg-gray-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition"
            >
              Получить точный расчёт
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
=======
import { Link } from "react-router-dom";


export default function Steps() {
    const steps = [
      {
        title: "1. Заявка и первичная консультация",
        description:
          "Вы оставляете заявку через сайт или по телефону. Мы уточняем основные вводные данные по проекту и предварительные сроки.",
      },
      {
        title: "2. Сбор исходных данных",
        description:
          "Вы предоставляете техническое задание, чертежи, планы, геодезию и другую исходную документацию. При необходимости — помогаем в подготовке.",
      },
      {
        title: "3. Разработка документации",
        description:
          "Мы разрабатываем проект: ППР, ПОД, ПЗР, сметы и пр. Учитываем нормативные требования, особенности объекта, пожелания заказчика.",
      },
      {
        title: "4. Внутреннее согласование и проверка",
        description:
          "Документы проходят двойную проверку внутри нашей команды. Мы следим за качеством, читаемостью и соответствием нормам.",
      },
      {
        title: "5. Согласование с заказчиком",
        description:
          "Вы получаете предварительный вариант. При необходимости вносим правки и уточнения. Подписываем финальные версии.",
      },
      {
        title: "6. Передача итогового пакета",
        description:
          "Мы отправляем вам документы в нужных форматах (PDF, DWG, DOCX). Также прилагаем рекомендации и поддержку по сдаче в надзорные органы.",
      },
    ];
  
    return (
      <section className="bg-background py-20 px-4 text-primary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Этапы работы</h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-12 text-sm sm:text-base">
            Мы сопровождаем клиента на всех этапах — от заявки до сдачи готовой документации.
          </p>
  
          <div className="space-y-8 sm:space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4" data-aos="fade-up">
                {/* Номер шага */}
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 border-2 border-primary text-primary font-semibold rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {index + 1}
                </div>
  
                {/* Карточка */}
                <div className="bg-light border border-gray-200 p-4 sm:p-5 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 w-full">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Кнопка */}
          <div className="text-center mt-14">
          <Link
              to="/contacts"
              className="inline-block bg-gray-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition"
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
>>>>>>> a5d9d4b2e7d81a4985421be5c9ab9e4d188d4a25
