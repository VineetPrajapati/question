const countVowel = (str) => {
    let vowel = ["a", "e", "i", "o", "o;"];
    let char = str.split("")
    let count = 0;
    for (let elem of char) {
      if (vowel.includes(elem.toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countVowel("Hello World"))
  console.log(countVowel("Look the world from different perspective"))