import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [results, setResults] = useState([]);
  const [step, setStep] = useState(1);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setStep(2);
  };

  const handleSearch = () => {
    const dummyProducts = [
      // Смартфоны
      { id: 1, category: "Смартфоны", name: "Samsung Galaxy S23", price: 79999, image: "https://via.placeholder.com/150" },
      { id: 2, category: "Смартфоны", name: "Apple iPhone 15", price: 109999, image: "https://via.placeholder.com/150" },
      { id: 3, category: "Смартфоны", name: "Xiaomi Redmi Note 12", price: 22999, image: "https://via.placeholder.com/150" },
      // Наушники
      { id: 4, category: "Наушники", name: "Sony WH-1000XM5", price: 34999, image: "https://via.placeholder.com/150" },
      { id: 5, category: "Наушники", name: "Apple AirPods Pro 2", price: 24999, image: "https://via.placeholder.com/150" },
      { id: 6, category: "Наушники", name: "JBL Tune 510BT", price: 4999, image: "https://via.placeholder.com/150" },
      // Мыши
      { id: 7, category: "Мыши", name: "Logitech G Pro X", price: 9999, image: "https://via.placeholder.com/150" },
      { id: 8, category: "Мыши", name: "Razer DeathAdder V3", price: 7499, image: "https://via.placeholder.com/150" },
      { id: 9, category: "Мыши", name: "Xiaomi Wireless Mouse Lite", price: 1299, image: "https://via.placeholder.com/150" },
      // Клавиатуры
      { id: 10, category: "Клавиатуры", name: "Logitech MX Keys", price: 8999, image: "https://via.placeholder.com/150" },
      { id: 11, category: "Клавиатуры", name: "Razer BlackWidow V4", price: 13999, image: "https://via.placeholder.com/150" },
      { id: 12, category: "Клавиатуры", name: "Defender Oscar", price: 1599, image: "https://via.placeholder.com/150" },
      // Бытовая техника
      { id: 13, category: "Бытовая техника", name: "Мультиварка REDMOND RMC-M90", price: 6999, image: "https://via.placeholder.com/150" },
      { id: 14, category: "Бытовая техника", name: "Фен Dyson Supersonic", price: 34999, image: "https://via.placeholder.com/150" },
      { id: 15, category: "Бытовая техника", name: "Утюг Tefal Ultimate", price: 3999, image: "https://via.placeholder.com/150" },
      // Телевизоры
      { id: 16, category: "Телевизоры", name: "LG OLED C3", price: 149999, image: "https://via.placeholder.com/150" },
      { id: 17, category: "Телевизоры", name: "Samsung QLED Q80B", price: 89999, image: "https://via.placeholder.com/150" },
      { id: 18, category: "Телевизоры", name: "Xiaomi Mi TV 4A", price: 24999, image: "https://via.placeholder.com/150" },
      // Холодильники
      { id: 19, category: "Холодильники", name: "Samsung RB34T", price: 49999, image: "https://via.placeholder.com/150" },
      { id: 20, category: "Холодильники", name: "Bosch KGN36", price: 74999, image: "https://via.placeholder.com/150" },
      { id: 21, category: "Холодильники", name: "ATLANT МХМ 2835", price: 24999, image: "https://via.placeholder.com/150" },
      // Стиральные машины
      { id: 22, category: "Стиральные машины", name: "LG F4WV9WC9P", price: 84999, image: "https://via.placeholder.com/150" },
      { id: 23, category: "Стиральные машины", name: "Samsung WW80", price: 59999, image: "https://via.placeholder.com/150" },
      { id: 24, category: "Стиральные машины", name: "Indesit BTW A5851", price: 23999, image: "https://via.placeholder.com/150" },
      // Планшеты
      { id: 25, category: "Планшеты", name: "Apple iPad Pro", price: 109999, image: "https://via.placeholder.com/150" },
      { id: 26, category: "Планшеты", name: "Samsung Galaxy Tab S8", price: 79999, image: "https://via.placeholder.com/150" },
      { id: 27, category: "Планшеты", name: "Lenovo Tab M10", price: 22999, image: "https://via.placeholder.com/150" },
      // Кофеварки
      { id: 28, category: "Кофеварки", name: "DeLonghi Magnifica", price: 59999, image: "https://via.placeholder.com/150" },
      { id: 29, category: "Кофеварки", name: "Philips 3200 Series", price: 44999, image: "https://via.placeholder.com/150" },
      { id: 30, category: "Кофеварки", name: "Bosch Tassimo", price: 6999, image: "https://via.placeholder.com/150" },
    ];

    const filteredProducts = dummyProducts.filter(
      (product) =>
        product.category === selectedCategory &&
        ((priceRange === "less1000" && product.price < 1000) ||
          (priceRange === "1000-3000" && product.price >= 1000 && product.price <= 3000) ||
          (priceRange === "3000-5000" && product.price > 3000 && product.price <= 5000) ||
          (priceRange === "5000-7000" && product.price >= 5000 && product.price <=7000) ||
          (priceRange === "7000-10000" && product.price >= 7000 && product.price <=10000) ||
          (priceRange === "10000-15000" && product.price >= 10000 && product.price <=15000) ||
          (priceRange === "15000+" && product.price > 15000))

    );

    setResults(filteredProducts);
    setStep(3);
  };

  return (
    <div className="App">
      {/* Главная страница */}
      {step === 1 && (
        <div className="gift-box">
          <h1 className="title">Сервис подбора подарков</h1>
          <div className="categories">
            <h2 className="subtitle">Выберите категорию товаров:</h2>
            <div className="category-buttons">
              {["Смартфоны", "Наушники", "Мыши", "Клавиатуры", "Бытовая техника", "Телевизоры", "Холодильники", "Стиральные машины", "Планшеты", "Кофеварки"].map((category) => (
                <button key={category} onClick={() => handleCategoryClick(category)} className="category-button">
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Страница выбора диапазона цен */}
      {step === 2 && (
        <div className="gift-box">
          <h2 className="subtitle">Вы выбрали: {selectedCategory}</h2>
          <label htmlFor="priceRange" className="label">
            Укажите ценовой диапазон:
          </label>
          <select
            id="priceRange"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="select"
          >
            <option value="">Выберите диапазон</option>
            <option value="less1000">До 1000₽</option>
            <option value="1000-3000">1000₽ - 3000₽</option>
            <option value="3000-5000">3000₽ - 5000₽</option>
            <option value="5000-7000">5000₽ - 7000₽</option>
            <option value="7000-10000">7000₽ - 10000₽</option>
            <option value="10000-15000">10000₽ - 15000₽</option>
            <option value="15000+">Более 15000₽</option>
          </select>
          <button className="search-button" onClick={handleSearch}>
            Найти подарки
          </button>
        </div>
      )}

      {/*{/* Страница с результатами поиска */}
      {step === 3 && (
        <div className="gift-box">
          <h2 className="subtitle">Результаты для категории: {selectedCategory}</h2>
          {results.length > 0 ? (
            <div className="results">
              {results.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price}₽</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-results">Нет товаров в выбранной категории или диапазоне цен.</p>
          )}
          <button className="back-button" onClick={() => setStep(1)}>
            Вернуться к выбору категории
          </button>
        </div>
      )}
    </div>
  );
};

export default App;