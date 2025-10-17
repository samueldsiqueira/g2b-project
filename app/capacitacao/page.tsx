import Layout from '../../components/Layout';

export default function Capacitacao() {
  return (
    <Layout>
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-g2b-orange mb-6 border-b-2 border-g2b-orange pb-3">
            Capacitação e Treinamento
          </h1>
          
          <div className="space-y-6 text-g2b-gray leading-relaxed">
            <p className="text-lg">
              A G2B oferece programas de capacitação em Gerenciamento de Projetos customizados de acordo com 
              as necessidades de sua organização.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-blue-700 mb-4">Nossos Treinamentos</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Preparação para Certificações PMP® e CAPM® do PMI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Fundamentos de Gerenciamento de Projetos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Gestão de Escopo, Tempo e Custos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Gestão de Riscos em Projetos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Liderança e Gestão de Equipes de Projetos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Gestão de Stakeholders e Comunicação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Metodologias Ágeis (Scrum, Kanban)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>MS Project e ferramentas de gerenciamento</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-g2b-lightgray p-6 rounded-lg">
                <h3 className="font-bold text-g2b-orange mb-3">Formato dos Cursos</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ In-company ou turmas abertas</li>
                  <li>✓ Presencial ou online</li>
                  <li>✓ Carga horária flexível</li>
                  <li>✓ Material didático incluso</li>
                  <li>✓ Certificado de participação</li>
                </ul>
              </div>

              <div className="bg-g2b-lightgray p-6 rounded-lg">
                <h3 className="font-bold text-g2b-orange mb-3">Metodologia</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Abordagem prática e aplicada</li>
                  <li>✓ Estudos de caso reais</li>
                  <li>✓ Exercícios e dinâmicas</li>
                  <li>✓ Instrutores certificados PMP</li>
                  <li>✓ Suporte pós-treinamento</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-3">Interessado em nossos treinamentos?</h3>
              <p className="mb-4">
                Entre em contato para discutirmos as necessidades de sua organização e 
                elaborarmos uma proposta customizada.
              </p>
              <a href="mailto:contato@g2b.com.br" 
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicite uma Proposta
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
