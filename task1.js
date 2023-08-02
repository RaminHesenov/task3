// 1-ci sual

// let fullName = 'Ramin Hesenov Tofiq';
// let deyisen = fullName.split('');
// console.log(deyisen);

// 2-ci ve 3-cu sual

// let ad ='Ramin Hesenov Tofiq'

// let split = ad.split('')
// console.log(split);

// let fistName = split.slice(6,13)
// let lastName = split.slice(0,5)
// const newArray = [fistName,lastName,split.splice(14,20)]
// console.log(newArray);


// let fullName = 'Ramin Hesenov Tofiq';
// let deyisen = fullName.split(' ');
// let Hesenovindeks = fullName.indexOf('Hesenov');
// while (Hesenovindeks !== -1) {
//     deyisen.splice(Hesenovindeks, 1);
//     Hesenovindeks = deyisen.indexOf('Hesenov');
// }
// deyisen.unshift('Hesenov')
// let deyisilenfulName = deyisen.slice().join(' ')
// console.log(deyisilenfulName);


// 4-cu sual

/*let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    count++;
  }
}

console.log(count);*/

// 5-ci sual

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let hesablama = arr.reduce((reqem, indiki) => {return reqem+indiki})
// console.log(hesablama);

// 6-ci sual

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let sorch  = arr.sort()
// console.log(sorch);

// 7-ci sual

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let min = Math.min(...arr);
// let max = Math.max(...arr);
// console.log(min,   "minimal reqem");
// console.log(max,   "maxsimal reqem")

// 8-ci sual

// let fullName = 'Ramin Hesenov Tofiq';

// let index = fullName.indexOf('Ramin');

// if (index !== -1) {
//  let splitee = fullName.split(' ');
 
//  let word = splitee[index];
 
//  let uzunlug = word.length;

//  console.log(uzunlug);
// }else {
//     console.log("ramin tapilmadi");
// }


// 9-cu sual

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let  bolme = arr.map((arr, nomre) => arr /2);
// let searchValue = 2;

// let indexes = bolme.reduce((acc, curr, index) => {
//   if (curr === searchValue) {
//     acc.push(index);
//   }
//   return acc;
// }, []);

// console.log(indexes);

// 10-cu sual

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let maxsum = Math.max(...arr);
// let indexs = maxsum.valueOf()
// console.log(indexs);

//11-ci sual

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let sorchValue = 4;
// let index = [];
// for (let i = 0; i < arr.length; i++) {
//  if (arr[i] === sorchValue) {
//     index.push(i);
//  }
// }

// console.log(index);

//12-ci sual 

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let sorchValue = 5;
// let index = [];
// for (let i = 0; i < arr.length; i++) {
//  if (arr[i] === sorchValue) {
//     index.push(i);
//  }
// }
// let minimum = Math.min(...index);
// let maxsimum = Math.max(...index);
// console.log(maxsimum);
// console.log(minimum);
// console.log(index);

//13-cu sual 

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let newArry = arr.filter((element) => element > 2);
// console.log(newArry);


//14-ci sual

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let sorchValue = 7;
// let index = [];
// for (let i = 0; i < arr.length; i++) {
//  if (arr[i] === sorchValue) {
//     index.push(i);
//  }
// }
// console.log(index); 

// let searchNumber = 7;
// let sumIndexes = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === searchNumber) {
//     sumIndexes += i;
//   }
// }

// console.log(sumIndexes); 

let arr2 = [
        {
            name: 'test',
            key: 1
        },
        {
            name: 'task',
            key: 2
        },
        {
            name: 'tanqo',
            key: 3
        },
        {
            name: 'like',
            key: 4
        },
        {
            name: 'task',
            key: 5
        },
        {
            name: 'trust',
            key: 6
        },
        {
            name: 'test',
            key: 7
        },
        {
            name: 'last',
            key: 8
        },
        {
            name: 'tanqo',
            key: 9
        },
        {
            name: 'elephant',
            key: 10
        },
        {
            name: 'love',
            key: 11
        },
        {
            name: 'small',
            key: 12
        },
        {
            name: 'little',
            key: 13
        },
    ]

    // 16-ci sual
// function findT() {
//     const newArr = []
//     arr2.map((item) => item.name.toLocaleLowerCase().startsWith('t') ? newArr.push(item) : item)
//     return newArr
// }

// console.log(findT());

// 17-ci sual
// let filterwords =  arr2.filter((item) => item.name.startsWith('t') && item.name.endsWith('t'));
    
//     console.log(filterwords);

// 18-ci sual

// let filterwords =  arr2.filter((item) => item.name.startsWith('t') && item.name.endsWith('t'));
    
//     console.log(filterwords);

//     let keyler = filterwords.reduce((reqem, item) => reqem + item.key, 0)
//     console.log(keyler);

// 19-ci sual
// let filterwords =  arr2.filter((item) => item.name.endsWith('e'));

//  let tezead = filterwords.map((item) => ({...item,name:"SuperDev"}))
//  console.log(tezead);

//20-ci sual

// let uzunlug = arr2.reduce((max,item,) => (item.name.length > max.name.length ? item : max),   arr2[0]);

// console.log(uzunlug);

//21-ci sual
// let uzunlug = arr2.reduce((max,item,) => (item.name.length > max.name.length ? item : max),   arr2[0]);
// let index = arr2.indexOf(uzunlug);
// console.log(index);

// 22-ci sual

// let sorch = arr2.filter((item) => item.name.length === 4);
// console.log(sorch);

//23-cu sual

// let uzunlug = arr2.reduce((max,item,) => (max.key.length > item.key.length ? max : item),   arr2[0]);
// console.log(uzunlug);

//24-cu sual

// let sorch = arr2.findIndex((item)  => item.name.includes('ll'));
// console.log(sorch);

//25-ci sual

// let sorch = arr2.filter((item)  => item.name.match('tt'));

// let sorch1 = arr2.filter((item) => item.name.startsWith('t') && item.name.endsWith('t'));

// let key1 = sorch1.map((item) => item.key);
// let key = sorch.map((max) => max.key);

// console.log(sorch);
// console.log(sorch1);
// console.log(key);
// console.log(key1);
