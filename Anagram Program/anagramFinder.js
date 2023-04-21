const IsAnagram =(s1, s2) => {

//Replace any other characters apart from the alphabets and convert the string to lowercase
  s1 = s1.replace(/[^a-zA-Z]/g, '').toLowerCase();
  s2 = s2.replace(/[^a-zA-Z]/g, '').toLowerCase();

//Split,sort and join the string
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');

//Compare the two strings and return the boolean value  
  return s1 === s2;

}

console.log(IsAnagram(process.argv[2], process.argv[3]));