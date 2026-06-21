export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Zamówienie przyjęte!
        </h1>
        <p className="text-gray-500 mb-2">
          Dziękujemy za zakup. Na podany adres e-mail wysłaliśmy potwierdzenie
          zamówienia oraz link do aktywacji panelu.
        </p>
        <p className="text-gray-500 mb-8">
          Tabliczki NFC wyślemy na podany adres w ciągu 3-5 dni roboczych.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center bg-brand-600 text-white font-medium rounded-xl px-6 py-3 hover:bg-brand-700 transition-colors"
        >
          Wróć na stronę główną
        </a>
      </div>
    </div>
  );
}
