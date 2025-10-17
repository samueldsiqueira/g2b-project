import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Sobre() {
  return (
    <Layout>
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Conteúdo Principal */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold text-g2b-orange mb-6 border-b-2 border-g2b-orange pb-3">
                Sobre a G2B
              </h1>
              
              <div className="space-y-4 text-g2b-gray leading-relaxed">
                <p>
                  A G2B ou &quot;Good to Be&quot; reflete as iniciais do nome de sua consultora fundadora Gisele Blak Bernat, 
                  hoje responsável por dirigir a empresa, estando a frente dos projetos de clientes da G2B.
                </p>
                
                <p>
                  Com mais de 10 anos de atuação em Gerenciamento de Projetos em empresas de grande porte e uma larga 
                  experiência em treinamentos executivos por instituições de renome, Gisele Blak Bernat criou, em 2008, 
                  a G2B Treinamento Executivo &amp; Assessoria Empresarial LTDA., uma empresa com objetivo de atuar no 
                  segmento de Treinamento e Consultoria com foco em Gestão de Projetos nos diversos setores da economia.
                </p>
                
                <p>
                  A G2B oferece em seu portfólio de soluções:
                </p>
              </div>

              <div className="flex gap-6 mt-8">
                <Link href="/capacitacao" 
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-lg text-center font-semibold transition-colors shadow-md">
                  Capacitação
                </Link>
                <Link href="/assessoria" 
                  className="flex-1 bg-g2b-orange hover:bg-orange-600 text-white p-6 rounded-lg text-center font-semibold transition-colors shadow-md">
                  Assessoria
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-g2b-orange mb-4 border-b-2 border-g2b-orange pb-2">
                Gisele Blak Bernat, MSc, PMP
              </h2>
              
              <div className="space-y-4 text-sm text-g2b-gray leading-relaxed max-h-96 overflow-y-auto">
                <p>
                  Gisele Blak Bernat é <strong>Mestre em Engenharia Civil</strong> de Produção com ênfase em Sistemas 
                  de Gestão, Produção e Qualidade pela UFF. <strong>Master Certificate in Project Management</strong> pela{' '}
                  <strong>ESI &amp; George Washington University</strong>. Membro do PMI Chapter Rio com{' '}
                  <strong>certificação Project Management Professional (PMP)</strong> desde 2002. Programa Internacional 
                  de Desarollo Gerencial pela Telefônica Móviles &amp; IEDE, na Espanha. MBA Executivo de Gestão de 
                  Negócios pelo IBMEC. Bacharel em Ciências com Dignidade Acadêmica &quot;cum laude&quot; pela UFRJ 
                  (Engenheira Civil).
                </p>
                
                <p>
                  Professora do Programa de Aperfeiçoamento em Gestão de Projetos do COPPEAD, da Pós-Graduação em Gestão 
                  e Gerenciamento de Projetos da Escola Politécnica da UFRJ e dos cursos de MBA em Gestão de Projetos e 
                  MBA em Gestão de Negócios Imobiliários e da Construção Civil da FGV. Autora de diversos artigos em 
                  congressos e coautora do livro Capacitação em Gerenciamento de Projetos pela editora Brasport.
                </p>
                
                <p>
                  Em 2010, Gisele Blak Bernat foi convidada a integrar a Diretoria Executiva do IPMA Brasil® (International 
                  Project Management Association) e realizou trabalho voluntário como Diretora de Marketing da instituição.
                </p>
                
                <p>
                  Experiência de mais de dez anos em gerenciamento de projetos de grande porte em empresas de Engenharia 
                  Civil e de Telecomunicações, tendo participado como Gerente de Projetos da execução do Parque Gráfico do 
                  Jornal O Globo pela Odebrecht e do <em>start-up</em> da Intelig Telecom pela Bechtel Método Telecom, bem 
                  como projetos de implantação da rede GSM, implantação de plataformas de serviços de valor agregado (Caixa 
                  Postal, MMS, GTW VAS) e lançamento de produtos de marketing na Telefônica Celular/Vivo.
                </p>
                
                <p>
                  Atualmente é sócia e Diretora Executiva da G2B Treinamento Executivo &amp; Assessoria Empresarial LTDA., 
                  tendo atuado como Consultora e Gerente de Projetos para diversos clientes de grande porte.
                </p>
              </div>

              <a href="mailto:rh@g2b.com.br" 
                className="block mt-6 bg-g2b-orange hover:bg-orange-600 text-white p-4 rounded-lg text-center font-semibold transition-colors">
                Envie seu currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
