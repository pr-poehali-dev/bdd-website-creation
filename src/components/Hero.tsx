import Icon from "@/components/ui/icon";

const stats = [
  { icon: "AlertTriangle", value: "145 000+", label: "ДТП в год", color: "text-bdd-red" },
  { icon: "Users", value: "15 000+", label: "Погибших в год", color: "text-bdd-orange" },
  { icon: "HeartPulse", value: "180 000+", label: "Пострадавших в год", color: "text-bdd-blue" },
];

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Icon name="Shield" size={16} />
          Безопасность дорожного движения
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
          Знай свои права
          <br />
          <span className="text-primary">на дороге</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Что делать если стал свидетелем нарушения ПДД, получил травму в ДТП или просто
          хочешь узнать больше о безопасности на дороге — мы поможем.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#violation"
            className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
          >
            <Icon name="AlertOctagon" size={18} />
            Заметил нарушение
          </a>
          <a
            href="#injury"
            className="flex items-center gap-2 bg-bdd-red text-white font-semibold px-6 py-3 rounded-xl hover:bg-bdd-red/90 transition-colors w-full sm:w-auto justify-center"
          >
            <Icon name="HeartPulse" size={18} />
            Получил травму
          </a>
          <a
            href="#chat"
            className="flex items-center gap-2 border-2 border-primary text-primary font-semibold px-6 py-3 rounded-xl hover:bg-primary/5 transition-colors w-full sm:w-auto justify-center"
          >
            <Icon name="MessageCircle" size={18} />
            Онлайн консультация
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm border border-border">
              <Icon name={stat.icon} size={28} className={`${stat.color} mb-2 mx-auto`} />
              <div className={`text-3xl font-extrabold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}