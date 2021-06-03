# Task Management System

Bu proje Node.JS ile hazırlanmış basit bir RESTful API'dır.

Sizden; Task Management System adlı bu backend projesi için React kullanarak basit bir SPA(Single Page Application) Frontend uygulaması geliştirmenizi bekliyoruz.

## Değerlendirme Kriterleri

1. React'i ve konseptlerini kullanabilme becerisi
2. Component tabanlı UI geliştirme becerisi
3. State yönetim becerisi
4. RESTFul API iletişim becerisi
5. Javascript kullanım becerisi
6. CSS kullanım becerisi
7. Okunabilir kod yazma becerisi
8. Basit ve anlaşılabilir UI tasarımı becerisi
9. Responsive UI geliştirme becerisi

## Kurallar

1. Geliştireceğiniz uygulama React tabanlı olmak zorundadır.
2. State yönetimi için bir araç kullanmanız gerekmektedir. Örneğin; Mobx, Redux
3. İsterseniz bir UI kütüphanesi kullanabilirsiniz. Örneğin; FabricUI, Material UI
4. Http Client olarak bir araç kullanabilirsiniz. Örneğin; Axios
5. İsterseniz CSS Preprocessor'lar kullanabilirsiniz. Örneğin; Sass, Less
6. İsterseniz Typescript kullanabilirsiniz.

&nbsp;
&nbsp;

## Backend Uygulaması

Bu backend uygulaması basit bir şekilde şirketteki departmanların birbirleri arasındaki yapılması gereken işlerin takip edilmesini sağlamaktadır.
Her departmanda çalışan kullanıcılar başka bir departmanın yapmasını istediği bir işi oluşturup, o departmanın işi tamamlamasını takip edebilmektedir.
Kullanıcılar giriş yapabilir, Task oluşturup kendi oluşturduğu Task'ları güncelleyebilir, kendi oluşturduğu Task'ları silebilir, çalıştığı departmana atanan Task'ları tamamlayabilir veya reddedebilirler. Aynı zamanda bir kullanıcı kendi oluşturduğu Task'ları listeleyebilir, çalıştığı departmana atanan Task'ları veya sistemde bulunan tüm Task'ları listeyelebilir.

NOT:

- Projede öntanımlı olarak gerekli veriler bulunmaktadır.
- Projede bir veritabanı bulunmamaktadır. Veriler Memory'de tutulmaktadır. Yani verilerde yapılan değişiklikler geçicidir.

&nbsp;
&nbsp;

### Backend Uygulamasını Test Etmek

Backend uygulamasını test etmek ve giden/gelen verileri vs. görebilmek için Postman uygulamasını kullanabilirsiniz. Bu proje içinde yer alan "postman_collection.json" dosyasını kendi Postman uygulamanıza import ederek backend uygulamasını test edebilirsiniz.
Postman import işlemi hakkında daha fazla bilgi için [Postman Import](https://apitransform.com/how-to-import-a-collection-into-postman/)

Import işlemi dışında yapmanız gereken herhangi bir işlem bulunmamaktadır. Test için gerekli Url, Request body, Authorization Token vs. gibi tüm ayarlamalar yapılmıştır. Doğrudan istekleri çalıştırabilirsiniz.

&nbsp;
&nbsp;

### Var Olan Kullanıcılar

2 adet kullanıcı vardır;

Mary Glenn;

- İsim: Mery Glenn
- Departman: İnsan Kaynakları Departmanı
- Title: İnsan Kaynakları Uzmanı
- Email: mary@company.com

John Doe;

- İsim: John Doe
- Departman: Satış Departmanı
- Title: Satış Departmanı Müdürü
- Email: john@company.com

Bu kişilerden biri ile sisteme Login olmalısınız. Login olurken bu kişilere ait mail adreslerini kullanmalısınız.

&nbsp;
&nbsp;

### Var Olan Departmanlar

3 adet departman vardır;

- İnsan Kaynakları Departmanı = 1
- Satış Departmanı = 2
- Pazarlama Departmanı = 3

Bu veriler Number tipinde Task'a ait "AssignedDepartment" property verisi olarak kullanılmaktadır.

&nbsp;
&nbsp;

### Task Durumları

3 adet Task Status vardır;

- Pending = 1
- Completed = 2
- Rejected = 3

Bu veriler Number tipinde Task'a ait "Status" property verisi olarak kullanılmaktadır.

&nbsp;
&nbsp;

## Geliştirilecek Frontend Uygulamasında Bulunması Gereken Özellikler

1. Kullanıcı sisteme Email bilgisi ile giriş yapabilmelidir.
2. Kullanıcı sistemdeki tüm Task'ları listeleyebilmelidir.
3. Kullanıcı kendi oluşturduğu tüm Task'ları listeleyebilmelidir.
4. Kullanıcı çalıştığı departmana atanan Task'ları listeleyebilmelidir.
5. Kullanıcı herhangi bir Task'ın detayını görüntüleyebilmelidir.
6. Kullanıcı istediği departmana yeni bir Task oluşturabilmelidir.
7. Kullanıcı kendi oluşturduğu Task'ı güncelleyebilmelidir.
8. Kullanıcı kendi oluşturduğu Task'ı silebilmelidir.
9. Kullanıcı çalıştığı departmana atanan bir Task'ı tamamlayabilmelidir.
10. Kullanıcı çalıştığı departmana atanan bir Task'ı reddedebilmelidir.

&nbsp;
&nbsp;

## İş Kuralları

1. Bir kullanıcı sadece kendi oluşturduğu Task'ı güncelleyebilmeli ve/veya silebilmelidir.
2. Bir kullanıcı sadece çalıştığı departmana atanan Task'ları tamamlayabilmeli ve/veya reddedebilmelidir.
3. Bir kullanıcı uygulama arayüzünde sadece yetkisi olan işler için olan butonları görebilmelidir. Örneğin; Task Tamamlama.

&nbsp;
&nbsp;

## Özelliklerin Implementasyonu

Özelliklerin implentasyonuna geçmeden önce aşağıdaki adımları yaptığınızdan emin olun.

- Backend uygulamasını bilgisayarınıza indirmiş ve çalıştırmış olmalısınız. Bilgi için projedeki "ReadMe.md" dosyasını kullanabilirsiniz.
- Proje içindeki "postman_collection.json" dosyasını kendi Postman uygulamanıza import etmiş olmalısınız.

&nbsp;
&nbsp;

### 1: Kullanıcı sisteme Email bilgisi ile giriş yapabilmelidir

Bu özelliğin sağlanabilmesi için kullanıcıların sisteme giriş yapabilmesi gerekmektedir. Giriş yaparken sadece email adresi kullanılacaktır. Sistemin basit olması için şifre kullanılmamıştır.

NOT:

- Postman Collection'da "Login" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.

Http "POST" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/auth/login
```

Gönderilmesi gereken request verisi aşağıdaki gibi olmalıdır.

```json
{
    "email":"mary@company.com"
}
```

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "loginSuccess",
    "payload": {
        "id": 1001,
        "name": "Mary Glenn",
        "email": "mary@company.com",
        "department": 1,
        "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDEsImdpdmVuTmFtZSI6Ik1hcnkgR2xlbm4iLCJkZXBhcnRtZW50IjoxLCJpYXQiOjE2MjI3MDgwMzksImV4cCI6MTYyMjc5NDQzOX0.pSLfktF-VMsMydFsCl0zNkMMX3XvTHbyXH5Rexd-cmc"
    }
}
```

Bu bilgileri gerektiğinde uygulama içinde kullanabilmek için saklamalısınız.
Örneğin; bir kullanıcının bir Task'ı onaylayap onaylayamacağını kontrol etmek için bu verinin içindeki kullanıcın ait olduğu departmanı belirten "department" bilgisi ile herhangi bir Task'a ait "AssignedDepartment" bilgisini karşılaştırabilirsiniz. Eğer veriler aynı ise kullanıcı bu Task'ı onaylayabilme veya reddedebilme yetkisine sahip olduğunu anlayabilirsiniz.

Önemli: Response verisinde bulunan "jwtToken" verisi, bundan sonraki tüm isteklerde backend'e iletilmelidir. Aksi takdirde tüm istekler "401 UnAuthorized" hatası verecektir.
Backend'e Authorization Http Header olarak Bearer Token şeklinde iletilmesi gerekmektedir.

```bash
Authorization: Bearer eyJhbGciOiJI.........LUEzyFypE
```

Bu token verisi backend'de kullanıcının tanınmasına imkan verecektir.

JWT Token'lar hakkında daha fazla bilgi için; [JWT Nedir ?](https://tugrulbayrak.medium.com/jwt-json-web-tokens-nedir-nasil-calisir-5ca6ebc1584a)

En çok kullanılan http client'lardan biri olan Axios'da JWT token kullanımı için; [Axios Default Headers](https://stackoverflow.com/a/44534672)

&nbsp;
&nbsp;

### 2: Kullanıcı sistemdeki tüm Task'ları listeleyebilmelidir

Bu özelliğin sağlanabilmesi için aşağıda belirtilen şekilde backend uygulamasına istek yapılmalıdır.
Elde edilen veriler uygun bir şekilde uygulamayı kullanan kişiye liste olarak gösterilmelidir.

NOT:

- Postman Collection'da "GetAll" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.
- Bu işlemi yapabilmek için Login sonucunda elde edilen JWT Token, bu istekte Authorization Http Header'ine Bearer olarak eklenmelidir.

Http "GET" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/task
```

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "allTasksSuccess",
    "payload": [
        {
            "id": 8054,
            "title": "Department Employee List",
            "description": "Please send Sales Department Employee List us via email, Thanks.",
            "status": 0,
            "assignedDepartment": 1,
            "user": {
                "name": "John Doe",
                "id": 2002
            }
        },
        {
            "id": 4381,
            "title": "Product Price List",
            "description": "We need to Product Price List in this week, Thanks",
            "status": 0,
            "assignedDepartment": 2,
            "user": {
                "name": "Mary Glenn",
                "id": 1001
            }
        }
    ]
}
```

Payload içinde Task'lardan oluşan bir nesne dizisi bulunmaktadır.

&nbsp;
&nbsp;

### 3: Kullanıcı kendi oluşturduğu tüm Task'ları listeleyebilmelidir

Bu özelliğin sağlanabilmesi için aşağıda belirtilen şekilde backend uygulamasına istek yapılmalıdır.
Elde edilen veriler uygun bir şekilde uygulamayı kullanan kişiye liste olarak gösterilmelidir.

NOT:

- Postman Collection'da "GetMyTasks" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.
- Bu işlemi yapabilmek için Login sonucunda elde edilen JWT Token, bu istekte Authorization Http Header'ine Bearer olarak eklenmelidir.

Http "GET" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/task/my-tasks
```

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "myTasksSuccess",
    "payload": [
        {
            "id": 4381,
            "title": "Product Price List",
            "description": "We need to Product Price List in this week, Thanks",
            "status": 0,
            "assignedDepartment": 2,
            "user": {
                "name": "Mary Glenn",
                "id": 1001
            }
        }
    ]
}
```

Payload içinde Task'lardan oluşan bir nesne dizisi bulunmaktadır.

&nbsp;
&nbsp;

### 4: Kullanıcı çalıştığı departmana atanan Task'ları listeleyebilmelidir

Bu özelliğin sağlanabilmesi için aşağıda belirtilen şekilde backend uygulamasına istek yapılmalıdır.
Elde edilen veriler uygun bir şekilde uygulamayı kullanan kişiye liste olarak gösterilmelidir.

NOT:

- Postman Collection'da "GetPendingTasks" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.
- Bu işlemi yapabilmek için Login sonucunda elde edilen JWT Token, bu istekte Authorization Http Header'ine Bearer olarak eklenmelidir.

Http "GET" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/task/pendings
```

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "pendingTasksSuccess",
    "payload": [
        {
            "id": 8054,
            "title": "Department Employee List",
            "description": "Please send Sales Department Employee List us via email, Thanks.",
            "status": 0,
            "assignedDepartment": 1,
            "user": {
                "name": "John Doe",
                "id": 2002
            }
        }
    ]
}
```

Payload içinde Task'lardan oluşan bir nesne dizisi bulunmaktadır.

&nbsp;
&nbsp;

### 5: Kullanıcı herhangi bir Task'ın detayını görüntüleyebilmelidir

Bu özelliğin sağlanabilmesi için aşağıda belirtilen şekilde backend uygulamasına istek yapılmalıdır.
Elde edilen veriler uygun bir şekilde uygulamayı kullanan kişiye gösterilmelidir.

NOT:

- Postman Collection'da "GetTask" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.
- Bu işlemi yapabilmek için Login sonucunda elde edilen JWT Token, bu istekte Authorization Http Header'ine Bearer olarak eklenmelidir.

Http "GET" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/task/8054
```

URL'in bulunan "8054" numarası bir Task'ın Id'sidir. Bu numarayı detayını getirmek istediğiniz Task'a ait Id bilgisi ile değiştirin.

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "getTaskSuccess",
    "payload": {
        "id": 8054,
        "title": "Department Employee List",
        "description": "Please send Sales Department Employee List us via email, Thanks.",
        "user": {
            "id": 2002,
            "name": "John Doe"
        },
        "assignedDepartment": 1,
        "status": 0,
        "logs": [
            {
                "userName": "John Doe",
                "action": "Created",
                "date": "2021-06-02T09:18:41.815Z"
            }
        ]
    }
}
```

Payload içinde bir Task nesnesi bulunmaktadır.
Task nesnesi içinde bulunan:

- Status; Task'ın durumunu göstermektedir.
- AssignedDepartment: Task'ın atandığı departmanı belirtmektedir.
- Log'lar; bu Task'a yapılan işlemleri göstermektedir.
- User; Task'ı oluşturan kullanıcıya ait bilgileri göstermektedir.

&nbsp;
&nbsp;

### 6: Kullanıcı istediği departmana yeni bir Task oluşturabilmelidir

Bu özelliğin sağlanabilmesi için kullanıcıların aşağıda bulunan verileri backend'e iletmesi gerekmektedir.

NOT:

- Postman Collection'da "CreateTask" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.
- Bu işlemi yapabilmek için Login sonucunda elde edilen JWT Token, bu istekte Authorization Http Header'ine Bearer olarak eklenmelidir.

Http "POST" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/task
```

Gönderilmesi gereken request verisi aşağıdaki gibi olmalıdır.

```json
{
    "title":"Write Code",
    "description":"Write appropriate codes for solving this problem",
    "assignedDepartment": 2
}
```

- Title: Task'a ait başlık
- Description: Task'a ait açıklama
- AssignedDepartment: Task'ın hangi departmana atandığı

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "taskCreated",
    "payload": {
        "id": 8103,
        "title": "Write Code",
        "description": "Write appropriate codes for solving this problem",
        "status": 0,
        "assignedDepartment": 2,
        "user": {
            "name": "Mary Glenn",
            "id": 1001
        }
    }
}
```

Payload içinde bir Task nesnesi bulunmaktadır.
Task nesnesi içinde bulunan:

- Status; Task'ın durumunu göstermektedir.
- AssignedDepartment: Task'ın atandığı departmanı belirtmektedir.
- User; Task'ı oluşturan kullanıcıya ait bilgileri göstermektedir.

&nbsp;
&nbsp;

### 7. Kullanıcı kendi oluşturduğu Task'ı güncelleyebilmelidir

Bu özelliğin sağlanabilmesi için kullanıcıların aşağıda bulunan verileri backend'e iletmesi gerekmektedir.
Güncelleme işleminde sadece Task'a ait başlık ve açıklama güncellenebilmektedir.

NOT:

- Postman Collection'da "UpdateTask" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.
- Bu işlemi yapabilmek için Login sonucunda elde edilen JWT Token, bu istekte Authorization Http Header'ine Bearer olarak eklenmelidir.

Http "PUT" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/task/4381
```

URL'in bulunan "4381" numarası bir Task'ın Id'sidir. Bu numarayı güncellemek istediğiniz Task'a ait Id bilgisi ile değiştirin.

Gönderilmesi gereken request verisi aşağıdaki gibi olmalıdır.

```json
{
    "title": "All Products Price List",
    "description": "We need to All Products Price List in this week, Thanks"
}
```

Gönderilen veriler:

- Title: Task'a ait başlık
- Description: Task'a ait açıklama

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "taskUpdated",
    "payload": {
        "id": 4381,
        "title": "All Products Price List",
        "description": "We need to All Products Price List in this week, Thanks",
        "status": 0,
        "assignedDepartment": 2,
        "user": {
            "name": "Mary Glenn",
            "id": 1001
        }
    }
}
```

Payload içinde güncellenmiş Task nesnesi bulunmaktadır.
Task nesnesi içinde bulunan:

- Status; Task'ın durumunu göstermektedir.
- AssignedDepartment: Task'ın atandığı departmanı belirtmektedir.
- User; Task'ı oluşturan kullanıcıya ait bilgileri göstermektedir.

&nbsp;
&nbsp;

### 8: Kullanıcı kendi oluşturduğu Task'ı silebilmelidir

Bu özelliğin sağlanabilmesi için aşağıda belirtilen şekilde backend uygulamasına istek yapılmalıdır.

NOT:

- Postman Collection'da "DeleteTask" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.
- Bu işlemi yapabilmek için Login sonucunda elde edilen JWT Token, bu istekte Authorization Http Header'ine Bearer olarak eklenmelidir.

Http "GET" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/task/4381
```

URL'in bulunan "4381" numarası bir Task'ın Id'sidir. Bu numarayı silmek istediğiniz Task'a ait Id bilgisi ile değiştirin.

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "taskDeleted",
    "payload": {
        "id": 4381,
        "title": "All Products Price List",
        "description": "We need to All Products Price List in this week, Thanks",
        "status": 0,
        "assignedDepartment": 2,
        "user": {
            "name": "Mary Glenn",
            "id": 1001
        }
    }
}
```

Payload içinde silinen Task nesnesi bulunmaktadır.
Task nesnesi içinde bulunan:

- Status; Task'ın durumunu göstermektedir.
- AssignedDepartment: Task'ın atandığı departmanı belirtmektedir.
- User; Task'ı oluşturan kullanıcıya ait bilgileri göstermektedir.

&nbsp;
&nbsp;

### 9: Kullanıcı çalıştığı departmana atanan bir Task'ı tamamlayabilmelidir

Bu özelliğin sağlanabilmesi için aşağıda belirtilen şekilde backend uygulamasına istek yapılmalıdır.

NOT:

- Postman Collection'da "CompleteTask" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.
- Bu işlemi yapabilmek için Login sonucunda elde edilen JWT Token, bu istekte Authorization Http Header'ine Bearer olarak eklenmelidir.

Http "GET" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/task/complete/8054
```

URL'in bulunan "8054" numarası bir Task'ın Id'sidir. Bu numarayı tamamlamak istediğiniz Task'a ait Id bilgisi ile değiştirin.

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "taskCompleted",
    "payload": {
        "id": 8054,
        "title": "Department Employee List",
        "description": "Please send Sales Department Employee List us via email, Thanks.",
        "status": 1,
        "assignedDepartment": 1,
        "user": {
            "name": "John Doe",
            "id": 2002
        }
    }
}
```

Payload içinde tamamlanan Task nesnesi bulunmaktadır.
Task nesnesi içinde bulunan:

- Status; Task'ın durumunu göstermektedir.
- AssignedDepartment: Task'ın atandığı departmanı belirtmektedir.
- User; Task'ı oluşturan kullanıcıya ait bilgileri göstermektedir.

&nbsp;
&nbsp;

### 10: Kullanıcı çalıştığı departmana atanan bir Task'ı reddedebilmelidir

Bu özelliğin sağlanabilmesi için aşağıda belirtilen şekilde backend uygulamasına istek yapılmalıdır.

NOT:

- Postman Collection'da "RejectTask" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.
- Bu işlemi yapabilmek için Login sonucunda elde edilen JWT Token, bu istekte Authorization Http Header'ine Bearer olarak eklenmelidir.

Http "GET" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/task/complete/8054
```

URL'in bulunan "8054" numarası bir Task'ın Id'sidir. Bu numarayı reddetmek istediğiniz Task'a ait Id bilgisi ile değiştirin.

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "taskRejected",
    "payload": {
        "id": 8054,
        "title": "Department Employee List",
        "description": "Please send Sales Department Employee List us via email, Thanks.",
        "status": 2,
        "assignedDepartment": 1,
        "user": {
            "name": "John Doe",
            "id": 2002
        }
    }
}
```

Payload içinde reddedilen Task nesnesi bulunmaktadır.
Task nesnesi içinde bulunan:

- Status; Task'ın durumunu göstermektedir.
- AssignedDepartment: Task'ın atandığı departmanı belirtmektedir.
- User; Task'ı oluşturan kullanıcıya ait bilgileri göstermektedir.

&nbsp;
&nbsp;

## Diğer Backend API Endpointleri

Aşağıda listelenen endpoint'leri ihtiyacınız olursa kullanabilirsiniz.

&nbsp;
&nbsp;

### Sistemdeki Tüm Kullanıcıları Listeleme

Bu endpoint ile sistemde bulunan tüm kullanıcılara ait verileri listeleyebilirsiniz.

NOT:

- Postman Collection'da "AllUsers" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.

Http "GET" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/auth/all-users
```

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "allUsersSuccess",
    "payload": [
        {
            "id": 1001,
            "name": "Mary Glenn",
            "title": "HR Specialist",
            "email": "mary@company.com",
            "department": 1
        },
        {
            "id": 2002,
            "name": "John Doe",
            "title": "Sales Manager",
            "email": "john@company.com",
            "department": 2
        }
    ]
}
```

Payload içinde User'lardan oluşan bir nesne dizisi bulunmaktadır.

- Department: User'ın çalıştığı departmanı belirtmektedir.

&nbsp;
&nbsp;

### Login Olmuş Kullanıcıya Ait Bilgiler

Bu endpoint ile login olduğunuz kullanıcıya ait bilgileri getirebilirsiniz.

NOT:

- Postman Collection'da "Me" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.
- Bu işlemi yapabilmek için Login sonucunda elde edilen JWT Token, bu istekte Authorization Http Header'ine Bearer olarak eklenmelidir.

Http "GET" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/auth/me
```

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "meSuccess",
    "payload": {
        "id": 1001,
        "name": "Mary Glenn",
        "title": "HR Specialist",
        "email": "mary@company.com",
        "department": 1
    }
}
```

Payload içinde bir User nesnesi bulunmaktadır.

- Department: User'ın çalıştığı departmanı belirtmektedir.

&nbsp;
&nbsp;

### Sistemdeki Task Verilerini İlk Haline Getirme

Bu endpoint ile backend'de bulunan Task verilerini ilk haline getirebilirsiniz.
Backend uygulamasını durdurup yeniden başlatmak yerine bu endpoint'i kullanabilirsiniz.

NOT:

- Postman Collection'da "ResetData" isminde bu isteğin hazır hali vardır. Bilgi ve Test etmek için Postman'i kullanabilirsiniz.

Http "GET" olarak istek yapılacak adres:

```bash
http://localhost:5000/api/task/reset-data
```

Bu isteğe cevap olarak gelen response verisi aşağıdaki gibidir.

```json
{
    "code": "resetDataSuccess",
    "payload": [
        {
            "id": 8054,
            "title": "Department Employee List",
            "description": "Please send Sales Department Employee List us via email, Thanks.",
            "status": 0,
            "assignedDepartment": 1,
            "user": {
                "name": "John Doe",
                "id": 2002
            }
        },
        {
            "id": 4381,
            "title": "Product Price List",
            "description": "We need to Product Price List in this week, Thanks",
            "status": 0,
            "assignedDepartment": 2,
            "user": {
                "name": "Mary Glenn",
                "id": 1001
            }
        }
    ]
}
```

Payload içinde bir User nesnesi bulunmaktadır.

- Department: User'ın çalıştığı departmanı belirtmektedir.

&nbsp;
&nbsp;

## Örnek API Hata Mesajları

Backend uygualmasında belirtilen iş kurallarını ihlal etmeniz durumunda veya başka hataların oluşması durumunda hata dönecektir.

Örnek Senaryo; daha önceden tamamlanmış bir Task'ın tekrar tamamlanmak istenmesi durumunda gelecek hata:

```json
{
    "code": "validationError",
    "message": "Task status must be Pending (1)"
}
```

Bu hatada "message" içindeki veri hatayı tanımlamaktadır.
Bu senaryoda Task'ın tamamlanabilmesi için Task'a ait Status "1" yani "Pending" durumunda olmalıdır. Hata mesajı bunu belirtmektedir.
