console.log('Поиск максимального числа:')
const nummer = [12,4,65,6,5];

let results = nummer[0];
for(word of nummer){ 
   if (word > results){
    results = word;
   }
}
console.log(results);

console.log("Генератор таблицы умножения на 5:")

for(let i=0;i<11;i++){
    let sum =5*i;
    console.log("5"+"*"+i+"="+sum)
}

console.log("Подсчет четных чисел:")

let count=0;
for(num of nummer){
    if(num%2==0){
        count++;
    }
}
console.log(count)
console.log("Реверс массива: ")
array = nummer.reverse();
for(let i=0;i<array.length;i++){ 
console.log(array[i])
}