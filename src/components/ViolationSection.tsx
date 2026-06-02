import { useState } from "react";
import Icon from "@/components/ui/icon";

const steps = [
  {
    icon: "Camera",
    title: "Зафиксируйте нарушение",
    desc: "Снимите на видео или фото с указанием даты, времени и места. Убедитесь, что номерной знак виден.",
  },
  {
    icon: "MapPin",
    title: "Запишите данные",
    desc: "Место, время, описание нарушения, марка и цвет автомобиля, номер если возможно.",
  },
  {
    icon: "Send",
    title: "Подайте жалобу",
    desc: "Обратитесь в ГИБДД через портал Госуслуги, официальный сайт МВД или лично в отделение.",
  },
  {
    icon: "CheckCircle",
    title: "Ожидайте ответа",
    desc: "Срок рассмотрения — до 30 дней. Вам придёт уведомление о принятых мерах.",
  },
];

const violationTypes = [
  { label: "Превышение скорости", icon: "Gauge", where: "ГИБДД / Госуслуги" },
  { label: "Проезд на красный свет", icon: "TrafficCone", where: "ГИБДД / Госуслуги" },
  { label: "Парковка в запрещённом месте", icon: "ParkingCircleOff", where: "ГИБДД / Администрация" },
  { label: "Езда без ремня", icon: "AlertCircle", where: "ГИБДД" },
  { label: "Использование телефона за рулём", icon: "Smartphone", where: "ГИБДД / Госуслуги" },
  { label: "Нетрезвое вождение", icon: "Wine", where: "ГИБДД (экстренно: 112)" },
];

export default function ViolationSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="violation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-bdd-orange/10 flex items-center justify-center">
            <Icon name="AlertOctagon" size={22} className="text-bdd-orange" />
          </div>
          <span className="text-sm font-semibold text-bdd-orange uppercase tracking-wide">Нарушение ПДД</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Заметил нарушение — что делать?
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Каждый гражданин имеет право сообщить о нарушении ПДД. Вот пошаговая инструкция.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-secondary rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center mb-4">
                {i + 1}
              </div>
              <Icon name={step.icon} size={22} className="text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
          <h3 className="text-xl font-bold text-foreground mb-2">Выбери тип нарушения</h3>
          <p className="text-muted-foreground mb-6">Нажми на нарушение, чтобы узнать куда обращаться</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {violationTypes.map((v, i) => (
              <button
                key={i}
                onClick={() => setSelected(selected === i ? null : i)}
                className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                  selected === i
                    ? "border-primary bg-primary/5"
                    : "border-border bg-white hover:border-primary/40"
                }`}
              >
                <Icon name={v.icon} size={20} className={selected === i ? "text-primary" : "text-muted-foreground"} />
                <div>
                  <div className="font-medium text-sm text-foreground">{v.label}</div>
                  {selected === i && (
                    <div className="text-xs text-primary mt-1 font-medium">
                      <Icon name="ArrowRight" size={12} className="inline mr-1" />
                      {v.where}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.gosuslugi.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              <Icon name="ExternalLink" size={16} />
              Подать жалобу на Госуслугах
            </a>
            <a
              href="tel:112"
              className="flex items-center gap-2 bg-bdd-red text-white font-semibold px-5 py-3 rounded-xl hover:bg-bdd-red/90 transition-colors"
            >
              <Icon name="Phone" size={16} />
              Экстренный вызов 112
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
