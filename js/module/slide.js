export default class slide{

    constructor(){
        this.img = document.querySelectorAll("img");
        this.btn = document.querySelectorAll("button")
         this.count = 0
         this.stop;
    }
    addEvent(){
        this.btn[0].addEventListener('click', this.back);
        this.btn[1].addEventListener('click', this.forward);       
    }
    back(){
      clearInterval(this.stopSlide)
      console.log("Volta")
    }
      
    forward(){
        clearInterval(this.stopSlide)
        console.log("Frente")
   
       
    }


    setImg(){
       let limit = this.img.length -1;      
       this.img[limit].classList.add('show');

     this.stopSlide =  setInterval(()=>{          
                    this.img.forEach(item=>{
                        item.classList.remove('show');
                    })
                        this.count++
                        if(this.count>limit)
                        {this.count = 0} ;
                        this.img[this.count].classList.add('show');  
                    },2000)
    }

    init(){
        this.setImg();
        this.addEvent()
    }
}

console.log("Funcionando super bem")