

var testObjekat = {
	naziv: "Startit kurs pravljenja sajtova",
	trajanjeNedelja: 33,
	predavac: {
		ime: "Petar",
		prezime: "Popovci"
	},
	ocenePolaznika: [3, 2, 7, 4, 8, 1, 9, 2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1, 9],
	organizacija: "Startit",
};

var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  },
  {
  	name: 'John Doe',
  	yearsExperience: 7,
  	department: 'Management'
  }
];

//---------prvi na casu zadatak--------------------------------------

var itEmployees = 0;
var engineeringEmployees = 0;
var managementEmployees = 0;

for (i = 0; i<people.length; i++) {
	if (people[i].department == 'IT') {
		itEmployees++;
	} else if (people[i].department == 'Engineering') {
		engineeringEmployees++;
	} else if (people[i].department == 'Management') {
		managementEmployees++;
	}
}

var departmentExperience = {
	Engineering: engineeringEmployees,
	IT: itEmployees,
	Management: managementEmployees
}

console.log(departmentExperience);

//----------vezba 2--------skoro gotov--------------

var newbie, amateur, expert, pro;
newbie = [];
amateur = [];
expert = [];
pro = [];

var object = {
newbie,
amateur,
expert,
pro
};

for (i = 0; i < people.length; i++) {
	if (people[i].yearsExperience < 3) {
		newbie.push(people[i].name);
	} else if (people[i].yearsExperience >= 3 && people[i].yearsExperience < 7) {
    amateur.push(people[i].name);
  } else if (people[i].yearsExperience >= 7 && people[i].yearsExperience <= 10) {
    pro.push(people[i].name);
  } else {
    expert.push(people[i].name);
  }
}

console.log(object);

//-------------vezba 3-------------

var niz = [];

for (i = 0; i < people.length; i++) {
	niz.push(people[i].name);
}

console.log(niz);

//------------vezba 4--------------------

var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

var okidac = multiplyEvenAndOdds(test_niz1);
var okidac2 = multiplyEvenAndOdds(test_niz2);
var okidac3 = multiplyEvenAndOdds(test_niz3);

function multiplyEvenAndOdds(array) {
	for (i = 0; i<array.length; i++) {
	//mnozi neparne sa 4
		if (array[i] / 2 % 1) {
			array[i] *= 4
  //mnozi parne sa 3
		} else {
      array[i] *= 3
    }
	}
}

console.log(test_niz1);
console.log(test_niz2);
console.log(test_niz3);

//------------vezba 5------skoro gotovo---------

var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

var limit1 = 5;
var limit2 = 47;
var limit3 = 3;

var novi_niz = [];

var okidac = getNumberOfElementsGreaterThan(test_niz1, limit1);
var okidac2 = getNumberOfElementsGreaterThan(test_niz2, limit2);
var okidac3 = getNumberOfElementsGreaterThan(test_niz3, limit3);

function getNumberOfElementsGreaterThan (array, limit) {

	for (i = 0; i<array.length; i++) {
		if (array[i] < limit) {
			novi_niz.push(array[i]);
		}
	}
};

console.log(novi_niz);

