const course = {
    courseName : "JS",
    price : 999,
    courseTeacher : "Sejal"
}

// course.courseTeacher
// object destructring
const {courseTeacher: instructor} = course
// console.log(courseTeacher);
console.log(instructor);

// const navbar = ({company})=>{

// }

// navbar(companyName = "Sejal")


// ******************  API   **************

// {
//     "name" : " Rahul",
//     "courseName" : "JS",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]


{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "غزل",
          "last": "گلشن"
        },
        "location": {
          "street": {
            "number": 52,
            "name": "سبلان جنوبی"
          },
          "city": "بوشهر",
          "state": "البرز",
          "country": "Iran",
          "postcode": 84817,
          "coordinates": {
            "latitude": "19.2169",
            "longitude": "100.3248"
          },
          "timezone": {
            "offset": "+2:00",
            "description": "Kaliningrad, South Africa"
          }
        },
        "email": "gzl.glshn@example.com",
        "login": {
          "uuid": "8eb80542-da37-45eb-a364-558f8bcd483a",
          "username": "browngoose427",
          "password": "heritage",
          "salt": "PnDu6Syn",
          "md5": "fb1172febc9124c6f5d28f3869fad851",
          "sha1": "852a3e21d62e71742a683156aa346ab5a4c14e6b",
          "sha256": "1020b6f628cf9e3663901be340bc4526a15ff9e20aca8ccf04d8f5a3403f7a2d"
        },
        "dob": {
          "date": "1976-01-28T01:39:09.213Z",
          "age": 47
        },
        "registered": {
          "date": "2022-03-05T02:48:58.612Z",
          "age": 1
        },
        "phone": "067-82516201",
        "cell": "0979-843-1789",
        "id": {
          "name": "",
          "value": null
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/49.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
        },
        "nat": "IR"
      }
    ],
    "info": {
      "seed": "ea5d980d456d536d",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }
