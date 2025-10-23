'use client';

import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../locales/LanguageContext';

export default function Sobre() {
  const { t } = useLanguage();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-g2b-purple to-g2b-darkpurple text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.about.hero.title}
          </h1>
          <p className="text-xl text-gray-200">
            {t.about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Sobre a G2B */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-g2b-gray leading-relaxed mb-6">
                {t.about.content.text1}
              </p>
              
              <p className="text-g2b-gray leading-relaxed mb-6">
                {t.about.content.text2}
              </p>
              
              <p className="text-g2b-gray leading-relaxed mb-8">
                {t.about.content.text3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Gisele Blak Bernat */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-g2b-purple mb-4">
              Gisele Blak Bernat
            </h2>
            <p className="text-xl text-g2b-lightpurple font-semibold">
              Fundadora e CEO da G2B
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Foto Principal - Placeholder para você adicionar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                {/* TODO: Adicionar foto da Gisele aqui */}
                <div className="aspect-[3/4] bg-gradient-to-br from-g2b-purple/10 to-g2b-lightpurple/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 mx-auto mb-4 text-g2b-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-g2b-gray text-sm">
                      Adicionar foto profissional<br />da Gisele Blak Bernat
                    </p>
                    <p className="text-xs text-g2b-gray mt-2">
                      Imagem em: /public/images/gisele-principal.jpg
                    </p>
                  </div>
                </div>
                {/* Quando adicionar a foto, use:
                <Image 
                  src="/images/gisele-principal.jpg" 
                  alt="Gisele Blak Bernat"
                  width={400}
                  height={533}
                  className="w-full h-auto"
                />
                */}
              </div>
            </div>

            {/* Biografia e Informações */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-xl h-full">
                <h3 className="text-2xl font-bold text-g2b-purple mb-6">Sobre</h3>
                
                <div className="space-y-4 text-g2b-gray leading-relaxed">
                  {/* TODO: Adicionar biografia completa da Gisele */}
                  <p>
                    Gisele Blak Bernat é uma renomada especialista em Gestão de Projetos, Governança Corporativa e Compliance, 
                    com mais de 15 anos de experiência no mercado brasileiro e internacional.
                  </p>
                  
                  <p>
                    Fundou a G2B em 2008 com o objetivo de oferecer soluções customizadas em treinamento executivo e 
                    assessoria empresarial, ajudando organizações a alcançarem excelência em gestão.
                  </p>

                  <p>
                    Ao longo de sua carreira, conduziu mais de 500 projetos de capacitação e consultoria, impactando 
                    positivamente milhares de profissionais em diversos setores da economia.
                  </p>

                  {/* Seção de Certificações e Qualificações */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-xl font-bold text-g2b-purple mb-4">Certificações e Qualificações</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-g2b-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Project Management Professional (PMP)®</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-g2b-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>MBA em Gestão Empresarial</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-g2b-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Especialização em Governança Corporativa</span>
                      </li>
                      {/* TODO: Adicionar mais certificações conforme necessário */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Galeria de Fotos Adicionais */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-g2b-purple mb-8 text-center">Galeria</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Placeholder para 4 fotos adicionais */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-square bg-gradient-to-br from-g2b-purple/10 to-g2b-lightpurple/10 flex items-center justify-center">
                    <div className="text-center p-4">
                      <svg className="w-12 h-12 mx-auto mb-2 text-g2b-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs text-g2b-gray">
                        Foto {i}
                      </p>
                      <p className="text-xs text-g2b-gray mt-1">
                        /images/gisele-{i}.jpg
                      </p>
                    </div>
                  </div>
                  {/* Quando adicionar as fotos, use:
                  <Image 
                    src={`/images/gisele-${i}.jpg`}
                    alt={`Gisele Blak Bernat - Foto ${i}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-g2b-gray mt-6">
              💡 Para adicionar as fotos, coloque-as em <code className="bg-gray-100 px-2 py-1 rounded">/public/images/</code> e 
              descomente o código de imagem nos componentes acima.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Link href="/capacitacao" 
                className="group bg-gradient-to-br from-g2b-purple to-g2b-darkpurple hover:from-g2b-darkpurple hover:to-g2b-purple text-white p-8 rounded-2xl text-center font-bold text-xl transition-all hover:scale-105 shadow-lg">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                {t.about.content.training}
                <p className="text-sm font-normal mt-2 opacity-90">{t.about.content.trainingDesc}</p>
              </Link>
              <Link href="/assessoria" 
                className="group bg-gradient-to-br from-g2b-lightpurple to-g2b-purple hover:from-g2b-purple hover:to-g2b-lightpurple text-white p-8 rounded-2xl text-center font-bold text-xl transition-all hover:scale-105 shadow-lg">
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                {t.about.content.consulting}
                <p className="text-sm font-normal mt-2 opacity-90">{t.about.content.consultingDesc}</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-g2b-purple to-g2b-darkpurple text-white p-8">
              <h2 className="text-3xl font-bold mb-2">{t.about.gisele.title}</h2>
              <p className="text-g2b-yellow font-semibold">{t.about.gisele.subtitle}</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-1">
                  <div className="sticky top-24">
                    <div className="relative mb-6">
                      <div className="w-full aspect-square bg-gradient-to-br from-g2b-purple to-g2b-lightpurple rounded-2xl flex items-center justify-center overflow-hidden">
                        <div className="text-center p-8">
                          <svg className="w-32 h-32 mx-auto text-white/30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                          <p className="text-white/50 text-sm mt-4">Add photo here</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-g2b-purple mb-4 text-center">{t.about.gisele.connect}</h3>
                      <div className="space-y-3">
                        <a 
                          href="https://www.linkedin.com/in/gisele-blak-bernat" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 bg-white p-3 rounded-lg hover:bg-[#0077b5] hover:text-white transition-all group shadow-sm"
                        >
                          <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          <span className="font-semibold text-sm">LinkedIn</span>
                        </a>

                        <a 
                          href="https://www.instagram.com/g2b.treinamento" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 bg-white p-3 rounded-lg hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white transition-all group shadow-sm"
                        >
                          <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <span className="font-semibold text-sm">Instagram</span>
                        </a>

                        <a 
                          href="mailto:contato@g2b.com.br" 
                          className="flex items-center gap-3 bg-white p-3 rounded-lg hover:bg-g2b-purple hover:text-white transition-all group shadow-sm"
                        >
                          <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="font-semibold text-sm">Email</span>
                        </a>

                        <a 
                          href="https://wa.me/5521999999999" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 bg-white p-3 rounded-lg hover:bg-[#25D366] hover:text-white transition-all group shadow-sm"
                        >
                          <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          <span className="font-semibold text-sm">WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="prose prose-lg max-w-none">
                    <div className="space-y-6 text-g2b-gray leading-relaxed">
                      <p>
                        Gisele Blak Bernat é <strong>Mestre em Engenharia Civil</strong> de Produção com ênfase em Sistemas 
                        de Gestão, Produção e Qualidade pela UFF. <strong>Master Certificate in Project Management</strong> pela{' '}
                        <strong>ESI &amp; George Washington University</strong>. Membro do PMI Chapter Rio com{' '}
                        <strong>certificação Project Management Professional (PMP)</strong> desde 2002.
                      </p>
                      
                      <p>
                        Programa Internacional de Desarollo Gerencial pela Telefônica Móviles &amp; IEDE, na Espanha. 
                        MBA Executivo de Gestão de Negócios pelo IBMEC. Bacharel em Ciências com Dignidade Acadêmica 
                        &quot;cum laude&quot; pela UFRJ (Engenheira Civil).
                      </p>
                      
                      <div className="bg-g2b-yellow/10 border-l-4 border-g2b-yellow p-6 rounded-lg my-6">
                        <h3 className="font-bold text-g2b-purple mb-3">Experiência Acadêmica</h3>
                        <p>
                          Professora do Programa de Aperfeiçoamento em Gestão de Projetos do COPPEAD, da Pós-Graduação em Gestão 
                          e Gerenciamento de Projetos da Escola Politécnica da UFRJ e dos cursos de MBA em Gestão de Projetos e 
                          MBA em Gestão de Negócios Imobiliários e da Construção Civil da FGV. Autora de diversos artigos em 
                          congressos e coautora do livro Capacitação em Gerenciamento de Projetos pela editora Brasport.
                        </p>
                      </div>
                      
                      <p>
                        Em 2010, Gisele Blak Bernat foi convidada a integrar a Diretoria Executiva do IPMA Brasil® (International 
                        Project Management Association) e realizou trabalho voluntário como Diretora de Marketing da instituição.
                      </p>
                      
                      <div className="bg-purple-50 p-6 rounded-lg my-6">
                        <h3 className="font-bold text-g2b-purple mb-3">Experiência Profissional</h3>
                        <p>
                          Experiência de mais de dez anos em gerenciamento de projetos de grande porte em empresas de Engenharia 
                          Civil e de Telecomunicações, tendo participado como Gerente de Projetos da execução do Parque Gráfico do 
                          Jornal O Globo pela Odebrecht e do <em>start-up</em> da Intelig Telecom pela Bechtel Método Telecom, bem 
                          como projetos de implantação da rede GSM, implantação de plataformas de serviços de valor agregado (Caixa 
                          Postal, MMS, GTW VAS) e lançamento de produtos de marketing na Telefônica Celular/Vivo.
                        </p>
                      </div>
                      
                      <p>
                        Atualmente é sócia e Diretora Executiva da G2B Treinamento Executivo &amp; Assessoria Empresarial LTDA., 
                        tendo atuado como Consultora e Gerente de Projetos para diversos clientes de grande porte.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="mailto:rh@g2b.com.br" 
              className="inline-block bg-g2b-purple hover:bg-g2b-darkpurple text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              {t.about.cta.button}
            </a>
            <p className="mt-4 text-g2b-gray">{t.about.cta.subtitle}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
