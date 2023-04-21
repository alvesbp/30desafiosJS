//            ----MINHA RESPOSTA----     //

class LicencaDeVoo {
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
    this.flyingLicense = false;
  }

  dataObj() {
    const ano = this.birthday.getYear().toString();
    const mes =
      this.birthday.getMonth() < 9
        ? `0${this.birthday.getMonth() + 1}`
        : this.birthday + 1;

    const objData = {
      ano,
      mes,
    };
    return objData;
  }

  generateFlyingLicense() {
    const arrlastName = this.lastName.split("");
    let licenca = [];
    for (let i = 0; i < 5; i++) {
      if (arrlastName[i]) {
        licenca[i] = arrlastName[i].toUpperCase();
      } else {
        licenca[i] = 9;
      }
    }
    const objData = this.dataObj();
    licenca.push(
      `-${objData.ano[0]}${objData.mes}${
        objData.ano[1]
      }.${this.firstName[0].toLowerCase()}`
    );
    this.flyingLicense = licenca.join("");

    return this;
  }

  pilot() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthday: this.birthday,
      flyingLicense: this.flyingLicense,
    };
  }
}
const pilot1 = new LicencaDeVoo("John", "Doe", "05-25-1977");
pilot1.generateFlyingLicense();
console.log(pilot1);

// ----RESPOSTA DO PROFESSOR----
// class Pilot {
//   constructor(firstName, lastName, birthday) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(birthday);
//     this.flyingLicense = false;
//   }

//   generateFlyingLicense() {
//     let license = "";

//     for (let i = 0; i < 5; i++) {
//       license += this.lastName[i] ? this.lastName[i].toUpperCase() : "9";
//     }

//     license += "-";
//     license += this.birthday.getFullYear().toString()[2];
//     license += this.getBirthdayFullMonth();
//     license += this.birthday.getFullYear().toString()[3];
//     license += ".";
//     license += this.firstName[0].toLowerCase();
//     this.flyingLicense = license;
//   }

//   getBirthdayFullMonth() {
//     if (this.birthday.getMonth() < 9) {
//       return `0${this.birthday.getMonth() + 1}`;
//     } else {
//       return `${this.birthday.getMonth() + 1}`;
//     }
//   }
// }
// const pilot1 = new Pilot("John", "Doe", "05-25-1977");
// pilot1.generateFlyingLicense();
// console.log(pilot1);
