interface IBlockStale {
  readonly id: string // Только для чтения
  color?: string // Не обязательное значение
  size: {
    width: number,
    height: number
  }
}

const newsBlock: IBlockStale = {
  id: '1523',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc' // Можно не указывать
};

newsBlock.color = '#000';

// Привязка объекта к типу
const lastNewsBlock = {} as IBlockStale;
const importantNewsBlock = <IBlockStale>{}; // Старая запись


// Наследование интерфейса (Новый интерфейс наследует свойства старого интерфейса)

interface BlockStyleWithArea extends IBlockStale {
  getArea: () => number
}

const getArea: BlockStyleWithArea = {
  id: '0',
  size: {
    width: 20,
    height: 12
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
};

// Имплементирование интерфейса классом

interface IClock {
  time: Date

  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

// Интерфейс для объекта с множеством динамических ключей

interface IStyle {
  [key: string]: string
}

const css: IStyle = {
  border: '1px solid black',
  marginTop: '6px'
};


// Пример типизации на структуре (shape) объектов.
// Такой способ типизации называют неявной или «утиной» — объект относят к тому или иному типу
// (классу, интерфейсу), если он имеет (реализует) все его свойства и методы.

interface IPet {
  name: string;
  age: number;
  color: string;
}

function callPet(pet: IPet): void {
  console.log(`Hey, ${pet.name}, come here!`);
}

callPet({name: 'Bobby', age: 2, color: 'white'});

// Заметим, что объект питомца создан “на месте”. Нигде не указано, что он реализует интерфейс Pet,
// проверка происходит только на соответствие свойств в самой функции callPet.
//
// Если в передаваемый объект добавить свойство, которого нет в интерфейсе или, наоборот, убрать
// одно из описанных, компилятор TS выдаст ошибку о несоответствии типов. Это и есть
// неявная или «утиная» типизация.
//
// Этот пример показывает основное назначение и использование интерфейсов в TS.


// Типизация функций

interface IBuild {
  (address: string, type: string): {
    address: string,
    type: string
  };
}
let buildHouse: IBuild;

buildHouse = function (address: string, type: string) {
  return {address, type};
};

const WinterPalace = buildHouse('Palace Square', 'palace');
