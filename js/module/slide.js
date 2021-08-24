//export default class slide{

    // constructor(){
    //     this.img = document.querySelectorAll("img");
    //     this.btn = document.querySelectorAll("button")
    //      this.count = 0;
    //      this.st;
    //      this.n = 9

         
    //}
    //addEvent(){
      //  his.btn[0].addEventListener('click', this.stop);
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

// const contarate10 = setInterval(callback, 1000)
// let i = 0;
// function callback() {
//     console.log(i++);
//     if (i > 10) {
//       clearInterval(contarAte10);
//     }
//   }


export default class Slide{
  constructor(){
      this.img = document.querySelectorAll('img');
      this.li = document.querySelectorAll('li')
      this.button = document.querySelectorAll('button')
      this.cont=0;
  }
   
  addEvent(){
      this.li.forEach((item, index)=>{
          item.addEventListener('click', ()=>{
              this.clickImg(index)
          })
      }) 
      this.button[0].addEventListener("click",()=>{
          this.back()
      })
      this.button[1].addEventListener('click',()=>{
          this.forward()
      })
      this.img[this.cont].classList.add("show")
      this.li[this.cont].classList.add('change-color')
     this.setImg()
  }
  forward(){
      if(this.cont==4) this.cont=0;
      clearInterval(this.stopSlide);
      this.img.forEach(item=>{
          item.classList.remove('show')
      })
      this.img[this.cont].classList.add('show')
      this.setColor(this.cont)
      this.setImg();
  }
  back(){
      let index;
      this.cont==1? index=3:index = this.cont - 2
    clearInterval(this.stopSlide)
    this.img.forEach(item=>{
        item.classList.remove('show')
    })
    this.img[index].classList.add("show");
    this.cont = index
    this.setImg();
    this.setColor(index)
   
  }
   
  clickImg(indexbutton){
   clearInterval(this.stopSlide)
   this.img.forEach(item=>{
       item.classList.remove('show')
   })
   this.img[indexbutton].classList.add('show')
   this.setColor(indexbutton)
   this.cont = indexbutton;
   this.setImg()
  }
      
  setImg(){
     this.stopSlide = setInterval(()=>{
          if(this.cont>3){this.cont=0}      
          this.img.forEach(item=>{
              item.classList.remove("show")
                  })
          this.img[this.cont].classList.add('show')
          this.setColor(this.cont)
      this.cont++
      },2000)
  }
   
  setColor(newColor){
      this.li.forEach(item=>{
          item.classList.remove("change-color")
      })
      this.li[newColor].classList.add("change-color")
  }
  init(){
          this.addEvent();
      }
  }
  
