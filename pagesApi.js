const {webkit, chromium, firefox, devices, request} = require('playwright');


(async () => {

    const browser = await webkit.launch({ //можно заменять браузер
      headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    page.on('frameattached', frame => console.log('frames: '+ page.frames().length));
    page.on('framedetached', frame => console.log('frames: '+ page.frames().length));
    page.on('request', request => console.log(request.method() + ' ' + request.url()));
    page.on('response', response => console.log(response.status() + ' ' + response.url()));

    //"addblock" для одной страницы page., для всех сайтов context.
    page.route('**/*', route => {
      if(route.request().frame().parentFrame())
        route.abort();
      else
        route.continue();
    })
    await page.goto('https://yandex.ru/games/');
})();
