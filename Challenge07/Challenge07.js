"use strict";

// 1) ---------------------
//
//  using the (objLat) function; return the formatted text based on the provided object as the example:
//  let obj = {
//      firstName: 'Jaber',
//      lastName: 'Saleh',
//      age: 67,
//      hobby: 'Gaming and Sleeping'
//  }
//   ===>
//   'my name is Jaber Saleh I am 67 YO, and I love Gaming and Sleeping.'

//  Note that:
//  1- The text template is 'my name is ** ** I am ** YO, and I love **.'
//  2- The first letters of the firstName and lastName should be capital letter

// ------------------------


const objLat = (obj) => {
    const firstName=obj.firstName;
    const lastName=obj.lastName;
    const first=firstName.charAt(0).toUpperCase() + firstName.slice(1)
    const last=lastName.charAt(0).toUpperCase() + lastName.slice(1)
    return  `my name is ${first} ${last} I am ${obj.age} YO, and I love ${obj.hobby}.`};

// 2) ---------------------
//
//  Rekey is receiving info about applicants for his startup company (as array of objects), containing first name,
//  last name, age and technology they know.
//  Rekey only cares about the full name and the technology if the applicant have more than one year of Experience
//
//  Reformat the array of objects that you are receiving by returning a new array of objects that contain only
//  fullName and tech if the applicant has more than one year of Experience

// EX:
// let cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 7,
//         tech: "Java"
//     }
// ]
//
//   ===>

//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     },
//     {
//         fullName: "Shira",
//         tech: ".Net"
//     },
//     {
//         fullName: "Isabella",
//         tech: "Java"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

const cvFormatter = (arr) => {
    let newCvs =[]
   for (var i =0 ; i < arr.length; i++)
   {
       if(arr[i].yearsOfExperience >1 )
       {
    let obj;
        if(arr[i].firstName != null && arr[i].lastName!=null)
        {      
             obj ={
               
           fullName:arr[i].firstName+" "+arr[i].lastName,
           tech:arr[i].tech
        }
    }
        

        else if (arr[i].firstName == null )
        {
             obj ={
               
                fullName:arr[i].lastName,
                tech:arr[i].tech
             }
            
        }
        else if (arr[i].lastName == null )
        { obj ={
               
            fullName:arr[i].firstName,
            tech:arr[i].tech
         }
            
        }
    
newCvs.push(obj);
    }
    

   }
        
    
    return newCvs;
};

// 3) ---------------------
//
//  Rekey wants to get statistic about the applicants
//  using the array of object you will be getting, return an object that has the following properties
//
// let result = {
//     python_Devs: 0,
//     javaScript_Devs: 0,
//     dotNet_Devs: 0,
//     java_Devs: 0,
//     totalApplicants: 0,
//     rejectedApplicants: 0,
// }
//
// and fill it up based on the results

//  Note that:
//  1- rejectedApplicants are applications that has both the names empty or null and whoever have less than one year of Experience


const applicationsStatics = (arr) => {
    // write your code here
    let result = {
         python_Devs: 0,
         javaScript_Devs: 0,
         dotNet_Devs: 0,
         java_Devs: 0,
         totalApplicants: 0,
         rejectedApplicants: 0,
         };
let python=0,js=0,net=0,java=0,total=0,rejected=0;
            for (var i = 0 ; i <arr.length;i++)
{
if (arr[i].yearsOfExperience < 1 || arr[i].firstName ==null || arr[i].firstName == "" ||arr[i].lastName ==null || arr[i].lastName == "" )
{
    rejected+=1;
}

switch(arr[i].tech)

{
case "JS":js+=1;
    total+=1;
    break;
case ".Net":  
net+=1;
total+=1;
break;
case "Java":
    java+=1;
    total+=1;
    break;
case "Python":
    python+=1;
    total+=1;
    break;

}




}

result.totalApplicants=total;
result.dotNet_Devs=net;
result.python_Devs=python;
result.rejectedApplicants=rejected;
result.java_Devs=java;
result.javaScript_Devs=js;

return result;
};

// 4) ---------------------
//
//  A Certain School principal wants to calculate the average score of each class in each grade in the school
//  so he requested a programmer to solve this issue for him instead of doing it again every time
//
//  given the school data, calculate the average score of the students of each class in each grade
//  then change the avg value for the class
//  EX:

let data = {
    SchoolName: "David Academy",
    Capacity: 1000,
    grades: [
        {
            grade: "First",
            numberOFClasses: 3,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        89, 87, 45, 48, 89, 65, 21, 54, 78, 62, 51, 54, 50, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        87, 54, 95, 45, 41, 51, 25, 63, 58, 47, 64, 51, 98, 100
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        74, 85, 20, 51, 59, 58, 62, 71, 74, 99, 84, 71, 38, 70
                    ]
                },
            ]
        },
        {
            grade: "Second",
            numberOFClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        71, 82, 86, 3, 1, 52, 91, 84, 44, 68, 64, 23, 80, 60,
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        86, 39, 71, 17, 61, 76, 60, 54, 42, 65, 49, 75, 96, 70
                    ]
                },
            ]
        },
        {
            grade: "Third",
            numberOFClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        11, 12, 28, 78, 57, 3, 54, 72, 14, 19, 88, 74, 68, 58
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        62, 8, 35, 43, 96, 9, 97, 73, 4, 32, 18, 81, 70, 42
                    ]
                },
            ]
        },
        {
            grade: "Forth",
            numberOFClasses: 4,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        63, 71, 93, 87, 83, 85, 67, 49, 62, 45, 38, 48, 58, 52
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        100, 45, 70, 75, 87, 63, 39, 46, 54, 68, 74, 96, 52, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        97, 54, 80, 95, 69, 31, 88, 84, 50, 81, 67, 34, 41, 87
                    ]
                },
                {
                    avg: 0,
                    classNumber: "04",
                    classScores: [
                        64, 96, 66, 38, 78, 58, 43, 100, 34, 56, 82, 53, 89, 72
                    ]
                },
            ]
        },
    ],
};

//  Note that:
//  1- This is not the exact data you will be getting every time and the solution should be dynamic
//  2- You need to round the average to the nearest lower number 

const classesAvg = (data) => {
    // write your code her

    for(var i =0 ; i < data.grades.length;i++)
    {
        for (var j = 0 ; j <data.grades[i].classes.length;j++)
        {

            let count =0,sum=0;
            for (var x =0 ; x<data.grades[i].classes[j].classScores.length ; x++)
            {
                sum+=data.grades[i].classes[j].classScores[x];
                count+=1;

            }
            data.grades[i].classes[j].avg=Math.floor(sum/count);
            
        }
    }
    return data;
};

module.exports = { objLat, cvFormatter, applicationsStatics, classesAvg };