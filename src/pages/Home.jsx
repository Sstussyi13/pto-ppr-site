export default function Home() {
  return (
    <section className="bg-gray-100 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Производственно-технический отдел (ПТО / ППР)
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Работаем по всей России. Подготовим ППР, техническую документацию и проекты под ключ.
        </p>
        <a
          href="/contacts"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Оставить заявку
        </a>
      </div>
    </section>
  );
}
