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
  {
    label: "Превышение скорости",
    icon: "Gauge",
    article: "КоАП РФ ст. 12.9",
    fine: "500 — 5 000 ₽ / лишение прав до 1 года",
    where: "ГИБДД / Госуслуги",
    tip: "Зафиксируйте видео с указанием скорости, места и времени. При превышении свыше 60 км/ч — лишение прав.",
    urgent: false,
  },
  {
    label: "Проезд на красный свет",
    icon: "TrafficCone",
    article: "КоАП РФ ст. 12.12",
    fine: "1 000 ₽ (повторно — 5 000 ₽ или лишение)",
    where: "ГИБДД / Госуслуги",
    tip: "Снимите пересечение стоп-линии на красный сигнал. Укажите точное время и адрес перекрёстка.",
    urgent: false,
  },
  {
    label: "Парковка в запрещённом месте",
    icon: "ParkingCircleOff",
    article: "КоАП РФ ст. 12.16, 12.19",
    fine: "1 500 — 5 000 ₽ + эвакуация",
    where: "ГИБДД / Администрация города",
    tip: "Сфотографируйте автомобиль с видимым знаком запрета парковки и номером. Укажите адрес.",
    urgent: false,
  },
  {
    label: "Езда без ремня безопасности",
    icon: "AlertCircle",
    article: "КоАП РФ ст. 12.6",
    fine: "1 000 ₽",
    where: "ГИБДД",
    tip: "Зафиксируйте видео с чётко видимым водителем без ремня в движении.",
    urgent: false,
  },
  {
    label: "Телефон за рулём",
    icon: "Smartphone",
    article: "КоАП РФ ст. 12.36.1",
    fine: "1 500 ₽",
    where: "ГИБДД / Госуслуги",
    tip: "На видео должно быть видно телефон в руке водителя во время движения. Помогает ракурс сбоку.",
    urgent: false,
  },
  {
    label: "Нетрезвое вождение",
    icon: "Wine",
    article: "КоАП РФ ст. 12.8 / УК РФ ст. 264",
    fine: "30 000 ₽ + лишение прав 1,5–3 года",
    where: "112 — немедленно!",
    tip: "Немедленно звоните 112. Не пытайтесь остановить водителя самостоятельно. Опишите марку, цвет, номер и направление движения.",
    urgent: true,
  },
  {
    label: "Выезд на встречную полосу",
    icon: "ArrowLeftRight",
    article: "КоАП РФ ст. 12.15",
    fine: "5 000 ₽ или лишение прав до 6 мес.",
    where: "ГИБДД / Госуслуги",
    tip: "Запишите видео с чётко видимой разметкой и манёвром автомобиля. Укажите место и время.",
    urgent: false,
  },
  {
    label: "Непропуск пешехода",
    icon: "PersonStanding",
    article: "КоАП РФ ст. 12.18",
    fine: "1 500 — 2 500 ₽",
    where: "ГИБДД / Госуслуги",
    tip: "На видео должен быть виден пешеход на переходе и автомобиль, не уступивший ему дорогу.",
    urgent: false,
  },
  {
    label: "Тонировка стёкол",
    icon: "Sunset",
    article: "КоАП РФ ст. 12.5",
    fine: "500 ₽",
    where: "ГИБДД",
    tip: "Зафиксируйте автомобиль. ГИБДД проводит замер светопропускаемости. Сообщите номер и место стоянки.",
    urgent: false,
  },
];

export default function ViolationSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? violationTypes[selected] : null;

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
          <h3 className="text-xl font-bold text-foreground mb-2">Выбери вид нарушения</h3>
          <p className="text-muted-foreground mb-6">Нажми на нарушение, чтобы увидеть штраф, статью КоАП и куда обращаться</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {violationTypes.map((v, i) => (
              <button
                key={i}
                onClick={() => setSelected(selected === i ? null : i)}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                  selected === i
                    ? v.urgent
                      ? "border-bdd-red bg-red-50"
                      : "border-primary bg-primary/5"
                    : "border-border bg-white hover:border-primary/40"
                }`}
              >
                <Icon
                  name={v.icon}
                  size={20}
                  className={selected === i ? (v.urgent ? "text-bdd-red" : "text-primary") : "text-muted-foreground"}
                />
                <span className="font-medium text-sm text-foreground flex-1">{v.label}</span>
                {v.urgent && (
                  <span className="text-xs bg-bdd-red text-white px-2 py-0.5 rounded-full font-semibold">112</span>
                )}
                <Icon
                  name={selected === i ? "ChevronUp" : "ChevronDown"}
                  size={16}
                  className="text-muted-foreground flex-shrink-0"
                />
              </button>
            ))}
          </div>

          {active && (
            <div className={`rounded-2xl border-2 p-6 mb-6 transition-all ${active.urgent ? "border-bdd-red bg-red-50" : "border-primary bg-white"}`}>
              <div className="flex items-center gap-2 mb-4">
                <Icon name={active.icon} size={20} className={active.urgent ? "text-bdd-red" : "text-primary"} />
                <h4 className="font-bold text-foreground">{active.label}</h4>
                {active.urgent && (
                  <span className="ml-auto text-xs bg-bdd-red text-white px-2 py-1 rounded-full font-semibold">Срочно!</span>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Icon name="BookOpen" size={13} />
                    Статья закона
                  </div>
                  <div className="text-sm font-semibold text-foreground">{active.article}</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Icon name="Banknote" size={13} />
                    Штраф
                  </div>
                  <div className="text-sm font-semibold text-bdd-red">{active.fine}</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                    <Icon name="MapPin" size={13} />
                    Куда обращаться
                  </div>
                  <div className="text-sm font-semibold text-foreground">{active.where}</div>
                </div>
              </div>
              <div className={`flex items-start gap-3 rounded-xl p-4 ${active.urgent ? "bg-bdd-red/10" : "bg-primary/5"}`}>
                <Icon name="Lightbulb" size={16} className={`flex-shrink-0 mt-0.5 ${active.urgent ? "text-bdd-red" : "text-primary"}`} />
                <p className="text-sm text-foreground">{active.tip}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
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
              href="tel:89120704106"
              className="flex items-center gap-2 bg-bdd-green text-white font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition-colors"
            >
              <Icon name="Phone" size={16} />
              +7 912 070-41-06
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