import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to exact OG dimension requirements
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 1, // Ensure exact 1200x630 pixel output
  });

  console.log('Navigating to local dev server...');
  await page.goto('http://localhost:5173/?og=true', { waitUntil: 'networkidle0' });

  // Wait a moment for any custom fonts to definitely load and render
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log('Capturing screenshot...');
  await page.screenshot({ path: './public/og-image.jpg', type: 'jpeg', quality: 95 });

  await browser.close();
  console.log('Successfully saved to public/og-image.jpg!');
})();
