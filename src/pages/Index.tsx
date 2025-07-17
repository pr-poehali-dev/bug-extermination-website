import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      id: 1,
      title: 'Уничтожение клопов',
      description: 'Профессиональная обработка от постельных клопов с гарантией результата',
      price: 'от 3000 ₽',
      icon: 'Bug',
      features: ['Безопасные препараты', 'Гарантия 6 месяцев', 'Выезд в день обращения']
    },
    {
      id: 2,
      title: 'Борьба с тараканами',
      description: 'Комплексная дезинсекция от тараканов всех видов',
      price: 'от 2500 ₽',
      icon: 'Bug',
      features: ['Современные методы', 'Долгосрочная защита', 'Экологически чистые средства']
    },
    {
      id: 3,
      title: 'Обработка от клещей',
      description: 'Защита участка от клещей и других кровососущих насекомых',
      price: 'от 150 ₽/сотка',
      icon: 'Target',
      features: ['Обработка территории', 'Защита на весь сезон', 'Сертифицированные препараты']
    }
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Используем только сертифицированные препараты, безопасные для людей и животных'
    },
    {
      icon: 'Clock',
      title: 'Быстрый выезд',
      description: 'Приедем в течение 2 часов после вашего звонка'
    },
    {
      icon: 'Award',
      title: 'Гарантия качества',
      description: 'Даем гарантию на все виды работ до 12 месяцев'
    },
    {
      icon: 'Users',
      title: 'Опытные специалисты',
      description: 'Более 10 лет опыта в сфере дезинсекции'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-medical-blue p-2 rounded-lg">
                <Icon name="Shield" className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-roboto font-bold text-gray-900">
                Дезинсекция Про
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-medical-blue transition-colors">
                Услуги
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-medical-blue transition-colors">
                Цены
              </a>
              <a href="#advantages" className="text-gray-600 hover:text-medical-blue transition-colors">
                Преимущества
              </a>
              <a href="#contact" className="text-gray-600 hover:text-medical-blue transition-colors">
                Контакты
              </a>
            </nav>
            <Button className="bg-medical-blue hover:bg-blue-700 text-white">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Вызвать специалиста
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-4 text-medical-blue border-medical-blue">
                <Icon name="CheckCircle" className="h-3 w-3 mr-1" />
                Лицензированная служба
              </Badge>
              <h1 className="text-4xl md:text-5xl font-roboto font-bold text-gray-900 mb-6">
                Профессиональная дезинсекция
                <span className="text-medical-blue"> с гарантией</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Быстро и безопасно избавляем от клопов, тараканов, клещей и других вредителей. 
                Используем современные методы и сертифицированные препараты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-medical-blue hover:bg-blue-700 text-white">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Вызвать специалиста
                </Button>
                <Button size="lg" variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                  <Icon name="Calculator" className="h-5 w-5 mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Icon name="Clock" className="h-4 w-4 mr-1 text-medical-green" />
                  Выезд в день обращения
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" className="h-4 w-4 mr-1 text-medical-green" />
                  Гарантия до 12 месяцев
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square bg-gradient-to-br from-medical-blue/10 to-medical-green/10 rounded-3xl p-8 flex items-center justify-center">
                <img
                  src="/img/0424c481-c675-46f8-b66a-7cd5ea93991a.jpg"
                  alt="Специалист по дезинсекции"
                  className="rounded-2xl shadow-2xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-roboto font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Профессиональная дезинсекция от всех видов вредителей с использованием современных методов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardHeader className="text-center pb-4">
                  <div className="bg-medical-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon name={service.icon} className="h-8 w-8 text-medical-blue" />
                  </div>
                  <CardTitle className="text-xl font-roboto font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Icon name="Check" className="h-4 w-4 text-medical-green mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-roboto font-bold text-medical-blue">
                      {service.price}
                    </span>
                    <Button className="bg-medical-blue hover:bg-blue-700 text-white">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-roboto font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы предоставляем качественные услуги дезинсекции с индивидуальным подходом к каждому клиенту
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-medical-green/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name={advantage.icon} className="h-8 w-8 text-medical-green" />
                </div>
                <h3 className="text-lg font-roboto font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-roboto font-bold text-gray-900 mb-4">
              Прозрачные цены
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Честные цены без скрытых доплат. Окончательная стоимость рассчитывается после осмотра объекта
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-medical-light">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Услуга</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Площадь</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Стоимость</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Гарантия</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Уничтожение клопов</td>
                    <td className="px-6 py-4 text-gray-600">1-комнатная квартира</td>
                    <td className="px-6 py-4 text-medical-blue font-semibold">от 3000 ₽</td>
                    <td className="px-6 py-4 text-gray-600">6 месяцев</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Борьба с тараканами</td>
                    <td className="px-6 py-4 text-gray-600">1-комнатная квартира</td>
                    <td className="px-6 py-4 text-medical-blue font-semibold">от 2500 ₽</td>
                    <td className="px-6 py-4 text-gray-600">12 месяцев</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Обработка от клещей</td>
                    <td className="px-6 py-4 text-gray-600">1 сотка</td>
                    <td className="px-6 py-4 text-medical-blue font-semibold">от 150 ₽</td>
                    <td className="px-6 py-4 text-gray-600">сезон</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Комплексная обработка</td>
                    <td className="px-6 py-4 text-gray-600">2-комнатная квартира</td>
                    <td className="px-6 py-4 text-medical-blue font-semibold">от 4500 ₽</td>
                    <td className="px-6 py-4 text-gray-600">12 месяцев</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-roboto font-bold text-gray-900 mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут для уточнения деталей
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-blue/10 p-2 rounded-lg">
                    <Icon name="Phone" className="h-5 w-5 text-medical-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                    <p className="text-sm text-gray-500">Работаем круглосуточно</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-blue/10 p-2 rounded-lg">
                    <Icon name="Mail" className="h-5 w-5 text-medical-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@dezinsekciya.pro</p>
                    <p className="text-sm text-gray-500">Ответим в течение часа</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-blue/10 p-2 rounded-lg">
                    <Icon name="MapPin" className="h-5 w-5 text-medical-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Примерная, 123</p>
                    <p className="text-sm text-gray-500">Выезжаем по всей области</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-roboto font-semibold text-gray-900">
                    Заказать консультацию
                  </CardTitle>
                  <CardDescription>
                    Оставьте заявку и получите бесплатный осмотр объекта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Номер телефона"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Адрес объекта"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Опишите проблему"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-medical-blue hover:bg-blue-700 text-white">
                      <Icon name="Send" className="h-4 w-4 mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-medical-blue p-2 rounded-lg">
                  <Icon name="Shield" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-roboto font-bold">Дезинсекция Про</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональная дезинсекция с гарантией качества
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Уничтожение клопов</li>
                <li>Борьба с тараканами</li>
                <li>Обработка от клещей</li>
                <li>Комплексная дезинсекция</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@dezinsekciya.pro</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Пн-Вс: 24/7</li>
                <li>Экстренные вызовы</li>
                <li>Бесплатная консультация</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Дезинсекция Про. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}