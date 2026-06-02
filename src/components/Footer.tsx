import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <Icon name="Shield" size={20} />
              БДД
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Информационный сайт о безопасности дорожного движения. Помогаем гражданам знать свои права и действовать правильно в любой дорожной ситуации.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3 text-sm uppercase tracking-wide text-white/40">Разделы</p>
            <div className="space-y-2">
              {["#violation|Заметил нарушение", "#injury|Получил травму", "#about|О БДД", "#chat|Консультация"].map((item) => {
                const [href, label] = item.split("|");
                return (
                  <a key={href} href={href} className="block text-sm text-white/60 hover:text-white transition-colors">
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <p className="font-semibold mb-3 text-sm uppercase tracking-wide text-white/40">Экстренные номера</p>
            <div className="space-y-2">
              {[
                { icon: "Phone", label: "112 — единый экстренный" },
                { icon: "Siren", label: "103 — скорая помощь" },
                { icon: "Shield", label: "102 — полиция / ГИБДД" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-white/60">
                  <Icon name={item.icon} size={14} className="text-primary" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} БДД — Безопасность дорожного движения. Информационный ресурс.
        </div>
      </div>
    </footer>
  );
}
