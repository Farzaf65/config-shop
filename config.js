/* =========================================================================
   CONFIG SHOP — Central configuration
   همه‌ی مقادیر قیمت، لینک‌ها و تنظیمات ثابت در همین فایل قرار دارند تا
   ویرایش آینده بدون نیاز به گشتن در کل کد ممکن باشد.

   نکات مهم برای شما (سازنده سایت):
   - مقادیر دارای کامنت «TODO» باید قبل از انتشار واقعی با اطلاعات واقعی
     خودتان جایگزین شوند (شماره کارت، آیدی پشتیبانی و ...).
   - چون به ریپازیتوری قبلی پروژه دسترسی نداشتیم، منطق قیمت‌گذاری «تعداد
     کاربران» و «کانفیگ‌های اضافه DNS» بر اساس ساختار WireGuard و به‌صورت
     فرضی (Assumption) تعریف شده و کاملاً قابل تغییر است (به بخش pricing
     مراجعه کنید).
   ========================================================================= */

const CONFIG = {
  siteName: "Config Shop",

  // ---------------------------------------------------------------------
  // پشتیبانی / شبکه‌های اجتماعی — TODO: مقادیر واقعی را جایگزین کنید
  // ---------------------------------------------------------------------
  support: {
    telegramUsername: "configshop_admin",      // TODO: آیدی ادمین تلگرام واقعی
    instagramUsername: "configshop",            // TODO: آیدی اینستاگرام واقعی
    telegramChannelUrl: "https://t.me/configshop_channel", // TODO
    instagramUrl: "https://instagram.com/configshop",       // TODO
    orderAppUsername: "configshop_orders_bot"   // TODO: مقصد ارسال اطلاعات سفارش به اپ فروش
  },

  // ---------------------------------------------------------------------
  // پرداخت کارت‌به‌کارت — TODO: اطلاعات واقعی کارت را جایگزین کنید
  // ---------------------------------------------------------------------
  card: {
    number: "6037-9975-XXXX-XXXX", // TODO: شماره کارت واقعی
    holder: "نام و نام خانوادگی صاحب کارت" // TODO
  },

  // ---------------------------------------------------------------------
  // پرداخت کریپتو
  // ---------------------------------------------------------------------
  crypto: {
    apiUrl: "https://apiv2.nobitex.ir/market/stats",
    // هر ارز چند کلید احتمالی برای جستجو در پاسخ API دارد چون فرمت دقیق
    // پاسخ نوبیتکس ممکن است litte تفاوت داشته باشد (مثلاً "ton-rls" یا
    // "TONIRT"). کد در app.js با بیشترین انعطاف این کلیدها را جستجو می‌کند
    // و اگر هیچ‌کدام پیدا نشد، آن ارز را «نامعتبر» اعلام می‌کند (حدس نمی‌زند).
    wallets: [
      {
        id: "ton",
        label: "TON",
        network: "TON",
        address: "UQBRuOUGyPqTPpg4GksFAvkcupMKqqYEnY2c0A4VNEC1mVoL",
        searchKeys: ["ton-rls", "tonrls", "ton-irt", "tonirt"]
      },
      {
        id: "not",
        label: "NOT (Notcoin)",
        network: "TON",
        address: "UQBRuOUGyPqTPpg4GksFAvkcupMKqqYEnY2c0A4VNEC1mVoL",
        searchKeys: ["not-rls", "notrls", "not-irt", "notirt"]
      },
      {
        id: "usdt-ton",
        label: "USDT",
        network: "TON",
        address: "UQBRuOUGyPqTPpg4GksFAvkcupMKqqYEnY2c0A4VNEC1mVoL",
        searchKeys: ["usdt-rls", "usdtrls", "usdt-irt", "usdtirt"]
      },
      {
        id: "usdt-trc20",
        label: "USDT",
        network: "TRC20 (TRON)",
        address: "TD2qqetwcFNFu1YGAFVR5QCdQxU1kE8y8z",
        searchKeys: ["usdt-rls", "usdtrls", "usdt-irt", "usdtirt"]
      }
    ]
  },

  // ---------------------------------------------------------------------
  // لوکیشن‌های سرور — tier مشخص می‌کند کدام سطح قیمت اضافه به آن تعلق می‌گیرد
  // ---------------------------------------------------------------------
  locations: [
    { id: "de", flag: "🇩🇪", fa: "آلمان",     en: "Germany",      tier: 2 },
    { id: "tr", flag: "🇹🇷", fa: "ترکیه",     en: "Turkey",       tier: 1 },
    { id: "ae", flag: "🇦🇪", fa: "امارات",    en: "UAE",          tier: 1 },
    { id: "nl", flag: "🇳🇱", fa: "هلند",      en: "Netherlands",  tier: 2 },
    { id: "sa", flag: "🇸🇦", fa: "عربستان",   en: "Saudi Arabia", tier: 2 },
    { id: "ro", flag: "🇷🇴", fa: "رومانی",    en: "Romania",      tier: 2 },
    { id: "sg", flag: "🇸🇬", fa: "سنگاپور",   en: "Singapore",    tier: 2 },
    { id: "at", flag: "🇦🇹", fa: "اتریش",     en: "Austria",      tier: 2 },
    { id: "fi", flag: "🇫🇮", fa: "فنلاند",    en: "Finland",      tier: 1 },
    { id: "se", flag: "🇸🇪", fa: "سوئد",      en: "Sweden",       tier: 2 },
    { id: "dk", flag: "🇩🇰", fa: "دانمارک",   en: "Denmark",      tier: 2 }
  ],

  // ---------------------------------------------------------------------
  // سرویس‌ها
  // ---------------------------------------------------------------------
  services: [
    { id: "wireguard", icon: "shield", status: "active" },
    { id: "dns",       icon: "globe",  status: "active" },
    { id: "amneziawg", icon: "dragon", status: "soon" },
    { id: "amnezia",   icon: "spiral", status: "soon" },
    { id: "openvpn",   icon: "lock",   status: "soon" },
    { id: "v2rayng",   icon: "vshape", status: "soon" }
  ],

  durations: [
    { id: "d30", days: 30, active: true },
    { id: "d60", days: 60, active: false },
    { id: "d90", days: 90, active: false }
  ],

  // ---------------------------------------------------------------------
  // منطق قیمت‌گذاری
  // ---------------------------------------------------------------------
  pricing: {
    maxConfigs: 7,
    wireguard: {
      base: 220000, // تومان — فقط برای اولین کانفیگ کل سفارش
      tier1Price: 36203, // ترکیه / امارات / فنلاند
      tier2Price: 16200  // آلمان / هلند / عربستان / رومانی / سنگاپور / اتریش / سوئد / دانمارک
    },
    dns: {
      // ASSUMPTION: چون منطق قیمت‌گذاری فعلی DNS در دسترس نبود، همان ساختار
      // WireGuard (قیمت پایه فقط برای اولین کانفیگ + قیمت لایه‌ای برای بقیه)
      // به‌صورت پیش‌فرض اعمال شده. در صورت نیاز فقط همین چند مقدار را عوض کنید.
      base: 180000,
      tier1Price: 36203,
      tier2Price: 16200
    },
    users: {
      // ASSUMPTION: ضریب قیمت برای «دو کاربر». مقدار پیش‌فرض قابل ویرایش.
      single: { multiplier: 1 },
      double: { multiplier: 1.6 }
    }
  }
};
