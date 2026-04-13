interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Upcoming Performances",
    learnMore: "Learn More",
  },
  de: {
    heading: "Kommende Vorstellungen",
    learnMore: "Mehr erfahren",
  },
  ru: {
    heading: "Ближайшие выступления",
    learnMore: "Подробнее",
  },
}

const concerts = {
  en: [
    {
      date: "03.05.2026",
      time: "19:00",
      title: "\"Three Sisters\" — Chekhov",
      venue: "Moscow Art Theatre",
      location: "Moscow",
    },
    {
      date: "17.05.2026",
      time: "18:00",
      title: "\"Ophelia\" — solo performance",
      venue: "Stanislavsky Electrotheatre",
      location: "Moscow",
    },
    {
      date: "06.06.2026",
      time: "20:00",
      title: "\"The Other Shore\" — film premiere",
      venue: "Illusion Cinema",
      location: "Moscow",
    },
  ],
  de: [
    {
      date: "03.05.2026",
      time: "19:00",
      title: "\"Drei Schwestern\" — Tschechow",
      venue: "Moskauer Künstlertheater",
      location: "Moskau",
    },
    {
      date: "17.05.2026",
      time: "18:00",
      title: "\"Ophelia\" — Solovorstellung",
      venue: "Stanislawski Elektrotheater",
      location: "Moskau",
    },
    {
      date: "06.06.2026",
      time: "20:00",
      title: "\"Das andere Ufer\" — Filmpremiere",
      venue: "Kino Illusion",
      location: "Moskau",
    },
  ],
  ru: [
    {
      date: "3 мая 2026",
      time: "19:00",
      title: "«Три сестры» — Чехов",
      venue: "МХТ им. Чехова",
      location: "Москва",
    },
    {
      date: "17 мая 2026",
      time: "18:00",
      title: "«Офелия» — моноспектакль",
      venue: "Электротеатр Станиславский",
      location: "Москва",
    },
    {
      date: "6 июня 2026",
      time: "20:00",
      title: "«Другой берег» — премьера фильма",
      venue: "Кинотеатр «Иллюзион»",
      location: "Москва",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const concertList = concerts[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {concertList.map((concert, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-charcoal mb-1">{concert.date}</h3>
                  <small className="text-taupe">{concert.time}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{concert.title}</h3>
                  <p className="text-charcoal/70 mb-1">{concert.venue}</p>
                  <small className="text-taupe">{concert.location}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <button className="text-gold hover:text-gold/80 transition-colors text-sm font-medium">
                    {t.learnMore} &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}