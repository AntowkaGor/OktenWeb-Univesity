// Клас людина:
//   поля:
//     вага,зріст
// Клас депутат(наслідується від людини):
//   поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
//   методи:
//     дати хабаря(зробити відповідні перевірки...
//       якщо депутат не хабарник то щоб він відмовився,
//       або ж якщо сума хабаря надто велика то щоб він вагався
//       чи брати чи ні)


class Human {
    wheight: number;
    height: number;

    constructor (wheight:number, height:number){
        this.wheight = wheight
        this.height = height
    }
}

class Deputat extends Human {
    sername: string;
    name: string; 
    age: number;
    briber: boolean;
    amoun_of_bribe: number;

    constructor (wheight:number, height:number, sername: string, name: string, age: number, briber: boolean, amoun_of_bribe?: number ){
        super(wheight, height)
        this.sername = sername
        this.name = name
        this.age = age
        this.briber = briber
        this.amoun_of_bribe = amoun_of_bribe 
    }

    giveBribe(bribe: number): void {
        if (this.briber === true) {
            if (bribe < 100) 
                console.log("Nagh, its too small")
            else if (bribe > 10000)
                console.log("Wow, man, easier, its too big")
            else
                this.amoun_of_bribe === bribe 
        } else {
            console.log('no sanks')
        }
    }
}

const Kent = new Deputat(70, 170, 'Kent', 'Oleg', 29, true, 90);
const Pavlov = new Deputat(60, 160, 'Pavlov', 'Kolia', 39, true, 1350);
const Trast = new Deputat (80, 180, 'Trast', 'Anton', 25, false);
const Pedrov = new Deputat(90, 175, 'Pedrov', 'Jony', 22, true, 1000);
const Tomson = new Deputat (50, 179, 'Tomson', 'Sasha', 49, false);
const Zozylia = new Deputat( 88, 177, 'Zozylia', 'Leonid', 27, false);
const Gara = new Deputat(56, 189, 'Gara', 'Max', 59, true, 50);

// Клас фракція
//   поля:
//     список депутатів
//   методи:
//     додати депутата (вводимо з клави)
//     видалити депутата(теж з клави)
//     видалити всіх негідників які брали хабаря
//     вивести найбільшого хабарника
//     вивести всіх депутатів
//     видалити всіх депутатів
//     вивести загальну суму хабарів для фракції

interface IDeputat {
    wheight: number;
    height: number;
    sername: string;
    name: string; 
    age: number;
    briber: boolean;
    amoun_of_bribe?: number;
}

class Fraction {
    deps: IDeputat [];

    constructor(){
        this.deps = [];
    }

    //     додати депутата (вводимо з клави)
    addToFaction(dep: IDeputat): number{
        return this.deps.push(dep)
    }

    // //     видалити депутата(теж з клави)
    // deleteFromfraction(dep: IDeputat): void{
    //      delete this.deps[dep]
    // } 

    //     видалити всіх негідників які брали хабаря
    deleateAllBriber(): void{
        this.deps.forEach((dep,i)=>{
            if (dep.briber === true) {
                delete this.deps[i]
            }
        })
    }

    //     вивести найбільшого хабарника
    showBiggerBriber(): void{
        let [firstDep] = this.deps.filter(dep => dep.briber).sort((dep1, dep2) => dep2.amoun_of_bribe - dep1.amoun_of_bribe);
        console.log(firstDep.sername, firstDep.briber, firstDep.amoun_of_bribe);
    }

    //     вивести всіх депутатів
    showAllDeputats(): void {
         this.deps.forEach(dep => console.log(dep));
    }

    //  видалити всіх депутатів
    deleteAllDeputats(): void{
        this.deps = [];
    }

    //  вивести загальну суму хабарів для фракції
    showSumBribeFraction(): void{
        console.log(this.deps.filter(dep => dep.briber).reduce((acc, curr) => acc + curr.amoun_of_bribe, 0));
    }
}

let fract = new Fraction();

    fract.addToFaction(Kent);
    fract.addToFaction(Pavlov);
    fract.addToFaction(Trast);
    fract.addToFaction(Pedrov);
    fract.addToFaction(Tomson);
    fract.addToFaction(Zozylia);
    fract.addToFaction(Gara);

console.log(fract);

// fract.deleteFromfraction(Kent);
// console.log(fract)

// fract.deleateAllBriber();
// console.log(fract);

// fract.showBiggerBriber();
// console.log(fract)

// fract.showAllDeputats();
// console.log(fract);

// fract. deleteAllDeputats();
// console.log(fract);

// fract.showSumBribeFraction();
// console.log(fract);

// клас Верховна рада
//   поля:
//     мапа фракцій
//   методи:
//     додати\видалити фракцію
//     вивести всі фракції
//     вивести конкретну фракцію
//     додати\видалити депутата з фракції
//     вивести всіх хабарників фракції
//     вивести найбільшого хабарника у фрації
//     вивести найбільшого хабарника верховної ради
//     вивести фсіх депутатів фракції
//     вивести найбільшого хабарника фракції

interface IFrak {
    name: string,
    participants: IDeputat[]
  }
  
  class Rada {
    frakMap: IFrak[];
  
    constructor() {
      this.frakMap = [];
    }

  //  додати/видалити фракцію
  addFrak(name: string, frak: IDeputat[]): void {
    this.frakMap.push({name, participants: frak});
  }

  removeFrak(name: string): void {
    this.frakMap = this.frakMap.filter(frak => frak.name != name);
  }

  //  вивести всі фракції
    showAllFraks(): void {
        this.frakMap.forEach(frak => console.log(frak));
    }

  //  вивести конкретну фракцію
  showFrak(name: string): void {
    this.frakMap.filter(frak => frak.name == name).forEach(frak => console.log(frak));
  }

  //  додати/видалити депутата з фракції
  addDep(name: string, dep: IDeputat): void {
    this.frakMap.forEach(frak => (name == frak.name) && frak.participants.push(dep));
  }

  removeDep(name: string, dep: IDeputat): void {
    this.frakMap.forEach(frak => {
      if(name == frak.name) {
        let index: number = frak.participants.indexOf(dep);
        index >= 0 ?frak.participants.splice(index, 1) :console.error(`this deputy doesn't exist`);
      }
    })
  }

  //  вивести всіх хабарників фракції
  showBribeTakers(name: string): void {
      this.frakMap = this.frakMap.filter(frak => frak.name == name);
      for (const {participants} of this.frakMap) {
        for (const key in participants) {
        participants[key].briber && console.log(participants[key]);
      }
    }
  }

   //  вивести найбільшого хабарника у фрації
   biggestBribeTakerofFrak(name: string): void {
    this.frakMap = this.frakMap.filter(frak => frak.name == name);
    for (const {participants} of this.frakMap) {
      let [firstPartis] = participants.filter(dep => dep.briber).sort((dep1, dep2) => dep2.amoun_of_bribe - dep1.amoun_of_bribe);
      console.log(firstPartis);
    }
  } 


}


//P.S. https://github.com/RoksolianaMatseliukh/TypeScript/blob/master/app.ts