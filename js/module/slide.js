export default class slide{

    constructor(){
        this.img = document.querySelectorAll("img");
        this.btn = document.querySelectorAll("button")
    }
    addEvent(){
        this.btn[0].addEventListener('click', this.back);
        this.btn[1].addEventListener('click', this.forward);       
    }
    back(){
        console.log("O botão está funcionando BACK")
    }
    forward(){
        console.log("O botão está funcionando FORWARD")
    }


    setImg(){
       let limit = this.img.length -1;     
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
      },2000)
    }

    init(){
        this.setImg();
        this.addEvent()
    }
}

console.log("Funcionando super bem")