export function FooterSection() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="font-serif text-3xl font-bold">Dukuh Garotan</h3>
          <p className="text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Melestarikan warisan budaya dan sejarah untuk generasi mendatang. Sejarah yang tercatat di sini bersumber
            dari cerita turun-temurun dan merupakan bagian dari monografi dukuh.
          </p>
          <div className="pt-6 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Sejarah Dukuh Garotan. Dipersembahkan untuk masyarakat dukuh.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
