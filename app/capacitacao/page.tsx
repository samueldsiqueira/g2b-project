'use client';

import Layout from '../../components/Layout';

export default function Capacitacao() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-g2b-purple to-g2b-darkpurple text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Capacitação e Treinamento
          </h1>
          <p className="text-xl text-gray-200">
            Programas customizados em Gerenciamento de Projetos
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-g2b-gray leading-relaxed mb-12 text-center">
              A G2B oferece programas de capacitação em Gerenciamento de Projetos customizados de acordo com 
              as necessidades de sua organização.
            </p>

            <div className="bg-purple-50 p-8 rounded-2xl border-l-4 border-g2b-purple mb-12">
              <h2 className="text-2xl font-bold text-g2b-purple mb-6">Nossos Treinamentos</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="text-g2b-purple mr-3 text-xl">•</span>
                  <span className="text-g2b-gray">Preparação para Certificações PMP® e CAPM® do PMI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-g2b-purple mr-3 text-xl">•</span>
                  <span className="text-g2b-gray">Fundamentos de Gerenciamento de Projetos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-g2b-purple mr-3 text-xl">•</span>
                  <span className="text-g2b-gray">Gestão de Escopo, Tempo e Custos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-g2b-purple mr-3 text-xl">•</span>
                  <span className="text-g2b-gray">Gestão de Riscos em Projetos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-g2b-purple mr-3 text-xl">•</span>
                  <span className="text-g2b-gray">Liderança e Gestão de Equipes de Projetos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-g2b-purple mr-3 text-xl">•</span>
                  <span className="text-g2b-gray">Gestão de Stakeholders e Comunicação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-g2b-purple mr-3 text-xl">•</span>
                  <span className="text-g2b-gray">Metodologias Ágeis (Scrum, Kanban)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-g2b-purple mr-3 text-xl">•</span>
                  <span className="text-g2b-gray">MS Project e ferramentas de gerenciamento</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border-2 border-purple-100 p-8 rounded-2xl shadow-md">
                <h3 className="font-bold text-g2b-purple mb-4 text-xl">Formato dos Cursos</h3>
                <ul className="space-y-3 text-g2b-gray">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-g2b-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    In-company ou turmas abertas
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-g2b-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Presencial ou online
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-g2b-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Carga horária flexível
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-g2b-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Material didático incluso
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-g2b-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Certificado de participação
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-purple-100 p-8 rounded-2xl shadow-md">
                <h3 className="font-bold text-g2b-purple mb-4 text-xl">Metodologia</h3>
                <ul className="space-y-3 text-g2b-gray">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-g2b-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Abordagem prática e aplicada
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-g2b-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Estudos de caso reais
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-g2b-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Exercícios e dinâmicas
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-g2b-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Instrutores certificados PMP
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-g2b-purple mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Suporte pós-treinamento
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-g2b-purple to-g2b-darkpurple text-white p-8 rounded-2xl shadow-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Interessado em nossos treinamentos?</h3>
              <p className="mb-6 text-lg text-gray-200">
                Entre em contato para discutirmos as necessidades de sua organização e 
                elaborarmos uma proposta customizada.
              </p>
              <a href="mailto:contato@g2b.com.br" 
                className="inline-block bg-g2b-yellow hover:bg-yellow-500 text-g2b-darkpurple px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg">
                Solicite uma Proposta
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
