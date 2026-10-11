# Rehber yayın notları

Altı yazı özgün Türkçe içeriktir. Yaklaşık 480–510 kelimelik gövdeler, beş ana bölüm, iki kısa soru-cevap ve iki ilgili yazı bağlantısı içerir. Yazılar `src/content/guides.ts` içinde tutulur; tipler ayrı dosyadadır. Yeni yazı aynı yapıyla eklenince rehber listesi, statik sayfa üretimi ve site haritası genişler.

## Araştırma ve kapsam

- https://www.threekingstattoo.com/faq — danışma öncesi soruları ve süreci açıklayan içerik yapısı incelendi. Stüdyoya özgü ücret, kapora veya randevu kuralları alınmadı.
- https://www.bangbangforever.com/ — gerçek portföyle sanatçı/tarz seçimini ilişkilendiren yapı incelendi. Metin veya sanatçı ifadeleri aktarılmadı.
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content — okuyucuya fayda sağlayan, somut ve konu odaklı yazılar.
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable — footer, liste ve ilgili yazılar üzerinden gerçek HTML bağlantıları.
- https://developers.google.com/search/docs/appearance/structured-data/article — görünen içerikle tutarlı BlogPosting bilgileri.
- https://developers.google.com/search/docs/appearance/structured-data/breadcrumb — yazı sayfalarının içerik yolu.
- Kurulu Next.js paketinin Metadata API, dinamik rotalar, generateStaticParams ve sitemap kılavuzları uygulama öncesinde okundu.

## Yayın ve bakım

Yazar adı stüdyo olarak verilir; Barış Çakmak’ın bu yazıları kişisel olarak yazdığı veya incelediği iddia edilmez. Görseller portföy örnekleridir; cover-up sonucu olarak etiketlenmez. Sağlık, bakım tedavisi, seans sayısı veya ücret konusunda doğrulanmamış kesinlik kullanılmaz.

İlk yayın tarihi sabittir; her derlemede yeni tarih üretilmez. Yazıda gerçek editoryal değişiklik yapıldığında `updatedAt` alanı eklenip metadata ve sitemap tarihleri buna bağlanmalıdır. Varsayılan alan adı `https://agackakantattoo.com`; `SITE_URL` ile değiştirilebilir. Geliştirme ve Vercel preview noindex kalır.

## Kontroller

- Üretim derlemesi başarılı; altı yazı statik üretiliyor.
- Altı rota 200, geçersiz yazı 404. Her yazıda tek H1, ayrı başlık/açıklama/canonical ve doğru paylaşım görseli mevcut.
- BlogPosting ve BreadcrumbList JSON-LD geçerli JSON olarak okundu. İçindekiler bağlantılarının hedefleri mevcut.
- Mobil yazı sayfasında yatay taşma yok; masaüstü liste ve mobil yazı ekran görüntüleri incelendi.
- `premium-audit.json` iki mevcut galeri düğmesini işaretliyor. Düğmeler `PortfolioExperience` olay delegasyonu üzerinden çalışıyor; rehber alanında bu bulgular bulunmuyor. Bu yanlış pozitifler nedeniyle mevcut galeri davranışı değiştirilmedi.
