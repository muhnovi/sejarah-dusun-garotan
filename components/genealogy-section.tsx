import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const genealogyTree = [
  {
    name: "Eyang Patuh",
    generation: 1,
    children: 9,
    notable: "Pendiri pertama, keturunan Sunan Bayat dan Eyang Pandanaran",
    highlight: true,
  },
  {
    name: "Mbah Kartodikromo",
    generation: 2,
    role: "Putra kelima Eyang Patuh",
    notable: "Lurah sebelum kemerdekaan, memiliki 9 istri, mewariskan Al-Qur'an tulisan tangan",
    highlight: true,
  },
  {
    name: "Mbah Kartodiwongso",
    generation: 3,
    role: "Anak dari istri keempat Mbah Kartodikromo",
    children: 6,
    notable: "Salah satu dari enam bersaudara, penerus tradisi keluarga",
  },
  {
    name: "Karsosuwito",
    generation: 4,
    role: "Keturunan Mbah Kartodiwongso",
    children: 7,
    notable: "Memiliki 7 anak dari satu istri",
  },
  {
    name: "Sakino (Mbah Jenggot)",
    generation: 5,
    role: "Anak bungsu Karsosuwito",
    children: 21,
    notable: "Memiliki 21 cucu, mewarisi Al-Qur'an tulisan tangan dari leluhurnya",
    highlight: true,
  },
  {
    name: "Ahmad Jowo",
    generation: 6,
    role: "Anak Sakino (Mbah Jenggot)",
    notable: "Generasi terkini, melanjutkan garis keturunan",
  },
]

export function GenealogySection() {
  return (
    <section id="genealogy" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Silsilah Keluarga</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Garis keturunan Desa Garotan dimulai dari Eyang Patuh dan berkembang hingga enam generasi, membentuk
            komunitas yang kuat dan saling terhubung.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {genealogyTree.map((person, index) => (
              <Card
                key={index}
                className={`transition-all hover:shadow-lg ${person.highlight ? "border-primary border-2" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Generasi {person.generation}</span>
                    {person.children && (
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {person.children} {person.children === 21 ? "cucu" : "anak"}
                      </span>
                    )}
                  </div>
                  <CardTitle className="font-serif text-xl">{person.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  {person.role && <p className="text-sm text-muted-foreground mb-2">{person.role}</p>}
                  <p className="text-sm leading-relaxed">{person.notable}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-accent/20 border-accent">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold mb-4">Warisan Eyang Pandanaran</h3>
              <p className="text-muted-foreground leading-relaxed">
                Secara garis besar, keturunan Eyang Patuh diyakini berasal dari Eyang Pandanaran dan Sunan Bayat. Dengan
                jarak antar generasi sekitar tiga puluh tahun, keberadaan peradaban di Desa Garotan diperkirakan telah
                berlangsung kurang lebih sembilan puluh tahun.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
