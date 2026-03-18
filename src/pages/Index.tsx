import { useState } from "react";
import Icon from "@/components/ui/icon";

const GAMES = [
  {
    id: 1,
    title: "GTA 5",
    genre: "Экшен / Открытый мир",
    emoji: "🏙️",
    platforms: ["xbox", "nvidia"],
    desc: "Классика в открытом мире — доступна через Xbox Cloud Gaming прямо в браузере.",
    color: "from-orange-500 to-red-600",
    glow: "glow-pink",
  },
  {
    id: 2,
    title: "Forza Horizon 5",
    genre: "Гонки",
    emoji: "🏎️",
    platforms: ["xbox"],
    desc: "Лучший гоночный симулятор — в Game Pass Ultimate через облако на любом устройстве.",
    color: "from-green-500 to-emerald-600",
    glow: "glow-green",
  },
  {
    id: 3,
    title: "DayZ",
    genre: "Выживание",
    emoji: "🧟",
    platforms: ["nvidia"],
    desc: "Хардкорное выживание через GeForce NOW — твой ПК в облаке.",
    color: "from-yellow-600 to-orange-700",
    glow: "glow-purple",
  },
  {
    id: 4,
    title: "Counter-Strike 2",
    genre: "Шутер",
    emoji: "🔫",
    platforms: ["nvidia", "steam"],
    desc: "CS2 доступен через GeForce NOW и Steam Link — играй с любого устройства.",
    color: "from-blue-500 to-cyan-500",
    glow: "glow-cyan",
  },
];

const PLATFORMS = [
  {
    id: "xbox",
    name: "Xbox Cloud Gaming",
    badge: "badge-xbox",
    emoji: "🟢",
    price: "от 599 ₽/мес",
    desc: "GTA 5, Forza Horizon 5 и 100+ игр прямо в браузере. Работает на телефоне, планшете, Smart TV.",
    link: "https://www.xbox.com/ru-RU/play",
    pros: ["Браузер, без установки", "Game Pass — сотни игр", "Телефон / ПК / TV"],
    color: "from-green-600 to-emerald-700",
    glow: "glow-green",
  },
  {
    id: "nvidia",
    name: "GeForce NOW",
    badge: "badge-nvidia",
    emoji: "🟡",
    price: "от 649 ₽/мес",
    desc: "Запускает игры из Steam в облаке. DayZ, CS2 и тысячи других — на любом устройстве.",
    link: "https://www.nvidia.com/ru-ru/geforce-now/",
    pros: ["Твои игры из Steam", "RTX в облаке", "Android / iOS / ПК / Mac"],
    color: "from-green-500 to-lime-600",
    glow: "glow-green",
  },
  {
    id: "steam",
    name: "Steam Link",
    badge: "badge-steam",
    emoji: "🔵",
    price: "Бесплатно",
    desc: "Стриминг со своего домашнего ПК на телефон или планшет через Wi-Fi.",
    link: "https://store.steampowered.com/steamlink",
    pros: ["Полностью бесплатно", "Все игры из библиотеки", "Нужен мощный ПК дома"],
    color: "from-blue-700 to-slate-700",
    glow: "glow-cyan",
  },
];

const STEPS = [
  { n: "01", title: "Выбери платформу", desc: "Xbox Cloud для Game Pass игр или GeForce NOW для Steam библиотеки", icon: "Layers" },
  { n: "02", title: "Создай аккаунт", desc: "Регистрация занимает 2 минуты — нужна только почта и способ оплаты", icon: "UserPlus" },
  { n: "03", title: "Открой браузер", desc: "Никаких установок — просто зайди на сайт платформы с любого устройства", icon: "Globe" },
  { n: "04", title: "Играй!", desc: "Выбери игру, нажми Play и наслаждайся без ожидания загрузок", icon: "Gamepad2" },
];

const BADGE_LABELS: Record<string, string> = {
  xbox: "Xbox Cloud",
  nvidia: "GeForce NOW",
  steam: "Steam Link",
};

export default function Index() {
  const [activeTab, setActiveTab] = useState<"all" | "xbox" | "nvidia" | "steam">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = activeTab === "all" ? GAMES : GAMES.filter(g => g.platforms.includes(activeTab));

  return (
    <div className="min-h-screen mesh-bg font-golos text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎮</span>
            <span className="font-oswald font-bold text-lg gradient-text">CloudPlay</span>
            <span className="text-xs text-white/30 ml-1">GUIDE</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
            <a href="#games" className="hover:text-white transition-colors">Игры</a>
            <a href="#platforms" className="hover:text-white transition-colors">Платформы</a>
            <a href="#steps" className="hover:text-white transition-colors">Как начать</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a
            href="https://www.xbox.com/ru-RU/play"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg,#a855f7,#00f5ff)" }}
          >
            <Icon name="Play" size={14} />
            Начать играть
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Облачный гейминг — играй везде прямо сейчас
          </div>

          <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-none mb-6 animate-fade-in stagger-1">
            GTA 5, CS2, DayZ,<br />
            <span className="gradient-text">Forza Horizon 5</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 animate-fade-in stagger-2">
            Играй в топовые игры на телефоне, планшете или старом ноутбуке — без мощного ПК и без установки. 
            Только браузер и интернет.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in stagger-3">
            <a
              href="#steps"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#a855f7,#00f5ff)" }}
            >
              <Icon name="Rocket" size={20} />
              Как начать за 5 минут
            </a>
            <a
              href="#games"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white/80 text-lg glass border border-white/10 hover:border-white/20 transition-all hover:scale-105"
            >
              <Icon name="Gamepad2" size={20} />
              Смотреть игры
            </a>
          </div>

          {/* Hero image */}
          <div className="mt-16 relative animate-fade-in stagger-4">
            <div className="absolute inset-0 rounded-3xl glow-purple pointer-events-none" />
            <img
              src="https://cdn.poehali.dev/projects/eacb6773-d5ed-412c-8116-b1d32f5fefed/files/f4cec642-02c5-439a-8c68-4fa26001e9f4.jpg"
              alt="Облачный гейминг"
              className="w-full max-w-3xl mx-auto rounded-3xl object-cover"
              style={{ maxHeight: 380, objectPosition: "center" }}
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#060810] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "4", label: "Топ-игры", icon: "Gamepad2" },
            { val: "3", label: "Платформы", icon: "Layers" },
            { val: "0", label: "Скачивать", icon: "Download" },
            { val: "∞", label: "Устройств", icon: "Monitor" },
          ].map((s, i) => (
            <div key={i} className={`glass rounded-2xl p-5 text-center animate-fade-in stagger-${i + 1}`}>
              <Icon name={s.icon} fallback="Star" size={24} className="mx-auto mb-2 text-purple-400" />
              <div className="font-oswald text-3xl font-bold gradient-text">{s.val}</div>
              <div className="text-sm text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              Доступные <span className="gradient-text">игры</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">Все эти игры можно запустить в браузере прямо сейчас</p>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {(["all", "xbox", "nvidia", "steam"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? "text-white glow-purple"
                      : "glass text-white/60 hover:text-white"
                  }`}
                  style={activeTab === tab ? { background: "linear-gradient(135deg,#a855f7,#00f5ff)" } : {}}
                >
                  {tab === "all" ? "Все игры" : BADGE_LABELS[tab]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((game, i) => (
              <div
                key={game.id}
                className={`game-card glass rounded-3xl overflow-hidden border-glow hover-scale animate-fade-in stagger-${i + 1}`}
              >
                {/* Game gradient header */}
                <div className={`bg-gradient-to-br ${game.color} p-8 text-center`}>
                  <span className="text-6xl">{game.emoji}</span>
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {game.platforms.map(p => (
                      <span key={p} className={`${p === "xbox" ? "badge-xbox" : p === "nvidia" ? "badge-nvidia" : "badge-steam"} text-white text-xs px-2 py-0.5 rounded-full font-semibold`}>
                        {BADGE_LABELS[p]}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-oswald text-xl font-bold mb-1">{game.title}</h3>
                  <p className="text-xs text-white/40 mb-3">{game.genre}</p>
                  <p className="text-sm text-white/60 leading-relaxed">{game.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section id="platforms" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              Выбери <span className="gradient-text">платформу</span>
            </h2>
            <p className="text-white/50">Три способа играть без мощного ПК</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLATFORMS.map((p, i) => (
              <div key={p.id} className={`glass rounded-3xl overflow-hidden border-glow hover-scale animate-fade-in stagger-${i + 1} flex flex-col`}>
                <div className={`bg-gradient-to-br ${p.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{p.emoji}</span>
                    <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full text-white">{p.price}</span>
                  </div>
                  <h3 className="font-oswald text-2xl font-bold text-white mt-3">{p.name}</h3>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-white/60 text-sm mb-5 leading-relaxed">{p.desc}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {p.pros.map((pro, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-white/80">
                        <Icon name="CheckCircle" size={16} className="text-green-400 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 hover:scale-105 bg-gradient-to-r ${p.color}`}
                  >
                    <Icon name="ExternalLink" size={16} />
                    Перейти на {p.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="steps" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              Начни играть за <span className="gradient-text">5 минут</span>
            </h2>
            <p className="text-white/50">Простая инструкция — без лишних шагов</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className={`relative glass rounded-3xl p-6 text-center border-glow animate-fade-in stagger-${i + 1}`}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg,#a855f7,#00f5ff)" }}
                >
                  <Icon name={step.icon} fallback="Star" size={24} className="text-white" />
                </div>
                <div className="font-oswald text-4xl font-black text-white/10 absolute top-4 right-5">{step.n}</div>
                <h3 className="font-oswald text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div
            className="mt-16 rounded-3xl p-10 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(0,245,255,0.2))" }}
          >
            <div className="absolute inset-0 glass rounded-3xl" />
            <div className="relative z-10">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="font-oswald text-3xl md:text-4xl font-bold mb-3">
                Готов к игре?
              </h3>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Xbox Cloud Gaming — лучший старт для GTA 5 и Forza Horizon 5. Первые 14 дней бесплатно.
              </p>
              <a
                href="https://www.xbox.com/ru-RU/play"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#a855f7,#00f5ff)" }}
              >
                <Icon name="Play" size={20} />
                Попробовать бесплатно
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">
              Частые <span className="gradient-text">вопросы</span>
            </h2>
          </div>

          {[
            {
              q: "Нужен ли мощный ПК для облачного гейминга?",
              a: "Нет! Вся обработка происходит на серверах платформы. Достаточно любого устройства с браузером и интернетом от 15 Мбит/с."
            },
            {
              q: "Можно играть с телефона?",
              a: "Да — Xbox Cloud Gaming и GeForce NOW работают в браузере мобильного телефона. Можно подключить геймпад через Bluetooth."
            },
            {
              q: "Нужно покупать игры заново?",
              a: "Xbox Cloud включён в Game Pass — платишь подписку и получаешь доступ к сотням игр. GeForce NOW использует твою существующую библиотеку Steam."
            },
            {
              q: "Работает ли это в России?",
              a: "Xbox Cloud Gaming и GeForce NOW доступны через VPN. Steam Link работает без ограничений при наличии домашнего ПК."
            },
            {
              q: "Есть ли задержка в игре?",
              a: "При хорошем интернете задержка минимальная. Для шутеров (CS2) рекомендуется проводное подключение или 5 ГГц Wi-Fi."
            },
          ].map((item, i) => (
            <div key={i} className="mb-3">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full glass rounded-2xl p-5 text-left flex items-center justify-between hover:border-white/20 transition-all border border-transparent"
              >
                <span className="font-semibold text-white/90 pr-4">{item.q}</span>
                <Icon
                  name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="text-purple-400 flex-shrink-0"
                />
              </button>
              {openFaq === i && (
                <div className="glass rounded-2xl mt-1 p-5 text-white/60 text-sm leading-relaxed animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎮</span>
            <span className="font-oswald font-bold gradient-text">CloudPlay Guide</span>
          </div>
          <p className="text-white/30 text-sm text-center">
            Информационный гид. Все игры и торговые марки принадлежат своим правообладателям.
          </p>
          <div className="flex gap-4 text-sm text-white/40">
            <a href="#games" className="hover:text-white/70 transition-colors">Игры</a>
            <a href="#platforms" className="hover:text-white/70 transition-colors">Платформы</a>
            <a href="#steps" className="hover:text-white/70 transition-colors">Как начать</a>
          </div>
        </div>
      </footer>
    </div>
  );
}