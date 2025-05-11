
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [animatedSections, setAnimatedSections] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    stats: useRef<HTMLElement>(null),
    benefits: useRef<HTMLElement>(null),
    products: useRef<HTMLElement>(null),
    process: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Запрос отправлен",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setEmail("");
    }
  };
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Подписка оформлена",
        description: "Благодарим за подписку на наши новости!",
      });
      setEmail("");
    }
  };

  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Проверяем видимость каждой секции для анимации
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;
          
          if (isVisible && !animatedSections[key]) {
            setAnimatedSections(prev => ({ ...prev, [key]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Проверяем начальное состояние
    
    return () => window.removeEventListener('scroll', checkScroll);
  }, [animatedSections]);

  return (
    <div className="bg-eco-lightBeige min-h-screen">
      {/* Навигация */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled py-2' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-eco-green flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M6.002 14.494C5.38 13.764 5 12.944 5 12c0-1.857 1.972-3.638 4.343-4.584"></path>
                  <path d="M18.505 8.07C18.84 9.252 17.69 11.166 15.5 12.357"></path>
                  <path d="M12 7c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3c0 1.15 1.572 2.163 4 2.636"></path>
                  <path d="M12 16.736c-4.418 0-8 1.343-8 3V17"></path>
                  <path d="M12 12.736c-4.418 0-8 1.343-8 3"></path>
                  <path d="M12 21.736c-3.702 0-6.85-.91-7.747-2.165"></path>
                  <path d="M19.748 19.57A.537.537 0 0 1 20 19.736c0-1.052-1.55-1.975-3.793-2.548"></path>
                  <path d="M12 16.736c4.418 0 8-1.343 8-3v-3"></path>
                  <path d="M15.5 12.357C14.165 13.074 12 14.042 12 16.736v5"></path>
                </svg>
              </div>
              <a href="#" className="flex items-center">
                <span className="text-xl font-display text-eco-darkGreen font-bold tracking-tight">ЭкоМаркет</span>
              </a>
            </div>
            
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#benefits" className="text-sm font-medium hover:text-eco-green transition-colors">Преимущества</a>
              <a href="#products" className="text-sm font-medium hover:text-eco-green transition-colors">Продукция</a>
              <a href="#process" className="text-sm font-medium hover:text-eco-green transition-colors">Как мы работаем</a>
              <a href="#contact" className="text-sm font-medium hover:text-eco-green transition-colors">Контакты</a>
              <Button className="bg-eco-green hover:bg-eco-darkGreen text-white">
                Оставить заявку
              </Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-eco-darkGreen">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Герой-секция */}
      <section 
        ref={sectionRefs.hero}
        className={`pt-28 pb-16 md:pt-40 md:pb-24 bg-eco-beige relative overflow-hidden ${animatedSections.hero ? 'visible' : 'animate-on-scroll'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <div className="inline-block px-3 py-1 bg-eco-lightGreen/20 text-eco-darkGreen text-xs uppercase tracking-widest font-medium rounded-full mb-6">
                Оптовые поставки для бизнеса
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-gray-800 leading-[1.1]">
                Свежие <span className="text-eco-green">овощи и фрукты</span> для вашего бизнеса
              </h1>
              <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                Поставляем только отборную продукцию от проверенных фермеров для ресторанов, 
                кафе, отелей и ритейла. Качество, надежность, точность поставок.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-eco-green hover:bg-eco-darkGreen text-white px-8 py-7 h-auto rounded-full">
                  Получить прайс-лист
                </Button>
                <Button variant="outline" className="border-eco-green text-eco-darkGreen hover:bg-eco-green/10 px-8 py-7 h-auto rounded-full">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1595436301719-1e3da9063446?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Свежие органические овощи и фрукты" 
                  className={`w-full h-auto object-cover rounded-2xl ${animatedSections.hero ? 'fade-in-image' : 'opacity-0'}`}
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-eco-lightGreen/20 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-eco-lightGreen/20 -z-10"></div>
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-eco-green/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-eco-green">
                      <path d="M9 12l2 2 4-4"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">100% сертифицировано</p>
                    <p className="text-xs text-gray-500">Высшее качество</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/3 left-10 w-48 h-48 bg-eco-green/5 rounded-full -z-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-eco-green/5 rounded-full -z-10 blur-3xl"></div>
      </section>

      {/* Статистика */}
      <section 
        ref={sectionRefs.stats}
        className={`py-16 bg-white relative ${animatedSections.stats ? 'visible' : 'animate-on-scroll'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-eco-green/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-eco-green">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold text-eco-darkGreen mb-2">150+</p>
              <p className="text-gray-600 text-sm">Надежных поставщиков</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-eco-green/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-eco-green">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold text-eco-darkGreen mb-2">10+</p>
              <p className="text-gray-600 text-sm">Лет на рынке</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-eco-green/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-eco-green">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold text-eco-darkGreen mb-2">24/7</p>
              <p className="text-gray-600 text-sm">Поддержка клиентов</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-eco-green/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-eco-green">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold text-eco-darkGreen mb-2">98%</p>
              <p className="text-gray-600 text-sm">Точность поставок</p>
            </div>
          </div>
        </div>
      </section>

      {/* Блок преимуществ */}
      <section 
        id="benefits" 
        ref={sectionRefs.benefits}
        className={`py-20 bg-eco-beige relative ${animatedSections.benefits ? 'visible' : 'animate-on-scroll'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
              Почему выбирают <span className="text-eco-green">нас</span>
            </h2>
            <p className="text-gray-600">
              Мы создаем надежную цепочку поставок свежих овощей и фруктов 
              для бизнеса любого масштаба с гарантированным качеством.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-eco-green/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-eco-green">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 font-display">Гарантированное качество</h3>
                <p className="text-gray-600 leading-relaxed">
                  Вся продукция проходит строгий контроль качества. Мы сотрудничаем только 
                  с проверенными фермерами и поставщиками, которые соблюдают высокие стандарты 
                  выращивания и хранения продукции.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-eco-green/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-eco-green">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 font-display">Точные сроки доставки</h3>
                <p className="text-gray-600 leading-relaxed">
                  Мы понимаем, насколько важно получить свежие продукты вовремя. 
                  Наша логистическая служба обеспечивает поставки точно в срок, 
                  чтобы ваш бизнес работал без сбоев.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-eco-green/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-eco-green">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 font-display">Индивидуальный подход</h3>
                <p className="text-gray-600 leading-relaxed">
                  Для каждого клиента мы разрабатываем индивидуальную схему сотрудничества. 
                  Гибкие условия оплаты, персональный менеджер и возможность 
                  подстроиться под ваши потребности.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-eco-green/5 rounded-full -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-eco-green/5 rounded-full -z-10 blur-3xl"></div>
      </section>

      {/* Галерея продукции */}
      <section 
        id="products" 
        ref={sectionRefs.products}
        className={`py-20 bg-white ${animatedSections.products ? 'visible' : 'animate-on-scroll'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
              Наш <span className="text-eco-green">ассортимент</span>
            </h2>
            <p className="text-gray-600">
              Поставляем широкий выбор сертифицированных овощей и фруктов высшего качества для бизнеса.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Button variant="outline" size="sm" className="bg-white text-eco-darkGreen hover:bg-eco-green hover:text-white border-white">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-eco-green font-medium">от {product.price} ₽/кг</span>
                    <Button variant="outline" size="sm" className="text-xs border-eco-green text-eco-darkGreen hover:bg-eco-green hover:text-white">
                      Заказать
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button className="bg-eco-green hover:bg-eco-darkGreen text-white font-medium px-8 py-6 h-auto rounded-full text-sm">
              Запросить полный каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Процесс работы */}
      <section 
        id="process" 
        ref={sectionRefs.process}
        className={`py-20 bg-eco-beige ${animatedSections.process ? 'visible' : 'animate-on-scroll'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
              Как мы <span className="text-eco-green">работаем</span>
            </h2>
            <p className="text-gray-600">
              Простой и прозрачный процесс взаимодействия для максимальной эффективности.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-eco-green flex items-center justify-center mx-auto mb-6 shadow-lg text-eco-darkGreen font-bold text-2xl">1</div>
              <h3 className="font-display font-bold text-lg mb-3 text-gray-800">Заявка</h3>
              <p className="text-gray-600">Оставьте заявку через сайт или свяжитесь с нашими менеджерами</p>
            </div>
            
            <div className="text-center relative">
              <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-eco-green/30"></div>
              <div className="w-20 h-20 rounded-full bg-white border-2 border-eco-green flex items-center justify-center mx-auto mb-6 shadow-lg text-eco-darkGreen font-bold text-2xl relative z-10">2</div>
              <h3 className="font-display font-bold text-lg mb-3 text-gray-800">Обсуждение</h3>
              <p className="text-gray-600">Согласовываем ассортимент, объемы и условия работы</p>
            </div>
            
            <div className="text-center relative">
              <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-eco-green/30"></div>
              <div className="w-20 h-20 rounded-full bg-white border-2 border-eco-green flex items-center justify-center mx-auto mb-6 shadow-lg text-eco-darkGreen font-bold text-2xl relative z-10">3</div>
              <h3 className="font-display font-bold text-lg mb-3 text-gray-800">Контракт</h3>
              <p className="text-gray-600">Заключаем договор с учетом всех согласованных условий</p>
            </div>
            
            <div className="text-center relative">
              <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-eco-green/30"></div>
              <div className="w-20 h-20 rounded-full bg-white border-2 border-eco-green flex items-center justify-center mx-auto mb-6 shadow-lg text-eco-darkGreen font-bold text-2xl relative z-10">4</div>
              <h3 className="font-display font-bold text-lg mb-3 text-gray-800">Поставки</h3>
              <p className="text-gray-600">Организуем регулярные или разовые поставки согласно вашим требованиям</p>
            </div>
          </div>
          
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-full bg-eco-green/10 flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-eco-green">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl mb-2 text-gray-800">Важная информация</h3>
                <p className="text-gray-600">
                  Для сотрудничества с нами необходимо юридическое лицо или ИП. 
                  Минимальный объем заказа - от 50 кг. Мы работаем с оплатой по безналичному расчету с НДС и без НДС.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button className="bg-eco-green hover:bg-eco-darkGreen text-white rounded-full px-6">
                  Подробнее
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок с призывом к действию */}
      <section className="py-20 bg-eco-green">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white leading-tight">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Мы предлагаем выгодные условия для компаний любого масштаба.
              Получите индивидуальное предложение уже сегодня!
            </p>
            <Button className="bg-white text-eco-darkGreen hover:bg-opacity-90 px-8 py-6 h-auto rounded-full text-sm font-medium">
              Обсудить условия сотрудничества
            </Button>
          </div>
        </div>
      </section>

      {/* Отзывы клиентов */}
      <section 
        ref={sectionRefs.testimonials}
        className={`py-20 bg-white ${animatedSections.testimonials ? 'visible' : 'animate-on-scroll'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">
              Отзывы <span className="text-eco-green">клиентов</span>
            </h2>
            <p className="text-gray-600">
              Что говорят о нас компании, которые выбрали сотрудничество с ЭкоМаркет.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-eco-beige/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-eco-green/20 flex items-center justify-center mr-4 text-xl font-bold text-eco-green">
                    Р
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-800 text-lg">Ресторан "Зелёный сад"</h3>
                    <p className="text-gray-600 text-sm">Анна Смирнова, шеф-повар</p>
                  </div>
                </div>
                <svg className="w-12 h-12 text-eco-green/20 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.086 4C8.311 4 6 6.373 6 9.229c0 2.856 1.216 4.928 3.538 6.299 1.487.855 2.236 2.385 2.536 3.371.5.329.228.644.661.644h2.429c.914 0 1.226-.973.797-1.75-1.078-1.848-2.883-3.079-5.333-3.742 0 0 1.979-.495 3.161-2.053 1.183-1.558.726-3.144.726-4.139 0-2.273-1.516-3.859-3.429-3.859zm12 0c-2.775 0-5.086 2.373-5.086 5.229 0 2.856 1.216 4.928 3.538 6.299 1.487.855 2.236 2.385 2.536 3.371.5.329.228.644.661.644h2.429c.914 0 1.226-.973.797-1.75-1.078-1.848-2.883-3.079-5.333-3.742 0 0 1.979-.495 3.161-2.053 1.183-1.558.726-3.144.726-4.139C24.429 5.586 22.913 4 21 4z" />
                </svg>
                <p className="text-gray-700 italic mb-6">
                  "Сотрудничаем с ЭкоМаркет уже более трех лет. За это время ни разу не возникло проблем 
                  с качеством или сроками поставок. Особенно ценим, что они всегда идут навстречу при срочных заказах 
                  и предлагают сезонные продукты отличного качества."
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">5 / 5</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-eco-beige/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-eco-green/20 flex items-center justify-center mr-4 text-xl font-bold text-eco-green">
                    С
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-800 text-lg">Сеть супермаркетов "ФрешМаркет"</h3>
                    <p className="text-gray-600 text-sm">Сергей Петров, руководитель отдела закупок</p>
                  </div>
                </div>
                <svg className="w-12 h-12 text-eco-green/20 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.086 4C8.311 4 6 6.373 6 9.229c0 2.856 1.216 4.928 3.538 6.299 1.487.855 2.236 2.385 2.536 3.371.5.329.228.644.661.644h2.429c.914 0 1.226-.973.797-1.75-1.078-1.848-2.883-3.079-5.333-3.742 0 0 1.979-.495 3.161-2.053 1.183-1.558.726-3.144.726-4.139 0-2.273-1.516-3.859-3.429-3.859zm12 0c-2.775 0-5.086 2.373-5.086 5.229 0 2.856 1.216 4.928 3.538 6.299 1.487.855 2.236 2.385 2.536 3.371.5.329.228.644.661.644h2.429c.914 0 1.226-.973.797-1.75-1.078-1.848-2.883-3.079-5.333-3.742 0 0 1.979-.495 3.161-2.053 1.183-1.558.726-3.144.726-4.139C24.429 5.586 22.913 4 21 4z" />
                </svg>
                <p className="text-gray-700 italic mb-6">
                  "Работая с ЭкоМаркет, мы смогли значительно улучшить качество нашего отдела свежих 
                  продуктов. Благодаря оперативным поставкам и отличному сервису мы минимизировали 
                  списания и повысили удовлетворенность клиентов. Рекомендуем как надежного поставщика!"
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">4 / 5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Форма для связи */}
      <section 
        id="contact" 
        ref={sectionRefs.contact}
        className={`py-20 bg-eco-beige ${animatedSections.contact ? 'visible' : 'animate-on-scroll'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-eco-lightGreen/20 text-eco-darkGreen text-xs uppercase tracking-widest font-medium rounded-full mb-6">
                Свяжитесь с нами
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-800">
                Начните сотрудничество <span className="text-eco-green">с ЭкоМаркет</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 2 часов, 
                чтобы обсудить все детали сотрудничества.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-eco-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-eco-green">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-800 mb-1">Телефон</h3>
                    <p className="text-gray-600 text-sm mb-1">Рабочие дни: 8:00 - 20:00</p>
                    <a href="tel:+79001234567" className="text-eco-green font-medium hover:text-eco-darkGreen transition-colors">
                      +7 (900) 123-45-67
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-eco-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-eco-green">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm mb-1">Отвечаем в течение 2 часов</p>
                    <a href="mailto:info@ecomarket.ru" className="text-eco-green font-medium hover:text-eco-darkGreen transition-colors">
                      info@ecomarket.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-eco-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-eco-green">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-800 mb-1">Адрес</h3>
                    <p className="text-gray-600 text-sm mb-1">Офис и склад</p>
                    <p className="text-eco-green font-medium">
                      г. Москва, ул. Складская, 123
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-eco-green/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-eco-green">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-800 mb-1">Соцсети</h3>
                    <p className="text-gray-600 text-sm mb-1">Следите за новостями</p>
                    <div className="flex gap-3">
                      <a href="#" className="text-eco-green hover:text-eco-darkGreen transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-eco-green hover:text-eco-darkGreen transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-eco-green hover:text-eco-darkGreen transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="font-display font-bold text-2xl mb-6 text-gray-800">Оставить заявку</h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Имя и фамилия *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50"
                        placeholder="Иван Петров"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Компания *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50"
                        placeholder="ООО Компания"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Телефон *</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50"
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50"
                        placeholder="example@mail.ru"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-green/50 h-32"
                      placeholder="Опишите ваши потребности и вопросы..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-eco-green bg-gray-100 border-gray-300 rounded focus:ring-eco-green/50" id="privacy" required />
                    <label htmlFor="privacy" className="ml-2 text-xs text-gray-600">
                      Я согласен на обработку персональных данных в соответствии с Политикой конфиденциальности
                    </label>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-eco-green hover:bg-eco-darkGreen text-white py-3 h-auto rounded-lg font-medium"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-eco-green flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M6.002 14.494C5.38 13.764 5 12.944 5 12c0-1.857 1.972-3.638 4.343-4.584"></path>
                    <path d="M18.505 8.07C18.84 9.252 17.69 11.166 15.5 12.357"></path>
                    <path d="M12 7c4.418 0 8-1.343 8-3s-3.582-3-8-3-8 1.343-8 3c0 1.15 1.572 2.163 4 2.636"></path>
                    <path d="M12 16.736c-4.418 0-8 1.343-8 3V17"></path>
                    <path d="M12 12.736c-4.418 0-8 1.343-8 3"></path>
                    <path d="M12 21.736c-3.702 0-6.85-.91-7.747-2.165"></path>
                    <path d="M19.748 19.57A.537.537 0 0 1 20 19.736c0-1.052-1.55-1.975-3.793-2.548"></path>
                    <path d="M12 16.736c4.418 0 8-1.343 8-3v-3"></path>
                    <path d="M15.5 12.357C14.165 13.074 12 14.042 12 16.736v5"></path>
                  </svg>
                </div>
                <span className="text-xl font-display font-bold tracking-tight">ЭкоМаркет</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Оптовые поставки свежих овощей и фруктов для бизнеса. 
                Мы ценим качество, надежность и долгосрочные отношения с клиентами.
              </p>
              <div className="flex space-x-4">
                
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-eco-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-eco-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-eco-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Компания</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">О нас</a></li>
                <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors text-sm">Преимущества</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-white transition-colors text-sm">Продукция</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Сертификаты</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Вакансии</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Информация</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Условия сотрудничества</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Доставка и оплата</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Отзывы клиентов</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Часто задаваемые вопросы</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Подписка</h3>
              <p className="text-gray-300 text-sm mb-4">
                Подпишитесь на рассылку, чтобы получать новости о сезонных предложениях и акциях
              </p>
              <form onSubmit={handleSubscribe} className="flex mb-4">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-eco-green text-gray-800 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-eco-green hover:bg-eco-darkGreen text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
              <p className="text-gray-500 text-xs">
                * Подписываясь, вы соглашаетесь с нашей Политикой конфиденциальности
              </p>
            </div>
          </div>
          
          <Separator className="bg-gray-700 mb-6" />
          
          <div className="flex flex-col md:flex-row md:justify-between text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} ЭкоМаркет. Все права защищены.</p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
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
