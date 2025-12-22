import { Card, CardContent } from "@/components/ui/card"

const landmarks = [
  {
    name: "Jalan Eyang Patuh",
    description: "Jalan utama yang dinamai menurut pendiri pertama desa",
    icon: "🛤️",
  },
  {
    name: "Jalan Joyokarto",
    description: "Jalan bersejarah yang menghubungkan pemukiman",
    icon: "🏘️",
  },
  {
    name: "Jalan Empu Gandring",
    description: "Dinamai sesuai tokoh legendaris dalam cerita rakyat",
    icon: "⚔️",
  },
  {
    name: "Jalan Onggo (Mbah Onggo)",
    description: "Menghormati tokoh yang berperan dalam pembentukan desa",
    icon: "🏛️",
  },
  {
    name: "Jalan Menggolo (Mbah Suro)",
    description: "Jalan bersejarah dengan nama alternatif lokal",
    icon: "🌾",
  },
  {
    name: "Al-Qur'an 30 Juz Tulisan Tangan",
    description:
      "Kitab suci warisan turun-temurun dari generasi kedua (Mbah Kartodikromo). Karena memiliki banyak istri, Mbah Jenggot hanya memperoleh peninggalan berupa Al-Qur'an tulisan tangan ini.",
    icon: "📖",
    special: true,
  },
]

export function LandmarksSection() {
  return (
    <section id="landmarks" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Jejak Sejarah</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Jejak sejarah leluhur Desa Garotan masih tercermin pada penamaan jalan-jalan dan peninggalan bersejarah yang
            tetap dijaga hingga kini.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landmarks.map((landmark, index) => (
              <Card
                key={index}
                className={`transition-all hover:shadow-lg ${
                  landmark.special ? "md:col-span-2 lg:col-span-3 bg-primary/5 border-primary" : ""
                }`}
              >
                <CardContent className={`p-6 ${landmark.special ? "md:p-8 text-center" : ""}`}>
                  <div className="text-4xl mb-4">{landmark.icon}</div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{landmark.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{landmark.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-card">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold mb-4">Luas Wilayah Desa</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Secara administratif, luas wilayah kepemilikan Desa Garotan tercatat sekitar{" "}
                  <strong className="text-foreground">83 hektar</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Wilayah ini mencakup lahan persawahan, tegalan, tanah makam, masjid, serta fasilitas umum lainnya yang
                  menopang kehidupan masyarakat desa.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
