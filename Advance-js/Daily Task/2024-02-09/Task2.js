
// car => color, price , horsePower, speed // printCarDetails  // printComman() 
  // phone => color, price , ram , camaraPerfomance

class Commonfitures {
    constructor(name,color,price) {
      this.name = name;
      this.color = color;
      this.price = price;
    }
    printComman() {
      console.log("------You have selected feachers For------>",this.name);
    }
  }
  
  class car extends Commonfitures {
    constructor(name,color,price,horsepower,speed) {
      super(name,color,price);
      this.horsepower = horsepower;
      this.speed = speed;
    }
  
    printCarDetails() {
      console.log(
        `Car name :${this.name}, color is :${this.color}, price: ${this.price}lakh,horse power :${this.horsepower},max speed :${this.speed}km/second`
      );
    }
  }
  
  class Mobile extends Commonfitures {
    constructor(name,color,price,ram, camara) {
      super(name,color,price);
      this.ram = ram;
      this.camara = camara;
    }
  
    printMobileDetails() {
      console.log(
        `Mobile name: ${this.name},color is: ${this.color}, price :${this.price}, Ram :${this.ram} and camara perfomance :${this.camara} mega px `
      );
    }
  }
  
  const car1 = new car("Ford Endeavour", "Black",36.27,"167.62bhp@3500rpm",260,);
  const car2 = new car("Fortuner lagender", "White",48.22,"176.68@3900rpm",320,);
  car1.printCarDetails();
  car2.printCarDetails();
//   car1.printComman();
  const Mobile1 = new Mobile("iphone 15 pro max","gray","1,39,999", "8GB","48");
  const Mobile2 = new Mobile("iphone 15 plus","blue","79,599", "12GB","48");
  Mobile1.printMobileDetails();
  Mobile2.printMobileDetails();
//   Mobile1.printComman();

  
  
//   const useCommonfituresr = new Commonfitures("test all feachers")
//   console.log("-----------  ----------->", useCommonfituresr)
  
//   useCommonfituresr.printComman()
  
  