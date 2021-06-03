# Task Management System Backend Project

Bu proje Crosstech için Frontend uygulaması geliştirmek isteyenlere yönelik oluşturulmuştur. Projeyi kendi bilgisayarınıza klonlayıp çalıştırabilirsiniz.

Bu proje Node.JS ve Express kullanılarak basit bir RESTFul API olarak hazırlanmıştır.

Bu backend uygulaması basit bir şekilde şirketteki departmanların birbirleri arasındaki yapılması gereken işlerin takip edilmesini sağlamaktadır.
Her departmanda çalışan kullanıcılar başka bir departmanın yapmasını istediği bir işi oluşturup, o departmanın işi tamamlamasını takip edebilmektedir.
Kullanıcılar giriş yapabilir, Task oluşturup, kendi oluşturduğu Task'ları güncelleyip silebilir, çalıştığı departmana atanan Task'ları tamamlayabilir veya reddedebilirler. Aynı zamanda bir kullanıcı kendi oluşturduğu Task'ları listeleyebilir, çalıştığı departmana atanan Task'ları veya sistemde bulunan tüm Task'ları listeyelebilir.

NOT:

- Projede öntanımlı olarak gerekli veriler bulunmaktadır.
- Projede bir veritabanı bulunmamaktadır. Veriler Memory'de tutulmaktadır. Yani verilerde yapılan değişiklikler geçicidir.

## Repository Klonlama

Repository'i kendi bilgisayarınıza klonlayın.

```bash
git clone https://github.com/crosstech/crosstech-frontend-challenge-api.git
```

Aşağıdaki komut ile Npm paketlerini yükleyin.

```bash
cd crosstech-frontend-challenge-api
npm install
```

## Çalıştırma

Projeyi çalıştırmak için aşağıdaki komutu terminalinize yazın.

```bash
npm run dev
```

## Projeyi Test Etme

Projeyi test etmek ve giden/gelen verileri vs. görebilmek için Postman uygulamasını kullanabilirsiniz. Bu proje içinde yer alan "postman_collection.json" dosyasını kendi Postman uygulamanıza import ederek backend uygulamasını test edebilirsiniz.
Postman import işlemi hakkında daha fazla bilgi için [Postman Import](https://apitransform.com/how-to-import-a-collection-into-postman/)

İmport işlemi dışında yapmanız gereken herhangi bir işlem bulunmamaktadır. Test için gerekli Url, Request body, Authorization Token vs. gibi tüm ayarlamalar yapılmıştır. Doğrudan istekleri çalıştırabilirsiniz.

## Frontend Uygulaması Hakkında

Geliştirilmesi istenen Frontend uygulamasına ait detaylar için bu proje içinde bulunan "ReadMe.Challenge.md" dosyasını okuyabilirsiniz.
