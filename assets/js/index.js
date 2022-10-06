const personElman = {
    firstname: "Elman",
    lastname: "Veliyev",
    salary: 3000,
};
const personRauf = {
    firstname: "Rauf",
    lastname: "Xudiyev",
    salary: 1500,
};
const personMusa = {
    firstname: "Musa",
    lastname: "Muradov",
    salary: 5000,
};
const personAylan = {
    firstname: "Aylan",
    lastname: "Memmedova",
    salary: 3400,
};
const personTurkan = {
    firstname: "Turkan",
    lastname: "Mustafazade",
    salary: 1200,
};

const employees = [personElman, personRauf, personMusa, personAylan, personTurkan];

function sortingFunc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[minIndex].firstname[0] > arr[j].firstname[0]) minIndex = j;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

function forEachFunc(arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        let value = arr[index];
        callback(value);
    }
}

function averageSalary(arr) {
    let sum = 0;
    forEachFunc(employees, function (employee) {
        sum = sum + employee.salary;
    });

    return sum / arr.length;
}

sortingFunc(employees);
forEachFunc(employees, function (employee) {
    console.log(employee.firstname, employee.lastname, employee.salary);
});
console.log("Average Salary is ", averageSalary(employees));