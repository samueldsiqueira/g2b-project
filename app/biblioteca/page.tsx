'use client';

import Layout from '../../components/Layout';

export default function Biblioteca() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-g2b-purple to-g2b-darkpurple text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Biblioteca G2B
          </h1>
          <p className="text-xl text-gray-200">
            Recursos e materiais para profissionais de Gerenciamento de Projetos
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Publicações */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-g2b-purple mb-4">Publicações</h2>
              <p className="text-g2b-gray max-w-2xl mx-auto">
                Material desenvolvido e coautorado por nossa equipe
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Livro Principal */}
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-purple-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-g2b-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl text-g2b-purple mb-2">
                      Capacitação em Gerenciamento de Projetos
                    </h3>
                    <p className="text-sm text-g2b-gray mb-2">
                      Livro coautorado por Gisele Blak Bernat
                    </p>
                    <p className="text-xs text-gray-500">
                      <strong>Editora:</strong> Brasport
                    </p>
                  </div>
                </div>
                <p className="text-sm text-g2b-gray leading-relaxed">
                  Material completo sobre gestão de projetos com abordagem prática e casos reais.
                </p>
              </div>

              {/* Artigos */}
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-purple-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-g2b-lightpurple rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl text-g2b-lightpurple mb-2">
                      Artigos em Congressos
                    </h3>
                    <p className="text-sm text-g2b-gray">
                      Publicações técnicas e acadêmicas
                    </p>
                  </div>
                </div>
                <p className="text-sm text-g2b-gray leading-relaxed">
                  Diversos artigos técnicos apresentados em congressos nacionais e internacionais sobre Gerenciamento de Projetos.
                </p>
              </div>
            </div>
          </div>

          {/* Sites Recomendados */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-g2b-purple mb-4">Sites Recomendados</h2>
              <p className="text-g2b-gray max-w-2xl mx-auto">
                Links úteis para profissionais da área
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* PMI Global */}
              <a 
                href="https://www.pmi.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-g2b-purple"
              >
                <div className="w-12 h-12 bg-g2b-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-bold text-g2b-purple mb-2 group-hover:text-g2b-darkpurple">PMI Global</h3>
                <p className="text-sm text-g2b-gray">Project Management Institute</p>
              </a>

              {/* PMI Brasil */}
              <a 
                href="https://www.pmi.org.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-g2b-purple"
              >
                <div className="w-12 h-12 bg-g2b-lightpurple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-g2b-lightpurple mb-2 group-hover:text-g2b-darkpurple">PMI Brasil</h3>
                <p className="text-sm text-g2b-gray">Chapter brasileiro do PMI</p>
              </a>

              {/* Blog G2B */}
              <a 
                href="http://g2blog2b.wordpress.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-g2b-yellow"
              >
                <div className="w-12 h-12 bg-g2b-yellow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-g2b-darkpurple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/>
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-g2b-yellow mb-2 group-hover:text-yellow-600">Blog G2B</h3>
                <p className="text-sm text-g2b-gray">Artigos e insights</p>
              </a>

              {/* IPMA Brasil */}
              <a 
                href="https://www.ipmabrasil.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-g2b-purple"
              >
                <div className="w-12 h-12 bg-g2b-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-bold text-g2b-purple mb-2 group-hover:text-g2b-darkpurple">IPMA Brasil</h3>
                <p className="text-sm text-g2b-gray">International Project Management</p>
              </a>
            </div>
          </div>

          {/* Certificações */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-g2b-purple mb-4">Certificações em Gestão de Projetos</h2>
              <p className="text-g2b-gray max-w-2xl mx-auto">
                Principais certificações reconhecidas internacionalmente
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* PMP */}
              <div className="bg-gradient-to-br from-g2b-purple to-g2b-darkpurple text-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">PMP®</h3>
                <p className="text-sm mb-3 text-white/90">Project Management Professional</p>
                <p className="text-xs text-white/80 leading-relaxed">
                  Certificação profissional mais reconhecida mundialmente para gerentes de projetos.
                </p>
              </div>

              {/* CAPM */}
              <div className="bg-gradient-to-br from-g2b-lightpurple to-g2b-purple text-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                    <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">CAPM®</h3>
                <p className="text-sm mb-3 text-white/90">Certified Associate in Project Management</p>
                <p className="text-xs text-white/80 leading-relaxed">
                  Certificação de nível básico para profissionais que desejam iniciar carreira em GP.
                </p>
              </div>

              {/* PMI-ACP */}
              <div className="bg-gradient-to-br from-g2b-darkpurple to-g2b-lightpurple text-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">PMI-ACP®</h3>
                <p className="text-sm mb-3 text-white/90">Agile Certified Practitioner</p>
                <p className="text-xs text-white/80 leading-relaxed">
                  Certificação para profissionais de metodologias ágeis.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-g2b-purple to-g2b-darkpurple text-white p-10 rounded-2xl shadow-xl text-center">
            <h3 className="text-3xl font-bold mb-4">Preparação para Certificações</h3>
            <p className="mb-6 text-lg text-gray-200 max-w-2xl mx-auto">
              A G2B oferece cursos preparatórios para as principais certificações em Gerenciamento de Projetos.
            </p>
            <a 
              href="mailto:contato@g2b.com.br" 
              className="inline-block bg-g2b-yellow hover:bg-yellow-500 text-g2b-darkpurple px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
