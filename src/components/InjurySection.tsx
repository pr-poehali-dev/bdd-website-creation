import { useState } from "react";
import Icon from "@/components/ui/icon";

const scenarios = [
  {
    id: "victim",
    icon: "UserCheck",
    title: "Я пострадавший",
    color: "border-bdd-red bg-red-50",
    activeColor: "border-bdd-red bg-bdd-red text-white",
    steps: [
      { icon: "Phone", text: "Позвоните 112 — сообщите о ДТП и вызовите скорую" },
      { icon: "Camera", text: "Если можете — зафиксируйте место ДТП на фото/видео" },
      { icon: "FileText", text: "Получите справку о ДТП от инспектора ГИБДД" },
      { icon: "Building2", text: "Обратитесь в медучреждение даже при видимом благополучии" },
      { icon: "Scale", text: "Сохраните все документы — они нужны для компенсации" },
    ],
  },
  {
    id: "witness",
    icon: "Eye",
    title: "Я свидетель",
    color: "border-bdd-orange bg-orange-50",
    activeColor: "border-bdd-orange bg-bdd-orange text-white",
    steps: [
      { icon: "Phone", text: "Сразу вызовите скорую (103) и ГИБДД (112)" },
      { icon: "ShieldAlert", text: "Не трогайте пострадавшего без необходимости — можно навредить" },
      { icon: "Camera", text: "Сфотографируйте место ДТП пока не прибыли службы" },
      { icon: "UserCheck", text: "Останьтесь как свидетель — дайте показания ГИБДД" },
      { icon: "HeartPulse", text: "Если знаете первую помощь — помогите до приезда скорой" },
    ],
  },
  {
    id: "participant",
    icon: "Car",
    title: "Я участник ДТП",
    color: "border-primary bg-blue-50",
    activeColor: "border-primary bg-primary text-white",
    steps: [
      { icon: "TriangleAlert", text: "Остановитесь, включите аварийку, выставьте знак (15 м в городе, 30 м на трассе)" },
      { icon: "Phone", text: "Вызовите ГИБДД (102) и скорую если есть пострадавшие (103)" },
      { icon: "Camera", text: "Сфотографируйте позиции авто, повреждения, следы торможения" },
      { icon: "Users", text: "Обменяйтесь данными с другим участником: ФИО, телефон, полис ОСАГО" },
      { icon: "FileText", text: "Получите протокол и справку о ДТП у инспектора" },
    ],
  },
];

const rights = [
  "Получить копию протокола о ДТП",
  "Требовать медицинскую помощь",
  "Не давать показания против себя",
  "Иметь адвоката при допросе",
  "Получить компенсацию по ОСАГО",
  "Обжаловать решение ГИБДД в суде",
];

export default function InjurySection() {
  const [active, setActive] = useState<string | null>(null);
  const activeScenario = scenarios.find((s) => s.id === active);

  return (
    <section id="injury" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-bdd-red/10 flex items-center justify-center">
            <Icon name="HeartPulse" size={22} className="text-bdd-red" />
          </div>
          <span className="text-sm font-semibold text-bdd-red uppercase tracking-wide">Травма в ДТП</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Получил травму — твои действия
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Выбери свою роль в ситуации, чтобы получить точную инструкцию действий.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(active === s.id ? null : s.id)}
              className={`flex items-center gap-3 p-5 rounded-2xl border-2 font-semibold transition-all text-left ${
                active === s.id ? s.activeColor : s.color + " text-foreground hover:opacity-80"
              }`}
            >
              <Icon name={s.icon} size={24} />
              {s.title}
              <Icon name={active === s.id ? "ChevronUp" : "ChevronDown"} size={18} className="ml-auto" />
            </button>
          ))}
        </div>

        {activeScenario && (
          <div className="bg-white rounded-2xl border border-border p-8 mb-12 animate-in fade-in slide-in-from-top-2 duration-200">
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
              <Icon name={activeScenario.icon} size={20} className="text-primary" />
              Пошаговые действия: {activeScenario.title}
            </h3>
            <div className="space-y-4">
              {activeScenario.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={step.icon} size={16} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-primary mr-2">Шаг {i + 1}.</span>
                    <span className="text-sm text-foreground">{step.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-bdd-red/5 border border-bdd-red/20 rounded-xl flex items-start gap-3">
              <Icon name="AlertTriangle" size={18} className="text-bdd-red flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">
                <strong>Важно:</strong> При серьёзных травмах не перемещайте пострадавшего.
                Дождитесь медиков — они знают как правильно помочь.
              </p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-border p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Icon name="Scale" size={22} className="text-primary" />
            Твои права при ДТП
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {rights.map((right, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                <Icon name="CheckCircle2" size={18} className="text-bdd-green flex-shrink-0" />
                <span className="text-sm text-foreground">{right}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
