export default function Footer() {
  return (
    <footer className="bg-g2b-darkpurple text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-g2b-yellow">G2B</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Treinamento Executivo e Assessoria Empresarial especializada em Gestão de Projetos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-g2b-yellow">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre G2B</a></li>
              <li><a href="/solucoes" className="text-gray-300 hover:text-white transition-colors">Soluções</a></li>
              <li><a href="/capacitacao" className="text-gray-300 hover:text-white transition-colors">Capacitação</a></li>
              <li><a href="/assessoria" className="text-gray-300 hover:text-white transition-colors">Assessoria</a></li>
              <li><a href="http://g2blog2b.wordpress.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-g2b-yellow">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <strong>E-mail:</strong><br />
                <a href="mailto:contato@g2b.com.br" className="hover:text-white transition-colors">
                  contato@g2b.com.br
                </a>
              </li>
              <li>
                <strong>RH:</strong><br />
                <a href="mailto:rh@g2b.com.br" className="hover:text-white transition-colors">
                  rh@g2b.com.br
                </a>
              </li>
              <li className="pt-2">
                <strong>Localização:</strong><br />
                Rio de Janeiro, RJ - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} G2B - Treinamento Executivo e Assessoria Empresarial. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
