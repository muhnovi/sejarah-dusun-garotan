import { Card, CardContent } from "@/components/ui/card"

const timelineData = [
  {
    generation: "Generasi 1",
    name: "Eyang Patuh",
    description:
      "Pendiri pertama pemukiman, berpindah dari wilayah Klaten. Keturunan Sunan Bayat dan Eyang Pandanaran. Memiliki sembilan orang anak.",
    year: "~1935",
  },
  {
    generation: "Generasi 2",
    name: "Mbah Kartodikromo",
    description:
      "Putra kelima Eyang Patuh yang menjabat sebagai Lurah sebelum kemerdekaan Indonesia. Memiliki sembilan istri dan mewariskan Al-Qur'an 30 juz tulisan tangan.",
    year: "~1965",
  },
  {
    generation: "Generasi 3",
    name: "Mbah Kartodiwongso",
    description:
      "Salah satu dari enam anak Mbah Kartodikromo dari istri keempat. Melanjutkan garis keturunan dan mempertahankan nilai-nilai tradisional.",
    year: "~1995",
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Perjalanan Waktu</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Sejarah Dusun Garotan dimulai sekitar sembilan puluh tahun yang lalu, berkembang melalui enam generasi yang
            membangun komunitas kuat dan budaya yang kaya.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-primary rounded-full border-4 border-background z-10" />

                  <div className="md:w-1/2" />

                  <Card className="md:w-1/2 ml-16 md:ml-0">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {item.generation}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl font-semibold mb-3">{item.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
