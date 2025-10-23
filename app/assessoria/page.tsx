'use client';

import Layout from '../../components/Layout';

export default function Assessoria() {
  return (
    <Layout>
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-g2b-yellow mb-6 border-b-2 border-g2b-orange pb-3">
            Assessoria em Gerenciamento de Projetos
          </h1>
          
          <div className="space-y-6 text-g2b-gray leading-relaxed">
            <p className="text-lg">
              A G2B oferece serviços de consultoria especializada para apoiar sua organização na 
              implementação e melhoria de práticas de gerenciamento de projetos.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-g2b-orange">
              <h2 className="text-xl font-bold text-orange-700 mb-4">Nossos Serviços de Assessoria</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-g2b-yellow mr-2">•</span>
                  <div>
                    <strong>Implementação de PMO</strong>
                    <p className="text-sm mt-1">Estruturação de Escritórios de Projetos (PMO) com definição de processos, 
                    governança e ferramentas.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-g2b-yellow mr-2">•</span>
                  <div>
                    <strong>Desenvolvimento de Metodologias</strong>
                    <p className="text-sm mt-1">Criação e customização de metodologias de gestão de projetos 
                    adaptadas à sua realidade organizacional.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-g2b-yellow mr-2">•</span>
                  <div>
                    <strong>Mentoring e Coaching</strong>
                    <p className="text-sm mt-1">Acompanhamento e desenvolvimento de gerentes de projetos e equipes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-g2b-yellow mr-2">•</span>
                  <div>
                    <strong>Gestão de Projetos Críticos</strong>
                    <p className="text-sm mt-1">Apoio hands-on em projetos estratégicos e complexos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-g2b-yellow mr-2">•</span>
                  <div>
                    <strong>Diagnóstico e Maturidade</strong>
                    <p className="text-sm mt-1">Avaliação do nível de maturidade em gestão de projetos e 
                    plano de evolução.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-g2b-yellow mr-2">•</span>
                  <div>
                    <strong>Recuperação de Projetos</strong>
                    <p className="text-sm mt-1">Análise e intervenção em projetos com problemas para 
                    restabelecimento do curso.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-g2b-lightgray p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-g2b-yellow mb-2">1</div>
                <h3 className="font-semibold mb-2">Diagnóstico</h3>
                <p className="text-sm">Entendimento profundo da situação atual e necessidades</p>
              </div>
              <div className="bg-g2b-lightgray p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-g2b-yellow mb-2">2</div>
                <h3 className="font-semibold mb-2">Planejamento</h3>
                <p className="text-sm">Definição da estratégia e plano de ação detalhado</p>
              </div>
              <div className="bg-g2b-lightgray p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-g2b-yellow mb-2">3</div>
                <h3 className="font-semibold mb-2">Execução</h3>
                <p className="text-sm">Implementação com acompanhamento e ajustes contínuos</p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-200">
              <h3 className="text-xl font-bold text-orange-700 mb-3">Por que escolher a G2B?</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="mb-2">✓ Experiência em projetos de grande porte</p>
                  <p className="mb-2">✓ Conhecimento de diversos setores da economia</p>
                  <p>✓ Certificações PMP e formação acadêmica sólida</p>
                </div>
                <div>
                  <p className="mb-2">✓ Abordagem prática e orientada a resultados</p>
                  <p className="mb-2">✓ Metodologias reconhecidas internacionalmente</p>
                  <p>✓ Foco em transferência de conhecimento</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-g2b-purple to-g2b-darkpurple text-white rounded-lg">
              <h3 className="text-xl font-bold mb-3">Vamos conversar sobre seu projeto?</h3>
              <p className="mb-4">
                Entre em contato para discutirmos como podemos apoiar sua organização no 
                alcance de melhores resultados em gestão de projetos.
              </p>
              <a href="mailto:contato@g2b.com.br" 
                className="inline-block bg-white text-g2b-yellow px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
