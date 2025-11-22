'use client';

import { useState } from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ContentLayout } from '@/components/ui/ContentLayout';
import { Search, BookOpen } from 'lucide-react';

interface TerminologyClientProps {
  lang: string;
  dict: any;
}

export function TerminologyClient({ lang, dict }: TerminologyClientProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = dict.watchTerminology.filter(
    (item: any) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group by first letter
  const groupedTerms = filteredTerms.reduce((acc: any, item: any) => {
    const firstLetter = item.term[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(item);
    return acc;
  }, {});

  return (
    <>
      <PageHero
        title={dict.megaMenu.learn.fundamentals.terminology.title}
        subtitle={dict.megaMenu.learn.fundamentals.watch101.title}
        description="Domina el vocabulario esencial de la relojería. Desde automático hasta tourbillon, comprende los términos que usan coleccionistas y entusiastas."
        size="medium"
      />

      <div className="container mx-auto px-4 max-w-7xl">
        <Breadcrumb
          items={[
            { label: dict.megaMenu.learn.fundamentals.watch101.title, href: `/${lang}/watch-101` },
            { label: dict.megaMenu.learn.fundamentals.terminology.title }
          ]}
        />
      </div>

      <ContentLayout
        sidebar={
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-600" />
              Salto Rápido
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {Object.keys(groupedTerms).sort().map((letter) => (
                <a
                  key={letter}
                  href={`#${letter}`}
                  className="text-center py-2 bg-white border border-slate-200 rounded hover:border-amber-500 hover:bg-amber-50 transition-colors text-sm font-medium"
                >
                  {letter}
                </a>
              ))}
            </div>

            <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h4 className="font-bold text-sm text-amber-900 mb-2">
                {filteredTerms.length} Términos
              </h4>
              <p className="text-xs text-amber-700">
                {searchTerm
                  ? `Se encontraron ${filteredTerms.length} resultados`
                  : 'Usa el cuadro de búsqueda para encontrar términos específicos rápidamente'}
              </p>
            </div>
          </div>
        }
      >
        <div>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Comprender la terminología relojera es esencial para navegar el mundo de la relojería. Este glosario completo cubre los términos más importantes que encontrarás al leer, discutir o comprar relojes.
          </p>

          {/* Search Box */}
          <div className="mb-12">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar terminología..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none text-lg transition-colors"
              />
            </div>
          </div>

          {/* Terminology List */}
          <div className="space-y-12">
            {Object.keys(groupedTerms)
              .sort()
              .map((letter) => (
                <div key={letter} id={letter}>
                  <div className="sticky top-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-3 rounded-lg mb-6 shadow-lg z-10">
                    <h2 className="text-3xl font-bold">{letter}</h2>
                  </div>

                  <div className="grid gap-6">
                    {groupedTerms[letter].map((item: any, idx: number) => (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-lg border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all"
                      >
                        <h3 className="text-2xl font-bold text-amber-600 mb-3">
                          {item.term}
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          {item.definition}
                        </p>
                        {item.example && (
                          <p className="text-sm text-slate-500 mt-2 italic">
                            Ejemplo: {item.example}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                No Se Encontraron Resultados
              </h3>
              <p className="text-slate-600">
                Intenta ajustar tu término de búsqueda o explora todos los términos arriba.
              </p>
            </div>
          )}

          <div className="mt-12 p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg border border-amber-200">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Sigue Aprendiendo
            </h3>
            <p className="text-amber-800 mb-6 leading-relaxed">
              Dominar la terminología relojera abre puertas a una apreciación más profunda y conversaciones más informadas con coleccionistas, distribuidores y otros entusiastas. Estos términos se volverán naturales a medida que explores el fascinante mundo de la relojería.
            </p>
            <a
              href={`/${lang}/watch-101/anatomy`}
              className="inline-block px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Explorar Anatomía del Reloj
            </a>
          </div>
        </div>
      </ContentLayout>
    </>
  );
}
