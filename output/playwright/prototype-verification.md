# B yönü: üç bölümlü prototip doğrulaması

9 Ekim 2026. Önizleme: http://127.0.0.1:3002/

## Tamamlanan kapsam

- B açılışı ana sayfada ve /b adresinde.
- Beş gerçek dövme: geometrik tam kol, portre/gül/kuş, Eros, Pegasus, heykelsi kol bandı.
- Masaüstünde tek kısa bütünden detaya kaydırma sahnesi.
- Önizleme ile büyük inceleme görünümü arasında fotoğraf oranını koruyan GSAP geçişi.
- Tam fotoğraf, sınırlı detay modu, Instagram kaynak bağlantısı.
- Büyük gerçek çalışma portresi, stencil ve el detayı.
- Mobilde doğal dikey akış ve sabit randevu erişimi.

## Kontroller

Üretim derlemesi başarılı. 1440×900, 1024×768, 390×844 ve 320×667 görünüm kontrolleri yapıldı. Son sürümde dar mobil ekranın sayfa genişliği kullanılabilir ekran genişliğine eşit (305 px); masaüstünde de eşit (1425 px). Randevu bağlantısı başlangıç ekranında kalıyor.

Masaüstünde tek pin, mobilde sıfır pin var. Hareket azaltmada tüm pinler kalkıyor; başlık ve eser fotoğrafları görünür kalıyor. İlk klavye odağı görünür eser atlama bağlantısına geliyor. Eserler klavyeyle açılabiliyor; Escape ile kapanıyor; odak seçilen düğmeye dönüyor. Kapanışta body scroll kilidi kalkıyor ve pin geometrisi yenileniyor.

Kare fotoğrafın 1:1, dikey portre fotoğrafının 0.8 oranı inceleme görünümünde korunuyor. Detay modu mevcut Instagram kopyaları için 1.06-1.08 ile sınırlı. Eserler tam fotoğraf halinde de görülebiliyor.

Mobildeki başlık boşluğu, en dar ekrandaki sanatçı başlığı ve inceleme kapanışından sonra görülen taşma düzeltildi. İnceleme arka planı, alttaki sayfanın metnini okunur bir hayalet görüntü olarak bırakmıyor.

Kullanıcı tercihi doğrultusunda bu aşamada Lighthouse çalıştırılmadı. Yayınlama yapılmadı; çalışma yerel prototiptir.
