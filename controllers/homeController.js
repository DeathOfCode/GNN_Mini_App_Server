const cheerio = require('cheerio');
const baseUrl = 'https://thewateratlantic.com/';

 crawlData = () => {
    return new Promise(async (resolve, reject) => {
        try {
           const data = await getHtmlPage();
           if(data){
            const pageLoad = cheerio.load(data);  
            resolve(pageLoad);
        }
        } catch (e) {
          resolve('done error');
        }
      }); 
}
getHtmlPage = () => {
    return new Promise(async (resolve, reject) => {
        try {
     
          const response = (await fetch(baseUrl));
          if(response.ok){
             const text = await response.text();
             resolve(text);
          }else{
              reject(response);
          }
        } catch (e) {
          console.log(e);
          resolve('done error');
        }
      });
}
exports.getBanners = async (req,res) =>{
    const pageLoad = await crawlData();
    let imgages =  pageLoad('a.slideshow-image').find('img').toArray();
    const urlImgs =  imgages.map(x => `${baseUrl}/${x.attribs.src}`);
    res.status(200).json({status:"success",banners:urlImgs});
};