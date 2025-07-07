import type { Vacancy } from "./model/types";

export const vacancy: Vacancy = {
   id: "1",
   title: "Frontend разработчик",
   description:
      "Разработка торгового терминала, торгового графика. Реализовывать realtime обновления, используя websocket api. Разрабатывать API для мобильного и веб клиента..",
   status: "open",
   employer: {
      id: "1",
      name: "Google",
      description: "Google",
      rating: 4.9,
      type: "LLC",
      website: "http://google.com",
      location: "Moscow"
   },
   address: {
      city: "Москва",
   },
   location: "remote",
   salary: {
      min: 100000,
      max: 200000,
      period: "month",
   },
   requirements: {
      skills: ["React", "Vue"],
      experience: {
         min: 1.5,
         max: null,
         type: "years",
      },
   },
   date: new Date(),
   contacts: {
      email: "example@gmail.com",
      phone: "+7 (999) 999-99-99",
      name: "Иванов Иван Иванович",
   },
   schedule: "5/2",
   hoursPerDay: 8,
}