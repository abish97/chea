
var i = 0;
var txt = 'Chemical engineering is a branch of engineering that uses principles of chemistry, physics, mathematics, and economics to efficiently use, produce, transform, and transport chemicals, materials, and energy. A chemical engineer designs large-scale processes that convert chemicals, raw materials, living cells, microorganisms, and energy into useful forms and products.Chemical engineers are involved in many aspects of plant design and operation, including safety and hazard assessments, process design and analysis, control engineering, chemical reaction engineering, construction specification, and operating instructions.';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var link = document.getElementById("learn");

function func1() {
  document.body.style.backgroundImage = "url('https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/1nanobionic_plant.jpg')";
  document.getElementById("content").innerHTML = "What if housplants<br>could detect explosives?"
  link.setAttribute("href", "http://news.mit.edu/2016/nanobionic-spinach-plants-detect-explosives-1031");
  return false;
}
function func2() {
  document.body.style.backgroundImage = "url('http://news.mit.edu/sites/mit.edu.newsoffice/files/styles/news_article_image_top_slideshow/public/images/2018/MIT-Glioma-Treatment-01_0.jpg?itok=AZ0LoNYN')";
  document.getElementById("content").innerHTML = "How can we diagonise<br>brain cancer more<br>quickly?"
  link.setAttribute("href", "http://news.mit.edu/2018/targeted-approach-treating-glioma-0806");
  return false;
}
function func3(){
  document.body.style.backgroundImage = "url('http://news.mit.edu/sites/mit.edu.newsoffice/files/styles/news_article_image_top_slideshow/public/images/2017/MIT-hair-cells-1_0.jpg?itok=oSDvQ0P9')";
  document.getElementById("content").innerHTML = "What if you could<br>regrow cells to combat<br>hearing loss?"
  link.setAttribute("href", "http://news.mit.edu/2017/drug-treatment-combat-hearing-loss-0221");
  return false;
}
function func4(){
  document.body.style.backgroundImage = "url('http://sciencenewsjournal.com/wp-content/uploads/2016/06/dna-cancer-cells-990x557.jpg')";
  document.getElementById("content").innerHTML = "What if you could<br>see inside an individual<br>cancer cell?"
  link.setAttribute("href", "http://news.mit.edu/2018/sensor-could-help-doctors-select-effective-cancer-therapy-0807");
  return false;
}
function func5(){
  document.body.style.backgroundImage = "url(1.jpg)";
  document.getElementById("content").innerHTML = "How can machine<br>learning aid drug<br>manfuctring?"
  link.setAttribute("href", "http://news.mit.edu/2017/computer-system-predicts-products-chemical-reactions-0627");
  return false;
}
function execute(){
  var i = Math.floor((Math.random() * 5) + 1);
      eval('func'+i+'()');
    }
