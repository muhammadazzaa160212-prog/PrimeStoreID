// PrimeStoreID - Next.js + Tailwind Ready
// Cara Pakai:
// 1. Buat project Next.js baru
// 2. Install Tailwind CSS
// 3. Replace isi app/page.jsx dengan file ini
// 4. Jalankan npm run dev
// 5. Upload ke Vercel

export default function PrimeStoreID() {
  const services = [
    { rank: 'Warrior → Elite', price: 'Rp 1.000 / Bintang' },
    { rank: 'Elite → Master', price: 'Rp 1.500 / Bintang' },
    { rank: 'Warrior → Master', price: 'Rp 30.000' },
    { rank: 'Master → Grandmaster', price: 'Rp 2.000 / Bintang' },
    { rank: 'Grandmaster Full', price: 'Rp 40.000' },
    { rank: 'Grandmaster → Epic', price: 'Rp 2.500 / Bintang' },
    { rank: 'Epic → Legend', price: 'Rp 3.000 / Bintang' },
    { rank: 'Legend → Mythic', price: 'Rp 4.000 / Bintang' },
    { rank: 'Placement Mythic', price: 'Rp 50.000' },
    { rank: 'Mythic', price: 'Rp 5.000 / Bintang' },
    { rank: 'Mythic Honor', price: 'Rp 6.000 / Bintang' },
    { rank: 'Mythic Glory', price: 'Rp 7.000 / Bintang' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="sticky top-0 z-50 border-b border-yellow-500 bg-black/95 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-3xl font-black text-yellow-400 tracking-wide">PrimeStoreID</h1>
            <p className="text-sm text-gray-400">Joki MLBB & Rekber Trusted</p>
          </div>

          <a
            href="https://wa.me/6283185311780"
            target="_blank"
            className="bg-yellow-400 text-black px-5 py-2 rounded-2xl font-bold hover:scale-105 transition"
          >
            Order Sekarang
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-20 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-500 rounded-full text-yellow-300 text-sm mb-6">
              TOP UP STYLE • JOKI PROFESSIONAL
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              JOKI MLBB
              <span className="text-yellow-400"> FAST & AMAN</span>
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              PrimeStoreID menyediakan jasa joki Mobile Legends terpercaya dengan proses cepat,
              aman, no login, dan harga terjangkau.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="https://wa.me/6283185311780"
                target="_blank"
                className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
              >
                WhatsApp Admin
              </a>

              <a
                href="https://instagram.com/primestore.id"
                target="_blank"
                className="border border-yellow-400 text-yellow-300 px-6 py-3 rounded-2xl font-bold hover:bg-yellow-400 hover:text-black transition"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full"></div>

            <div className="relative bg-zinc-900 border border-yellow-500/30 rounded-[32px] p-6 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop"
                alt="gaming"
                className="rounded-3xl w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-4xl font-black text-yellow-400">Pricelist Joki</h3>
            <p className="text-gray-400 mt-2">Daftar harga terbaru PrimeStoreID</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-6 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-black flex items-center justify-center font-black text-xl">
                  ML
                </div>

                <span className="text-xs bg-yellow-500/20 border border-yellow-500/40 px-3 py-1 rounded-full text-yellow-300">
                  AVAILABLE
                </span>
              </div>

              <h4 className="text-2xl font-bold mb-3">{item.rank}</h4>

              <p className="text-yellow-400 text-xl font-black">{item.price}</p>

              <a
                href="https://wa.me/6283185311780"
                target="_blank"
                className="mt-6 inline-block w-full text-center bg-yellow-400 text-black py-3 rounded-2xl font-bold hover:scale-105 transition"
              >
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 border-y border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-4xl font-black text-yellow-400 text-center mb-12">
            Kenapa Pilih PrimeStoreID?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-yellow-500/20 rounded-3xl p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-2xl font-bold mb-3">Pengerjaan Cepat</h4>
              <p className="text-gray-400">
                Proses cepat sesuai request customer dengan player berpengalaman.
              </p>
            </div>

            <div className="bg-black border border-yellow-500/20 rounded-3xl p-8">
              <div className="text-5xl mb-4">🛡️</div>
              <h4 className="text-2xl font-bold mb-3">No Login</h4>
              <p className="text-gray-400">
                Akun tetap aman tanpa perlu login akun Mobile Legends.
              </p>
            </div>

            <div className="bg-black border border-yellow-500/20 rounded-3xl p-8">
              <div className="text-5xl mb-4">🔥</div>
              <h4 className="text-2xl font-bold mb-3">Fast Response</h4>
              <p className="text-gray-400">
                Admin standby untuk menerima order dan jadwal mabar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-[40px] p-10 text-black text-center shadow-2xl">
          <h3 className="text-5xl font-black mb-4">ORDER SEKARANG</h3>

          <p className="text-lg font-medium mb-8">
            Hubungi admin PrimeStoreID untuk melakukan pemesanan jasa joki MLBB.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/6283185311780"
              target="_blank"
              className="bg-black text-yellow-400 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              WhatsApp: 083185311780
            </a>

            <a
              href="https://instagram.com/primestore.id"
              target="_blank"
              className="border-2 border-black px-8 py-4 rounded-2xl font-bold hover:bg-black hover:text-yellow-400 transition"
            >
              Instagram: @PrimeStore.id
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-yellow-500/20 py-8 text-center text-gray-500">
        © 2026 PrimeStoreID — All Rights Reserved.
      </footer>
    </div>
  );
}
