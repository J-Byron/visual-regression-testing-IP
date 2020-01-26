const 
          puppeteer =         require('puppeteer'),
          { percySnapshot } = require('@percy/puppeteer'),
          httpServer =        require('http-server'),
          platform =          require("os").platform()

PORT = process.env.PORT_NUMBER || 8000,
TEST_URL = `http://localhost:${PORT}`

// We need to change the args passed to puppeteer based on the platform they're using
const puppeteerArgs = /^win/.test(platform) ? [] : [ '--single-process' ];

  let page, server, browser

  beforeAll(() => {
    server = httpServer.createServer({ root: `${__dirname}/..`})
    server.listen(PORT)
  });

  afterAll(() => {
    server.close()
  });

  beforeEach(async function() {
    // Create a new Puppeteer browser instace for each test case
    browser = await puppeteer.launch({
      headless: true,
      timeout: 10000,
      args: puppeteerArgs
    })
    page = await browser.newPage()
  })

  afterEach(function() {
    // Close the Puppeteer browser instance.
    browser.close()
  })


  // Set content variables
  const imageUrl = 'https://crds-media.imgix.net/6Wuqirf5JxhZxBPQlwheZH/8cf6b62e7117846df347c086317c73c2/Screen_Shot_2019-10-10_at_3.26.57_PM.png?auto=format&ar=2.63&fit=crop';
  const imageHref = 'https://www.google.com/maps/place/Crossroads+Church+Oakley/@39.1594124,-84.4255232,17z/data=!3m1!4b1!4m5!3m4!1s0x8841ad6e8703e557:0x91d871185ba4400e!8m2!3d39.1594083!4d-84.4233345?hl=en';
  const cardTitle = 'Oakley';
  const titleHref = 'https://int.crossroads.net/oakley';
  const div = `
  <div style="background-color: red; width: 100px; height: 100px;">
      Hello 
  </div>
  `
  const component = 
  `
    <div style="width:400px">
      <crds-image-title-cutout
      ${imageUrl ? "image-url=" + imageUrl : ''}
      ${imageHref ? "image-href=" + imageHref : ''} 
      ${cardTitle ? "card-title=" + cardTitle : ''} 
      ${titleHref ? "title-href=" + titleHref : ''}  
      >
      </crds-image-title-cutout>
    </div>
    ${div}
  `

  test('Renders', async () => {
    
    // await page.goto(TEST_URL)

    // Inject crds-image-title-cutout into page
    await page.setContent(component)
    // Find component on DOM
    const el = await page.waitForSelector('body');

    await page.screenshot({path:'screenshot1234.jpg'})
    expect(el).not.toBeNull();

    // Percy/puppeteer requires a Page object to be hosted on a valid URL scheme (http or https)
    await percySnapshot(page, 'Component render' )
  })

  // //
  // it('Redirects to _ when I click on the title', async () => {

  //   const page = await createPage()
  //   const selector = '.text-uppercase.title-cutout'
  //   await page.click(selector)
  //   await page.waitForNavigation();

  // })

  // //
  // it('Redirects to _ when I click on the image', async () => {
  //   const page = await createPage()
  //   const selector = '.image'
  //   await page.click(selector)
  //   await page.waitForNavigation();
  // })