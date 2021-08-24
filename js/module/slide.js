//export default class slide{

    // constructor(){
    //     this.img = document.querySelectorAll("img");
    //     this.btn = document.querySelectorAll("button")
    //      this.count = 0;
    //      this.st;
    //      this.n = 9

         
    //}
    //addEvent(){
       his.btn[0].addEventListener('click', this.stop);
       // this.btn[1].addEventListener('click', this.forward);       
    //}

    // stop(){
    //     clearInterval(this.st)
    //     console.log("Foi")
    // }
    // back(){
    //     clearInterval(this.stopSlide);

    //   console.log("Volta")
    // }
      
    // forward(){
    //     clearInterval(this.stopSlide)
    //     console.log("Frente")  
       
    // }


    // setImg(){
    //    let limit = this.img.length -1;      
    //    this.img[limit].classList.add('show');

    //    this.stopSlide = setInterval(()=>{          
    //                 this.img.forEach(item=>{
    //                     item.classList.remove('show');
    //                 })
    //                     this.count++
    //                     if(this.count>limit)
    //                     {this.count = 0} ;
    //                     this.img[this.count].classList.add('show');  
    //                 },2000)
    // }
  

    //  teste(){
    //     let contador = 0;
    //     this.st = setInterval(()=>{
    //         console.log(contador)
    //         contador++;
    //     },1000)
    // }

   
    // loop(texto) {
    //    texto++
    //     console.log(texto);
    //   }

//     init(){
//         // this.setImg();
//         // this.addEvent()
//         // this.teste();
//       this.stop =  setInterval(this.loop, 1000, this.n);

//     }
// }

const contarate10 = setInterval(callback, 1000)
let i = 0;
function callback() {
    console.log(i++);
    if (i > 10) {
      clearInterval(contarAte10);
    }
  }

