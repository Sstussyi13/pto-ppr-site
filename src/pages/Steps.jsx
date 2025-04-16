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
  