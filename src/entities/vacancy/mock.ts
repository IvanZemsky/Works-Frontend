import type { Vacancy } from "./model/types"

export const vacancy: Vacancy = {
   id: "1",
   title: "Frontend разработчик",
   description:
      "Разработка торгового терминала, торгового графика. Реализовывать realtime обновления, используя websocket api. Разрабатывать API для мобильного и веб клиента..",
   status: "open",
   employer: {
      id: "1",
      name: "Google",
      rating: 4.9,
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

   skills: ["React", "Vue"],
   experience: {
      min: 1.5,
      max: null,
      type: "years",
   },

   date: new Date("2022-01-01"),
   contacts: {
      email: "example@gmail.com",
      phone: "+7 (999) 999-99-99",
      name: "Иванов Иван Иванович",
   },
   schedule: "5/2",
   hoursPerDay: 8,
}
