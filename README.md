# Ağaçkakan Tattoo

Seçilen B sanat yönüyle üç bölümlü parallax prototipi: açılış, seçilmiş eserler, sanatçı ve çalışma süreci. Ana sayfa ve `/b` bu prototipi gösterir. İlk aşamadaki A açılışı `/a` adresinde saklanır.

## Çalıştırma

`npm install` ardından `npm run dev`. Yerel önizleme için sunucunun gösterdiği adresi kullanın. Üretim kontrolü: `npm run build`, ardından `npm run start -- --port 3002`.

## Sanat yönü

Ten Üzerinde Heykel. Karanlık tek tema, nötr palet, keskin köşeler, yerel Barlow Condensed başlıklar. DESIGN_VARIANCE: 9, MOTION_INTENSITY: 6, VISUAL_DENSITY: 3. Özel CSS ve Next.js kullanılır. Kaydırmaya bağlı hareket native CSS view timeline ile, desteklemeyen tarayıcılarda görünür öğeleri izleyen hafif bir DOM güncellemesiyle sağlanır.

## Sahne akışı

- Açılış: gerçek çalışma fotoğrafı ilk kareden görünür. Başlık ve destek metni kısa bir girişle yerleşir.
- Geometrik tam kol: tam fotoğrafı korunarak doğal kaydırma içinde hafifçe hareket eder. Hiçbir sahne sabitlenmez. Mobilde hareket azalır; hareket azaltma tercihinde kapatılır.
- Eser inceleme: fotoğraf önizlemeden büyük görünüme aynı oranı koruyarak taşınır. Fotoğraf, görünüm seçimi olmadan bütünüyle sunulur. Kapatırken seçilen esere geri döner. Escape ve klavye odağı desteklenir.
- Sanatçı: çalışma portresi, stencil yerleşimi ve ellerin yakın planı ayrı görsel ölçeklerde sunulur.

## İçerik değişimi

Görsel yolları, gerçek boyutlar, açıklamalar, kaynak bağlantıları, odak noktaları ve yakınlaşma sınırları `src/content/site.ts` dosyasında tutulur. Yeni malzeme geldiğinde bu kayıtları değiştirin. Logolar orijinaldir. Sanatçı fotoğrafları etkinlik çekimleridir; stüdyo iç mekânı olarak sunulmaz.

Galeri, kullanıcının sağladığı dokuz orijinal eser fotoğrafından oluşur. CSS ile koyu siyah-beyaz sunum uygulanır; hover ve klavye odağında orijinal renk katmanı açılır. İnceleme görünümü her zaman gerçek renkleri gösterir. Görsel dosyaları değiştirilmez. Detay ölçekleri fotoğraf çözünürlüğüne göre 1.10-1.25 aralığındadır. Yeni fotoğraflara doğrulanmamış Instagram gönderi bağlantıları eklenmez.

Randevu bağlantıları doğrulanmış Instagram profiline gider. Mobilde sabit randevu erişimi vardır. Önizleme arama motorlarına kapalıdır; yayınlama öncesinde metadata güncellenmelidir.

## Doğrulama

Masaüstü ve mobil ekran görüntüleri `output/playwright/` klasöründedir. Kullanıcının isteği doğrultusunda bu aşamada Lighthouse ölçümü yapılmaz; odak kompozisyon, çalışan etkileşim, kaydırma ve erişilebilirliktir.
# agackakan.tattoo


## SEO ve yayın yapılandırması

Next.js Metadata API ile başlık, açıklama, canonical, Open Graph ve Twitter kartları sunucuda üretilir. `/opengraph-image` stüdyo görsellerinden 1200 × 630 paylaşım kartı oluşturur. Ana sayfanın JSON-LD verisi stüdyo adresini, telefonu, sanatçıyı ve eser görsellerini tanımlar. `/robots.txt` ve `/sitemap.xml` Next.js metadata rotalarıdır; sitemap yalnızca ana sayfayı ve eser görsellerini içerir. Tasarım alternatifleri `/a` ve `/b` her ortamda `noindex` kullanır.

Yayın öncesinde `.env.example` dosyasını temel alarak sunucu ortam değişkenlerini ayarlayın:

- `SITE_URL`: HTTPS dahil gerçek yayın alan adı; alt yol, sorgu veya fragment içermemeli. Bu değer **üretim derlemesinden önce** tanımlanmalıdır.
- `SEO_INDEXABLE=false`: test/staging ortamlarını indekslemeye kapatır. Yerel adresler ve Vercel preview ortamları otomatik olarak kapalıdır. Üretimde gerçek `SITE_URL` ile bu değer `true` olmalıdır.
- `GOOGLE_SITE_VERIFICATION` ve `BING_SITE_VERIFICATION`: isteğe bağlı site sahipliği doğrulama kodları; HTML etiketinin tamamını değil, content değerini kullanın.

Değişkenler güncellendiğinde tekrar `npm run build` çalıştırın. Alan adı ayarlanmadan yapılan derleme yerel önizleme adresini kullanır ve indekslemeye kapalı kalır. Yayın sonrasında Search Console ve Bing Webmaster Tools üzerinden siteyi doğrulayın ve `/sitemap.xml` adresini gönderin. Adres/telefon veya eser değişiklikleri `src/content/site.ts` ve `src/content/seo.ts` içinde tutarlı güncellenmelidir. Doğrulanmamış değerlendirme, çalışma saati veya konum koordinatı yapılandırılmış veriye eklenmez.
