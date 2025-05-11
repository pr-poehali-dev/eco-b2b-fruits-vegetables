
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
        title: "Спасибо за подписку!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Верхняя навигация */}
      <header className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <span className="text-[#6E8B3D] text-2xl font-bold">ЭкоФреш</span>
          </div>
          <div className="hidden md:flex gap-8 text-[#6E8B3D]">
            <a href="#" className="hover:text-[#C1D9B0] transition-colors">Главная</a>
            <a href="#products" className="hover:text-[#C1D9B0] transition-colors">Продукция</a>
            <a href="#benefits" className="hover:text-[#C1D9B0] transition-colors">О нас</a>
            <a href="#contact" className="hover:text-[#C1D9B0] transition-colors">Контакты</a>
          </div>
          <Button className="bg-[#6E8B3D] hover:bg-[#5A7A2C] text-white">
            Оптовый заказ
          </Button>
        </div>
      </header>

      {/* Герой-секция */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#F5F1E8] to-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-lg animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-[#6E8B3D] leading-tight">
              Свежие фрукты и овощи для вашего бизнеса
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Оптовые поставки экологически чистых овощей и фруктов для ресторанов, 
              кафе, магазинов и других бизнесов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#6E8B3D] hover:bg-[#5A7A2C] text-white px-6 py-6 text-lg">
                Получить прайс-лист
              </Button>
              <Button variant="outline" className="border-[#6E8B3D] text-[#6E8B3D] hover:bg-[#C1D9B0]/20 px-6 py-6 text-lg">
                Связаться с нами
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Свежие овощи и фрукты" 
              className="rounded-lg shadow-xl max-w-full h-auto object-cover mx-auto animate-fade-in"
              style={{animationDelay: '0.3s'}}
            />
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.6s'}}>
              <p className="text-[#6E8B3D] font-bold">100% органические продукты</p>
            </div>
          </div>
        </div>
      </section>

      {/* Блок преимуществ */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair text-[#6E8B3D]">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover-scale bg-[#F5F1E8]">
              <CardContent className="pt-6">
                <div className="mb-4 bg-[#C1D9B0] w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#6E8B3D]">Эко-производство</h3>
                <p className="text-gray-700">
                  Выращиваем продукцию без химикатов и ГМО, соблюдая все экологические стандарты.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover-scale bg-[#F5F1E8]">
              <CardContent className="pt-6">
                <div className="mb-4 bg-[#C1D9B0] w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-xl">🚚</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#6E8B3D]">Надежные поставки</h3>
                <p className="text-gray-700">
                  Гарантируем своевременную доставку и строгое соблюдение сроков.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover-scale bg-[#F5F1E8]">
              <CardContent className="pt-6">
                <div className="mb-4 bg-[#C1D9B0] w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-xl">💯</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#6E8B3D]">Гарантия качества</h3>
                <p className="text-gray-700">
                  Контролируем качество на всех этапах - от сбора до доставки вашему бизнесу.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Галерея продукции */}
      <section id="products" className="py-16 bg-[#F5F1E8]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 font-playfair text-[#6E8B3D]">
            Наша продукция
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Предлагаем широкий ассортимент свежих овощей и фруктов высочайшего качества для вашего бизнеса.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-[#6E8B3D]">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-[#6E8B3D] font-semibold">от {product.price} ₽/кг</span>
                    <Button size="sm" variant="outline" className="border-[#6E8B3D] text-[#6E8B3D] hover:bg-[#C1D9B0]/20">
                      Заказать
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-[#6E8B3D] hover:bg-[#5A7A2C] text-white px-6">
              Посмотреть весь каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Блок с призывом к действию */}
      <section className="py-16 bg-[#6E8B3D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Станьте нашим партнером
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Предлагаем выгодные условия сотрудничества для бизнесов любого масштаба.
            Гарантируем стабильные поставки и гибкую систему скидок.
          </p>
          <Button className="bg-white text-[#6E8B3D] hover:bg-[#F5F1E8] px-6 py-6 text-lg">
            Стать партнером
          </Button>
        </div>
      </section>

      {/* Отзывы клиентов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair text-[#6E8B3D]">
            Отзывы наших клиентов
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg hover-scale bg-[#F5F1E8]">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-[#C1D9B0] w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-xl">🍽️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#6E8B3D]">Ресторан "Сезоны"</h3>
                    <p className="text-sm text-gray-600">Михаил, шеф-повар</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Сотрудничаем с ЭкоФреш уже более года. Всегда свежие продукты, 
                  доставка точно по графику. Наши гости отмечают исключительный 
                  вкус блюд благодаря качественным ингредиентам."
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover-scale bg-[#F5F1E8]">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-[#C1D9B0] w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-xl">🛒</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#6E8B3D]">Супермаркет "ЭкоМаркет"</h3>
                    <p className="text-sm text-gray-600">Анна, менеджер закупок</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Отличный поставщик с гибкими условиями сотрудничества. 
                  Продукция всегда высокого качества, что ценят наши покупатели. 
                  Рекомендуем ЭкоФреш всем, кто ценит качество и надежность."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Форма для связи */}
      <section id="contact" className="py-16 bg-[#F5F1E8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 font-playfair text-[#6E8B3D] text-center">
              Свяжитесь с нами
            </h2>
            <p className="text-center text-gray-700 mb-8">
              Оставьте заявку, и наш менеджер свяжется с вами для обсуждения условий сотрудничества.
            </p>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6E8B3D]"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Название компании</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6E8B3D]"
                    placeholder="ООО Ромашка"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6E8B3D]"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6E8B3D]"
                    placeholder="example@mail.ru"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Сообщение</label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6E8B3D] h-32"
                  placeholder="Расскажите, что вас интересует..."
                ></textarea>
              </div>
              
              <Button 
                className="w-full bg-[#6E8B3D] hover:bg-[#5A7A2C] text-white py-6"
                onClick={handleSubscribe}
              >
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#6E8B3D] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ЭкоФреш</h3>
              <p className="text-white/80">
                Оптовые поставки свежих овощей и фруктов для вашего бизнеса.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/80">
                <li>Телефон: +7 (999) 123-45-67</li>
                <li>Email: info@ecofresh.ru</li>
                <li>Адрес: г. Москва, ул. Садовая, 123</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white">О компании</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Доставка и оплата</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Условия сотрудничества</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Подписка на новости</h3>
              <p className="text-white/80 mb-2">
                Будьте в курсе акций и спецпредложений
              </p>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-3 py-2 text-gray-800 rounded-l-md focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-[#5A7A2C] px-4 py-2 rounded-r-md hover:bg-[#4c6825] transition-colors"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
          
          <Separator className="my-6 bg-white/20" />
          
          <div className="text-center text-white/70">
            <p>© 2025 ЭкоФреш. Все права защищены.</p>
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
    description: "Сладкие и сочные, идеально для десертов",
    price: "75",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Томаты",
    description: "Спелые и ароматные, для салатов",
    price: "120",
    image: "https://images.unsplash.com/photo-1561155818-c0f8e6c958df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Огурцы",
    description: "Хрустящие и свежие, выращены в экоусловиях",
    price: "95",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Клубника",
    description: "Сладкая и ароматная, идеальна для десертов",
    price: "250",
    image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Авокадо",
    description: "Спелые и мягкие, богаты полезными жирами",
    price: "180",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Картофель",
    description: "Отборный, идеален для гарниров и супов",
    price: "45",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Морковь",
    description: "Сладкая и хрустящая, богата витаминами",
    price: "55",
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Бананы",
    description: "Сладкие и сочные, для перекусов и выпечки",
    price: "85",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
];

export default Index;
