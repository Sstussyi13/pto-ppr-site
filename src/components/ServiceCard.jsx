export default function ServiceCard({ title, description, onMore }) {
    return (
      <div className="border border-gray-200 bg-gray-50 p-6 rounded-md shadow-sm hover:shadow-md transition flex flex-col justify-between min-h-[150px]">
        <div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        </div>
        <div className="mt-auto">
          <button
            onClick={onMore}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Подробнее
          </button>
        </div>
      </div>
    );
  }
  