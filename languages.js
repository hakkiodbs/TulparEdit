/**
 * TulparEdit Web Sitesi Çok Dilli Veri Sözlüğü (languages.js)
 * Desteklenen diller:
 * - tr: Türkçe
 * - en: English
 * - ar: العربية (RTL)
 * - ru: Русский
 * - de: Deutsch
 * - es: Español
 * - ko: 한국어
 * - zh: 简体中文
 * - fa: فارسی (RTL)
 */

const TULPAR_LANGUAGES = {
  tr: {
    name: "Türkçe",
    flag: "🇹🇷",
    dir: "ltr",
    title: "TulparEdit — Ücretsiz, Türkçe video düzenleyici",
    desc: "TulparEdit: ücretsiz, Türkçe ve yapay zekâ destekli Windows video düzenleme programı. Konudan Video, otomatik altyazı, Shorts / Reels, YouTube'a yükleme.",
    nav: {
      features: "Özellikler",
      topic: "Konudan Video",
      screens: "Ekranlar",
      github: "GitHub",
      download: "İndir"
    },
    hero: {
      badge_ver: "Sürüm",
      badge_new: "Yeni: Konudan Video",
      title_html: 'Videolarını <span class="gr">yapay zekâyla</span>, <span class="gr-k">hızlıca</span> düzenle.',
      writer_prefix: "TulparEdit ile ",
      writer_words: [
        "videolarını kes, birleştir.",
        "bir konudan video üret.",
        "otomatik altyazı ekle.",
        "Shorts ve Reels hazırla.",
        "YouTube'a tek tıkla yükle."
      ],
      desc: "Ücretsiz Windows video düzenleme programı. Kes, birleştir, altyazı ekle; bir konu yaz, yapay zekâ senaryoyu yazsın, görüntüleri bulsun ve seslendirsin. Shorts, Reels ve YouTube için hazır.",
      btn_download: "Windows İçin İndir",
      btn_download_sub: "Ücretsiz",
      btn_video: "▶ Tanıtım videosu",
      btn_notes: "Sürüm notları",
      note: "Windows 10 / 11 (64 bit) · Reklam yok · Abonelik yok · Hesap gerekmez"
    },
    ticker: [
      "Konudan Video*", "Zaman çizelgesi", "Otomatik altyazı", "Shorts / Reels",
      "Yapay zekâ senaryo*", "Doğal seslendirme", "Geçişler", "Filtreler ve LUT",
      "Kadraj Stüdyosu", "Arka plan silme", "Gürültü azaltma", "YouTube'a yükle*",
      "Otomatik Kurgu", "Hız eğrileri"
    ],
    stats: [
      { num: "Ücretsiz", label: "Tüm özellikler açık" },
      { num: "Modern Arayüz", label: "Sade, koyu tema" },
      { num: "Yapay zekâ", label: "Gemini, Groq, OpenRouter" },
      { num: "Tek tık", label: "Otomatik güncelleme" }
    ],
    video: {
      title: "1 dakikada TulparEdit",
      desc: "Programın neler yapabildiğini kısa tanıtım videosunda izle."
    },
    features: {
      title: "Neler yapabilir?",
      desc: "Bir video düzenleyicide ihtiyacın olan her şey, sade ve hızlı.",
      items: [
        { s: "✨", y: true, title: "Konudan Video", yeni: "YENİ", desc: "Konuyu yaz; yapay zekâ senaryoyu yazar, sahnelere görüntü bulur, seslendirir, altyazı ve müzik ekler." },
        { s: "🎬", title: "Zaman çizelgesi", desc: "Sınırsız video, ses ve yazı izi. Kes, böl, taşı, üst üste koy; mıknatısla hizala." },
        { s: "💬", title: "Otomatik altyazı", desc: "Konuşmayı yazıya çevirir. Kelime kelime vurgulu Shorts, Pop, Neon gibi hazır stiller." },
        { s: "📱", title: "Shorts / Reels / TikTok", desc: "Yatay videoyu dikeye çevir, Kadraj Stüdyosu ile kişiyi ortada tut, tek tıkla Shorts paketi." },
        { s: "🎨", title: "Geçiş ve filtreler", desc: "Geçişler, renk ayarları, LUT, hız eğrileri, arka plan silme, yeşil perde ve maske." },
        { s: "🎙", title: "Ses", desc: "Gürültü azaltma, konuşma / müzik ayırma, mikrofonla kayıt ve doğal seslendirme." },
        { s: "⚡", title: "Otomatik Kurgu", desc: "Sessiz yerleri keser, sesi düzeltir, altyazıyı ekler — uzun videolar dakikalar içinde hazır." },
        { s: "🚀", title: "Dışa aktar ve yayınla", desc: "YouTube, Shorts, Instagram, WhatsApp için hazır ayarlar; videoyu doğrudan YouTube'a yükle." },
        { s: "🔌", title: "Otomasyon", desc: "Botlar ve yapay zekâ araçları için API ve MCP desteği: videolarını programlar da kursun." }
      ]
    },
    topic: {
      title: "Konudan Video nasıl çalışır?",
      desc: "Fikirden düzenlenebilir projeye dört adım.",
      steps: [
        { no: "1", title: "Konuyu yaz", desc: "Örn: \"Kapadokya hakkında çoğu kişinin bilmediği 5 şey\". Süreyi ve biçimi (9:16, 16:9, 1:1) seç." },
        { no: "2", title: "Senaryoyu seç", desc: "Yapay zekâ en fazla 5 farklı senaryo yazar; beğendiğini seçer, istediğin cümleyi düzeltirsin." },
        { no: "3", title: "Gerisi otomatik", desc: "Pexels / Pixabay'den uygun görüntüler, doğal ses, kelime kelime altyazı ve fon müziği." },
        { no: "4", title: "Düzenle ve paylaş", desc: "Sonuç zaman çizelgesinde açılır. Sahne görüntüsünü değiştir, dışa aktar, YouTube'a yükle." }
      ]
    },
    screens: {
      title: "Ekran görüntüleri",
      desc: "Yeni tasarım: koyu, sade ve akıcı.",
      tabs: [
        { name: "Ana pencere", img: "ekran_ana", desc: "Zaman çizelgesi, önizleme ve özellikler tek ekranda." },
        { name: "Konudan Video", img: "ekran_senaryolar", desc: "Yazdırılan senaryolar arasından seç, düzelt, videoyu oluştur." },
        { name: "Oluşan proje", img: "ekran_konudan_sonuc", desc: "Konudan Video'nun hazırladığı dikey proje: görüntü, ses, altyazı." },
        { name: "Altyazı", img: "ekran_altyazi", desc: "Otomatik altyazı ve hazır görünümler." },
        { name: "Geçişler", img: "ekran_gecisler", desc: "Kliplerin arasına sürükle bırak geçişler." },
        { name: "Filtreler", img: "ekran_filtreler", desc: "Tek tıkla renk ve görünüm filtreleri." },
        { name: "Yapay zekâ", img: "ekran_yapay_zeka", desc: "Ücretsiz yapay zekâ servisleri: Gemini, Groq, OpenRouter." },
        { name: "Dışa aktar", img: "ekran_disa_aktar", desc: "YouTube, Shorts, Instagram ve WhatsApp için hazır ayarlar." }
      ]
    },
    download: {
      title: "Hemen ücretsiz indir",
      sub_prefix: "Son sürüm: ",
      btn_text: "Windows İçin İndir",
      btn_sub: "64-bit · Ücretsiz",
      steps: [
        "Kurulum dosyasını indir ve çift tıkla. <b>Yönetici izni gerekmez.</b>",
        "Windows \"Bilgisayarınız korundu\" derse <b>Ek bilgi → Yine de çalıştır</b>.",
        "Yeni sürüm çıkınca program haber verir: <b>Şimdi güncelle</b> ile tek tıkla güncellenir."
      ]
    },
    faq: {
      title: "Sık sorulanlar",
      items: [
        { q: "Gerçekten ücretsiz mi?", a: "Evet. Bütün özellikler açık; reklam, abonelik veya hesap yok." },
        { q: "Konudan Video için ne gerekiyor?", a: "Yapay zekâ için Google Gemini, Groq veya OpenRouter'dan ücretsiz bir anahtar; stok görüntüler için ücretsiz Pexels veya Pixabay anahtarı. Hepsi Konudan Video → Ayarlar'dan girilir ve sadece senin bilgisayarında saklanır." },
        { q: "Videolarım bir yere gönderiliyor mu?", a: "Hayır. Düzenleme, altyazı ve dışa aktarma tamamen bilgisayarında yapılır. Konudan Video yalnızca konunu ve senaryo metnini seçtiğin yapay zekâ servisine gönderir." },
        { q: "Bir hata buldum, nereye yazayım?", a: 'GitHub\'daki <a href="https://github.com/hakkiodbs/TulparEdit/issues" style="color:var(--mavi-a)">Issues</a> sayfasına yazabilirsin. Programda <b>Yardım → Hata kaydını aç</b> ile kaydı ekleyebilirsin.' }
      ]
    },
    footer: {
      copy: "© TulparEdit · Hakkı Odabaş"
    }
  },

  en: {
    name: "English",
    flag: "🇬🇧",
    dir: "ltr",
    title: "TulparEdit — Free, AI-Powered Video Editor for Windows",
    desc: "TulparEdit: Free, AI-powered Windows video editing software. Topic to Video, auto subtitles, Shorts & Reels creator, direct YouTube upload.",
    nav: {
      features: "Features",
      topic: "Topic to Video",
      screens: "Screenshots",
      github: "GitHub",
      download: "Download"
    },
    hero: {
      badge_ver: "Version",
      badge_new: "New: Topic to Video",
      title_html: 'Edit your videos with <span class="gr">AI</span>, fast & <span class="gr-k">effortlessly</span>.',
      writer_prefix: "With TulparEdit, ",
      writer_words: [
        "cut, trim, and merge video tracks.",
        "generate full videos from a single prompt.",
        "add word-by-word animated subtitles.",
        "create viral Shorts and Reels.",
        "upload directly to YouTube in 1 click."
      ],
      desc: "Free modern video editor for Windows. Cut, merge, and add animated subtitles; enter a prompt, and let AI write the script, find b-roll footage, and record voiceovers. Built for Shorts, Reels, and YouTube.",
      btn_download: "Download for Windows",
      btn_download_sub: "Free",
      btn_video: "▶ Watch Demo",
      btn_notes: "Release Notes",
      note: "Windows 10 / 11 (64-bit) · No ads · No subscriptions · No account required"
    },
    ticker: [
      "Topic to Video*", "Multi-track Timeline", "Auto Subtitles", "Shorts / Reels",
      "AI Scriptwriting*", "Natural Voiceover", "Transitions", "Filters & LUTs",
      "Framing Studio", "Background Removal", "Noise Reduction", "YouTube Upload*",
      "Auto Smart Edit", "Speed Ramping"
    ],
    stats: [
      { num: "100% Free", label: "All features unlocked" },
      { num: "Modern UI", label: "Clean, dark, intuitive" },
      { num: "AI-Powered", label: "Gemini, Groq, OpenRouter" },
      { num: "1-Click", label: "Automatic updates" }
    ],
    video: {
      title: "TulparEdit in 1 Minute",
      desc: "Watch the quick overview video to see what TulparEdit can do."
    },
    features: {
      title: "What Can It Do?",
      desc: "Everything you need in a modern video editor — lightweight, powerful, and intuitive.",
      items: [
        { s: "✨", y: true, title: "Topic to Video", yeni: "NEW", desc: "Enter a topic; AI writes the script, selects matching b-roll, synthesizes voiceovers, generates captions, and syncs music." },
        { s: "🎬", title: "Multi-Track Timeline", desc: "Unlimited video, audio, and text tracks. Cut, split, ripple edit, overlay clips, and snap to magnetic grid." },
        { s: "💬", title: "Auto Subtitles & Captions", desc: "Converts speech to text automatically. Animated word-by-word highlights with presets like Shorts, Pop, Neon." },
        { s: "📱", title: "Shorts / Reels / TikTok", desc: "Convert horizontal video to vertical format instantly. Keep subjects centered with Framing Studio, export Shorts with one click." },
        { s: "🎨", title: "Transitions & Filters", desc: "Smooth transitions, rich color adjustments, 3D LUTs, speed ramping curves, background removal, and chroma key." },
        { s: "🎙", title: "Audio Studio", desc: "Noise reduction, vocal & music stem separation, high quality voice recording, and natural text-to-speech voiceovers." },
        { s: "⚡", title: "Auto Smart Edit", desc: "Automatically cuts dead silence, normalizes sound, and generates captions — transform raw recordings in minutes." },
        { s: "🚀", title: "Export & Publishing", desc: "Optimized presets for YouTube, Shorts, Instagram, and WhatsApp; publish directly to YouTube from the app." },
        { s: "🔌", title: "Automation & MCP", desc: "Native API and Model Context Protocol (MCP) support for external bots, scripts, and autonomous AI agents." }
      ]
    },
    topic: {
      title: "How Does Topic to Video Work?",
      desc: "From idea to an editable timeline project in four simple steps.",
      steps: [
        { no: "1", title: "Enter your topic", desc: "E.g., \"5 hidden facts most people don't know about Cappadocia\". Select duration and aspect ratio (9:16, 16:9, 1:1)." },
        { no: "2", title: "Choose a script", desc: "AI generates up to 5 creative scripts. Pick the one you like best and fine-tune any sentence on the fly." },
        { no: "3", title: "Automatic generation", desc: "B-roll visuals fetched from Pexels / Pixabay, natural voiceover, word-by-word captions, and background music." },
        { no: "4", title: "Edit & share", desc: "The final project opens directly in your timeline. Swap any clip, polish, export, or publish to YouTube." }
      ]
    },
    screens: {
      title: "Screenshots",
      desc: "Modern, sleek dark-themed interface designed for creative flow.",
      tabs: [
        { name: "Main Window", img: "ekran_ana", desc: "Timeline, preview player, and editing tools in a unified layout." },
        { name: "Topic to Video", img: "ekran_senaryolar", desc: "Choose from AI-crafted scripts, customize sentences, and generate videos." },
        { name: "Generated Project", img: "ekran_konudan_sonuc", desc: "Vertical project generated by Topic to Video: b-roll visuals, voiceover, and captions." },
        { name: "Subtitles", img: "ekran_altyazi", desc: "Automatic speech-to-text with customizable animated subtitle styles." },
        { name: "Transitions", img: "ekran_gecisler", desc: "Drag-and-drop smooth transitions between timeline clips." },
        { name: "Filters & LUTs", img: "ekran_filtreler", desc: "One-click color grading, 3D LUTs, and visual filters." },
        { name: "AI Providers", img: "ekran_yapay_zeka", desc: "Free AI service integrations: Google Gemini, Groq, and OpenRouter." },
        { name: "Export", img: "ekran_disa_aktar", desc: "Ready-made export presets for YouTube, Shorts, Instagram, and WhatsApp." }
      ]
    },
    download: {
      title: "Download TulparEdit for Free",
      sub_prefix: "Latest version: ",
      btn_text: "Download for Windows",
      btn_sub: "64-bit · Free",
      steps: [
        "Download the installer and double-click to run. <b>No administrator permissions required.</b>",
        "If Windows Defender SmartScreen appears, click <b>More info → Run anyway</b>.",
        "When a new update is released, TulparEdit notifies you: update seamlessly in one click with <b>Update Now</b>."
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "Is it really completely free?", a: "Yes. Every feature is 100% unlocked with no ads, subscriptions, watermarks, or account registration required." },
        { q: "What do I need for Topic to Video?", a: "A free API key from Google Gemini, Groq, or OpenRouter for AI generation, and a free Pexels or Pixabay key for stock visuals. Saved securely only on your local computer." },
        { q: "Are my videos uploaded or processed in the cloud?", a: "No. Video editing, rendering, AI background processing, and file exports happen 100% locally on your computer. Only prompt and script text are sent to your chosen AI provider." },
        { q: "Where can I report bugs or suggest features?", a: 'You can open an issue on our GitHub <a href="https://github.com/hakkiodbs/TulparEdit/issues" style="color:var(--mavi-a)">Issues</a> page. Inside the app, navigate to <b>Help → Open Log File</b>.' }
      ]
    },
    footer: {
      copy: "© TulparEdit · Hakkı Odabaş"
    }
  },

  ar: {
    name: "العربية",
    flag: "🇸🇦",
    dir: "rtl",
    title: "TulparEdit — محرر فيديو مجاني ومدعوم بالذكاء الاصطناعي لنظام Windows",
    desc: "برنامج تحرير الفيديو المجاني بالذكاء الاصطناعي لنظام ويندوز. تحويل الفكرة إلى فيديو، ترجمة تلقائية، مقاطع Shorts و Reels، ورفع مباشر إلى YouTube.",
    nav: {
      features: "المميزات",
      topic: "من فكرة لفيديو",
      screens: "اللقطات",
      github: "GitHub",
      download: "تحميل"
    },
    hero: {
      badge_ver: "الإصدار",
      badge_new: "جديد: من فكرة إلى فيديو",
      title_html: 'أنشئ وعدّل فيديوهاتك <span class="gr">بالذكاء الاصطناعي</span>، <span class="gr-k">بكل سهولة</span>.',
      writer_prefix: "مع TulparEdit، ",
      writer_words: [
        "قص وادمج مقاطع الفيديو.",
        "أنشئ فيديو كامل من مجرد فكرة.",
        "أضف ترجمة نصية تلقائية متحركة.",
        "جهّز مقاطع Shorts و Reels.",
        "ارفع مباشرة إلى YouTube بضغطة واحدة."
      ],
      desc: "برنامج مجاني واحترافي لتحرير الفيديو لنظام ويندوز. قص، ادمج، وأضف ترجمات متحركة؛ اكتب فكرة وسيتولى الذكاء الاصطناعي كتابة السيناريو واختيار المشاهد والتعليق الصوتي. جاهز لـ Shorts و Reels و YouTube.",
      btn_download: "تحميل لنظام Windows",
      btn_download_sub: "مجاني",
      btn_video: "▶ عرض توضيحي",
      btn_notes: "ملاحظات الإصدار",
      note: "ويندوز 10 / 11 (64 بت) · بدون إعلانات · بدون اشتراك · بدون تسجيل حساب"
    },
    ticker: [
      "من فكرة لفيديو*", "مسار زمني احترافي", "ترجمة تلقائية", "Shorts / Reels",
      "سيناريو بالذكاء الاصطناعي*", "تعليق صوتي طبيعي", "انتقالات بصرية", "فلاتر و LUT",
      "استوديو التأطير", "إزالة الخلفية", "عزل الضوضاء", "رفع لـ YouTube*",
      "مونتاج تلقائي", "منحنيات السرعة"
    ],
    stats: [
      { num: "مجاني 100%", label: "كافة المميزات مفتوحة" },
      { num: "تصميم حديث", label: "مظهر داكن وأنيق" },
      { num: "ذكاء اصطناعي", label: "Gemini, Groq, OpenRouter" },
      { num: "بضغطة زر", label: "تحديثات تلقائية" }
    ],
    video: {
      title: "TulparEdit في دقيقة واحدة",
      desc: "شاهد هذا العرض السريع لتتعرف على قدرات البرنامج."
    },
    features: {
      title: "ماذا يمكنه أن يفعل؟",
      desc: "كل ما تحتاجه في محرر فيديو عصري — خفيف الوزن، قوي وسهل الاستخدام.",
      items: [
        { s: "✨", y: true, title: "من فكرة لفيديو", yeni: "جديد", desc: "اكتب الفكرة وسيقوم الذكاء الاصطناعي بكتابة السيناريو، جلب المشاهد المناسبة، التعليق الصوتي وإضافة الترجمة والموسيقى." },
        { s: "🎬", title: "مسارات زمنية غير محدودة", desc: "مسارات غير محدودة للفيديو والصوت والنصوص. قص، تقسيم، نقل وطبقات متعددة مع محاذاة مغناطيسية." },
        { s: "💬", title: "ترجمة تلقائية مدمجة", desc: "تحويل الصوت إلى نص بدقة عالية مع أنماط إبراز الكلمات كلمة بكلمة مثل Shorts و Pop و Neon." },
        { s: "📱", title: "Shorts / Reels / TikTok", desc: "تحويل الفيديو الأفقي إلى عمودي بضغطة زر، واستوديو ذكي لتتبع الوجوه وإبقائها في المنتصف." },
        { s: "🎨", title: "انتقالات وفلاتر لونية", desc: "مكتبة انتقالات سلسة، تدرج لوني، دعم LUTs ثلاثية الأبعاد، تحكم بمنحنيات السرعة، وإزالة الكروما." },
        { s: "🎙", title: "استوديو هندسة الصوت", desc: "تنقية التشويش، فصل صوت المغني عن الموسيقى، تسجيل صوتي احترافي، وتوليد صوت طبيعي عبر الذكاء الاصطناعي." },
        { s: "⚡", title: "مونتاج ذكي سريع", desc: "حذف فترات الصمت تلقائياً، موازنة الصوت، وتوليد الكابشن في ثوانٍ لمقاطع البودكاست والفلوجات." },
        { s: "🚀", title: "تصدير ونشر فوري", desc: "إعدادات مسبقة لـ YouTube و Shorts و Instagram و WhatsApp مع إمكانية الرفع المباشر لقناتك." },
        { s: "🔌", title: "الأتمتة و MCP", desc: "دعم مدمج لواجهات البرمجة و بروتوكول MCP لربط البوتات وأدوات الذكاء الاصطناعي لإنشاء الفيديوهات تلقائياً." }
      ]
    },
    topic: {
      title: "كيف تعمل ميزة من فكرة إلى فيديو؟",
      desc: "من مجرد فكرة إلى مشروع كامل قابل للتعديل في 4 خطوات بسيطة.",
      steps: [
        { no: "1", title: "اكتب الفكرة", desc: "مثال: \"5 أسرار لا يعرفها معظم الناس عن كابادوكيا\". حدد المدة والأبعاد (9:16 أو 16:9 أو 1:1)." },
        { no: "2", title: "اختر السيناريو", desc: "يقترح الذكاء الاصطناعي حتى 5 نصوص إبداعية متنوعة. اختر الأنسب وعدّل أي جملة كما تشاء." },
        { no: "3", title: "توليد آلي كامل", desc: "مطابقة المشاهد المناسبة من Pexels / Pixabay، صوت طبيعي، ترجمة متحركة وموسيقى خلفية." },
        { no: "4", title: "عدّل وانشر", desc: "يُفتح الناتج في التايم لاين كمشروع كامل قابل للتعديل لتغيير أي لقطة أو تصديره ورفعه فوراً." }
      ]
    },
    screens: {
      title: "لقطات من البرنامج",
      desc: "واجهة داكنة مريحة للعين وسريعة الاستجابة.",
      tabs: [
        { name: "الواجهة الرئيسية", img: "ekran_ana", desc: "الخط الزمني وشاشة المعاينة ولوحات التحكم في شاشة واحدة متناسقة." },
        { name: "من فكرة لفيديو", img: "ekran_senaryolar", desc: "اختيار السيناريو وتعديله وبناء الفيديو بنقرة واحدة." },
        { name: "المشروع الناتج", img: "ekran_konudan_sonuc", desc: "مشروع عمودي مكتمل بالصور والمشاهد والتعليق الصوتي والترجمات." },
        { name: "الترجمة التلقائية", img: "ekran_altyazi", desc: "تحويل الصوت إلى نص وتخصيص الأنماط والألوان." },
        { name: "الانتقالات", img: "ekran_gecisler", desc: "انتقالات جذابة بالسحب والإفلات بين المشاهد." },
        { name: "الفلاتر و LUT", img: "ekran_filtreler", desc: "تدرج لوني سينمائي بنقرة زر واحدة." },
        { name: "الذكاء الاصطناعي", img: "ekran_yapay_zeka", desc: "تكامل مباشر مع خدمات Gemini و Groq و OpenRouter المجانية." },
        { name: "التصدير", img: "ekran_disa_aktar", desc: "إعدادات تصدير مخصصة لمختلف منصات التواصل الاجتماعي." }
      ]
    },
    download: {
      title: "حمّل TulparEdit الآن مجاناً",
      sub_prefix: "أحدث إصدار: ",
      btn_text: "تحميل لنظام Windows",
      btn_sub: "64 بت · مجاني",
      steps: [
        "حمّل ملف التثبيت وافتحه بالنقر المزدوج. <b>لا يلزم صلاحيات المسؤول.</b>",
        "إذا ظهر تحذير حماية ويندوز SmartScreen، اضغط على <b>مزيد من المعلومات ← تشغيل على أي حال</b>.",
        "عند توفر إصدار جديد، ينبهك البرنامج لتحديثه بنقرة واحدة عبر <b>تحديث الآن</b>."
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { q: "هل البرنامج مجاني حقاً وبلا قيود؟", a: "نعم، كافة المميزات مفتوحة بالكامل بدون اشتراكات أو علامات مائية أو إعلانات." },
        { q: "ما الذي أحتاجه لميزة تحويل الفكرة إلى فيديو؟", a: "مفتاح API مجاني من Google Gemini أو Groq أو OpenRouter للذكاء الاصطناعي، ومفتاح Pexels أو Pixabay للصور. تُحفظ المفاتيح محلياً على جهازك فقط." },
        { q: "هل يتم إرسال ملفات الفيديو الخاصة بي إلى السحابة؟", a: "لا، التعديل والرندرة والترجمة تتم محلياً بنسبة 100% داخل حاسوبك الشخصي لضمان الخصوصية التامة." },
        { q: "أين يمكنني الإبلاغ عن مشكلة أو اقتراح ميزة؟", a: 'عبر صفحة <a href="https://github.com/hakkiodbs/TulparEdit/issues" style="color:var(--mavi-a)">Issues</a> في GitHub، ومن داخل البرنامج عبر <b>مساعدة ← فتح سجل الأخطاء</b>.' }
      ]
    },
    footer: {
      copy: "© TulparEdit · حقي أوداباش (Hakkı Odabaş)"
    }
  },

  ru: {
    name: "Русский",
    flag: "🇷🇺",
    dir: "ltr",
    title: "TulparEdit — Бесплатный видеоредактор с ИИ для Windows",
    desc: "TulparEdit: бесплатный видеоредактор для Windows с поддержкой искусственного интеллекта. Генерация видео по теме, автосубтитры, Shorts и Reels, загрузка на YouTube.",
    nav: {
      features: "Функции",
      topic: "Видео по теме",
      screens: "Скриншоты",
      github: "GitHub",
      download: "Скачать"
    },
    hero: {
      badge_ver: "Версия",
      badge_new: "Новинка: Видео по теме",
      title_html: 'Монтируйте видео с <span class="gr">ИИ</span> — быстро и <span class="gr-k">легко</span>.',
      writer_prefix: "В TulparEdit: ",
      writer_words: [
        "нарезайте и склеивайте видео.",
        "создавайте видео по одной теме.",
        "добавляйте динамические субтитры.",
        "делайте Shorts и Reels.",
        "загружайте на YouTube в один клик."
      ],
      desc: "Бесплатный видеоредактор для Windows. Нарезайте, склеивайте, добавляйте анимированные субтитры; введите тему, и ИИ напишет сценарий, подберет видеоряд и озвучит. Готово для Shorts, Reels и YouTube.",
      btn_download: "Скачать для Windows",
      btn_download_sub: "Бесплатно",
      btn_video: "▶ Смотреть обзор",
      btn_notes: "История версий",
      note: "Windows 10 / 11 (64 бит) · Без рекламы · Без подписки · Без регистрации"
    },
    ticker: [
      "Видео по теме*", "Многодорожечный таймлайн", "Автосубтитры", "Shorts / Reels",
      "ИИ-сценарии*", "Живая озвучка", "Переходы", "Фильтры и LUT",
      "Студия кадрирования", "Удаление фона", "Шумоподавление", "Загрузка на YouTube*",
      "Автомонтаж", "Кривые скорости"
    ],
    stats: [
      { num: "100% Бесплатно", label: "Все функции разблокированы" },
      { num: "Тёмная тема", label: "Быстрый и чистый интерфейс" },
      { num: "ИИ-модели", label: "Gemini, Groq, OpenRouter" },
      { num: "В 1 клик", label: "Автоматические обновления" }
    ],
    video: {
      title: "TulparEdit за 1 минуту",
      desc: "Посмотрите короткое демонстрационное видео о возможностях программы."
    },
    features: {
      title: "Возможности программы",
      desc: "Всё необходимое для современного монтажа — легко, мощно и интуитивно понятно.",
      items: [
        { s: "✨", y: true, title: "Видео по теме", yeni: "NEW", desc: "Введите тему: ИИ напишет сценарий, найдет подходящие футажи, озвучит, добавит субтитры и фоновую музыку." },
        { s: "🎬", title: "Многодорожечный таймлайн", desc: "Неограниченное число видео, аудио и текстовых дорожек. Нарезка, слои и магнитное выравнивание." },
        { s: "💬", title: "Автоматические субтитры", desc: "Распознавание речи в текст с пословной анимацией в стилях Shorts, Pop, Neon и др." },
        { s: "📱", title: "Shorts / Reels / TikTok", desc: "Превращайте горизонтальное видео в вертикальное в один клик. Студия кадрирования с удержанием объекта в центре." },
        { s: "🎨", title: "Переходы и фильтры", desc: "Плавные переходы, цветокоррекция, поддержка 3D LUT, кривые скорости, хромакей и маски." },
        { s: "🎙", title: "Работа со звуком", desc: "Подавление шума, разделение голоса и музыки, запись с микрофона и синтез речи." },
        { s: "⚡", title: "Умный автомонтаж", desc: "Автоматическое удаление пауз и тишины, нормализация звука — обработка длинных роликов за минуты." },
        { s: "🚀", title: "Экспорт и публикация", desc: "Готовые пресеты для YouTube, Shorts, Instagram, WhatsApp; прямая загрузка на YouTube." },
        { s: "🔌", title: "Автоматизация и MCP", desc: "Встроенный API и поддержка Model Context Protocol (MCP) для ботов и автономных ИИ-агентов." }
      ]
    },
    topic: {
      title: "Как работает генерация видео по теме?",
      desc: "От идеи до готового проекта на таймлайне за 4 простых шага.",
      steps: [
        { no: "1", title: "Задайте тему", desc: "Например: «5 фактов о Каппадокии, о которых мало кто знает». Выберите длительность и формат (9:16, 16:9, 1:1)." },
        { no: "2", title: "Выберите сценарий", desc: "ИИ напишет до 5 вариантов сценария. Выберите лучший и отредактируйте любые фразы." },
        { no: "3", title: "Автоматическая сборка", desc: "Подбор видео с Pexels/Pixabay, естественная озвучка, анимированные субтитры и фоновая музыка." },
        { no: "4", title: "Финальный штрих", desc: "Проект открывается на таймлайне. Замените любые кадры, экспортируйте или сразу опубликуйте на YouTube." }
      ]
    },
    screens: {
      title: "Скриншоты интерфейса",
      desc: "Современный тёмный интерфейс, созданный для комфортной работы.",
      tabs: [
        { name: "Главное окно", img: "ekran_ana", desc: "Таймлайн, окно предпросмотра и панель инструментов в едином дизайне." },
        { name: "Видео по теме", img: "ekran_senaryolar", desc: "Выбор сценария от ИИ, редактирование текста и сборка ролика." },
        { name: "Готовый проект", img: "ekran_konudan_sonuc", desc: "Вертикальный проект с подобранным видеорядом, озвучкой и субтитрами." },
        { name: "Субтитры", img: "ekran_altyazi", desc: "Автоматическое распознавание речи и стильные готовые шаблоны." },
        { name: "Переходы", img: "ekran_gecisler", desc: "Плавные видеопереходы перетаскиванием между клипами." },
        { name: "Фильтры и LUT", img: "ekran_filtreler", desc: "Цветокоррекция и художественные фильтры в один клик." },
        { name: "Настройки ИИ", img: "ekran_yapay_zeka", desc: "Бесплатные ИИ-провайдеры: Google Gemini, Groq, OpenRouter." },
        { name: "Экспорт", img: "ekran_disa_aktar", desc: "Оптимизированные пресеты для YouTube, Shorts, Instagram и WhatsApp." }
      ]
    },
    download: {
      title: "Скачать TulparEdit бесплатно",
      sub_prefix: "Текущая версия: ",
      btn_text: "Скачать для Windows",
      btn_sub: "64 бит · Бесплатно",
      steps: [
        "Скачайте установочный файл и запустите. <b>Права администратора не требуются.</b>",
        "Если Windows SmartScreen покажет предупреждение, нажмите <b>Подробнее → Выполнить в любом случае</b>.",
        "При выходе новой версии программа сама сообщит: обновление в один клик через <b>Обновить сейчас</b>."
      ]
    },
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        { q: "Программа действительно полностью бесплатна?", a: "Да. Все возможности открыты без рекламы, подписок, водяных знаков и регистрации." },
        { q: "Что нужно для генерации видео по теме?", a: "Бесплатный API-ключ от Google Gemini, Groq или OpenRouter и ключ Pexels/Pixabay для стоковых видео. Ключи сохраняются только на вашем ПК." },
        { q: "Отправляются ли мои видео куда-либо?", a: "Нет. Монтаж, рендеринг, распознавание речи и экспорт выполняются на 100% локально на вашем компьютере." },
        { q: "Куда сообщить об ошибке или предложить идею?", a: 'На странице <a href="https://github.com/hakkiodbs/TulparEdit/issues" style="color:var(--mavi-a)">Issues</a> на GitHub, либо через меню программы <b>Справка → Открыть журнал ошибок</b>.' }
      ]
    },
    footer: {
      copy: "© TulparEdit · Хаккы Одабаш (Hakkı Odabaş)"
    }
  },

  de: {
    name: "Deutsch",
    flag: "🇩🇪",
    dir: "ltr",
    title: "TulparEdit — Kostenloser KI-Videoeditor für Windows",
    desc: "TulparEdit: Kostenlose, KI-gestützte Windows-Videobearbeitungssoftware. Thema zu Video, automatische Untertitel, Shorts & Reels Creator, direkter YouTube-Upload.",
    nav: {
      features: "Funktionen",
      topic: "Thema zu Video",
      screens: "Screenshots",
      github: "GitHub",
      download: "Download"
    },
    hero: {
      badge_ver: "Version",
      badge_new: "Neu: Thema zu Video",
      title_html: 'Videos mit <span class="gr">KI</span> bearbeiten — schnell & <span class="gr-k">mühelos</span>.',
      writer_prefix: "Mit TulparEdit ",
      writer_words: [
        "Videos schneiden und zusammenfügen.",
        "komplette Videos aus Themen erstellen.",
        "animierte Untertitel automatisch hinzufügen.",
        "virale Shorts und Reels erstellen.",
        "mit einem Klick auf YouTube hochladen."
      ],
      desc: "Kostenloser Videoeditor für Windows. Schneiden, verbinden, Untertitel einfügen; Thema eingeben und die KI schreibt das Skript, sucht B-Rolls und vertont. Bereit für Shorts, Reels und YouTube.",
      btn_download: "Für Windows herunterladen",
      btn_download_sub: "Kostenlos",
      btn_video: "▶ Demo ansehen",
      btn_notes: "Versionshinweise",
      note: "Windows 10 / 11 (64-Bit) · Keine Werbung · Kein Abo · Kein Konto erforderlich"
    },
    ticker: [
      "Thema zu Video*", "Mehrspur-Timeline", "Automatische Untertitel", "Shorts / Reels",
      "KI-Skripte*", "Natürliche Sprachausgabe", "Übergänge", "Filter & LUTs",
      "Kadrierungs-Studio", "Hintergrund entfernen", "Rauschunterdrückung", "YouTube-Upload*",
      "Auto-Schnitt", "Geschwindigkeitskurven"
    ],
    stats: [
      { num: "100% Gratis", label: "Alle Funktionen freigeschaltet" },
      { num: "Modern & Dunkel", label: "Intuitive Oberfläche" },
      { num: "KI-Power", label: "Gemini, Groq, OpenRouter" },
      { num: "1-Klick", label: "Automatische Updates" }
    ],
    video: {
      title: "TulparEdit in 1 Minute",
      desc: "Sehen Sie sich die kurze Demo an, um alle Möglichkeiten zu entdecken."
    },
    features: {
      title: "Was kann TulparEdit?",
      desc: "Alles, was ein moderner Videoeditor braucht — schlank, leistungsstark und intuitiv.",
      items: [
        { s: "✨", y: true, title: "Thema zu Video", yeni: "NEU", desc: "Thema eingeben: Die KI schreibt das Drehbuch, wählt Szenenvideos aus, synchronisiert Sprache, Untertitel und Musik." },
        { s: "🎬", title: "Mehrspur-Timeline", desc: "Unbegrenzte Spuren für Video, Audio und Text. Schneiden, teilen, überlagern und mit Magnetfunktion anordnen." },
        { s: "💬", title: "Automatische Untertitel", desc: "Spracherkennung mit Wort-für-Wort-Hervorhebung in modernen Stilen wie Shorts, Pop, Neon." },
        { s: "📱", title: "Shorts / Reels / TikTok", desc: "Horizontal in vertikal umwandeln; Kadrierungs-Studio hält Gesichter automatisch im Zentrum." },
        { s: "🎨", title: "Übergänge & Filter", desc: "Sanfte Übergänge, Farbkorrektur, 3D LUTs, Geschwindigkeitskurven, Greenscreen und Maskierung." },
        { s: "🎙", title: "Audio-Studio", desc: "Rauschentfernung, Gesangs- und Musiktrennung, Mikrofonaufnahme und natürliche KI-Stimmen." },
        { s: "⚡", title: "Intelligenter Schnitt", desc: "Schneidet Stille automatisch heraus, gleicht Audiopegel an und verkürzt die Schnittzeit drastisch." },
        { s: "🚀", title: "Export & Veröffentlichung", desc: "Optimierte Presets für YouTube, Shorts, Instagram, WhatsApp; direkter Upload zu YouTube." },
        { s: "🔌", title: "Automatisierung & MCP", desc: "Integrierte API und MCP-Unterstützung für externe Bots und autonome KI-Agenten." }
      ]
    },
    topic: {
      title: "Wie funktioniert Thema zu Video?",
      desc: "In vier Schritten von der Idee zum bearbeitbaren Timeline-Projekt.",
      steps: [
        { no: "1", title: "Thema eingeben", desc: "Z.B.: \"5 Fakten über Kappadokien, die kaum jemand kennt\". Format (9:16, 16:9, 1:1) und Länge wählen." },
        { no: "2", title: "Skript auswählen", desc: "Die KI generiert bis zu 5 Vorschläge. Wählen Sie Ihren Favoriten und passen Sie Sätze an." },
        { no: "3", title: "Automatische Produktion", desc: "Passende Clips von Pexels / Pixabay, natürliche Sprachausgabe, Untertitel und Musik." },
        { no: "4", title: "Verfeinern & teilen", desc: "Das fertige Projekt öffnet sich auf der Timeline. Szenen tauschen, exportieren oder auf YouTube hochladen." }
      ]
    },
    screens: {
      title: "Screenshots",
      desc: "Dunkles, klares und übersichtliches Design für maximale Produktivität.",
      tabs: [
        { name: "Hauptfenster", img: "ekran_ana", desc: "Timeline, Vorschau und Bearbeitungswerkzeuge auf einen Blick." },
        { name: "Thema zu Video", img: "ekran_senaryolar", desc: "Skripte auswählen, editieren und das Video mit KI generieren." },
        { name: "Erstelltes Projekt", img: "ekran_konudan_sonuc", desc: "Vertikales Projekt mit B-Rolls, Tonspur und animierten Untertiteln." },
        { name: "Untertitel", img: "ekran_altyazi", desc: "Automatische Spracherkennung und anpassbare Textstile." },
        { name: "Übergänge", img: "ekran_gecisler", desc: "Übergänge per Drag-and-Drop zwischen Clips platzieren." },
        { name: "Filter & LUTs", img: "ekran_filtreler", desc: "Farbkorrekturen und cineastische Stile auf Knopfdruck." },
        { name: "KI-Dienste", img: "ekran_yapay_zeka", desc: "Kostenlose KI-Anbieter: Google Gemini, Groq, OpenRouter." },
        { name: "Export", img: "ekran_disa_aktar", desc: "Fertige Einstellungen für YouTube, Shorts, Instagram und WhatsApp." }
      ]
    },
    download: {
      title: "TulparEdit kostenlos herunterladen",
      sub_prefix: "Neueste Version: ",
      btn_text: "Für Windows herunterladen",
      btn_sub: "64-Bit · Kostenlos",
      steps: [
        "Laden Sie die Setup-Datei herunter und doppelklicken Sie darauf. <b>Keine Administratorrechte nötig.</b>",
        "Falls Windows SmartScreen erscheint, klicken Sie auf <b>Weitere Informationen → Trotzdem ausführen</b>.",
        "Sobald ein Update erscheint, meldet sich die App: Mit einem Klick auf <b>Jetzt aktualisieren</b>."
      ]
    },
    faq: {
      title: "Häufig gestellte Fragen",
      items: [
        { q: "Ist TulparEdit wirklich dauerhaft kostenlos?", a: "Ja. Alle Funktionen sind ohne Einschränkungen, ohne Werbung, Abos oder Konten nutzbar." },
        { q: "Was wird für 'Thema zu Video' benötigt?", a: "Ein kostenloser API-Schlüssel von Gemini, Groq oder OpenRouter und ein Pexels/Pixabay-Schlüssel. Alle Schlüssel bleiben lokal auf Ihrem PC." },
        { q: "Werden meine Videos hochgeladen?", a: "Nein. Bearbeitung, Rendering und Transkription erfolgen zu 100 % lokal auf Ihrem PC." },
        { q: "Wo kann ich Feedback oder Fehler melden?", a: 'Auf der GitHub <a href="https://github.com/hakkiodbs/TulparEdit/issues" style="color:var(--mavi-a)">Issues</a>-Seite oder in der App über <b>Hilfe → Fehlerprotokoll öffnen</b>.' }
      ]
    },
    footer: {
      copy: "© TulparEdit · Hakkı Odabaş"
    }
  },

  es: {
    name: "Español",
    flag: "🇪🇸",
    dir: "ltr",
    title: "TulparEdit — Editor de video gratuito con IA para Windows",
    desc: "TulparEdit: software gratuito de edición de video con IA para Windows. De Tema a Video, subtítulos automáticos, creador de Shorts y Reels, subida directa a YouTube.",
    nav: {
      features: "Características",
      topic: "De Tema a Video",
      screens: "Capturas",
      github: "GitHub",
      download: "Descargar"
    },
    hero: {
      badge_ver: "Versión",
      badge_new: "Nuevo: De Tema a Video",
      title_html: 'Edita tus videos con <span class="gr">IA</span>, rápido y <span class="gr-k">sin esfuerzo</span>.',
      writer_prefix: "Con TulparEdit, ",
      writer_words: [
        "corta y une pistas de video.",
        "crea videos completos con una sola idea.",
        "añade subtítulos animados automáticamente.",
        "crea Shorts y Reels virales.",
        "sube a YouTube con un solo clic."
      ],
      desc: "Editor de video gratuito para Windows. Corta, une y añade subtítulos automáticos; escribe un tema y la IA escribirá el guion, buscará material de archivo y creará la voz en off. Listo para Shorts, Reels y YouTube.",
      btn_download: "Descargar para Windows",
      btn_download_sub: "Gratis",
      btn_video: "▶ Ver demo",
      btn_notes: "Notas de la versión",
      note: "Windows 10 / 11 (64 bits) · Sin anuncios · Sin suscripción · Sin registro"
    },
    ticker: [
      "De Tema a Video*", "Línea de tiempo multipista", "Subtítulos automáticos", "Shorts / Reels",
      "Guion con IA*", "Voz en off natural", "Transiciones", "Filtros y LUTs",
      "Estudio de encuadre", "Eliminar fondo", "Reducción de ruido", "Subir a YouTube*",
      "Edición inteligente", "Curvas de velocidad"
    ],
    stats: [
      { num: "100% Gratis", label: "Todas las funciones activas" },
      { num: "UI Moderna", label: "Tema oscuro e intuitivo" },
      { num: "Con IA", label: "Gemini, Groq, OpenRouter" },
      { num: "1 Clic", label: "Actualizaciones automáticas" }
    ],
    video: {
      title: "TulparEdit en 1 minuto",
      desc: "Mira esta breve demostración para conocer todo lo que puedes hacer."
    },
    features: {
      title: "¿Qué puede hacer?",
      desc: "Todo lo que necesitas en un editor de video moderno: ligero, potente y muy intuitivo.",
      items: [
        { s: "✨", y: true, title: "De Tema a Video", yeni: "NUEVO", desc: "Escribe un tema: la IA redacta el guion, busca tomas de apoyo, crea la locución, añade subtítulos y música." },
        { s: "🎬", title: "Línea de tiempo multipista", desc: "Pistas ilimitadas de video, audio y texto. Corta, divide, reorganiza y ajusta magnéticamente." },
        { s: "💬", title: "Subtítulos automáticos", desc: "Transcripción de voz a texto con estilos destacados palabra por palabra como Shorts, Pop, Neon." },
        { s: "📱", title: "Shorts / Reels / TikTok", desc: "Convierte videos horizontales a verticales al instante con centrado automático de personas." },
        { s: "🎨", title: "Transiciones y filtros", desc: "Transiciones fluidas, graduación de color, compatibilidad con LUTs 3D, curvas de velocidad y croma." },
        { s: "🎙", title: "Estudio de audio", desc: "Reducción de ruido, separación de voz y música, grabación con micrófono y síntesis vocal realista." },
        { s: "⚡", title: "Corte inteligente", desc: "Elimina silencios automáticamente, normaliza niveles de audio y acelera la edición en minutos." },
        { s: "🚀", title: "Exportación y publicación", desc: "Ajustes listos para YouTube, Shorts, Instagram, WhatsApp; subida directa a YouTube." },
        { s: "🔌", title: "Automatización y MCP", desc: "API nativa y compatibilidad con Model Context Protocol (MCP) para bots y agentes de IA." }
      ]
    },
    topic: {
      title: "¿Cómo funciona De Tema a Video?",
      desc: "De la idea a un proyecto totalmente editable en cuatro sencillos pasos.",
      steps: [
        { no: "1", title: "Escribe el tema", desc: "Ej: \"5 curiosidades que casi nadie sabe sobre Roma\". Elige duración y formato (9:16, 16:9, 1:1)." },
        { no: "2", title: "Elige el guion", desc: "La IA escribe hasta 5 guiones diferentes. Elige el que más te guste y edita cualquier frase." },
        { no: "3", title: "Montaje automático", desc: "Recursos de Pexels/Pixabay, locución natural, subtítulos animados y música de fondo." },
        { no: "4", title: "Edita y comparte", desc: "El proyecto se abre en la línea de tiempo. Cambia clips si lo deseas, exporta o sube a YouTube." }
      ]
    },
    screens: {
      title: "Capturas de pantalla",
      desc: "Diseño oscuro, limpio y enfocado en la creatividad.",
      tabs: [
        { name: "Ventana principal", img: "ekran_ana", desc: "Línea de tiempo, reproductor y herramientas en un solo espacio." },
        { name: "De Tema a Video", img: "ekran_senaryolar", desc: "Selecciona guiones generados por IA, ajusta el texto y crea el video." },
        { name: "Proyecto generado", img: "ekran_konudan_sonuc", desc: "Proyecto vertical listo con material de apoyo, voz y subtítulos." },
        { name: "Subtítulos", img: "ekran_altyazi", desc: "Subtitulado automático con estilos dinámicos configurables." },
        { name: "Transiciones", img: "ekran_gecisler", desc: "Transiciones suaves arrastrando entre clips." },
        { name: "Filtros y LUTs", img: "ekran_filtreler", desc: "Corrección de color y filtros estilizados en un solo clic." },
        { name: "Servicios de IA", img: "ekran_yapay_zeka", desc: "Integración gratuita con Gemini, Groq y OpenRouter." },
        { name: "Exportación", img: "ekran_disa_aktar", desc: "Perfiles optimizados para YouTube, Shorts, Instagram y WhatsApp." }
      ]
    },
    download: {
      title: "Descargar TulparEdit gratis",
      sub_prefix: "Última versión: ",
      btn_text: "Descargar para Windows",
      btn_sub: "64 bits · Gratis",
      steps: [
        "Descarga el instalador y haz doble clic. <b>No requiere permisos de administrador.</b>",
        "Si aparece Windows SmartScreen, pulsa en <b>Más información → Ejecutar de todas formas</b>.",
        "Cuando haya una nueva versión disponible, el programa te avisará para actualizar en un clic."
      ]
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Es realmente 100% gratuito?", a: "Sí. Todas las funciones están desbloqueadas sin anuncios, suscripciones ni marcas de agua." },
        { q: "¿Qué necesito para De Tema a Video?", a: "Una clave API gratuita de Google Gemini, Groq u OpenRouter y una de Pexels/Pixabay. Se guardan solo en tu ordenador." },
        { q: "¿Se suben mis videos a algún servidor?", a: "No. Toda la edición, renderizado y transcripción se realiza de forma 100% local en tu PC." },
        { q: "¿Dónde puedo reportar errores o sugerencias?", a: 'En la sección de <a href="https://github.com/hakkiodbs/TulparEdit/issues" style="color:var(--mavi-a)">Issues</a> en GitHub o desde <b>Ayuda → Abrir registro de errores</b>.' }
      ]
    },
    footer: {
      copy: "© TulparEdit · Hakkı Odabaş"
    }
  },

  ko: {
    name: "한국어",
    flag: "🇰🇷",
    dir: "ltr",
    title: "TulparEdit — Windows용 무료 AI 비디오 편집기",
    desc: "TulparEdit: 인공지능 기반의 Windows용 무료 동영상 편집 소프트웨어. 주제로 비디오 생성, 자동 자막, Shorts 및 Reels 제작, YouTube 직접 업로드.",
    nav: {
      features: "주요 기능",
      topic: "주제로 비디오 생성",
      screens: "스크린샷",
      github: "GitHub",
      download: "다운로드"
    },
    hero: {
      badge_ver: "버전",
      badge_new: "신기능: 주제로 비디오 생성",
      title_html: '<span class="gr">AI</span>로 빠르고 <span class="gr-k">쉽게</span> 비디오를 편집하세요.',
      writer_prefix: "TulparEdit으로 ",
      writer_words: [
        "비디오를 자르고 병합하세요.",
        "주제 하나로 영상을 완성하세요.",
        "단어별 자막을 자동 생성하세요.",
        "Shorts와 Reels를 제작하세요.",
        "원클릭으로 YouTube에 업로드하세요."
      ],
      desc: "Windows용 무료 비디오 편집기. 자르기, 병합, 자동 자막; 주제를 입력하면 AI가 대본을 작성하고 스톡 비디오를 찾고 나레이션을 생성합니다. Shorts, Reels, YouTube 제작에 최적화.",
      btn_download: "Windows용 다운로드",
      btn_download_sub: "무료",
      btn_video: "▶ 데모 영상",
      btn_notes: "릴리즈 노트",
      note: "Windows 10 / 11 (64비트) · 광고 없음 · 구독 없음 · 계정 불필요"
    },
    ticker: [
      "주제로 비디오 생성*", "멀티트랙 타임라인", "자동 자막", "Shorts / Reels",
      "AI 대본 작성*", "자연스러운 음성", "트랜지션", "필터 및 LUT",
      "프레이밍 스튜디오", "배경 제거", "노이즈 감소", "YouTube 업로드*",
      "스마트 자동 편집", "스피드 커브"
    ],
    stats: [
      { num: "100% 무료", label: "모든 기능 무제한 제공" },
      { num: "모던 다크 UI", label: "직관적이고 가벼운 인터페이스" },
      { num: "AI 엔진 탑재", label: "Gemini, Groq, OpenRouter" },
      { num: "원클릭", label: "자동 소프트웨어 업데이트" }
    ],
    video: {
      title: "1분 만에 보는 TulparEdit",
      desc: "프로그램의 강력한 기능들을 짧은 영상으로 확인해 보세요."
    },
    features: {
      title: "어떤 작업이 가능한가요?",
      desc: "현대적인 동영상 편집에 필요한 모든 기능을 가볍고 직관적으로 제공합니다.",
      items: [
        { s: "✨", y: true, title: "주제로 비디오 생성", yeni: "NEW", desc: "주제만 입력하면 AI가 대본 작성부터 스톡 비디오 수집, 음성 녹음, 자동 자막, 배경음악까지 한 번에 완료합니다." },
        { s: "🎬", title: "멀티트랙 타임라인", desc: "제한 없는 비디오, 오디오, 텍스트 트랙. 자르기, 분할, 레이어 쌓기 및 마그네틱 스냅 지원." },
        { s: "💬", title: "자동 음성 인식 자막", desc: "음성을 자동으로 텍스트로 변환하며 Shorts, Pop, Neon 등 역동적인 단어별 하이라이트 스타일을 제공합니다." },
        { s: "📱", title: "Shorts / Reels / TikTok", desc: "가로 영상을 세로 영상으로 원클릭 변환. 인물 자동 트래킹 기능으로 중요한 장면을 항상 화면 중심에 유지합니다." },
        { s: "🎨", title: "트랜지션 및 시각 필터", desc: "다양한 장면 전환 효과, 컬러 그레이딩, 3D LUT, 속도 조절 곡선, 배경 투명화 및 크로마키 지원." },
        { s: "🎙", title: "오디오 스튜디오", desc: "AI 노이즈 제거, 보컬/배경음악 분리, 고음질 마이크 녹음 및 자연스러운 AI 음성 합성." },
        { s: "⚡", title: "스마트 자동 편집", desc: "말하지 않는 무음 구간을 자동으로 잘라내고 음량을 평준화하여 롱폼 영상을 순식간에 정리합니다." },
        { s: "🚀", title: "내보내기 및 즉시 발행", desc: "YouTube, Shorts, Instagram, WhatsApp 최적화 프리셋과 YouTube 채널 직접 업로드 지원." },
        { s: "🔌", title: "자동화 및 MCP", desc: "외부 봇 및 AI 에이전트와 연동 가능한 네이티브 API와 Model Context Protocol(MCP) 완벽 지원." }
      ]
    },
    topic: {
      title: "주제로 비디오 생성은 어떻게 작동하나요?",
      desc: "아이디어에서 타임라인 프로젝트 완성까지 단 4단계.",
      steps: [
        { no: "1", title: "주제 입력", desc: "예: \"대부분의 사람들이 모르는 카파도키아의 5가지 비밀\". 영상 길이와 비율(9:16, 16:9, 1:1)을 선택합니다." },
        { no: "2", title: "대본 선택", desc: "AI가 최대 5가지의 개성 있는 대본을 작성합니다. 마음에 드는 대본을 고르고 원하는 문장을 수정하세요." },
        { no: "3", title: "자동 영상 제작", desc: "Pexels/Pixabay의 고화질 비디오 클립 매칭, 자연스러운 음성 합성, 싱크 자막 및 배경음악 자동 결합." },
        { no: "4", title: "편집 및 공유", desc: "완성된 결과물이 타임라인에 프로젝트로 열립니다. 클립을 교체하거나 다듬은 후 YouTube에 즉시 업로드하세요." }
      ]
    },
    screens: {
      title: "프로그램 화면",
      desc: "작업 효율을 극대화하는 다크 테마 기반의 인터페이스.",
      tabs: [
        { name: "메인 화면", img: "ekran_ana", desc: "타임라인, 미리보기 플레이어, 편집 도구가 한눈에 들어오는 통합 레이아웃." },
        { name: "주제로 비디오 생성", img: "ekran_senaryolar", desc: "AI가 작성한 여러 대본 중 선택하고 수정하여 비디오를 자동 생성." },
        { name: "완성된 프로젝트", img: "ekran_konudan_sonuc", desc: "스톡 비디오, 음성, 자막이 정밀하게 배치된 세로형 프로젝트." },
        { name: "자동 자막", img: "ekran_altyazi", desc: "음성을 자막으로 변환하고 스타일을 자유롭게 커스터마이징." },
        { name: "트랜지션", img: "ekran_gecisler", desc: "클립 사이에 드래그 앤 드롭으로 부드러운 전환 효과 적용." },
        { name: "필터 및 LUT", img: "ekran_filtreler", desc: "원클릭으로 적용하는 영화 같은 색감 보정 및 비주얼 필터." },
        { name: "AI 서비스 연동", img: "ekran_yapay_zeka", desc: "무료 AI 제공업체: Google Gemini, Groq, OpenRouter 연동." },
        { name: "내보내기", img: "ekran_disa_aktar", desc: "YouTube, Shorts, Instagram, WhatsApp을 위한 맞춤형 프리셋." }
      ]
    },
    download: {
      title: "지금 무료로 다운로드하세요",
      sub_prefix: "최신 버전: ",
      btn_text: "Windows용 다운로드",
      btn_sub: "64비트 · 무료",
      steps: [
        "설치 파일을 다운로드하고 실행하세요. <b>관리자 권한이 필요하지 않습니다.</b>",
        "Windows SmartScreen 보호 알림이 뜨면 <b>추가 정보 → 실행</b>을 클릭하세요.",
        "새 버전이 출시되면 프로그램이 자동으로 알려주며, <b>지금 업데이트</b> 버튼으로 원클릭 업데이트됩니다."
      ]
    },
    faq: {
      title: "자주 묻는 질문",
      items: [
        { q: "정말 제한 없이 100% 무료인가요?", a: "네. 광고, 구독, 워터마크, 회원가입 없이 모든 기능을 완전히 무료로 사용하실 수 있습니다." },
        { q: "주제로 비디오 생성 기능을 쓰려면 무엇이 필요한가요?", a: "Google Gemini, Groq 또는 OpenRouter의 무료 AI API 키와 Pexels/Pixabay 무료 키가 필요합니다. 입력된 키는 사용자의 PC에만 안전하게 보관됩니다." },
        { q: "내 비디오나 데이터가 외부 서버로 전송되나요?", a: "아닙니다. 영상 편집, 렌더링, 자막 추출 등 모든 과정은 100% 사용자의 컴퓨터 내부에서 로컬로 처리됩니다." },
        { q: "버그 신고나 기능 제안은 어디로 하나요?", a: 'GitHub <a href="https://github.com/hakkiodbs/TulparEdit/issues" style="color:var(--mavi-a)">Issues</a> 페이지를 이용해 주시거나 프로그램 내 <b>도움말 → 오류 로그 열기</b>를 확인하세요.' }
      ]
    },
    footer: {
      copy: "© TulparEdit · Hakkı Odabaş"
    }
  },

  zh: {
    name: "简体中文",
    flag: "🇨🇳",
    dir: "ltr",
    title: "TulparEdit — 免费的 Windows AI 视频编辑器",
    desc: "TulparEdit：免费、由人工智能驱动的 Windows 视频剪辑软件。一键主题成片、自动语音字幕、Shorts & Reels 爆款创作、直接上传 YouTube。",
    nav: {
      features: "功能特点",
      topic: "一键成片",
      screens: "界面截图",
      github: "GitHub",
      download: "立即下载"
    },
    hero: {
      badge_ver: "版本",
      badge_new: "全新功能：一键主题成片",
      title_html: '用 <span class="gr">AI</span> 轻松且 <span class="gr-k">高效</span> 地创作与剪辑视频。',
      writer_prefix: "使用 TulparEdit ",
      writer_words: [
        "轻松剪辑、拼接视频轨道。",
        "输入主题一键自动生成成片。",
        "自动生成酷炫逐字高亮字幕。",
        "快速制作爆款 Shorts 和 Reels。",
        "一键直传到 YouTube 频道。"
      ],
      desc: "免费的 Windows 视频编辑神器。剪切、合并、添加动态字幕；输入一个主题，AI 即刻自动编写文案、匹配素材画面并合成配音。专为 Shorts、Reels 和 YouTube 打造。",
      btn_download: "Windows 版下载",
      btn_download_sub: "免费",
      btn_video: "▶ 观看演示",
      btn_notes: "更新日志",
      note: "适用于 Windows 10 / 11 (64位) · 无广告 · 无订阅 · 无需注册账号"
    },
    ticker: [
      "一键成片*", "多轨道时间轴", "自动字幕", "Shorts / Reels",
      "AI 文案剧本*", "自然人声配音", "转场特效", "滤镜与 LUT",
      "画幅工作室", "AI 背景消除", "智能降噪", "一键上传 YouTube*",
      "智能粗剪", "速度曲线"
    ],
    stats: [
      { num: "100% 免费", label: "全功能无锁免费使用" },
      { num: "纯粹暗黑风格", label: "轻量直观，操作流畅" },
      { num: "多 AI 接入", label: "Gemini、Groq、OpenRouter" },
      { num: "一键更新", label: "内置静默自动更新" }
    ],
    video: {
      title: "1分钟快速了解 TulparEdit",
      desc: "观看简短的演示视频，探索这款剪辑神器的无限可能。"
    },
    features: {
      title: "它能做什么？",
      desc: "现代视频创作所需的一切工具 — 运行轻巧、性能强劲、上手极其简单。",
      items: [
        { s: "✨", y: true, title: "一键主题成片", yeni: "NEW", desc: "输入主题，AI 自动撰写文案剧本、匹配免版税高清素材、生成逼真配音并对齐动态字幕和背景音乐。" },
        { s: "🎬", title: "多轨道专业时间轴", desc: "无限制添加视频、音频和文字轨道。剪切、分割、重叠及磁性吸附对齐一应俱全。" },
        { s: "💬", title: "智能语音自动字幕", desc: "语音一键转文字，内置 Shorts、Pop、Neon 等多种极具动感的逐字高亮样式。" },
        { s: "📱", title: "Shorts / Reels / TikTok", desc: "横屏视频秒变竖屏，智能构图工作室自动识别人脸并保持主体居中，一键导出短视频套件。" },
        { s: "🎨", title: "转场与视觉滤镜", desc: "丝滑转场特效、专业色彩调节、3D LUT 支持、变速曲线、绿幕抠像及蒙版遮罩。" },
        { s: "🎙", title: "专业音频工作室", desc: "AI 降噪、人声与伴奏分离、高清麦克风录音及超自然的 AI 语音朗读生成。" },
        { s: "⚡", title: "智能自动剪辑", desc: "自动识别并剪除无声片段，平衡音频电平，几分钟内将长视频整理成精品成片。" },
        { s: "🚀", title: "导出与直接发布", desc: "为 YouTube、Shorts、Instagram、WhatsApp 优化的导出预设，支持一键直传到 YouTube。" },
        { s: "🔌", title: "自动化与 MCP 协议", desc: "原生 API 以及 Model Context Protocol (MCP) 深度支持，让外部智能体和机器人自动剪辑。" }
      ]
    },
    topic: {
      title: "一键成片功能如何工作？",
      desc: "只需四个简单步骤，从灵感瞬间转化为可在时间轴二次编辑的完整工程。",
      steps: [
        { no: "1", title: "输入创作主题", desc: "例如：“关于卡帕多奇亚多数人不知道的5个秘密”。选择时长及画面比例（9:16、16:9、1:1）。" },
        { no: "2", title: "选择剧本文案", desc: "AI 自动生成多达 5 份风格各异的剧本。挑选满意的一份，并可自由修改文案句子。" },
        { no: "3", title: "全自动合成渲染", desc: "从 Pexels / Pixabay 匹配对应画面，生成自然语音，自动生成逐字卡点字幕与背景音乐。" },
        { no: "4", title: "二次编辑与发布", desc: "成片直接在时间轴中打开。你可以自由替换镜头、微调特效，随后导出或直传 YouTube。" }
      ]
    },
    screens: {
      title: "软件截图",
      desc: "专注创作效率的现代化暗色界面。",
      tabs: [
        { name: "主编辑界面", img: "ekran_ana", desc: "时间轴、实时预览窗口与工具面板一体化布局。" },
        { name: "一键成片", img: "ekran_senaryolar", desc: "AI 剧本智能生成、微调文本并一键构建项目。" },
        { name: "生成的工程", img: "ekran_konudan_sonuc", desc: "由一键成片生成的竖屏工程：视频素材、人声与字幕完整对齐。" },
        { name: "自动字幕", img: "ekran_altyazi", desc: "语音识别生成字幕，并支持丰富的视觉样式自定义。" },
        { name: "转场库", img: "ekran_gecisler", desc: "拖拽式添加片段之间的丝滑过渡转场。" },
        { name: "滤镜与 LUT", img: "ekran_filtreler", desc: "一键调色与高品质电影级调色预设。" },
        { name: "AI 服务设置", img: "ekran_yapay_zeka", desc: "支持免费接入 Google Gemini、Groq 和 OpenRouter。" },
        { name: "导出预设", img: "ekran_disa_aktar", desc: "专为各类社交平台优化的导出分辨率与编码预设。" }
      ]
    },
    download: {
      title: "立即免费下载 TulparEdit",
      sub_prefix: "最新版本：",
      btn_text: "Windows 版下载",
      btn_sub: "64位 · 免费",
      steps: [
        "下载安装包并双击运行。<b>无需管理员权限即可安装。</b>",
        "如果弹出 Windows SmartScreen 提示，请点击 <b>更多信息 → 仍要运行</b>。",
        "当发布新版本时，软件会自动提示，只需点击 <b>立即更新</b> 即可一键升级。"
      ]
    },
    faq: {
      title: "常见问题",
      items: [
        { q: "真的完全免费吗？", a: "是的。所有功能完全开放，绝无广告、无订阅制、无强制水印，也无需注册账号。" },
        { q: "使用一键成片功能需要什么条件？", a: "需要 Google Gemini、Groq 或 OpenRouter 的免费 API 密钥，以及 Pexels/Pixabay 的免费素材密钥。所有密钥仅保存在您的本地电脑中。" },
        { q: "我的视频会被上传到云端服务器吗？", a: "不会。视频剪辑、合成渲染、字幕识别均 100% 在您的本地电脑中完成，保障您的隐私。" },
        { q: "如何反馈问题或提出新功能建议？", a: '您可以在 GitHub 的 <a href="https://github.com/hakkiodbs/TulparEdit/issues" style="color:var(--mavi-a)">Issues</a> 页面提交，或在软件内点击 <b>帮助 → 打开错误日志</b>。' }
      ]
    },
    footer: {
      copy: "© TulparEdit · Hakkı Odabaş"
    }
  },

  fa: {
    name: "فارسی",
    flag: "🇮🇷",
    dir: "rtl",
    title: "TulparEdit — ویرایشگر ویدیو رایگان با هوش مصنوعی برای ویندوز",
    desc: "نرم‌افزار رایگان ویرایش ویدیو برای ویندوز مجهز به هوش مصنوعی. ساخت ویدیو از ایده، زیرنویس خودکار، تولید ویدیوهای Shorts و Reels، و انتشار مستقیم در یوتیوب.",
    nav: {
      features: "ویژگی‌ها",
      topic: "ساخت ویدیو از ایده",
      screens: "تصاویر محیط برنامه",
      github: "گیت‌هاب",
      download: "دانلود"
    },
    hero: {
      badge_ver: "نسخه",
      badge_new: "جدید: ساخت ویدیو از ایده",
      title_html: 'ویدیوهای خود را با <span class="gr">هوش مصنوعی</span>، سریع و <span class="gr-k">آسان</span> بسازید.',
      writer_prefix: "با TulparEdit، ",
      writer_words: [
        "ویدیوها را برش داده و ادغام کنید.",
        "فقط با یک ایده یک ویدیوی کامل بسازید.",
        "زیرنویس خودکار و متحرک اضافه کنید.",
        "ویدیوهای Shorts و Reels بسازید.",
        "با یک کلیک مستقیماً در یوتیوب منتشر کنید."
      ],
      desc: "نرم‌افزار رایگان تدوین ویدیو برای ویندوز. برش، اتصال و زیرنویس پویا؛ فقط یک ایده بنویسید تا هوش مصنوعی فیلم‌نامه را نوشته، تصاویر آرشیوی مناسب را پیدا کرده و گویندگی کند. آماده برای Shorts، Reels و YouTube.",
      btn_download: "دانلود برای ویندوز",
      btn_download_sub: "رایگان",
      btn_video: "▶ مشاهده ویدیو معرفی",
      btn_notes: "تغییرات نسخه",
      note: "ویندوز ۱۰ / ۱۱ (۶۴ بیتی) · بدون تبلیغات · بدون اشتراک · بدون نیاز به ثبت‌نام"
    },
    ticker: [
      "ساخت ویدیو از ایده*", "تایم‌لاین چند لایه", "زیرنویس خودکار", "Shorts / Reels",
      "سناریونویسی با هوش مصنوعی*", "صداگذاری طبیعی", "ترنزیشن‌ها", "فیلترها و LUT",
      "استودیو کادربندی", "حذف پس‌زمینه", "کاهش نویز", "بارگذاری در یوتیوب*",
      "تدوین هوشمند", "منحنی‌های سرعت"
    ],
    stats: [
      { num: "۱۰۰٪ رایگان", label: "تمام امکانات باز و در دسترس" },
      { num: "رابط کاربری مدرن", label: "طراحی تیره و روان" },
      { num: "هوش مصنوعی قدرتمند", label: "Gemini, Groq, OpenRouter" },
      { num: "یک کلیک", label: "به‌روزرسانی خودکار" }
    ],
    video: {
      title: "TulparEdit در ۱ دقیقه",
      desc: "با مشاهده این ویدیو کوتاه، با امکانات متنوع برنامه آشنا شوید."
    },
    features: {
      title: "برنامه چه کارهایی انجام می‌دهد؟",
      desc: "هر آنچه از یک تدوینگر ویدیوی مدرن نیاز دارید — سبک، قدرتمند و بسیار ساده.",
      items: [
        { s: "✨", y: true, title: "ساخت ویدیو از ایده", yeni: "جدید", desc: "ایده را بنویسید؛ هوش مصنوعی فیلم‌نامه را تنظیم کرده، فوتیج‌های مناسب را یافته، صداگذاری نموده و زیرنویس و موزیک را همگام می‌سازد." },
        { s: "🎬", title: "تایم‌لاین نامحدود", desc: "ترک‌های نامحدود برای ویدیو، صدا و متن. برش، جداسازی، چیدمان لایه‌ای و تراز مغناطیسی." },
        { s: "💬", title: "زیرنویس خودکار گفتار", desc: "تبدیل خودکار گفتار به متن با استایل‌های جذاب کلمه به کلمه مثل Shorts، Pop و Neon." },
        { s: "📱", title: "Shorts / Reels / TikTok", desc: "تبدیل فوری ویدیوهای افقی به عمودی با ردیابی خودکار چهره و حفظ سوژه در مرکز تصویر." },
        { s: "🎨", title: "ترنزیشن‌ها و فیلترهای ویدیویی", desc: "مجموعه ترنزیشن‌های نرم، تصحیح رنگ، پشتیبانی از 3D LUT، منحنی‌های تنظیم سرعت و پرده سبز." },
        { s: "🎙", title: "استودیو صدا", desc: "کاهش نویز صدا، جداسازی صدای خواننده از آهنگ، ضبط صدا با میکروفون و صداگذاری هوشمند." },
        { s: "⚡", title: "تدوین هوشمند خودکار", desc: "حذف خودکار سکوت‌ها و وقفه‌ها، تراز کردن سطح صدا و تبدیل ویدیوهای خام به اثر نهایی در چند دقیقه." },
        { s: "🚀", title: "خروجی و انتشار مستقیم", desc: "تنظیمات پیش‌فرض بهینه‌شده برای یوتیوب، اینستاگرام و واتساپ همراه با آپلود مستقیم به کانال یوتیوب شما." },
        { s: "🔌", title: "اتوماسیون و پروتکل MCP", desc: "پشتیبانی بومی از API و پروتکل Model Context Protocol برای ساخت خودکار ویدیو توسط بات‌ها و ایجنت‌های هوش مصنوعی." }
      ]
    },
    topic: {
      title: "ساخت ویدیو از ایده چگونه کار می‌کند؟",
      desc: "از یک فکر اولیه تا یک پروژه کامل و قابل ویرایش در ۴ مرحله آسان.",
      steps: [
        { no: "1", title: "ایده را بنویسید", desc: "مثال: «۵ واقعیت ناشناخته درباره شگفتی‌های تخت جمشید». مدت زمان و ابعاد (9:16 یا 16:9 یا 1:1) را انتخاب کنید." },
        { no: "2", title: "فیلم‌نامه را برگزینید", desc: "هوش مصنوعی تا ۵ متن خلاقانه می‌نویسد. متن دلخواه را انتخاب کرده و هر جمله‌ای را خواستید ویرایش کنید." },
        { no: "3", title: "تولید کاملاً خودکار", desc: "انتخاب فوتیج مناسب از Pexels / Pixabay، گویندگی طبیعی، زیرنویس پویا و موسیقی زمینه." },
        { no: "4", title: "ویرایش و انتشار", desc: "پروژه مستقیماً در تایم‌لاین باز می‌شود. نماها را تعویض کرده، خروجی بگیرید یا مستقیماً در یوتیوب آپلود کنید." }
      ]
    },
    screens: {
      title: "تصاویر محیط نرم‌افزار",
      desc: "طراحی مدرن، تیره و روان برای جریان کاری بدون وقفه.",
      tabs: [
        { name: "صفحه اصلی", img: "ekran_ana", desc: "تایم‌لاین، پلیر پیش‌نمایش و ابزارها همگی در یک چیدمان هماهنگ." },
        { name: "ساخت ویدیو از ایده", img: "ekran_senaryolar", desc: "انتخاب سناریوهای تولیدشده، اصلاح جملات و ایجاد ویدیو." },
        { name: "پروژه نهایی", img: "ekran_konudan_sonuc", desc: "پروژه عمودی آماده شده توسط هوش مصنوعی با تصویر، صوت و زیرنویس." },
        { name: "زیرنویس", img: "ekran_altyazi", desc: "تولید خودکار زیرنویس با قالب‌ها و فونت‌های سفارشی." },
        { name: "ترنزیشن‌ها", img: "ekran_gecisler", desc: "افزودن انتقال‌های تصویر نرم تنها با کشیدن و رها کردن بین کلیپ‌ها." },
        { name: "فیلترها و LUT", img: "ekran_filtreler", desc: "تنظیم رنگ سینمایی و فیلترهای بصری تنها با یک کلیک." },
        { name: "سرویس‌های هوش مصنوعی", img: "ekran_yapay_zeka", desc: "اتصال به ارائه‌دهندگان رایگان: Gemini، Groq و OpenRouter." },
        { name: "خروجی", img: "ekran_disa_aktar", desc: "تنظیمات آماده خروجی برای یوتیوب، اینستاگرام و واتساپ." }
      ]
    },
    download: {
      title: "دانلود کاملاً رایگان TulparEdit",
      sub_prefix: "آخرین نسخه: ",
      btn_text: "دانلود برای ویندوز",
      btn_sub: "۶۴ بیتی · رایگان",
      steps: [
        "فایل نصبی را دانلود کرده و دوبار کلیک کنید. <b>نیازی به دسترسی ادمین نیست.</b>",
        "اگر اخطار Windows SmartScreen نمایش داده شد، روی <b>More info → Run anyway</b> کلیک کنید.",
        "با انتشار نسخه جدید، نرم‌افزار به شما اطلاع می‌دهد تا با یک کلیک از طریق <b>اکنون به‌روزرسانی شود</b> آپدیت کنید."
      ]
    },
    faq: {
      title: "پرسش‌های پرتکرار",
      items: [
        { q: "آیا نرم‌افزار واقعاً کاملاً رایگان است؟", a: "بله. تمام امکانات بدون تبلیغات، اشتراک، واترمارک یا نیاز به ثبت‌نام حساب کاربری فعال هستند." },
        { q: "برای قابلیت ساخت ویدیو از ایده چه چیزی نیاز است؟", a: "یک کلید API رایگان از Google Gemini یا Groq یا OpenRouter و یک کلید رایگان از Pexels/Pixabay. تمام کلیدها فقط روی سیستم شخصی شما ذخیره می‌شوند." },
        { q: "آیا ویدیوهای من در جایی آپلود یا پردازش ابری می‌شوند؟", a: "خیر. تدوین، رندر و پردازش زیرنویس به صورت ۱۰۰٪ محلی روی سیستم شما انجام می‌شود." },
        { q: "کجا می‌توانم باگ‌ها را گزارش دهم یا پیشنهاد ارسال کنم؟", a: 'در صفحه <a href="https://github.com/hakkiodbs/TulparEdit/issues" style="color:var(--mavi-a)">Issues</a> در گیت‌هاب یا از منوی برنامه در <b>راهنما ← باز کردن فایل لاگ</b>.' }
      ]
    },
    footer: {
      copy: "© TulparEdit · حقی اوداباش (Hakkı Odabaş)"
    }
  }
};
