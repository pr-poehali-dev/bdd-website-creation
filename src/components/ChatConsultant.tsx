import { useState } from "react";
import Icon from "@/components/ui/icon";

type Message = { role: "user" | "bot"; text: string };

const situations = [
  { id: "violation", icon: "AlertOctagon", label: "Увидел нарушение ПДД", color: "bg-orange-50 border-orange-200 hover:border-bdd-orange" },
  { id: "accident", icon: "Car", label: "Попал в ДТП", color: "bg-red-50 border-red-200 hover:border-bdd-red" },
  { id: "injury", icon: "HeartPulse", label: "Получил травму", color: "bg-pink-50 border-pink-200 hover:border-pink-400" },
  { id: "witness", icon: "Eye", label: "Стал свидетелем ДТП", color: "bg-blue-50 border-blue-200 hover:border-primary" },
  { id: "rights", icon: "Scale", label: "Хочу знать свои права", color: "bg-purple-50 border-purple-200 hover:border-purple-400" },
  { id: "fine", icon: "FileText", label: "Получил штраф / протокол", color: "bg-yellow-50 border-yellow-200 hover:border-yellow-400" },
];

const botAnswers: Record<string, string[]> = {
  violation: [
    "Понял! Расскажите подробнее — что именно произошло?",
    "Зафиксировали ли вы нарушение на фото или видео?",
    "Отлично. Вы можете подать жалобу через Госуслуги → «Сообщить о нарушении ПДД». Укажите дату, время, место и номер авто. Рассматривают в течение 30 дней.",
  ],
  accident: [
    "Это серьёзно. Вы сейчас в безопасности?",
    "Хорошо. Включите аварийные огни и выставьте знак аварийной остановки — 15 м в городе, 30 м на трассе.",
    "Вызвали ли вы уже ГИБДД (102) и скорую (103) если есть пострадавшие? Также обменяйтесь данными с другим участником.",
  ],
  injury: [
    "Мне жаль что так случилось. Вам сейчас нужна медицинская помощь?",
    "Обязательно обратитесь в медучреждение и получите справку о травме — это важно для компенсации.",
    "Сохраните справку из ГИБДД, медицинские документы и все чеки. Обратитесь к страховщику виновника по ОСАГО — вам обязаны выплатить компенсацию.",
  ],
  witness: [
    "Важно что вы готовы помочь. Все участники ДТП живы?",
    "Если есть пострадавшие — немедленно вызовите скорую (103). Не перемещайте пострадавших самостоятельно.",
    "Зафиксируйте место ДТП на фото. Когда прибудет ГИБДД — дайте показания, вы ценный свидетель. Ваш контакт могут попросить.",
  ],
  rights: [
    "Конечно, расскажу. В какой ситуации вы хотите знать свои права?",
    "При любом ДТП вы имеете право: получить копию протокола, не свидетельствовать против себя, иметь адвоката, обжаловать решение ГИБДД.",
    "Также при наличии пострадавших — вы вправе требовать компенсацию по ОСАГО, включая лечение, утраченный заработок и моральный вред.",
  ],
  fine: [
    "Расскажите подробнее — за что выписан штраф или протокол?",
    "Вы согласны с нарушением? Если нет — у вас есть 10 дней на обжалование протокола в ГИБДД или суде.",
    "Для обжалования напишите жалобу на имя начальника ГИБДД, приложите доказательства (фото, видео, свидетели). Это бесплатно и ваше законное право.",
  ],
};

const defaultMessages: Message[] = [
  { role: "bot", text: "Привет! Я помогу разобраться в любой дорожной ситуации. Выберите вашу ситуацию ниже или задайте вопрос в чате." },
];

export default function ChatConsultant() {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [input, setInput] = useState("");
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null);
  const [stepIndex, setStepIndex] = useState(0);

  const handleSituation = (id: string) => {
    const sit = situations.find((s) => s.id === id);
    if (!sit) return;
    setSelectedSituation(id);
    setStepIndex(0);
    setMessages([
      ...defaultMessages,
      { role: "user", text: sit.label },
      { role: "bot", text: botAnswers[id][0] },
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input.trim() };
    setInput("");

    let botText = "Понял вас. Чем ещё могу помочь?";
    if (selectedSituation) {
      const answers = botAnswers[selectedSituation];
      const next = stepIndex + 1;
      if (next < answers.length) {
        botText = answers[next];
        setStepIndex(next);
      } else {
        botText = "Если остались вопросы — напишите, я помогу! Также можете позвонить в ГИБДД (102) или по единому номеру экстренных служб 112.";
        setSelectedSituation(null);
      }
    }

    setMessages((prev) => [...prev, userMsg, { role: "bot", text: botText }]);
  };

  return (
    <section id="chat" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon name="MessageCircle" size={22} className="text-primary" />
          </div>
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">Консультация</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Онлайн-консультант
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Выберите вашу ситуацию или задайте вопрос — получите пошаговую помощь прямо сейчас.
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-3">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Выберите ситуацию
            </p>
            {situations.map((s) => (
              <button
                key={s.id}
                onClick={() => handleSituation(s.id)}
                className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${s.color} ${
                  selectedSituation === s.id ? "ring-2 ring-primary ring-offset-1" : ""
                }`}
              >
                <Icon name={s.icon} size={18} className="text-foreground/70 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{s.label}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3 flex flex-col bg-white rounded-2xl border border-border shadow-sm overflow-hidden" style={{ minHeight: 480 }}>
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-slate-50">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Icon name="Shield" size={16} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">БДД Консультант</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-bdd-green"></div>
                  <span className="text-xs text-muted-foreground">Онлайн</span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                      <Icon name="Shield" size={14} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-secondary text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Задайте вопрос..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-muted text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 disabled:opacity-40 transition-all"
                >
                  <Icon name="Send" size={16} />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Для экстренных ситуаций звоните <strong>112</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
