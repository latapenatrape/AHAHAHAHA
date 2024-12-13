// fetch_Data.js
const axios = require('axios');
const xml2js = require('xml2js');

// Функция для загрузки и обработки XML
async function fetchXml(url) {
  try {
    const response = await axios.get(url);
    const result = await xml2js.parseStringPromise(response.data);
    return result;
  } catch (error) {
    console.error(`Ошибка при загрузке XML с ${url}:`, error);
    return null;
  }
}

// Функция для получения всех URL товаров из sitemap
async function getProductUrls() {
  const sitemapUrl = 'https://www.dns-shop.ru/sitemap.xml';

  // Загрузка главного sitemap.xml
  const sitemapData = await fetchXml(sitemapUrl);
  if (!sitemapData) return [];

  const sitemapUrls = sitemapData['sitemapindex']['sitemap'].map(sitemap => sitemap['loc'][0]);

  const allProductUrls = [];
  
  // Добавим ссылку на products.xml в обработку
  sitemapUrls.push('https://www.dns-shop.ru/products1.xml');  // Добавляем конкретный файл products1.xml
  
  // Обрабатываем все ссылки из sitemap
  for (const productUrl of sitemapUrls) {
    const productData = await fetchXml(productUrl);
    if (productData && productData['urlset']) {
      // Извлекаем ссылки на товары
      const productUrls = productData['urlset']['url'].map(url => url['loc'][0]);
      allProductUrls.push(...productUrls);
    }
  }

  return allProductUrls;
}

module.exports = { getProductUrls };