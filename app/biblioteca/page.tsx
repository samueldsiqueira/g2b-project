import Layout from '../../components/Layout';

export default function Biblioteca() {
  return (
    <Layout>
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-g2b-orange mb-6 border-b-2 border-g2b-orange pb-3">
            Biblioteca G2B
          </h1>
          
          <div className="space-y-6 text-g2b-gray leading-relaxed">
            <p className="text-lg">
              Recursos e materiais de apoio para profissionais de Gerenciamento de Projetos.
            </p>

            {/* Publicações */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-blue-700 mb-4">Publicações</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-g2b-gray mb-2">
                    Capacitação em Gerenciamento de Projetos
                  </h3>
                  <p className="text-sm text-g2b-gray mb-2">
                    Livro coautorado por Gisele Blak Bernat, publicado pela editora Brasport.
                  </p>
                  <p className="text-xs text-gray-500">Editora Brasport</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-g2b-gray mb-2">
                    Artigos em Congressos
                  </h3>
                  <p className="text-sm text-g2b-gray">
                    Diversos artigos técnicos apresentados em congressos nacionais e internacionais 
                    sobre Gerenciamento de Projetos.
                  </p>
                </div>
              </div>
            </div>

            {/* Sites Recomendados */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h2 className="text-xl font-bold text-green-700 mb-4">Sites Recomendados</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="https://www.pmi.org" target="_blank" rel="noopener noreferrer" 
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-g2b-orange mb-1">PMI - Project Management Institute</h3>
                  <p className="text-sm text-g2b-gray">Organização global de profissionais de gestão de projetos</p>
                </a>

                <a href="https://www.pmi.org.br" target="_blank" rel="noopener noreferrer" 
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-g2b-orange mb-1">PMI Brasil</h3>
                  <p className="text-sm text-g2b-gray">Chapter brasileiro do PMI</p>
                </a>

                <a href="http://g2blog2b.wordpress.com" target="_blank" rel="noopener noreferrer" 
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-g2b-orange mb-1">Blog G2B</h3>
                  <p className="text-sm text-g2b-gray">Artigos e insights sobre gestão de projetos</p>
                </a>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-g2b-orange mb-1">IPMA Brasil</h3>
                  <p className="text-sm text-g2b-gray">International Project Management Association</p>
                </div>
              </div>
            </div>

            {/* Certificações */}
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-g2b-orange">
              <h2 className="text-xl font-bold text-orange-700 mb-4">Certificações em Gestão de Projetos</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-g2b-gray">PMP® - Project Management Professional</h3>
                  <p className="text-sm text-g2b-gray">
                    Certificação profissional mais reconhecida mundialmente para gerentes de projetos.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-g2b-gray">CAPM® - Certified Associate in Project Management</h3>
                  <p className="text-sm text-g2b-gray">
                    Certificação de nível básico para profissionais que desejam iniciar carreira em GP.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-g2b-gray">PMI-ACP® - Agile Certified Practitioner</h3>
                  <p className="text-sm text-g2b-gray">
                    Certificação para profissionais de metodologias ágeis.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-3">Preparação para Certificações</h3>
              <p className="mb-4">
                A G2B oferece cursos preparatórios para as principais certificações em Gerenciamento de Projetos.
              </p>
              <a href="mailto:contato@g2b.com.br" 
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
