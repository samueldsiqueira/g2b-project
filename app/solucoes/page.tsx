'use client';

import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Solucoes() {
  return (
    <Layout>
      <div className="p-8">
        <div className="bg-white/90 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-g2b-lightpurple mb-6 pb-3">
            Nossas Soluções
          </h1>
          
          <div className="space-y-6 text-g2b-gray leading-relaxed mb-8">
            <p>
              A G2B oferece soluções completas em Gestão de Projetos, desde capacitação de equipes até 
              assessoria especializada para implementação de práticas e metodologias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Capacitação */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border-2 border-g2b-purple">
              <h2 className="text-2xl font-bold text-g2b-purple mb-4">
                Capacitação e Treinamento
              </h2>
              <p className="text-g2b-gray mb-6">
                Oferecemos treinamentos customizados em gerenciamento de projetos, preparação para certificações 
                PMP e CAPM, e cursos específicos para diferentes níveis e necessidades da sua organização.
              </p>
              <Link href="/capacitacao" 
                className="inline-block bg-g2b-purple hover:bg-g2b-darkpurple text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Saiba mais sobre Capacitação
              </Link>
            </div>

            {/* Assessoria */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border-2 border-g2b-lightpurple">
              <h2 className="text-2xl font-bold text-g2b-lightpurple mb-4">
                Assessoria em Gerenciamento de Projetos
              </h2>
              <p className="text-g2b-gray mb-6">
                Apoio especializado para implementação de escritórios de projetos (PMO), desenvolvimento de 
                metodologias, mentoring de gerentes de projetos e consultoria em projetos estratégicos.
              </p>
              <Link href="/assessoria" 
                className="inline-block bg-g2b-lightpurple hover:bg-g2b-darkpurple text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Saiba mais sobre Assessoria
              </Link>
            </div>
          </div>

          {/* Diferenciais */}
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-g2b-lightpurple mb-6">Nossos Diferenciais</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-g2b-purple mb-2">Experiência Comprovada</h3>
                <p className="text-sm text-g2b-gray">
                  Mais de 15 anos atuando em projetos de grande porte nos mais diversos setores.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-g2b-purple mb-2">Customização</h3>
                <p className="text-sm text-g2b-gray">
                  Soluções adaptadas à realidade e necessidades específicas de cada cliente.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-g2b-purple mb-2">Foco em Resultados</h3>
                <p className="text-sm text-g2b-gray">
                  Atuação orientada para a geração de valor e alcance dos objetivos do negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
