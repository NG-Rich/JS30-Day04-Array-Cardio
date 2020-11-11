const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Blake, William', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 
                'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 
                'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 
                'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 
                'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 
                'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 
                'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 
                'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 
                'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 
                'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 
                'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 
                'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 
                'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 
                'Blair, Tony'];

const data = ['car', 'car', 'truck', 
              'truck', 'bike', 'walk', 
              'car', 'van', 'bike', 
              'walk', 'car', 'van', 
              'car', 'truck' ];

// Shows list of inventors          
const showInventors = () => {
  const toggleInventors = document.getElementById("inventors");
  document.getElementById("inventors").innerHTML = JSON.stringify(inventors, null, 4);
  
  if (toggleInventors.style.display === "inline-block") {
    toggleInventors.style.display = "none";
  }else {
    toggleInventors.style.display = "inline-block";
  }
}

// Shows list of people
const showPeople = () => {
  const togglePeople = document.getElementById("people");
  document.getElementById("people").innerHTML = JSON.stringify(people, null, 4);
  
  if (togglePeople.style.display === "inline-block") {
    togglePeople.style.display = "none";
  }else {
    togglePeople.style.display = "inline-block";
  }
}

// Shows list of data
const showData = () => {
  const toggleData = document.getElementById("data");
  document.getElementById("data").innerHTML = JSON.stringify(data, null, 4);
    
  if (toggleData.style.display === "inline-block") {
    toggleData.style.display = "none";
  }else {
    toggleData.style.display = "inline-block";
  }
}

// Array.prototype.filter()
const inventorFilter = () => {
  const toggleInventors = document.getElementById("inventorsFilter");
  const filterInventors = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
  document.getElementById("inventorsFilter").innerText = JSON.stringify(filterInventors, null, 4);

  if (toggleInventors.style.display === "inline-block") {
    toggleInventors.style.display = "none";
  }else {
    toggleInventors.style.display = "inline-block";
  }
}

// Array.prototype.map()
const inventorsMap = () => {
  const toggleInventors = document.getElementById("inventorsMap");
  const inventorsFirstLast = inventors.map(inventor => [inventor.first, inventor.last]);

  document.getElementById("inventorsMap").innerHTML = JSON.stringify(inventorsFirstLast, null, 4);

  if (toggleInventors.style.display === "inline-block") {
    toggleInventors.style.display = "none";
  }else {
    toggleInventors.style.display = "inline-block";
  }
}

// Array.prototype.sort()
const inventorsSort = () => {
  const inventorsBirthday = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
  const toggleInventors = document.getElementById("inventorsSort");
  document.getElementById("inventorsSort").innerHTML = JSON.stringify(inventorsBirthday, null, 4);

  if (toggleInventors.style.display === "inline-block") {
    toggleInventors.style.display = "none";
  }else {
    toggleInventors.style.display = "inline-block";
  }
}

// Array.prototype.reduce()
const inventorsReduce = () => {
  const inventorsTotalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
  const toggleInventors = document.getElementById("inventorsReduce");
  document.getElementById("inventorsReduce").innerHTML = "Total years: " + inventorsTotalYears;

  if (toggleInventors.style.display === "flex") {
    toggleInventors.style.display = "none";
  }else {
    toggleInventors.style.display = "flex";
  }
}

// People sort Exercise
const peopleSort = () => {
  const sortPeople = people.sort((lastPerson, nextPerson) => {
    const [aLast, aFirst] = lastPerson.split(", ");
    const [bLast, bFirst] = nextPerson.split(", ");
    return aLast > bLast ? 1 : -1;
  });

  const togglePeople = document.getElementById("peopleSort");
  document.getElementById("peopleSort").innerHTML = JSON.stringify(sortPeople, null, 4);

  if (togglePeople.style.display === "block") {
    togglePeople.style.display = "none";
  }else {
    togglePeople.style.display = "block";
  }
}

// 8. Reduce Exercise
const dataReduce = () => {
  const howManyInstances = data.reduce((obj, item) => {
    if(!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});

  const toggleData = document.getElementById("dataReduce");
  document.getElementById("dataReduce").innerHTML = JSON.stringify(howManyInstances, null, 4);

  if (toggleData.style.display === "inline-block") {
    toggleData.style.display = "none";
  }else {
    toggleData.style.display = "inline-block";
  }
}

/*
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
inventors.forEach(inventor => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    console.log(inventor);
  }
});

const checkInventors = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(checkInventors);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsFirstLast = inventors.map(inventor => [inventor.first, inventor.last]);

inventorsFirstLast.forEach(invent => {
  console.log(invent);
});

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsBirthday = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));

console.log(inventorsBirthday);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const inventorsTotalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);

console.log(inventorsTotalYears);

// 5. Sort the inventors by years lived
const inventorsBirthday = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));

console.log(inventorsBirthday);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll("a"));
const de = links.map(link => link.textContent).filter(streetName => streetName.includes("de"));

const category = Array.from(document.querySelectorAll(".mw-category a"));
const de = category.map(link => link.textContent).filter(streetName => streetName.includes("de"));

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortPeople = people.sort((lastPerson, nextPerson) => {
  const [aLast, aFirst] = lastPerson.split(", ");
  const [bLast, bFirst] = nextPerson.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(sortPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const howManyInstances = data.reduce((obj, item) => {
  if(!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(howManyInstances);
*/