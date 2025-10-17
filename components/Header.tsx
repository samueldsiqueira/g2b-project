import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b-4 border-g2b-orange">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-start">
          <nav className="flex gap-6">
            <Link href="/" className="text-g2b-gray hover:text-g2b-orange font-semibold transition-colors">
              Home
            </Link>
            <Link href="/sobre" className="text-g2b-gray hover:text-g2b-orange font-semibold transition-colors">
              Sobre G2B
            </Link>
            <Link href="/solucoes" className="text-g2b-gray hover:text-g2b-orange font-semibold transition-colors">
              Soluções
            </Link>
            <Link href="/biblioteca" className="text-g2b-gray hover:text-g2b-orange font-semibold transition-colors">
              Biblioteca G2B
            </Link>
          </nav>
          <div className="text-right">
            <p className="text-sm text-g2b-gray">E-mail</p>
            <a href="mailto:contato@g2b.com.br" className="text-g2b-orange hover:underline font-semibold">
              contato@g2b.com.br
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
