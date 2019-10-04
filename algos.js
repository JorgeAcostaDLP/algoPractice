const addOne = (arr, target) => {
  for(i = 0; i < arr.length; i++) {
    for(j = 0; j < arr.length; j++) {
        if(i === j) continue
        if(arr[j]+arr[i] === target) return true
    }
  }
  return false
}

const addTwo = (arr, target) => {
  let point1 = 0
  let point2 = arr.length-1

  while(point1 !== point2){
    if(arr[point1] + arr[point2] < target){
      point1++
    }
    if(arr[point1] + arr[point2] === target){
      return true
    }
    if(arr[point1] + arr[point2] > target){
      point2--
    }
  }
  return false
}

const addThree = (arr, target) => {
  let compArray = []
  for (let i = 0; i < arr.length; i++) {
    let complement = target-arr[i]
    console.log(compArray)
    if(compArray.indexOf(complement)!==-1) return true
    else compArray.push(arr[i])
  }
  return false
}

const merge = (a,b) => {
  let ans = ''
  if(a.length === b.length || a.length > b.length) {
    large = a
    small = b
  }
  else {
    large = b
    small = a
  }
  for(i=0; i < large.length; i++) {
    if(i === small.length) {ans += large.slice(i)
    break}
    else{
      ans+=large[i]+small[i]
    }
  }
return ans
}

const maxChar = (input) => {
  let dictionary = {} 
  maxCharCount = 1
  maxCharacter = input[0]

  for(i = 0; i < input.length; i++) {
    curChar = input[i]
    if(dictionary[curChar]) dictionary[curChar] ++
    else dictionary[curChar] = 1
  
    if(maxCharCount < dictionary[curChar]) {
      maxCharacter = curChar
      maxCharCount = dictionary[curChar]
    }

  }  
  return maxCharacter + maxCharCount
  }
  
  
const sumArray = (arr, target) => {
  let compArray = []
  let ans = []
  for (let i = 0; i < arr.length; i++) {
    let complement = target-arr[i]
    if(compArray.indexOf(complement)!==-1 && ans.indexOf(arr[i])===-1){
      ans.push(complement)
      ans.push(arr[i])
    }
    else compArray.push(arr[i])
  }
  return ans
}

const subStringFinder = (subString, string) => {
  let firstSub = subString.slice(0,subString.indexOf('*'))
  let secondSub = subString.slice(subString.indexOf('*')+1)
  let firstIndex = string.indexOf(firstSub)
  let secondIndex = string.indexOf(secondSub)
  if(firstIndex < secondIndex) return firstIndex
  else return -1

}

const minimumIncrements = (array) => {
  let sum  = 0
  let unique = false
  while(unique === false){
    let changes = 0
    for(i = 0; i < array.length; i++){
      if(array[i]===array[i+1]) {array[i+1]++
      changes ++}
    }
    if (changes === 0) unique = true
    else array.sort()

  }
  return array
}

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

const arrSum = arr => arr.reduce((a,b) => a + b, 0)

//Does not work
const partitionedArray = (array) => {
  array = bubbleSort(array)
  const halfway = Math.floor(array.length/2)
  let i = array.length-1
  while(i > halfway) {
    let right = array.slice(i)
    let left = array.slice(0,i)
    if(arrSum(right)===arrSum(left)) return true
    else i--
  }
  return false
}

//dp fibonacci
memo = {}
const fib = (n) => {
  if(memo[n]) return memo[n]
  if(n <= 2) return 1
  else {
    f = fib(n-1) + fib(n-2)
    memo[n] = f
  return f}
}

//dp2 fibonacci
const fib2 = (n) => {
  let fibb = {}
  for (k=1; k<=n; k++){
    if(k<=2) f = 1
   
    else{
       let m=k-1
       let n = k-2
       f = fibb[m] +fibb[n]
    } 
    fibb[k]=f 

  }
  return fibb[n]
}

const painting = (a) =>{
  a.unshift(0)
  sum = 0
  for(i=0; i<a.length; i++){
    if(a[i+1]-a[i]>0) sum += a[i+1-a[i]]
    console.log(sum)
}
return sum 
}

function kDifference(arr, k) {
    // Write your code here
    let answer = []
    for(let i = 0; i<arr.length; i++) {
        for(let j = 0; j<arr.length; j++){
            if(i===j) continue
            let distinct = (answer.indexOf(arr[j])===-1 || answer.indexOf(arr[i])===-1)
            console.log(distinct)
            if(Math.abs(arr[j]-arr[i]) === k && distinct) {
                answer.push(arr[j])
                answer.push(arr[i])
            }
        }
    }
    return answer.length/2
}

function consecutive(num) {
  let ans = 0
  let start = end = 1
  let sum = 0
  while(start <= num/2+1) {
    sum += end

    if(sum === num){
      ans++
    }
    if(sum < num)
    end++

    if(sum > num){
    start++
    sum=0
    end=start
  }
  }
return ans
}

// Number of consecutive subArrays that multiplied are equal or less than target Input: nums = [10, 5, 2, 6], k = 100 Output: 8
const maxConsecutiveProduct = (array, target)=>{

  let ans = []
  let product = 1

  for(i = 0; i < array.length; i++) {
    for(j= i; j < array.length; j++) {
        product = arrayProduct(array.slice(i,j+1))   
        console.log(array.slice(i,j+1))
        if(product < target)
        ans.push(product)
      }
    product = 1
    }
  
return ans.length
}

const arrayProduct = (arr) => arr.reduce((a,b) => a*b,1)


