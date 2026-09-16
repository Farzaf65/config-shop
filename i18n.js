/* =========================================================================
   CONFIG SHOP — i18n dictionary (fa / en)
   ========================================================================= */

const I18N = {
  fa: {
    dir: "rtl",
    nav: { home: "خانه", services: "سرویس‌ها", faq: "راهنما", support: "پشتیبانی", cta: "ثبت سفارش" },

    hero: {
      eyebrow: "Config Shop",
      title: "شبکه‌ گیمینگ بهینه، پینگ پایین، اتصال پایدار",
      subtitle: "کانفیگ WireGuard و DNS اختصاصی برای گیمرها — مسیر بهینه از شما تا سرور بازی، با پایداری واقعی.",
      cta: "مشاهده سرویس‌ها",
      stat1: "لوکیشن سرور", stat2: "کانفیگ در هر سفارش", stat3: "روز پشتیبانی فعال"
    },

    services: {
      title: "سرویس‌های ما",
      subtitle: "سرویس مناسب سبک بازی و شبکه‌ خودتان را انتخاب کنید",
      active: "فعال",
      soon: "به‌زودی",
      viewOrder: "مشاهده و سفارش",
      basePrice: "شروع قیمت",
      toman: "تومان",
      comingSoonToast: "این سرویس در حال حاضر فعال نیست و به‌زودی در دسترس قرار خواهد گرفت.",
      wireguard: { name: "WireGuard Gaming", tagline: "بهینه برای گیمینگ، چند لوکیشن، حداکثر ۷ کانفیگ" },
      dns: { name: "DNS Gaming", tagline: "پایداری مناسب برای گیم، انتخاب لوکیشن" },
      amneziawg: { name: "AmneziaWG", tagline: "نسخه مقاوم‌شده WireGuard" },
      amnezia: { name: "Amnezia VPN", tagline: "VPN اختصاصی خودتان" },
      openvpn: { name: "OpenVPN", tagline: "پروتکل استاندارد و پایدار" },
      v2rayng: { name: "v2rayNG", tagline: "کلاینت چندپروتکلی" }
    },

    benefits: {
      title: "چرا Config Shop",
      items: [
        { icon: "⚡", text: "سرعت مناسب" },
        { icon: "🎮", text: "بهینه‌سازی برای Gaming" },
        { icon: "🌍", text: "سرورهای متنوع" },
        { icon: "🔐", text: "اتصال امن" },
        { icon: "🛠️", text: "پشتیبانی" }
      ]
    },

    why: {
      title: "چرا ما را انتخاب کنید",
      items: [
        "پیکربندی اختصاصی برای هر سفارش",
        "شفافیت کامل قیمت — بدون هزینه پنهان",
        "پشتیبانی مستقیم و پاسخگو",
        "زیرساخت چندلوکیشنه با مسیر بهینه"
      ]
    },

    network: {
      title: "شبکه‌ سرورهای ما",
      subtitle: "مسیر شما، بهینه‌شده تا نزدیک‌ترین و پایدارترین سرور"
    },

    order: {
      panelTitle: "ساخت سفارش",
      steps: [
        "انتخاب سرویس", "انتخاب لوکیشن", "تعداد کانفیگ", "مدت زمان",
        "تعداد کاربران", "بررسی سفارش", "ثبت سفارش", "اطلاعات پرداخت", "فاکتور نهایی"
      ],
      locationsTitle: "🌍 لوکیشن‌های سرور (اختیاری)",
      locationsHint: "برای هر لوکیشن تعداد کانفیگ موردنظر را مشخص کنید",
      maxConfigError: "حداکثر ۷ کانفیگ مجاز است.",
      durationTitle: "🗓️ مدت زمان",
      day30: "۳۰ روزه", day60: "۶۰ روزه", day90: "۹۰ روزه",
      active: "فعال 🟢", soon: "🟡 به‌زودی",
      usersTitle: "👤 تعداد کاربران",
      singleUser: "تک‌کاربره", doubleUser: "دو کاربر",
      summaryTitle: "🧾 خلاصه سفارش",
      orderNumber: "شماره سفارش", service: "سرویس", locationsLabel: "لوکیشن‌ها",
      configCount: "تعداد کانفیگ", duration: "مدت زمان", users: "تعداد کاربران",
      totalPrice: "مبلغ نهایی",
      next: "مرحله بعد", back: "مرحله قبل", submitOrder: "ثبت سفارش",
      noDiscountNote: "قیمت نمایش‌داده‌شده، مبلغ نهایی و واقعی است.",
      validation: {
        service: "لطفاً یک سرویس را انتخاب کنید.",
        location: "لطفاً Location موردنظر را انتخاب کنید.",
        configCount: "لطفاً تعداد کانفیگ را مشخص کنید.",
        duration: "لطفاً مدت زمان سرویس را مشخص کنید.",
        users: "لطفاً تعداد کاربران را مشخص کنید."
      }
    },

    payment: {
      title: "اطلاعات پرداخت",
      subtitle: "روش پرداخت را انتخاب کنید و مبلغ را واریز نمایید",
      methodCard: "کارت‌به‌کارت",
      methodCrypto: "پرداخت کریپتو",
      cardNumber: "شماره کارت", cardHolder: "نام صاحب کارت", copyCard: "کپی شماره کارت",
      copied: "شماره کارت کپی شد",
      amountToPay: "مبلغ قابل پرداخت",
      cryptoCurrency: "ارز", network: "شبکه", exactAmount: "مقدار دقیق قابل پرداخت",
      walletAddress: "آدرس کیف پول", liveRate: "نرخ لحظه‌ای استفاده‌شده", tomanAmount: "مبلغ اصلی سفارش (تومان)",
      loadingRate: "در حال دریافت نرخ لحظه‌ای از نوبیتکس…",
      rateError: "این ارز در حال حاضر در پاسخ API نوبیتکس یافت نشد؛ به‌جای حدس‌زدن، لطفاً ارز دیگری انتخاب کنید یا با پشتیبانی هماهنگ کنید.",
      copyAddress: "کپی آدرس", addressCopied: "آدرس کپی شد",
      depositDone: "واریز انجام شد",
      depositNote: "پرداخت این مرحله صرفاً برای ثبت اطلاعات است و مانع ادامه فرآیند نمی‌شود؛ می‌توانید حتی بدون واریز به مرحله بعد بروید. پس از انجام واقعی واریز، گزینه «واریز انجام شد» را بزنید.",
      manualSendTitle: "ارسال دستی تراکنش",
      manualSendNote: "لطفاً رسید یا تراکنش پرداخت خود را به‌صورت دستی برای پشتیبانی ارسال کنید.",
      sendVia: "ارسال از طریق",
      telegram: "پیام‌رسان تلگرام (PV)", instagram: "پیج اینستاگرام",
      sendToSupport: "ارسال به پشتیبانی",
      sendOrderToApp: "ارسال اطلاعات سفارش به اپلیکیشن فروش",
      statusPending: "در انتظار واریز", statusDone: "واریز اعلام شد"
    },

    invoice: {
      title: "فاکتور نهایی",
      date: "تاریخ", paymentMethod: "روش پرداخت",
      sendToSupport: "📨 ارسال فاکتور به پشتیبانی",
      newOrder: "ثبت سفارش جدید",
      cardMethod: "کارت‌به‌کارت", cryptoMethod: "کریپتو"
    },

    faq: {
      title: "❓ سوالات متداول (FAQ)",
      items: [
        { q: "WireGuard چیست؟", a: "WireGuard یک پروتکل مدرن و سبک VPN است که با رمزنگاری قوی و سرعت بالا، اتصال امن و پایدار بین کاربر و سرور برقرار می‌کند." },
        { q: "WireGuard برای گیم چیست؟", a: "نسخه بهینه‌شده WireGuard برای گیمینگ، با تنظیمات شبکه‌ای که تأخیر (Ping) را کاهش داده و پایداری اتصال حین بازی آنلاین را افزایش می‌دهد." },
        { q: "DNS چیست؟", a: "DNS سرویسی است که آدرس‌های اینترنتی را ترجمه می‌کند؛ نسخه Gaming آن مسیر و سرعت resolve را برای تجربه بهتر آنلاین‌گیمینگ بهینه می‌کند." },
        { q: "AmneziaWG چیست؟", a: "نسخه‌ مقاوم‌شده WireGuard که در برابر شناسایی و فیلترینگ عمیق‌تر (DPI) مقاومت بیشتری دارد." },
        { q: "Amnezia VPN چیست؟", a: "ابزاری برای ساخت و مدیریت VPN اختصاصی شخصی روی چند پروتکل مختلف." },
        { q: "OpenVPN چیست؟", a: "یکی از قدیمی‌ترین و پایدارترین پروتکل‌های VPN، شناخته‌شده برای سازگاری بالا با پلتفرم‌های مختلف." },
        { q: "v2rayNG چیست؟", a: "کلاینت اندرویدی از پروژه V2Ray برای اتصال با پروتکل‌های چندگانه مسیریابی ترافیک." }
      ]
    },

    support: {
      title: "مرکز پشتیبانی",
      subtitle: "برای هرگونه سوال، مستقیماً در ارتباط باشید",
      telegramAdmin: "ادمین تلگرام", instagramPage: "پیج اینستاگرام",
      telegramChannel: "کانال تلگرام", instagramLink: "لینک اینستاگرام"
    },

    footer: {
      about: "فروشگاه تخصصی سرویس‌های شبکه و گیمینگ",
      linksTitle: "دسترسی سریع", servicesTitle: "سرویس‌ها", supportTitle: "پشتیبانی",
      rights: "تمامی حقوق محفوظ است."
    },

    lang: { fa: "فارسی", en: "English" }
  },

  en: {
    dir: "ltr",
    nav: { home: "Home", services: "Services", faq: "FAQ", support: "Support", cta: "Order Now" },

    hero: {
      eyebrow: "Config Shop",
      title: "Optimized gaming network. Low ping. Stable connection.",
      subtitle: "Dedicated WireGuard and DNS configs for gamers — the fastest route from you to the game server, with real stability.",
      cta: "Browse services",
      stat1: "Server locations", stat2: "Configs per order", stat3: "Days of active support"
    },

    services: {
      title: "Our services",
      subtitle: "Pick the service that fits your game and network",
      active: "Active",
      soon: "Coming soon",
      viewOrder: "View & order",
      basePrice: "Starting at",
      toman: "Toman",
      comingSoonToast: "This service isn't active yet and will be available soon.",
      wireguard: { name: "WireGuard Gaming", tagline: "Gaming-optimized, multi-location, up to 7 configs" },
      dns: { name: "DNS Gaming", tagline: "Solid stability for gaming, choose your location" },
      amneziawg: { name: "AmneziaWG", tagline: "Hardened version of WireGuard" },
      amnezia: { name: "Amnezia VPN", tagline: "Your own private VPN" },
      openvpn: { name: "OpenVPN", tagline: "Standard, battle-tested protocol" },
      v2rayng: { name: "v2rayNG", tagline: "Multi-protocol routing client" }
    },

    benefits: {
      title: "Why Config Shop",
      items: [
        { icon: "⚡", text: "Solid speed" },
        { icon: "🎮", text: "Gaming optimized" },
        { icon: "🌍", text: "Diverse servers" },
        { icon: "🔐", text: "Secure connection" },
        { icon: "🛠️", text: "Support" }
      ]
    },

    why: {
      title: "Why choose us",
      items: [
        "Dedicated configuration for every order",
        "Full price transparency — no hidden fees",
        "Direct, responsive support",
        "Multi-location infrastructure with optimized routing"
      ]
    },

    network: {
      title: "Our server network",
      subtitle: "Your route, optimized to the nearest, most stable server"
    },

    order: {
      panelTitle: "Build your order",
      steps: [
        "Choose service", "Choose location", "Config count", "Duration",
        "Users", "Review order", "Submit order", "Payment info", "Final invoice"
      ],
      locationsTitle: "🌍 Server locations (optional)",
      locationsHint: "Set the number of configs for each location",
      maxConfigError: "Maximum of 7 configs allowed.",
      durationTitle: "🗓️ Duration",
      day30: "30 days", day60: "60 days", day90: "90 days",
      active: "Active 🟢", soon: "🟡 Coming soon",
      usersTitle: "👤 Users",
      singleUser: "Single user", doubleUser: "Two users",
      summaryTitle: "🧾 Order summary",
      orderNumber: "Order number", service: "Service", locationsLabel: "Locations",
      configCount: "Config count", duration: "Duration", users: "Users",
      totalPrice: "Total price",
      next: "Next", back: "Back", submitOrder: "Submit order",
      noDiscountNote: "The price shown is the final, real amount.",
      validation: {
        service: "Please choose a service.",
        location: "Please choose a location.",
        configCount: "Please set the config count.",
        duration: "Please choose a duration.",
        users: "Please choose the number of users."
      }
    },

    payment: {
      title: "Payment information",
      subtitle: "Choose a payment method and complete the transfer",
      methodCard: "Card transfer",
      methodCrypto: "Crypto payment",
      cardNumber: "Card number", cardHolder: "Cardholder name", copyCard: "Copy card number",
      copied: "Card number copied",
      amountToPay: "Amount to pay",
      cryptoCurrency: "Currency", network: "Network", exactAmount: "Exact amount to pay",
      walletAddress: "Wallet address", liveRate: "Live rate used", tomanAmount: "Original order amount (Toman)",
      loadingRate: "Fetching the live rate from Nobitex…",
      rateError: "This currency wasn't found in the Nobitex API response; rather than guessing, please pick another currency or contact support.",
      copyAddress: "Copy address", addressCopied: "Address copied",
      depositDone: "Deposit completed",
      depositNote: "This step only records payment info and doesn't block the flow; you can move to the next step even without paying yet. Once you've actually sent the transfer, tap \"Deposit completed\".",
      manualSendTitle: "Send transaction manually",
      manualSendNote: "Please manually send your payment receipt or transaction to support.",
      sendVia: "Send via",
      telegram: "Telegram (DM)", instagram: "Instagram page",
      sendToSupport: "Send to support",
      sendOrderToApp: "Send order info to the sales app",
      statusPending: "Awaiting deposit", statusDone: "Deposit reported"
    },

    invoice: {
      title: "Final invoice",
      date: "Date", paymentMethod: "Payment method",
      sendToSupport: "📨 Send invoice to support",
      newOrder: "Start a new order",
      cardMethod: "Card transfer", cryptoMethod: "Crypto"
    },

    faq: {
      title: "❓ Frequently asked questions",
      items: [
        { q: "What is WireGuard?", a: "WireGuard is a modern, lightweight VPN protocol that provides a secure, stable connection between user and server with strong encryption and high speed." },
        { q: "What is WireGuard for gaming?", a: "An optimized WireGuard setup for gaming, tuned to reduce ping and improve connection stability during online play." },
        { q: "What is DNS?", a: "DNS translates internet addresses; the Gaming version optimizes the resolve path and speed for a better online gaming experience." },
        { q: "What is AmneziaWG?", a: "A hardened version of WireGuard that is more resistant to detection and deep packet inspection (DPI)." },
        { q: "What is Amnezia VPN?", a: "A tool for building and managing your own private VPN across several protocols." },
        { q: "What is OpenVPN?", a: "One of the oldest and most stable VPN protocols, known for broad compatibility across platforms." },
        { q: "What is v2rayNG?", a: "An Android client for the V2Ray project supporting multiple routing protocols." }
      ]
    },

    support: {
      title: "Support center",
      subtitle: "Reach out directly for any question",
      telegramAdmin: "Telegram admin", instagramPage: "Instagram page",
      telegramChannel: "Telegram channel", instagramLink: "Instagram link"
    },

    footer: {
      about: "A specialized shop for network and gaming services",
      linksTitle: "Quick links", servicesTitle: "Services", supportTitle: "Support",
      rights: "All rights reserved."
    },

    lang: { fa: "فارسی", en: "English" }
  }
};
