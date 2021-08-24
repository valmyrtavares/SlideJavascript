export default class slide{

    constructor(){
        this.img = document.querySelectorAll("img")
    }

    setImg(){
       let limit = this.img.length -1;
       console.log("limit =  " +  limit)
       let count = 0
       this.img[limit].classList.add('show');
      setInterval(()=>{          
       this.img.forEach(item=>{
           item.classList.remove('show');
       })
    count++
    if(count>limit)
    {count = 0} ;
     this.img[count].classList.add('show');
    console.log(count)
      },2000)
    }

    init(){
        this.setImg();
    }
}

console.log("Funcionando super bem")