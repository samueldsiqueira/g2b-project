import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Solucoes() {
  return (
    <Layout>
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-g2b-orange mb-6 border-b-2 border-g2b-orange pb-3">
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
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Capacitação e Treinamento
              </h2>
              <p className="text-g2b-gray mb-6">
                Oferecemos treinamentos customizados em gerenciamento de projetos, preparação para certificações 
                PMP e CAPM, e cursos específicos para diferentes níveis e necessidades da sua organização.
              </p>
              <Link href="/capacitacao" 
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Saiba mais sobre Capacitação
              </Link>
            </div>

            {/* Assessoria */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border-2 border-orange-200">
              <h2 className="text-2xl font-bold text-orange-700 mb-4">
                Assessoria em Gerenciamento de Projetos
              </h2>
              <p className="text-g2b-gray mb-6">
                Apoio especializado para implementação de escritórios de projetos (PMO), desenvolvimento de 
                metodologias, mentoring de gerentes de projetos e consultoria em projetos estratégicos.
              </p>
              <Link href="/assessoria" 
                className="inline-block bg-g2b-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Saiba mais sobre Assessoria
              </Link>
            </div>
          </div>

          {/* Diferenciais */}
          <div className="mt-12 bg-g2b-lightgray p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-g2b-gray mb-6">Nossos Diferenciais</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-g2b-orange mb-2">Experiência Comprovada</h3>
                <p className="text-sm text-g2b-gray">
                  Mais de 15 anos atuando em projetos de grande porte nos mais diversos setores.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-g2b-orange mb-2">Customização</h3>
                <p className="text-sm text-g2b-gray">
                  Soluções adaptadas à realidade e necessidades específicas de cada cliente.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-g2b-orange mb-2">Foco em Resultados</h3>
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
