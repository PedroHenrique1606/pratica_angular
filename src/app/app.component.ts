import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pratica_angular';

  userName:string = "Rafael Olavo Cardoso Barbacena";

  userData = {
    email: "rafaelolavo@gmail.com",
    role: "Dev Fullstack",
  };

  userTasks = {
    taskOne: "B&Q - tela 16 de contratos",
    taskTwo: "B&Q - tela de login reformulada",
  };

  userStatus = {
    status: "Active",
    projects: "B&Q - Company energy",
  }

  /*FUNCIONÁRIOS */
  employee= {
    personOne: {
      name: "Marina Silva",
      position: "Sales Manager",
      age: 32,
      salary: 5500,
    },
  
    personTwo: {
      name: "André Santos",
      position: "Marketing Analyst",
      age: 28,
      salary: 3800,
    },
  
    personThree: {
      name: "Carla Ferreira",
      position: "Software Engineer",
      age: 25,
      salary: 4200,
    },
  
    personFour: {
      name: "Rafael Oliveira",
      position: "HR Coordinator",
      age: 35,
      salary: 6000,
    },
  
    personFive: {
      name: "Júlia Almeida",
      position: "Graphic Designer",
      age: 29,
      salary: 3500,
    },
  
    personSix: {
      name: "Pedro Costa",
      position: "Financial Analyst",
      age: 27,
      salary: 4800,
    },
  
    personSeven: {
      name: "Camila Rodrigues",
      position: "Doctor",
      age: 40,
      salary: 9000,
    },
  
    personEight: {
      name: "Lucas Pereira",
      position: "Civil Engineer",
      age: 33,
      salary: 7200,
    },
  
    personNine: {
      name: "Isabella Souza",
      position: "Lawyer",
      age: 31,
      salary: 6500,
    },
  
    personTen: {
      name: "Diego Martins",
      position: "IT Analyst",
      age: 26,
      salary: 4600,
    },
  }
};