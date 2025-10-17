export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} G2B - Treinamento Executivo e Assessoria Empresarial
        </p>
      </div>
    </footer>
  );
}
