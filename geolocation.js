const {webkit, chromium, firefox, devices} = require('playwright');


(async () => {

    const browser = await webkit.launch({ //можно заменять браузер
      headless: false,
      // proxy: {
      //   server: '102.221.242.128:8080',
      // },
    });
    const context = await browser.newContext({
      geolocation: {
        latitude: -8.4546925,
        longitude: 114.7913904,
      },
      permissions: ['geolocation'], //соглашение на геолокализацию
      locale: 'de-DE', //языковая локализация
      colorScheme: 'dark', //цветовая тема
    });
    const page = await context.newPage();
    
    await page.goto('https://maps.google.com');
    //переключение темы
    // await page.waitForTimeout(1000);
    // await page.emulateMedia({
    //   colorScheme: 'light',
    // })
    
 
})();
