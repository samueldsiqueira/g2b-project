import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Conteúdo Principal */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold text-g2b-orange mb-6">
                Bem-vindo à G2B
              </h1>
              
              <div className="space-y-4 text-g2b-gray leading-relaxed">
                <p>
                  A G2B é uma empresa dinâmica e criativa que busca atender seus clientes com prontidão e eficácia. 
                  Com sede no Rio de Janeiro e atuando sem fronteiras tanto no território nacional como também internacional, 
                  a empresa tem crescido com orgulho de ter nascido em terras cariocas.
                </p>
                
                <p>
                  Com foco em relacionamento de longo prazo, a G2B busca entender seus clientes, alinhando seus requisitos 
                  (necessidades identificadas) às suas expectativas (necessidades nem sempre identificadas) de forma a obter 
                  melhores resultados em parceria. O objetivo principal é oferecer capacitação e apoio em Gerenciamento de 
                  Projetos para que o cliente esteja apto a prosseguir com seus resultados crescentes e suas novas conquistas. 
                  Assim, a G2B vem conquistando uma sólida e crescente carteira de clientes e parceiros.
                </p>
                
                <p>
                  O nosso diferencial? Estar sempre de olhos abertos, indo adiante sem parar!<br />
                  O nosso lema é fazer, e fazer bem feito: <strong>&quot;Ou fazemos bem feito, ou nem começamos&quot;.</strong>
                </p>
              </div>

              <div className="mt-8 p-6 bg-g2b-lightgray rounded-lg border-l-4 border-g2b-orange">
                <p className="text-g2b-gray">
                  Quer conhecer melhor a G2B e seus serviços?<br />
                  <a href="mailto:contato@g2b.com.br" className="text-g2b-orange hover:underline font-semibold">
                    Entre em contato
                  </a> e agende uma visita, será um prazer conhecê-lo!
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-g2b-gray mb-4">Clientes &amp; Parceiros</h2>
                <div className="flex justify-center">
                  <Image 
                    src="/images/parceiros_logos.png" 
                    alt="Clientes e Parceiros" 
                    width={527} 
                    height={85}
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Link href="/capacitacao" 
              className="block bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Capacitação e Treinamento</h3>
              <p className="text-sm">Conheça nossas soluções de Capacitação e Treinamento</p>
            </Link>

            <Link href="/assessoria" 
              className="block bg-gradient-to-br from-g2b-orange to-orange-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Assessoria em Projetos</h3>
              <p className="text-sm">Conheça nossas soluções de Assessoria em Gerenciamento de Projetos</p>
            </Link>

            <a href="http://g2blog2b.wordpress.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h3 className="text-lg font-semibold">Conheça nosso Blog!</h3>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
