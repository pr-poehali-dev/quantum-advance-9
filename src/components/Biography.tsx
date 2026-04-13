interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Biography",
    paragraphs: [
      "Sofia Morozova graduated from the Russian Academy of Theatre Arts (GITIS) with honours in the acting department. Already during her student years she attracted the attention of prominent directors and was invited to join the troupe of one of Moscow's leading repertory theatres.",
      "On stage she has portrayed a wide range of characters — from classical heroines of Chekhov and Shakespeare to cutting-edge contemporary drama. Her performances are distinguished by psychological depth, inner truth, and rare emotional precision.",
      "Her film career took off after the lead role in the debut feature \"The Other Shore,\" which won Best Actress at an international film festival. Since then Sofia has appeared in more than fifteen film and television projects.",
      "She has collaborated with renowned directors whose productions have toured internationally, earning standing ovations in Moscow, St. Petersburg, Berlin, and Vienna.",
      "Sofia's approach to a role is built on meticulous research: she studies the character's psychology, context, and subtext before setting foot on stage or in front of the camera. The result is performances that feel utterly alive.",
      "Open to bold artistic experiments, she regularly explores new theatrical forms — from physical theatre to immersive productions — expanding the boundaries of her craft with every new project.",
    ],
  },
  de: {
    heading: "Biografie",
    paragraphs: [
      "Sofia Morosova schloss ihr Studium an der Russischen Akademie der Theaterkunst (GITIS) mit Auszeichnung in der Schauspielabteilung ab. Bereits während ihrer Studienzeit erregte sie die Aufmerksamkeit namhafter Regisseure und wurde in das Ensemble eines der führenden Repertoiretheater Moskaus eingeladen.",
      "Auf der Bühne hat sie ein breites Spektrum an Charakteren verkörpert — von klassischen Heldinnen Tschechows und Shakespeares bis hin zu zeitgenössischer Avantgarde-Dramatik. Ihre Auftritte zeichnen sich durch psychologische Tiefe, innere Wahrheit und seltene emotionale Präzision aus.",
      "Ihre Filmkarriere begann mit der Hauptrolle im Debütfilm \"Das andere Ufer\", der auf einem internationalen Filmfestival als Bester Film ausgezeichnet wurde. Seitdem war sie in mehr als fünfzehn Film- und Fernsehproduktionen zu sehen.",
      "Sie arbeitete mit renommierten Regisseuren zusammen, deren Inszenierungen international tourniert sind und in Moskau, Sankt Petersburg, Berlin und Wien stehende Ovationen erhielten.",
      "Sofias Zugang zu einer Rolle basiert auf sorgfältiger Recherche: Sie studiert die Psychologie, den Kontext und den Subtext der Figur, bevor sie die Bühne oder den Drehort betritt.",
      "Offen für mutige künstlerische Experimente, erkundet sie regelmäßig neue Theaterformen und erweitert die Grenzen ihrer Kunst mit jedem neuen Projekt.",
    ],
  },
  ru: {
    heading: "Биография",
    paragraphs: [
      "София Морозова окончила Российский институт театрального искусства (ГИТИС) с отличием по специальности «актёрское мастерство». Ещё в студенческие годы она привлекла внимание известных режиссёров и была приглашена в труппу одного из ведущих репертуарных театров Москвы.",
      "На сцене она воплощала самые разные образы — от классических героинь Чехова и Шекспира до современной авангардной драматургии. Её работы отличает психологическая глубина, внутренняя правда и редкая эмоциональная точность.",
      "Карьера в кино началась с главной роли в дебютном фильме «Другой берег», удостоенном премии за лучший фильм на международном кинофестивале. С тех пор она снялась более чем в пятнадцати кино- и телевизионных проектах.",
      "Сотрудничество с известными режиссёрами позволило ей выступить на площадках Москвы, Санкт-Петербурга, Берлина и Вены — неизменно получая восторженные отклики публики и прессы.",
      "Подход Софии к роли строится на тщательном исследовании: она изучает психологию персонажа, контекст и подтекст, прежде чем выйти на сцену или перед камерой.",
      "Открытая смелым художественным экспериментам, она регулярно осваивает новые театральные формы — от физического театра до иммерсивных постановок — расширяя границы своего мастерства с каждым новым проектом.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}