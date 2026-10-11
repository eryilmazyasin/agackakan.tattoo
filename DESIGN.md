# Tasarım bağlamı

Bu proje bir dövme sanatçısının portföyü ve yerel stüdyo sitesidir. Ana sayfanın fotoğraf odaklı sanat yönü korunur; yönetim paneli veya ürün uygulaması kalıpları kullanılmaz.

## Görsel kararlar

- Renklerin ve tipografinin gerçek kaynağı `src/app/globals.css`: koyu `--surface`, açık `--text`, ikincil `--muted`, ayrımlarda `--line`.
- Başlıklarda yerel Barlow Condensed, açıklama ve uzun yazılarda Arial/Helvetica. Yeni bir font veya bağımsız renk sistemi eklenmez.
- Orijinal eser fotoğrafları kullanılır. Fotoğraflar mevcut portföye bağlıdır; doğrulanmamış sonuç veya stüdyo iç mekânı gibi sunulmaz.
- Rehber listesi çerçevesiz editoryal bir düzendir. Yazı gövdesi 65 karakter genişliğinde, masaüstünde 17px ve mobilde 16px, 1.85 satır aralığıyla okunur.
- Mobilde tek sütun; içerik başlıklarına erişim, ilgili yazılar ve gerçek iletişim bağlantıları korunur.
- Ana sayfada yeni blog vitrini bulunmaz; rehber ayrı rotalarda, footer bağlantısıyla erişilir.
- Portföyün girişinde bölüm başlığı ve fotoğrafı inceleme yönlendirmesi bulunur; asimetrik eser yerleşimi korunur. Dokunmatik ekranlarda fotoğrafların orijinal tonları doğrudan görünür.
- Ortak footer, gerçek stüdyo adresini ve yol tarifini sunar. WhatsApp, telefon ve Instagram bağlantıları İletişim başlığı altında aynı düzende yer alır; başa dönüş bağlantısı bulunmaz.
- Footer masaüstünde 1440px ile sınırlı iki sütundur: solda başlık ve adres, sağda üstten hizalı iletişim bağlantıları. Mobilde tek sütuna geçer; başlık ölçeği ve bağlantı aralıkları kompakt tutulur.
- Kaydırma çubuğu renkleri `--scrollbar-thumb` ve `--scrollbar-hover` üzerinden ortak tanımlanır. Azaltılmış hareket tercihinde yumuşak kaydırma ve dekoratif hareketler kapatılır.
- Video yalnızca görünürken oynar; ziyaretçi otomatik oynatmayı kapatabilir. Bu tercih sayfa içindeki kaydırmalarda korunur, azaltılmış hareket tercihi her zaman önceliklidir.

## İçerik tonu

Doğal, doğrudan Türkçe. Okuyucuya ‘sen’ diye hitap edilir. Somut sorular ve örnekler kullanılır. Anahtar kelime tekrarı, sıralama garantisi, uydurma sanatçı alıntısı, doğrulanmamış uzman incelemesi ve sağlık tavsiyesi eklenmez.

## Doğrulama sınırları

Next.js üretim derlemesi ve gerçek tarayıcı kontrolleri uygulanır. Galeri düğmeleri `PortfolioExperience` üzerinden üst öğeye bağlı olay işleyicisiyle çalışır; statik affordance taraması bu mevcut olay delegasyonunu algılamaz. Yeni rehber alanında tüm eylemler gerçek bağlantılardır.
