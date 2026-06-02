import Icon from "@/components/ui/icon";

const facts = [
  {
    icon: "TrendingDown",
    color: "text-bdd-green",
    bg: "bg-green-50",
    title: "Тренд на снижение",
    desc: "За последние 10 лет количество смертей в ДТП в России снизилось более чем в 2 раза.",
  },
  {
    icon: "Clock",
    color: "text-bdd-orange",
    bg: "bg-orange-50",
    title: "Первые минуты критичны",
    desc: "80% смертей при ДТП можно предотвратить при правильной первой помощи в первые 10 минут.",
  },
  {
    icon: "MapPin",
    color: "text-bdd-blue",
    bg: "bg-blue-50",
    title: "Опасные участки",
    desc: "Большинство аварий происходит на перекрёстках, трассах и в ночное время суток.",
  },
  {
    icon: "Wine",
    color: "text-bdd-red",
    bg: "bg-red-50",
    title: "Алкоголь за рулём",
    desc: "Каждое 10-е ДТП совершается нетрезвым водителем. Штраф — до 30 000 руб. и лишение прав.",
  },
];

const docs = [
  { icon: "BookOpen", title: "ПДД России", desc: "Полный текст правил дорожного движения", href: "https://www.consultant.ru/document/cons_doc_LAW_5765/" },
  { icon: "FileText", title: "КоАП — нарушения ПДД", desc: "Штрафы и ответственность за нарушения", href: "https://www.consultant.ru/document/cons_doc_LAW_34661/" },
  { icon: "Building2", title: "ГИБДД МВД России", desc: "Официальный сайт Госавтоинспекции", href: "https://гибдд.рф" },
  { icon: "Landmark", title: "Госуслуги", desc: "Подать жалобу или получить справку онлайн", href: "https://www.gosuslugi.ru" },
];

const tips = [
  "Всегда пристёгивайтесь — ремень снижает риск гибели на 45%",
  "Не превышайте скорость — при 50 км/ч пешеход выживает в 90% случаев",
  "Проверяйте шины и тормоза перед дальней поездкой",
  "Не садитесь за руль в состоянии усталости или стресса",
  "Держите дистанцию — минимум 2 секунды до машины впереди",
  "Будьте осторожны на мокрой дороге — тормозной путь увеличивается вдвое",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon name="Info" size={22} className="text-primary" />
          </div>
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">О БДД</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Безопасность дорожного движения
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Факты, документы и советы которые помогут вам оставаться в безопасности на дороге.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facts.map((fact, i) => (
            <div key={i} className="rounded-2xl border border-border p-6 hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-xl ${fact.bg} flex items-center justify-center mb-4`}>
                <Icon name={fact.icon} size={20} className={fact.color} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{fact.title}</h3>
              <p className="text-sm text-muted-foreground">{fact.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Icon name="Lightbulb" size={22} className="text-bdd-orange" />
              Советы по безопасности
            </h3>
            <div className="space-y-3">
              {tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm text-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Icon name="Link" size={22} className="text-primary" />
              Полезные ресурсы
            </h3>
            <div className="space-y-3">
              {docs.map((doc, i) => (
                <a
                  key={i}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white hover:border-primary/40 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={doc.icon} size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {doc.title}
                    </div>
                    <div className="text-xs text-muted-foreground">{doc.desc}</div>
                  </div>
                  <Icon name="ExternalLink" size={16} className="text-muted-foreground flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
