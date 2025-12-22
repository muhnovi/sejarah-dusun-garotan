import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export function LegendsSection() {
  return (
    <section id="legends" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Cerita & Kepercayaan Lokal</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Kisah-kisah yang diwariskan secara turun-temurun menjadi bagian dari kekayaan budaya dan sejarah lisan Desa
            Garotan.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl flex items-start gap-3">
                <span className="text-3xl">🏔️</span>
                <span>Perpindahan dari Klaten</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Eyang Patuh melarikan diri dari wilayah Klaten akibat intimidasi pemerintah kolonial Belanda. Masa ini
                terkait dengan perjuangan tokoh Samber Nyowo (Raden Said).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Banyak keluarga keturunan Majapahit yang berpindah ke wilayah Gunungkidul karena kondisi geografisnya
                yang tandus, berbukit, dan panas, sehingga sulit dijangkau penjajah.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl flex items-start gap-3">
                <span className="text-3xl">📜</span>
                <span>Masa Kerja Paksa di Lampung</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Dalam perjalanan sejarahnya, leluhur Mbah Jenggot pernah mengalami masa sebagai tenaga kerja paksa di
                Lampung pada era penjajahan. Al-Qur'an tulisan tangan 30 juz yang berasal dari Mbah Kartodikromo
                kemudian diwariskan kepada generasi berikutnya sebagai peninggalan utama, menjadi simbol ketahanan
                spiritual di masa sulit.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl flex items-start gap-3">
                <span className="text-3xl">🚧</span>
                <span>Pembangunan Infrastruktur Kolonial</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Pada masa kolonial, pemerintah Belanda membuka akses jalan dengan cara peledakan menggunakan mortir.
                Bukti keterkaitan dengan wilayah utara, khususnya Klaten, dapat dilihat dari banyaknya tokoh dan garis
                keturunan yang berasal dari daerah tersebut.
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
              <CardTitle className="font-serif text-2xl flex items-start gap-3">
                <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0" />
                <span>Sengketa Tanah Garotan-Widoro</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Dalam sejarah wilayah, terdapat kisah mengenai sengketa batas tanah antara leluhur dari Garotan dan
                leluhur dari Widoro. Sengketa tersebut berkaitan dengan sebidang tanah yang lokasinya tidak jauh dari
                Garotan, dengan kondisi lahan yang tidak terlalu luas dan kurang subur.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Secara turun-temurun berkembang kepercayaan bahwa keturunan Garotan dan Widoro hingga tujuh generasi
                yang menjalin hubungan pernikahan akan mengalami perceraian, baik semasa hidup maupun setelah meninggal,
                atau salah satu pihak mengalami gangguan kejiwaan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Catatan lisan menyebutkan bahwa telah terjadi puluhan kasus serupa, termasuk pernikahan antara warga
                Garotan dan Widoro yang terjadi di Sumatra, yang berakhir dengan perceraian saat anak mereka masih
                berusia taman kanak-kanak.
              </p>
              <div className="bg-background border border-border rounded-lg p-4 mt-4">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  <strong className="text-foreground not-italic">Catatan:</strong> Pada masa kini, sebagian masyarakat
                  memandang fenomena tersebut sebagai kemungkinan akibat sugesti turun-temurun, yang bersumber dari
                  sumpah atau janji leluhur yang diyakini berlaku hingga tujuh keturunan.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
