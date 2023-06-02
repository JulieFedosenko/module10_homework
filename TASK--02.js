let x = 54;

if (typeof x === 'number') {
  console.log(x +` — число`);
  
} else if (typeof x === 'string') {
  console.log(x +` — строка`);
  
} else if (typeof x === 'boolean') {
   console.log(x +' - булевый тип данных');
  
}else{
    console.log('Тип данных не определен');
}