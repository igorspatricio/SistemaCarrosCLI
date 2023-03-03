function sortTable(howIsSorted, list){
  list = list.sort((a, b) =>{
  var y = a[howIsSorted.which] 
  var x = b[howIsSorted.which]

  if(typeof(a[howIsSorted.which]) == 'string'){
    y = a[howIsSorted.which].toLowerCase() 
    x = b[howIsSorted.which].toLowerCase()
  }

  if (howIsSorted.sortType === '▾'){
    if (x > y){
      return -1;
    }
  }else{
    if (x < y){
      return -1;
    }
  }
  }) 

return list;
}

export default {
    sortTable
}