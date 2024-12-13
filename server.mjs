import fetch from 'node-fetch';
import express from 'express';
import xml2js from 'xml2js';  // Это может остаться как есть, так как это не изменится.

const app = express();
const port = 5000;

// Функция для получения XML с URL
const fetchXML = async (url) => {
  const response = await fetch(url);
  const text = await response.text();
  const parsedData = await xml2js.parseStringPromise(text);
  return parsedData;
};

// Эндпоинт для получения ссылок на товары
app.get('/api/products', async (req, res) => {
  try {
    // Загружаем основной sitemap, который содержит ссылки на все productsX.xml
    const sitemapUrl = 'https://www.dns-shop.ru/sitemap.xml';
    const sitemapData = await fetchXML(sitemapUrl);
    
    // Извлекаем все ссылки на файлы с товарами
    const productSitemaps = sitemapData.sitemapindex.sitemap.map(s => s.loc[0]);

    let productLinks = [];

    // Для каждого файла продуктов загружаем и извлекаем ссылки
    for (let productSitemap of productSitemaps) {
      const productData = await fetchXML(productSitemap);
      const urls = productData.urlset.url.map(u => u.loc[0]);
      productLinks = [...productLinks, ...urls];
    }

    res.json(productLinks);  // Отправляем ссылки на фронтенд
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    res.status(500).json({ error: 'Ошибка при обработке данных' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер работает на порту ${port}`);
});