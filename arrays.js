var chocolateBars=['snickers','hundred grand', 'kitkat','skittles'];
<<<<<<< HEAD
q=destructivelyAddElementToEndOfArray(chocolateBars,1)
=======
q=removeElementFromEndOfArray(chocolateBars)
>>>>>>> b395f0ca0f35a86448b5458fc43be8eea336c355



function addElementToBeginningOfArray(x,y){
  
  var z=[y,...x]
console.log(z)
  return z 
}
function destructivelyAddElementToBeginningOfArray(x,y){
   x.unshift(y)
   console.log(x)
  return x
}

function removeElementFromBeginningOfArray(x){
  z=x.slice(0)
   console.log(z)
   return z
}

function destructivelyRemoveElementFromBeginningOfArray(x){
x.shift()
<<<<<<< HEAD
return x
=======
>>>>>>> b395f0ca0f35a86448b5458fc43be8eea336c355
}


function removeElementFromEndOfArray(x){
  z=x.slice(0,x.length-1)
  console.log(z)
  return z
}

function destructivelyRemoveElementFromEndOfArray(x){
  x.pop()
   console.log(x)
   return x
}

<<<<<<< HEAD
function accessElementInArray(x,y){
z=x[y]
   return z
}


function addElementToEndOfArray(x,y){
z=[...x,y]
console.log(x)
  return z
}

function destructivelyAddElementToEndOfArray (x,y){
 x.push(y)
 return x 
}
=======
function destructivelyRemoveElementFromEndOfArray(x){
  x.pop()
   console.log(x)
   return x
}

>>>>>>> b395f0ca0f35a86448b5458fc43be8eea336c355
