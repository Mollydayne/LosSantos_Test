export default function NouveauPatientForm() {
  const date = new Date();
  date.setFullYear(2034);

  // Formatage lisible en français
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("fr-FR", options);

  // Heure actuelle
  const formattedTime = date.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });


  return (
    <div className="min-h-screen bg-white border border-gray-300 flex flex-col items-center p-6 font-sans">
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-start mb-4">
        <div className="bg-red-700 w-48 h-24 flex items-center justify-center">
          <span className="text-yellow-300 text-xl font-semibold text-center leading-tight">
            placeholder logo
          </span>
        </div>
        <div className="text-right text-black">
          <p>{formattedDate}</p>
          <p>{formattedTime}</p>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl text-black mb-6 self-start max-w-4xl">
        Nouveau patient
      </h1>

      {/* Form Container */}
      <div className="w-full max-w-4xl border border-gray-300 rounded-lg p-0 overflow-hidden">
        {/* Section Header */}
        <div className="bg-red-700 text-white px-6 py-2 text-lg font-semibold rounded-t-lg relative">
          <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-4 border-red-700 rounded-full"></div>
          Informations personnelles
        </div>

        {/* Form Fields */}
        <form className="grid grid-cols-2 gap-4 p-6">
          {/* Nom */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Nom</label>
            <input
              type="text"
              className="border border-black px-2 py-1 focus:outline-none"
            />
          </div>

          {/* Prénom */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Prénom</label>
            <input
              type="text"
              className="border border-black px-2 py-1 focus:outline-none"
            />
          </div>

          {/* Téléphone */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Téléphone</label>
            <input
              type="text"
              className="border border-black px-2 py-1 focus:outline-none"
            />
          </div>

          {/* Adresse (menu déroulant) */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Adresse</label>
            <select className="border border-black px-2 py-1 focus:outline-none">
              <option>-- Sélectionner --</option>
              <option>Adresse 1</option>
              <option>Adresse 2</option>
            </select>
          </div>

          {/* Confession (menu déroulant) */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Confession</label>
            <select className="border border-black px-2 py-1 focus:outline-none">
              <option>-- Sélectionner --</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>

          {/* Score social */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Score social</label>
            <input
              type="text"
              className="border border-black px-2 py-1 focus:outline-none"
            />
          </div>
        </form>
      </div>

      {/* Submit Button */}
      <div className="w-full max-w-4xl flex justify-end items-center mt-6">
        <button className="flex items-center gap-2 text-black hover:underline">
          Valider et passer à la suite
          <span className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500">
            ▶
          </span>
        </button>
      </div>
    </div>
  );
}
