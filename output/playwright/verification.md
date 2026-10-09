# Birinci aşama doğrulaması

9 Ekim 2026. Üretim önizlemesi: http://127.0.0.1:3002

- Next.js üretim derlemesi başarılı; üç sayfa statik üretildi.
- A ve B, 1440×900, 1024×768, 390×844 ve 320×667 boyutlarında kontrol edildi.
- Yatay taşma yok; randevu bağlantıları başlangıç ekranında erişilebilir.
- En dar B kompozisyonunda detay karesi randevu metninden uzaklaştırıldı.
- Hareket azaltmada başlık ve destek içeriği görünür, transform uygulanmıyor.
- Klavye odağı görünür. Sistem açık tema tercihinde brief’in karanlık teması korunuyor.
- Orijinal logolar kullanıldı. Sanatçı görselleri etkinlik çalışmaları olarak açıklanıyor.
- Başlık fontu Türkçe ve Latin alfabelerini içeren 10 KB yerel WOFF2 dosyasına indirildi.

## Lighthouse mobil laboratuvar sonuçları

| Tasarım | Performans | Erişilebilirlik | En iyi uygulamalar | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- |
| A | 98 | 100 | 100 | 2,4 sn | 0 | 10 ms |
| B | 94 | 100 | 100 | 3,1 sn | 0 | 10 ms |

B'nin yavaş mobil simülasyonundaki LCP ölçümü 2,5 saniye hedefinin üzerinde. Alan verisi yok; gerçek INP ölçülmedi. Raporlar JSON olarak bu klasörde. Sonraki prototipte görsel yükleme ve render gecikmesi yeniden ele alınmalı.

## Kapsam

Yalnızca iki açılış ve karşılaştırma sayfası tamamlandı. Portfolyo inceleme etkileşimi, kaydırma sahneleri ve sanatçı bölümü yön seçildikten sonra geliştirilecek.
