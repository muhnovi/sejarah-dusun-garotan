export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/30 via-background to-muted/20">
      <div className="absolute inset-0 bg-[url('/indonesian-village-rice-fields-sunset.jpg')] bg-cover bg-center opacity-35" />

      <div className="container relative z-10 px-4 py-32 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
            Sejarah Dusun Garotan
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed text-pretty">
            Warisan Budaya dan Perjalanan Enam Generasi
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#timeline"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Jelajahi Sejarah
            </a>
            <a
              href="#genealogy"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-foreground rounded-lg hover:bg-primary/10 transition-colors font-medium"
            >
              Silsilah Keluarga
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
