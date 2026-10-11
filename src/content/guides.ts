import type { Guide } from "./guides.types";

// Publication dates describe the actual editorial release, not the time a page is built.
const publishedAt = "2026-10-10T12:00:00+03:00";

export const guides: Guide[] = [
  {
    slug: "ilk-dovme-oncesi", title: "İlk dövmeni yaptırmadan önce", seoTitle: "İlk Dövme Öncesi: Tasarım, Bölge ve Randevu",
    description: "İlk dövme için nereden başlamalı? Model seçimi, sanatçıyla görüşme, boyut ve randevu öncesi soruları sade bir rehberde buluşturduk.",
    category: "İlk dövme", artworkId: "botanik", publishedAt,
    intro: [
      "İlk dövme fikri bazen yıllarca akılda kalır, bazen bir fotoğrafla ortaya çıkar. İkisinde de aynı yere gelirsin: Ne yaptırmak istediğini az çok biliyorsundur ama bunu nasıl anlatacağını kestiremezsin. Görüşmeye bitmiş bir çizimle gelmen gerekmiyor. Bir konu, sevdiğin birkaç örnek ve dövmeyi düşündüğün bölge, konuşmaya başlamak için yeterli.",
      "Kararı kolaylaştıran şey bütün soruların cevabını tek başına bulmak değil. Hangi noktaların senin için önemli olduğunu ayırmak. Görünür olsun mu, kıyafetin altında kalsın mı, ileride başka dövmelerle birleşsin mi? Bunları konuşunca model seçimi de daha somut hale gelir."
    ],
    sections: [
      { id: "fikir", title: "Önce neyi sevdiğini anlat", paragraphs: [
        "Kaydettiğin fotoğrafların birbirine benzemesi şart değil. Birinde çizgiyi, diğerinde gölgeyi, başka birinde yalnızca yerleşimi sevmiş olabilirsin. Her görsel için kısa bir not yaz: ‘Çiçeği seviyorum ama bu kadar koyu istemiyorum’ gibi. Bu ayrım, sanatçının sana yaklaşmasını kolaylaştırır.",
        "Bir anlam arıyorsan onu da anlat. Ama sırf dövme yaptırıyorsun diye büyük bir hikâye bulmak zorunda değilsin. Sadece görüntüsünü sevdiğin bir tasarım da geçerli bir başlangıç. Beğenmediğin şeyleri söylemek, beğendiklerini söylemek kadar işe yarar."
      ] },
      { id: "portfolyo", title: "Sanatçıyı tek bir fotoğrafla seçme", paragraphs: [
        "Aynı sanatçının farklı işlerine bak. Portre düşünüyorsan yüzlerin ifadesini, geometrik bir iş düşünüyorsan çizgilerin ve tekrarların düzenini incele. Koldaki bir dövmenin yalnızca yakın planını değil, kolun bütününde nasıl durduğunu da görmeye çalış.",
        "Fotoğraftaki ışık ve kadraj sonucu etkiler. Mümkünse farklı açılar ve iyileşmiş iş örnekleri iste. ‘Bu tarz sana uygun mu?’ sorusunu doğrudan sormak, bir sanatçıdan her tarzda aynı sonucu beklemekten daha sağlıklı bir seçim yöntemi."
      ] },
      { id: "boyut", title: "Küçük olsun derken detayı da düşün", paragraphs: [
        "Telefonda büyütülmüş bir çizim, ten üzerinde aynı ayrıntıyla okunmayabilir. Küçük bir alana yüz, yazı, çiçek ve tarih sığdırmak istediğinde tasarımın sadeleşmesi gerekebilir. Boyutu yalnızca santimetre olarak değil, hangi detayların korunacağını konuşarak seç.",
        "Yerleşimi gerçek ölçekte görmek bu yüzden önemli. Tasarımın geçici yerleşimine aynada bak; kolunu normal duruşuna getir, sonra hareket ettir. Bir değişiklik istiyorsan uygulama başlamadan söyle. Kararsız kaldığında biraz daha düşünmek için zaman istemen de normal."
      ] },
      { id: "gorusme", title: "Görüşmede sorulacak birkaç iyi soru", paragraphs: [
        "Ücret ve süreyi yalnızca bir örnek fotoğraf üzerinden kesinleştirmeye çalışmak yerine tasarım, bölge ve ölçüyü birlikte paylaş. Ayrıntı miktarı ve yapılacak çizim, planı değiştirebilir. İlk konuşmada aşağıdaki konuları netleştirmen sonradan yaşanacak karışıklığı azaltır."
      ], bullets: ["Tasarım ne zaman ve nasıl birlikte değerlendirilecek?", "Tahmini süre, ücret ve randevu koşulları neler?", "Uygulama sonrası bakım talimatlarını nasıl alacağım?", "İleride aynı bölgeye ekleme düşünürsem yer bırakmalı mıyız?"] },
      { id: "randevu", title: "Randevu öncesinde belirsizliği azalt", paragraphs: [
        "Stüdyonun hazırlık ve bakım yönlendirmesini randevudan önce iste. Bölgeye kolay erişilen bir kıyafet seçmek gibi küçük ayrıntılar günü rahatlatabilir. Sağlığın, kullandığın ilaçlar veya cildinle ilgili bir tereddüdün varsa bunu saklama; kişisel uygunluk değerlendirmesini bir sağlık uzmanıyla konuş.",
        "Esenler’de Ağaçkakan Tattoo ile iletişime geçerken düşündüğün bölgeyi, yaklaşık ölçüyü ve referansları tek mesajda gönderebilirsin. Henüz model seçmediysen bunu da açıkça yaz. İlk adımın kusursuz bir tasarım değil, anlaşılır bir konuşma olması yeterli."
      ] }
    ],
    questions: [
      { question: "Görüşmeye kendi çizimimi götürmem gerekiyor mu?", answer: "Hayır. Bir fikir veya birkaç referansla başlayabilirsin. Hazır çizimin varsa paylaş; ölçüsü ve yerleşimi yine ten üzerinde değerlendirilir." },
      { question: "İlk dövmem mutlaka küçük mü olmalı?", answer: "Böyle bir zorunluluk yok. Sana uygun ölçü; tasarımın ayrıntısı, seçtiğin bölge ve istediğin görünüm birlikte düşünülerek belirlenir." }
    ],
    related: ["dovme-bolge-ve-boyut-secimi", "kisiye-ozel-dovme-tasarimi"]
  },
  {
    slug: "kisiye-ozel-dovme-tasarimi", title: "Bir fikri kişiye özel dövmeye çevirmek", seoTitle: "Kişiye Özel Dövme Tasarımı Nasıl Planlanır?",
    description: "Referans fotoğraflardan özgün dövme tasarımına: fikrini anlatma, motif seçimi, sadeleştirme ve ten üzerinde yerleşim için yol gösteren notlar.",
    category: "Tasarım", artworkId: "urban", publishedAt,
    intro: [
      "Aklında bir portre, bir kelime ve sevdiğin bir çiçek olabilir. Bunların aynı dövmede yer almasını istemek kolay; birbirleriyle nasıl duracaklarını hayal etmek daha zor. Kişiye özel tasarım, tam da bu noktada işe yarar. Farklı parçaların bir araya gelmesi kadar, hangisinin öne çıkacağına karar verilmesini de kapsar.",
      "Özgün bir dövme için daha önce hiç görülmemiş bir sembol bulman gerekmiyor. Tanıdık bir motifin ölçüsü, yönü, çevresindeki boşluk ve senin bedenindeki yeri değiştiğinde ortaya başka bir tasarım çıkabilir."
    ],
    sections: [
      { id: "referans", title: "Referansı kopya talebi gibi kullanma", paragraphs: [
        "Bir başkasının dövmesini göstermek, konuşmayı kolaylaştırır. Asıl yararlı olan, o fotoğrafta neyi beğendiğini söylemen. ‘Bu portrenin sakin ifadesi hoşuma gidiyor’ ile ‘Bunun aynısını istiyorum’ farklı taleplerdir. İlkinde sanatçıya çalışabileceği bir yön vermiş olursun.",
        "Bir iki güçlü referans çoğu zaman onlarca dağınık görselden daha açıklayıcıdır. Hepsini göstermek istersen ortak taraflarını işaretle. Koyu gölgeler mi, ince çizgiler mi, açık bir arka plan mı? Tasarım görüşmesinde bu tercihler somut kararların önünü açar."
      ] },
      { id: "ana-fikir", title: "Her parçanın aynı ağırlıkta olması gerekmiyor", paragraphs: [
        "Portre, saat ve yazıyı aynı alanda düşünelim. Üçünün de büyük ve ayrıntılı olmasını istediğinde gözün nerede duracağı belirsizleşebilir. Portre ana parça olduğunda saat onu çevreleyen bir yapı, yazı ise daha küçük bir vurgu olarak çözülebilir.",
        "Bu tercih bir motifi önemsiz yapmaz. Görseldeki ağırlığıyla senin için taşıdığı anlam aynı şey değil. Küçük bir tarih, çok büyük bir figür kadar kişisel olabilir. Tasarımı anlatırken olmazsa olmazları ve değişebilecek parçaları ayrı söyle."
      ] },
      { id: "yerlesim", title: "Çizim ten üzerinde yeniden değerlendirilir", paragraphs: [
        "Düz bir çizim, dönen bir kolun veya kıvrılan bir omzun üzerinde başka görünür. Bu yüzden iyi görünen bir tasarımın yönü ve oranı, seçilen bölgeye göre ayarlanabilir. Ana figürün dışarıdan nasıl görüleceği, eklemlere ne kadar yaklaşacağı ve kolun iç tarafına nelerin döneceği birlikte düşünülür.",
        "Yerleşimi sadece telefon ekranında onaylamakla yetinme. Gerçek ölçekte denendiğinde aynada bak ve günlük duruşunu kontrol et. Bazen birkaç santimetrelik bir kaydırma, çizimde büyük bir değişiklik yapmaktan daha fazla fark yaratır."
      ] },
      { id: "revizyon", title: "Revizyonu bir sorun gibi görme", paragraphs: [
        "İlk taslakta bir parçanın beklediğin gibi görünmemesi konuşmanın boşa gittiği anlamına gelmez. Neyi değiştirmek istediğini mümkün olduğunca açık tarif et. ‘Bir şey eksik’ yerine ‘Yazı figürün önüne geçiyor’ demek, üzerinde çalışılabilecek bir geri bildirimdir.",
        "Bazı fikirler küçültülmek yerine sadeleştirildiğinde daha iyi okunur. İki ayrı figürü tek alana sıkıştırmak yerine birini başka bir bölgeye taşımak da seçenek olabilir. Çizimin hazırlanma ve revizyon sürecini randevu öncesinde sanatçıyla netleştir."
      ] },
      { id: "mesaj", title: "İlk mesajında bunlar olsun", paragraphs: [
        "Kişiye özel dövme görüşmesi için uzun bir metin yazmana gerek yok. Aşağıdaki bilgilerle başlayan kısa bir mesaj, fikrin anlaşılması için sağlam bir temel oluşturur. Ölçüden emin değilsen ‘ön kolun dışını kaplayacak kadar’ gibi bir tarif de başlangıç olabilir."
      ], bullets: ["Ana fikir ve vazgeçmek istemediğin motifler.", "Düşündüğün bölge ve yaklaşık büyüklük.", "Referanslarda beğendiğin ve istemediğin özellikler.", "Aynı alandaki mevcut dövmeler ve ileride ekleme planın."] }
    ],
    questions: [
      { question: "Referanslarım farklı tarzlarda olabilir mi?", answer: "Olabilir. Her birinde neyi sevdiğini ayırarak anlat. Tasarımın içinde hangi dilin baskın olacağına birlikte karar vermek gerekir." },
      { question: "Bir dövmeye çok fazla anlam yüklersem hepsi sığar mı?", answer: "Her fikrin ayrı bir figür olması gerekmiyor. Bazı anlamlar küçük ayrıntılarla taşınabilir; bazıları da başka bir iş için saklandığında tasarım daha rahat okunur." }
    ],
    related: ["tam-kol-dovme-planlama", "dovme-bolge-ve-boyut-secimi"]
  },
  {
    slug: "tam-kol-dovme-planlama", title: "Tam kol dövmesine nereden başlanır?", seoTitle: "Tam Kol Dövme: Tasarım ve Seans Planlaması",
    description: "Tam kol dövmede ana figürler, geçişler, boşluklar ve mevcut dövmeler nasıl birlikte düşünülür? Omuzdan bileğe bir bütün planlamak için rehber.",
    category: "Tam kol", artworkId: "geometri", publishedAt,
    intro: [
      "Tam kol dövme, kolun her yerine sevdiğin görselleri yerleştirmekten biraz farklı bir iş. Ön tarafta güçlü duran bir figür, kol döndüğünde başka bir parçanın arkasına geçebilir. Dirsekte kesilen bir çizgi, bütün akışı değiştirebilir. Bu yüzden tek tek motiflerden önce kolun bütünü hakkında konuşmak işe yarar.",
      "Her santimetrenin aynı yoğunlukta olması gerekmiyor. Bazı bölgeler ana figürü taşır, bazıları geçişi sağlar, bazıları da açık bırakılır. Uzaktan görülen bütün ile yakından okunan ayrıntılar arasında denge kurmak, tam kol planının önemli bir parçası."
    ],
    sections: [
      { id: "ana-parcalar", title: "Önce ana parçaları ve bakış yönünü seç", paragraphs: [
        "Bir ejderha, bir portre ve bir kaplan düşünüyorsan hepsinin aynı ölçekte olması şart değil. En fazla öne çıkmasını istediğin figürü belirle. Omuz, üst kol ve ön kolun dışı farklı görünürlükler sunar; hangi parçayı günlük duruşunda daha çok görmek istediğin planı etkiler.",
        "Kolu yalnızca önden fotoğraflamak yetmeyebilir. İç, dış ve arka tarafı birlikte değerlendirmek, figürlerin birbirini nerede karşılayacağını gösterir. Sanatçıyla konuşurken kolunu normal duruşta gösteren birkaç farklı açı hazırlaman bu yüzden yararlı."
      ] },
      { id: "gecisler", title: "Aradaki alanlar sonradan doldurulacak boşluklar değil", paragraphs: [
        "Figürlerin arasındaki geçişler, tam kolun ayrı ayrı parçalar gibi görünmesini engelleyebilir. Ancak her aralığı koyu bir gölgeyle kapatmak tek çözüm değil. Açık ten alanı, çizgi yönü veya ortak bir doku da parçalar arasında bağ kurabilir.",
        "Geometrik bir kolda tekrar eden desenlerin yönü, figürlü bir kolda ise gölgelerin ve arka planın akışı önem kazanır. Birbirinden çok farklı geçişler kullanıldığında göz sık sık durur. Tasarımın sakin mi, yoğun mu görünmesini istediğini ana figürler kadar açık anlat."
      ] },
      { id: "mevcut-isler", title: "Mevcut dövmeleri en başta göster", paragraphs: [
        "Kolunda eski bir yazı veya küçük bir dövme varsa bunu planın sonuna bırakma. Korunmasını istediğin bir iş, yeni figürlerin ölçüsünü ve yönünü değiştirebilir. Bazı işler arka planla ilişkilendirilebilir; bazıları için daha ayrı bir çözüm düşünmek gerekir.",
        "Henüz tam kol yaptırmaya karar vermediysen ama ileride ekleme ihtimalin varsa bunu ilk parçadan önce söyle. Başlangıçtaki yerleşim, sonraki işler için kullanılabilecek alanı belirler. Tek bir dövmeyi seçerken bile kolun devamını düşünmek yararlı olabilir."
      ] },
      { id: "seans", title: "Seans sayısını fotoğrafa bakarak kesinleştirme", paragraphs: [
        "Aynı boydaki iki kol dövmesi aynı sürede bitmeyebilir. Figür sayısı, ayrıntı, gölge yoğunluğu ve tasarımın bölgelere dağılımı çalışma planını etkiler. ‘Kaç seansta biter?’ sorusunun cevabı, görüşmede ortaya çıkan plana dayanmalı.",
        "Toplam bütçeyi ve seansların nasıl ücretlendirileceğini de baştan konuş. Takvimi tek bir tarihe sıkıştırmak yerine sanatçının yönlendirmesiyle oluştur. Buradaki amaç hızlı bitirmek kadar, her aşamada tasarımın devamını görebilmek."
      ] },
      { id: "kontrol", title: "Planı onaylamadan önce", paragraphs: [
        "Tasarımı bütün olarak değerlendirmek için birkaç basit kontrol yapabilirsin. Sadece en sevdiğin figüre odaklanma; kolun iç tarafı ve figürlerin birleştiği yerler de sonuçta her gün taşıyacağın işin parçası olacak."
      ], bullets: ["Ana figür normal duruşta istediğim yönden görünüyor mu?", "İç kol, dirsek ve bileğe geçişler konuşuldu mu?", "Korumak istediğim mevcut işler plana dahil mi?", "Bütçe, seans düzeni ve olası eklemeler net mi?"] }
    ],
    questions: [
      { question: "Tam kolu tek seferde planlamak zorunda mıyım?", answer: "Uygulama aşamalı olabilir. Yine de hedefin tam kolsa bütünü baştan konuşmak, parçaların sonradan birbirine uyumunu kolaylaştırır." },
      { question: "Tam kolda açık ten alanı kalması normal mi?", answer: "Evet. Açık alan da tasarımın bir parçası olabilir. Ne kadar yoğunluk istediğin ve figürlerin nasıl okunacağı birlikte değerlendirilir." }
    ],
    related: ["kisiye-ozel-dovme-tasarimi", "siyah-gri-dovme-secimi"]
  },
  {
    slug: "siyah-gri-dovme-secimi", title: "Siyah-gri dövmede neye bakmalı?", seoTitle: "Siyah-Gri Dövme: Portre, Gölge ve Tasarım Seçimi",
    description: "Siyah-gri dövme seçerken yalnızca koyuluğa bakma. Portre, kontrast, açık alan ve fotoğraf değerlendirmesi üzerine anlaşılır bir rehber.",
    category: "Tarz seçimi", artworkId: "hatira", publishedAt,
    intro: [
      "Siyah-gri bir dövmenin etkisi yalnızca ne kadar koyu olduğuna bağlı değil. Bir portrenin yüz ifadesi, açık ve koyu alanların birbiriyle kurduğu ilişkiyle belirginleşir. Bir gülün yapraklarını da çoğu zaman siyah çizgiler kadar aralarında kalan açıklıklar gösterir.",
      "Bu tarzı seviyorsan ilk soru ‘Ne kadar siyah olsun?’ olabilir. Ardından şunu da düşün: İş uzaktan nasıl görünsün, yakından hangi ayrıntılar fark edilsin? İkisi için aynı kararları vermek her zaman gerekmeyebilir."
    ],
    sections: [
      { id: "kontrast", title: "Koyuluk ile kontrast aynı şey değil", paragraphs: [
        "Bir dövmenin tamamı koyu olduğunda ana figürün çevresinden ayrılması zorlaşabilir. Kontrast, figürü çevresindeki alandan ayıran açık-koyu farkıyla ilgilidir. Koyu bir arka planın önünde açık bırakılan bir yüz, oldukça güçlü bir görüntü verebilir.",
        "Referans seçerken yalnızca siyah bölgeleri değil, boş bırakılmış alanları da incele. Göz, burun ve ağız çevresindeki açıklıklar portrede önemli olabilir. Tasarımın her yerine ayrıntı eklemek yerine bazı yerleri sakin bırakmak, diğer parçaların daha kolay okunmasını sağlar."
      ] },
      { id: "portre", title: "Portrede referans fotoğrafı önem taşır", paragraphs: [
        "Portre yaptırmak istiyorsan göndereceğin fotoğrafta yüzün ayrıntılarının anlaşılması işe yarar. Çok küçük, ağır filtreli veya yüzün bir bölümünü kapatan bir fotoğraf çizim için sınırlı bilgi verir. Elinde birkaç fotoğraf varsa hepsini paylaş; hangisinin kullanılabileceğini birlikte değerlendirebilirsiniz.",
        "Sevdiğin ifade ile uygun kadraj bazen farklı fotoğraflarda olabilir. ‘Bu gülümsemeyi korumak istiyorum’ gibi bir not, yalnızca dosyayı göndermekten daha açıklayıcıdır. Tasarımda bir tarih veya yazı da olacaksa bunu aynı görüşmede belirt."
      ] },
      { id: "tarzlar", title: "Siyah-gri demek yalnızca gerçekçi portre demek değil", paragraphs: [
        "Gerçekçi figürler, çizgisel çiçekler ve geometrik desenler siyah-gri bir palette çalışılabilir; ama görsel dilleri aynı değildir. Birinde yumuşak gölgeler ön plandayken diğerinde çizgi, tekrar veya dolu siyah alanlar belirleyici olabilir.",
        "Bu nedenle ‘Siyah-gri istiyorum’ tarifine bir iki görsel ekle. Sanatçının portföyünde senin düşündüğün dile yakın işler aramak, aynı renkte ama farklı bir tarzda sonuç beklemene engel olur. Beğendiğin işin hangi tarafını sevdiğini ayrıca söyle."
      ] },
      { id: "fotograf", title: "Fotoğrafın kendisini de değerlendir", paragraphs: [
        "Bir görselin ışığı, düzenlemesi ve yakınlığı dövmenin görünüşünü değiştirebilir. Çok sert ışık altında çekilmiş bir fotoğrafla daha yumuşak ışıkta çekilen bir işi yalnızca koyuluk açısından kıyaslamak yanıltıcı olabilir.",
        "Yakın planın yanında bütün bölgeyi gösteren fotoğrafa da bak. Mümkünse iyileşmiş örnekleri sor. Ağaçkakan Tattoo galerisindeki koyu sunum tasarımın parçası; bir eseri açtığında fotoğrafı gerçek renkleriyle görebilirsin. Karar verirken bu görünümü incelemek daha açıklayıcı olur."
      ] },
      { id: "tercih", title: "Görüşmeye götürebileceğin notlar", paragraphs: [
        "Teknik terimleri bilmek zorunda değilsin. Gördüğün etkiyi gündelik bir dille tarif etmek yeterli. ‘Ana figür açık kalsın, arka plan daha koyu olabilir’ gibi bir cümle tasarım konuşmasında gayet işe yarar."
      ], bullets: ["Daha yumuşak bir görünüm mü, daha belirgin açık-koyu farkı mı?", "Portre veya figürde korunmasını istediğin ayrıntı hangisi?", "Çizgiler görünür olsun mu, gölgeler mi baskın olsun?", "Bölgenin tamamı yoğun görünsün mü, açık alanlar kalsın mı?"] }
    ],
    questions: [
      { question: "Siyah-gri dövme renkli bir dövmeden daha basit midir?", answer: "Yalnızca palete bakarak böyle bir karar verilemez. Ayrıntı, boyut, figür ve çalışma biçimi tasarımın kapsamını belirler." },
      { question: "Portre için tek fotoğraf göndermem yeterli mi?", answer: "Bir fotoğrafla başlayabilirsin. Elinde farklı açılar veya daha net örnekler varsa onları da paylaşmak ifadeyi ve ayrıntıları anlamayı kolaylaştırır." }
    ],
    related: ["dovme-bolge-ve-boyut-secimi", "kisiye-ozel-dovme-tasarimi"]
  },
  {
    slug: "dovme-bolge-ve-boyut-secimi", title: "Dövmenin yeri ve boyutu nasıl seçilir?", seoTitle: "Dövme Bölgesi ve Boyutu Nasıl Seçilir?",
    description: "Ön kol, omuz veya başka bir bölge: dövmenin boyutunu, görünürlüğünü, yönünü ve ileride yapılacak eklemeleri birlikte düşünmek için rehber.",
    category: "Yerleşim", artworkId: "aslan", publishedAt,
    intro: [
      "Aynı çizim ön kolda başka, omuzda başka görünür. Bedenin şekli, dövmenin baktığı yön ve kıyafetle ne kadar görünür olduğu tasarımın algısını değiştirir. Bu yüzden önce modeli seçip sonra rastgele bir yere yerleştirmek yerine, ikisini birlikte düşünmek daha yararlı.",
      "‘Şu kadar santimetre olsun’ iyi bir başlangıç olabilir ama son karar olmak zorunda değil. Gerçek ölçekte deneme yapıldığında tasarımı biraz büyütmek, sadeleştirmek veya başka bir yöne çevirmek isteyebilirsin."
    ],
    sections: [
      { id: "gorunurluk", title: "Günlük hayatında ne kadar görünmesini istiyorsun?", paragraphs: [
        "Dövmenin sana ve başkalarına nasıl görüneceği her bölgede farklı. Kısa kollu bir kıyafette açık kalan ön kol ile çoğu zaman kapalı kalan bir bölge aynı deneyimi sunmaz. Kararı yalnızca bir fotoğraftaki güzel açıya göre verme; günlük kıyafetlerini ve kendi tercihini düşün.",
        "Çizimin yönünü de bu sırada konuş. Yazı veya figür sen baktığında mı, karşıdan bakıldığında mı belirli bir yönde okunacak? Bunu uygulama gününe bırakmak yerine tasarım görüşmesine dahil etmek, yanlış anlaşılmayı önler."
      ] },
      { id: "oran", title: "Bölgenin şekli çizimin oranını değiştirir", paragraphs: [
        "Uzun bir ön kol alanı dikey bir kompozisyona yer açabilir. Omuzun yuvarlak yüzeyi ise genişleyen bir figür veya desen için farklı bir zemin sunar. Bu, belli bir modelin sadece tek yerde yapılabileceği anlamına gelmez; yer değiştiğinde çizimin de uyarlanması gerekebileceğini gösterir.",
        "Yerleşimi kolunu doğal tuttuğunda kontrol et. Dirseği bükmek veya omzu döndürmek, tasarımın nasıl göründüğünü değiştirebilir. Normal duruşla fotoğrafta verilen pozun aynı olmadığını akılda tutmak faydalı."
      ] },
      { id: "detay", title: "Boyutu ayrıntı miktarıyla birlikte seç", paragraphs: [
        "Bir yüzün ifadesi, ince bir yazı veya çok sayıda küçük yaprak için kullanılabilecek alan önem taşır. Büyük bir taslağı küçültmek, içindeki bütün ayrıntıların aynı açıklıkla kalacağı anlamına gelmez. Hangi parçanın korunacağına karar vermek gerekebilir.",
        "Sanatçı bir modeli büyütmeyi önerdiğinde sebebini sor. Gerekçe çizgiler arasında alan bırakmak, ana figürü daha rahat göstermek veya bölgenin oranına uymak olabilir. Daha küçük bir iş istiyorsan sadeleştirilmiş bir tasarım seçeneğini de konuşabilirsin."
      ] },
      { id: "deneme", title: "Denemede acele etme", paragraphs: [
        "Yerleşim denemesi yapıldığında sadece birkaç saniye bakıp onay vermek zorunda değilsin. Aynada bütünü gör; yakın ve uzak açıdan incele. Fotoğraf çekmek, doğrudan göremediğin bir bölgeyi değerlendirmene yardımcı olabilir ama tek ölçüt olmamalı.",
        "Biraz sağa alınmasını veya aşağı kaymasını istiyorsan söyle. Bu küçük kararlar çizimden bağımsız gibi görünse de dövmenin üzerinde nasıl duracağını doğrudan etkiler. Uygulama başlamadan önce yerleşimin içine sinmesi önemli."
      ] },
      { id: "gelecek", title: "Sonraki dövmeyi de hesaba kat", paragraphs: [
        "İleride aynı kolu büyütmek, bir yazının çevresine figür eklemek veya birkaç işi birbirine bağlamak isteyebilirsin. Henüz kesin karar vermesen de ihtimali paylaş. Bugün seçtiğin yer, yarın kullanmak isteyeceğin alanın tam ortasında olabilir.",
        "Ağaçkakan Tattoo ile görüşürken bölgenin mevcut fotoğrafını ve istediğin yaklaşık ölçüyü gönderebilirsin. Başka dövmelerin varsa onları da kadraja al. Böylece çizim tek başına değil, yerleşeceği alanla birlikte konuşulur."
      ] }
    ],
    questions: [
      { question: "Santimetre ölçüsü vermeden görüşebilir miyim?", answer: "Evet. Bölgeyi ve ne kadar yer kaplamasını istediğini tarif edebilirsin. Net ölçü, tasarımın ayrıntısı ve yerleşim denemesiyle birlikte değerlendirilebilir." },
      { question: "Bir çizim farklı bölgelerde aynen kullanılabilir mi?", answer: "Her zaman değil. Bölgenin şekli ve görünürlüğü değiştiğinde çizimin oranı, yönü veya ayrıntıları da uyarlanabilir." }
    ],
    related: ["ilk-dovme-oncesi", "tam-kol-dovme-planlama"]
  },
  {
    slug: "eski-dovme-kapatma", title: "Eski dövmeyi kapatmadan önce konuşulacaklar", seoTitle: "Dövme Kapatma: Cover-Up Öncesi Tasarım Görüşmesi",
    description: "Eski bir dövmeyi kapatırken boyut, koyuluk ve yeni model nasıl değerlendirilir? Cover-up görüşmesine hazırlanmak için somut sorular ve seçenekler.",
    category: "Dövme kapatma", artworkId: "maske", publishedAt,
    intro: [
      "Artık sevmediğin bir dövmenin yerine yeni bir iş yaptırmak isteyebilirsin. Fakat kapatma tasarımı boş bir ten üzerinde çizim yapmakla aynı başlangıç koşullarına sahip değil. Mevcut çizgiler, koyu alanlar ve dövmenin yeri yeni tasarım için sınırlar oluşturur.",
      "Bu sınırlar seçenek olmadığı anlamına gelmez. Sadece yeni modeli seçmeden önce mevcut işi doğru göstermek ve ne kadar değişikliğe açık olduğunu konuşmak gerekir. Sonucu bir fotoğraf üzerinden garanti etmek yerine, görüşmede hangi yolların mümkün olduğunu netleştirmek daha gerçekçi."
    ],
    sections: [
      { id: "fotograf", title: "Önce mevcut dövmeyi olduğu gibi göster", paragraphs: [
        "Kapatma görüşmesi için filtresiz, net bir fotoğraf hazırla. Dövmenin tamamı ve çevresindeki alan görünsün. Yalnızca en sevmediğin parçayı yakın planda çekmek, yeni tasarım için kullanılabilecek yeri göstermeyebilir. Yakın plan ile daha geniş bir kadrajı birlikte göndermek işe yarar.",
        "Ölçüyü de ekle. Fotoğraftan küçük görünen bir iş gerçekte geniş bir alan kaplıyor olabilir. Bölgenin farklı açılardan görüntüsü, özellikle kol veya omuz gibi dönen yüzeylerde daha anlaşılır bir başlangıç sağlar."
      ] },
      { id: "yeni-model", title: "Yeni model eski çizgilerden bağımsız seçilmez", paragraphs: [
        "Beğendiğin açık ve ince bir tasarım, koyu ve geniş bir eski dövmenin üzerinde aynı haliyle uygulanamayabilir. Yeni figürün yönü, gölgeleri ve dolu alanları mevcut işle birlikte düşünülür. Bazı ayrıntıların yer değiştirmesi veya tasarımın büyümesi gerekebilir.",
        "Bu yüzden tek bir modelde ısrar etmek yerine sevdiğin birkaç görsel dili paylaş. Portre mi, bitkisel bir iş mi, daha koyu bir kompozisyon mu? Sanatçı mevcut dövmeyi değerlendirdikten sonra seçeneklerin hangilerinin uygun olduğunu konuşabilir."
      ] },
      { id: "beklenti", title: "‘Hiç görünmesin’ beklentisini açıkça söyle", paragraphs: [
        "Eski işin tamamen fark edilmemesini istemek ile yeni tasarım içinde daha az dikkat çekmesini istemek farklı hedefler. Hangisini beklediğini baştan anlat. Bazı dövmelerde doğrudan kapatma uygun olmayabilir; bunu görüşmede öğrenmek, uygulama sonrasında hayal kırıklığı yaşamaktan daha iyi.",
        "Yeni işin ne kadar büyük veya koyu olabileceğini de konuş. Mevcut dövmeyi kapatmak için istemediğin ölçüde bir tasarıma razı olmak zorunda değilsin. Seçenekler sana uymuyorsa kararını ertelemek de mümkün."
      ] },
      { id: "kapatma-ve-ekleme", title: "Kapatma ile etrafına ekleme yapmayı ayır", paragraphs: [
        "Bazen sorun dövmenin kendisinden çok tek başına durmasıdır. Etrafına yeni parçalar eklemek, eski işi daha büyük bir kompozisyona dahil edebilir. Ancak bu her zaman kapatma anlamına gelmez; mevcut çizgiler görünmeye devam edebilir.",
        "Eski dövmenin hangi tarafını sevmediğini tarif et: konu mu, boyut mu, yerleşim mi, yoksa artık seni temsil etmemesi mi? Bu cevap, doğrudan kapatma ile yeniden düzenleme seçenekleri arasında daha açık bir konuşma sağlar."
      ] },
      { id: "kontrol", title: "Görüşmede netleştirilecekler", paragraphs: [
        "Kapatma işi için herkesin dövmesi aynı başlangıç noktasında değildir. Aşağıdaki soruları mevcut fotoğrafınla birlikte paylaş; tasarımın uygunluğu, tahmini kapsamı ve randevu planı o değerlendirmeye göre konuşulsun."
      ], bullets: ["Mevcut iş doğrudan kapatmaya uygun mu?", "Yeni dövme yaklaşık ne kadar büyüyebilir?", "Koyu alanlar ve ana figür nerede olacak?", "Hangi parçalar korunacak, hangileri kapatılacak?", "Sonuçtan beklediğim görünüm bu planla gerçekçi mi?"] }
    ],
    questions: [
      { question: "Her dövme başka bir dövmeyle kapatılabilir mi?", answer: "Bunu yalnızca genel bir kuralla söylemek mümkün değil. Mevcut işin boyutu, yoğunluğu ve yeri değerlendirilmeden uygun bir kapatma planı verilemez." },
      { question: "Kapatma için yeni dövme mutlaka daha büyük mü olmalı?", answer: "Daha geniş bir tasarım gerekebilir, fakat tek bir oran veya ölçü kuralı yok. Yeni işin kapsamı mevcut dövme ve seçilen model birlikte incelenerek belirlenir." }
    ],
    related: ["kisiye-ozel-dovme-tasarimi", "siyah-gri-dovme-secimi"]
  }
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getReadingMinutes(guide: Guide) {
  const text = [...guide.intro, ...guide.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.bullets ?? [])]), ...guide.questions.flatMap((item) => [item.question, item.answer])].join(" ");
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}
