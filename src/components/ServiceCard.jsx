<<<<<<< HEAD
export default function ServiceCard({ title, description, icon: Icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white border border-gray-200 rounded-xl p-6 shadow-sm 
                 hover:shadow-lg transform transition-all duration-300 hover:scale-[1.03]"
    >
      <div className="flex items-center gap-4 mb-4">
        {Icon && <Icon className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition" />}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

      <div className="mt-4">
        <span className="inline-block text-sm text-blue-600 font-medium group-hover:underline">
          Подробнее →
        </span>
      </div>
    </div>
  );
}
=======
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
  
>>>>>>> a5d9d4b2e7d81a4985421be5c9ab9e4d188d4a25
