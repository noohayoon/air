const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');
const { Console } = require('console');
const fs = require('fs');
const { pathToFileURL } = require('url');
var fakerator = require("fakerator")();
const fileName = readlineSync.question('[?] File: ');
const toko = "";
(async () => {

    await fs.readFile(fileName, async function(err, data) {
        if (err) throw err;
        const array = data
          .toString()
          .replace(/\r/g, "")
          .split('\n')
          
          for(let i = 0; i < array.length; i++){
              console.log(fakerator.address.postCode())
            const imel = '1819095054'
            const pas = 'saninkicker123'
            const pin = '1234'
        const addressS = fakerator.address.street()
          const explode = array[i].split('|')
          const email = explode[0]
          const pass = explode[1]

          const browser = await puppeteer.launch({
            executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            headless:false,
            devtools:false,
        })

  const page = await browser.newPage()
  
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => false,
    });
  });
  await page.evaluateOnNewDocument(() => {
    // Overwrite the `plugins` property to use a custom getter.
    Object.defineProperty(navigator, 'plugins', {
      // This just needs to have `length > 0` for the current test,
      // but we could mock the plugins too if necessary.
      get: () => [1, 2, 3, 4, 5],
    });
  });
  

//web
process.stdout.write(`[${i + 1}] Login ${email} =>`)
await page.goto('https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
await page.waitForSelector("input[type=email]",{visible:true ,timeout:60000})
await page.type("input[type=email]",email)
await page.click( "#identifierNext > div > button > div.VfPpkd-RLmnJb")
await page.waitForSelector("input[type=password]",{visible:true ,timeout:60000})
await page.type("input[type=password]",pass)
await page.click( "#passwordNext > div > button > div.VfPpkd-RLmnJb")
await page.waitForNavigation({timeout:40000})
process.stdout.write(" Success Login, ");
await page.goto('https://login.aliexpress.com/')
await page.waitForSelector("#root > div > section > div > div:nth-child(2) > a",{visible:true ,timeout:60000})
await page.click('#root > div > section > div > div:nth-child(2) > a')

await page.waitForNavigation({timeout:40000})

await page.waitForSelector('#header > div > div.hm-left > div > a > span',{visible:true ,timeout:60000})
process.stdout.write("Sett address, ");
await page.goto('https://ilogisticsaddress.aliexpress.com/addressList.htm?spm=a2g0s.8937420.0.0.5d1e2e0eST1drf')
await page.waitForSelector('#meShippingAddressTitle',{visible:true ,timeout:60000})
// if(await page.$('#address-main > div > div > div.address-list-wrap > div.address-item.default > div.address-opt > button:nth-child(2)') !== null)
// {
// await page.click('#address-main > div > div > div.address-list-wrap > div.address-item.default > div.address-opt > button:nth-child(2)')
// page.click('body > div.next-overlay-wrapper.opened > div.next-dialog.next-closeable.next-overlay-inner > div.next-dialog-footer.next-align-right > button.next-btn.next-medium.next-btn-primary.next-dialog-btn')
// }
if(await page.$('#address-main > div > div > div.address-list-header > button') !== null)
{
await page.click('#address-main > div > div > div.address-list-header > button')

}
// try{
// } catch(e){}
await page.waitForSelector('#contactPerson',{visible:true ,timeout:60000})
await page.type('#contactPerson',  ' ' + makeid(10) + "4")
await page.type('#mobileNo', nope(7))
await page.type('#address', addressS)
await page.type('#zip', fakerator.address.postCode())
await page.click('#address-main > div > div > div > div > div:nth-child(5) > label')
await page.waitFor(1500)
await page.click('#address-main > div > div > div > div > div.address-save > button.next-btn.next-medium.next-btn-primary')
await page.waitForSelector('#meShippingAddressTitle',{visible:true ,timeout:60000})
process.stdout.write("Success SetAddress,");
await page.waitFor(2000)

await page.goto('https://www.aliexpress.com/item/ANLAN-Ultrasonic-Skin-Scrubber-Deep-Face-Cleaning-Machine-Peeling-Shovel-Facial-Pore-Cleaner-Face-Skin-Scrubber/32997472055.html?spm=a2g0o.tm161068.5298541720.2.6bf1LbLBLbLBM6&gps-id=seaZeus&scm=1007.25281.191399.0&scm_id=1007.25281.191399.0&scm-url=1007.25281.191399.0&pvid=e76810a9-ac93-455b-a510-17ffa932d791')
await page.waitForSelector('#root > div > div.product-main > div > div.product-info > div.product-title > h1',{visible:true ,timeout:60000} )
await page.click('#root > div > div.product-main > div > div.product-info > div.product-sku > div > div > ul > li:nth-child(3) > div')
console.log('\n[+] Order Detail: ')
console.log("    Item Name: " + await page.$eval("#root > div > div.product-main > div > div.product-info > div.product-title > h1", el => el.textContent))
console.log("    Price: " +  await page.$eval("#root > div > div.product-main > div > div.product-info > div.product-price > div > span", el => el.textContent))
await page.click('#root > div > div.product-main > div > div.product-info > div.product-action > span.buy-now-wrap > button')

await page.waitForSelector('#main > div.card-container.orders-list > h2', {visible:true ,timeout:60000})
await page.click('#main > div:nth-child(2) > div > div > div.pay-method > div > div > div.payment-list > div:nth-child(3) > div')
await page.waitForSelector('#price-overview > div.card-container.price-container > div > div > div.price > div.total-price > dl > dd')
console.log('    Total:' + await page.$eval('#price-overview > div.card-container.price-container > div > div > div.price > div.total-price > dl > dd', el => el.textContent))
for (let index = 1; index < array.length; index++) {
    await page.click('#checkout-button')    
}
await page.waitForNavigation()
await page.waitFor(2000)
await page.waitForSelector("input[type=text]",{visible:true ,timeout:60000})
await page.type("input[type=text]",imel)
await page.waitFor("input[type=password]",{visible:true ,timeout:60000})
await page.type("input[type=password]",pas)
await page.waitFor("input[type=submit]",{visible:true ,timeout:60000})
await page.click("input[type=submit]")
await page.waitFor(2000)
await page.waitFor("#pin",{visible:true ,timeout:60000})
await page.click("#pin")
await page.type("#pin" , pin)
await page.waitForSelector("input[type=submit]",{visible:true ,timeout:60000})
await page.click("input[type=submit]")
await page.waitForNavigation()
// await page.click('#checkout-button')
// await page.click('ae_object_value[select_payoption=DOKU_WALLET]')
// await page.click('#checkout-button')
// await page.waitForNavigation()

console.log(" ")
    }


})
})()
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function nope(length) {
  var result           = '';
  var characters       = '12314567890';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}