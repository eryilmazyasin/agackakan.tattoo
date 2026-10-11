# Tasarım bağlamı

Bu proje bir dövme sanatçısının portföyü ve yerel stüdyo sitesidir. Ana sayfanın fotoğraf odaklı sanat yönü korunur; yönetim paneli veya ürün uygulaması kalıpları kullanılmaz.

## Görsel kararlar

- Renklerin ve tipografinin gerçek kaynağı `src/app/globals.css`: koyu `--surface`, açık `--text`, ikincil `--muted`, ayrımlarda `--line`.
- Başlıklarda yerel Barlow Condensed, açıklama ve uzun yazılarda Arial/Helvetica. Yeni bir font veya bağımsız renk sistemi eklenmez.
- Orijinal eser fotoğrafları kullanılır. Fotoğraflar mevcut portföye bağlıdır; doğrulanmamış sonuç veya stüdyo iç mekânı gibi sunulmaz.
- Rehber listesi çerçevesiz editoryal bir düzendir. Yazı gövdesi 65 karakter genişliğinde, masaüstünde 17px ve mobilde 16px, 1.85 satır aralığıyla okunur.
- Mobilde tek sütun; içerik başlıklarına erişim, ilgili yazılar ve gerçek iletişim bağlantıları korunur.
- Ana sayfada yeni blog vitrini bulunmaz; rehber ayrı rotalarda, footer bağlantısıyla erişilir.

## İçerik tonu

Doğal, doğrudan Türkçe. Okuyucuya ‘sen’ diye hitap edilir. Somut sorular ve örnekler kullanılır. Anahtar kelime tekrarı, sıralama garantisi, uydurma sanatçı alıntısı, doğrulanmamış uzman incelemesi ve sağlık tavsiyesi eklenmez.

## Doğrulama sınırları

Next.js üretim derlemesi ve gerçek tarayıcı kontrolleri uygulanır. Galeri düğmeleri `PortfolioExperience` üzerinden üst öğeye bağlı olay işleyicisiyle çalışır; statik affordance taraması bu mevcut olay delegasyonunu algılamaz. Yeni rehber alanında tüm eylemler gerçek bağlantılardır.
