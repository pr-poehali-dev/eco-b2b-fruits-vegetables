
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Заявка отправлена",
        description: "Наш менеджер свяжется с вами в ближайшее время.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Верхняя навигация */}
      <header className="bg-white sticky top-0 z-10 border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-primary text-xl font-bold tracking-tight">АГРО·МАРКЕТ</span>
          </div>
          <div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm tracking-wide">
            <a href="#" className="hover:text-primary transition-colors uppercase">Главная</a>
            <a href="#products" className="hover:text-primary transition-colors uppercase">Продукция</a>
            <a href="#benefits" className="hover:text-primary transition-colors uppercase">Преимущества</a>
            <a href="#contact" className="hover:text-primary transition-colors uppercase">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium tracking-wide">
            Запросить КП
          </Button>
        </div>
      </header>

      {/* Герой-секция */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <div className="inline-block px-3 py-1 bg-green-50 text-primary text-xs uppercase tracking-widest font-semibold mb-6 rounded">
              Оптовые поставки
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              Свежие овощи и фрукты для вашего бизнеса
            </h1>
            <p className="text-base md:text-lg mb-8 text-gray-600 leading-relaxed">
              Надежные поставки сертифицированной продукции для ресторанов, 
              кафе, магазинов и дистрибьюторов. Высокие стандарты качества и точные сроки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto text-sm uppercase tracking-wide">
                Получить прайс-лист
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 h-auto text-sm uppercase tracking-wide">
                Связаться с нами
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#F8F9FA] -z-10 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Свежие овощи и фрукты" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded shadow-lg">
              <p className="text-primary text-xs font-bold uppercase tracking-widest">Сертифицированная продукция</p>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</p>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Поставщиков</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Клиентов</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Логистика</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-gray-600 text-sm uppercase tracking-wide">Точность поставок</p>
            </div>
          </div>
        </div>
      </section>

      {/* Блок преимуществ */}
      <section id="benefits" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-gray-900">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600">
              Мы создаем надежную цепочку поставок свежих овощей и фруктов 
              для бизнеса любого масштаба с гарантированным качеством.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-tight text-gray-900">Контроль качества</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Многоступенчатая система контроля и сертификации на всех этапах 
                  от сбора до поставки конечному клиенту.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-tight text-gray-900">Точные сроки</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Отлаженная логистика и автоматизированная система поставок 
                  гарантируют своевременную доставку вашего заказа.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-tight text-gray-900">Гибкий подход</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Индивидуальные условия сотрудничества, конкурентные цены 
                  и оптимальные условия оплаты для каждого клиента.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Галерея продукции */}
      <section id="products" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-gray-900">
              Наш ассортимент
            </h2>
            <p className="text-gray-600">
              Поставляем широкий выбор сертифицированных овощей и фруктов высшего качества для бизнеса.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-opacity"></div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-medium text-sm">от {product.price} ₽/кг</span>
                    <Button variant="outline" size="sm" className="text-xs border-gray-300 text-gray-700 hover:bg-gray-50">
                      Запросить
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto text-sm uppercase tracking-wide">
              Полный каталог продукции
            </Button>
          </div>
        </div>
      </section>

      {/* Процесс работы */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-gray-900">
              Как мы работаем
            </h2>
            <p className="text-gray-600">
              Простой и прозрачный процесс взаимодействия для максимальной эффективности.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2 text-gray-900">Заявка</h3>
              <p className="text-sm text-gray-600">Оставьте заявку или свяжитесь с нами любым удобным способом</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2 text-gray-900">Обсуждение</h3>
              <p className="text-sm text-gray-600">Согласовываем объемы, ассортимент и условия сотрудничества</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2 text-gray-900">Контракт</h3>
              <p className="text-sm text-gray-600">Подписываем договор с согласованными условиями</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2 text-gray-900">Поставки</h3>
              <p className="text-sm text-gray-600">Регулярные поставки продукции согласно графику</p>
            </div>
          </div>
        </div>
      </section>

      {/* Блок с призывом к действию */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white tracking-tight">
            Начните сотрудничество сегодня
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Предлагаем выгодные условия для компаний любого масштаба.
            Предоставляем персонального менеджера и гибкую систему скидок.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 h-auto text-sm uppercase tracking-wide">
            Стать партнером
          </Button>
        </div>
      </section>

      {/* Отзывы клиентов */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-gray-900">
              Отзывы партнеров
            </h2>
            <p className="text-gray-600">
              Что говорят о нас компании, которые выбрали сотрудничество с АГРО·МАРКЕТ.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <span className="text-xl">Р</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Ресторан "Северный"</h3>
                    <p className="text-sm text-gray-600">Сергей Николаев, руководитель закупок</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  "Работаем с АГРО·МАРКЕТ уже более двух лет. За это время не было 
                  ни одной серьезной претензии к качеству продукции или срокам поставки. 
                  Особенно ценим индивидуальный подход и возможность срочных поставок в высокий сезон."
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <span className="text-xl">Ф</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Федеральная сеть "ФрешМаркет"</h3>
                    <p className="text-sm text-gray-600">Ольга Смирнова, директор по закупкам</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  "АГРО·МАРКЕТ — надежный партнер для нашей сети. Поставки осуществляются 
                  точно в срок с соблюдением всех требований к качеству и упаковке. 
                  Сотрудничество с ними позволило оптимизировать наши процессы и улучшить предложение для клиентов."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Форма для связи */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 tracking-tight text-gray-900">
                Свяжитесь с нами
              </h2>
              <p className="text-gray-600">
                Оставьте заявку, и наш менеджер свяжется с вами для обсуждения условий сотрудничества.
              </p>
            </div>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Имя и фамилия</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Иван Петров"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Компания</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="ООО Компания"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="example@mail.ru"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary h-32"
                  placeholder="Опишите ваши потребности..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" id="privacy" />
                <label htmlFor="privacy" className="text-xs text-gray-600">
                  Я согласен на обработку персональных данных в соответствии с Политикой конфиденциальности
                </label>
              </div>
              
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 h-auto text-sm uppercase tracking-wide"
                onClick={handleSubscribe}
              >
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 tracking-tight">АГРО·МАРКЕТ</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Надежный поставщик свежих овощей и фруктов для бизнеса любого масштаба.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Контакты</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>+7 (999) 123-45-67</li>
                <li>info@agromarket.ru</li>
                <li>г. Москва, ул. Садовая, 123</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Информация</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Сертификаты</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Условия сотрудничества</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Подписка</h3>
              <p className="text-gray-400 text-sm mb-2">
                Актуальные предложения и новости
              </p>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-3 py-2 text-gray-800 text-sm rounded-l focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-primary px-4 py-2 rounded-r hover:bg-primary/90 transition-colors text-sm"
                >
                  ОК
                </button>
              </form>
            </div>
          </div>
          
          <Separator className="my-6 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row md:justify-between text-gray-500 text-xs">
            <p>© 2025 АГРО·МАРКЕТ. Все права защищены.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Данные для галереи продукции
const products = [
  {
    name: "Яблоки",
    description: "Сорта: Голден, Симиренко, Гала",
    price: "75",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Томаты",
    description: "Тепличные и грунтовые",
    price: "120",
    image: "https://images.unsplash.com/photo-1561155818-c0f8e6c958df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Огурцы",
    description: "Сорт: Герман F1, Атаман F1",
    price: "95",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Картофель",
    description: "Столовые сорта, мытый и немытый",
    price: "45",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Цитрусовые",
    description: "Апельсины, лимоны, грейпфруты",
    price: "140",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9041525?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Морковь",
    description: "Сорта для длительного хранения",
    price: "55",
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Экзотические фрукты",
    description: "Манго, авокадо, папайя",
    price: "380",
    image: "https://images.unsplash.com/photo-1596591868231-05e808fd7891?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Капуста",
    description: "Белокочанная, краснокочанная, брокколи",
    price: "65",
    image: "https://images.unsplash.com/photo-1566842600175-97dca3e23e90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
];

export default Index;
