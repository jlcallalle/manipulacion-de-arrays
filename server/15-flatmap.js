const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

// Mostrar Array completo de todos los atributos de los usuarios.
const rta = users.map((user) => user.attributes).flat();
const rta2 = users.flatMap((user) => user.attributes);
console.log("map-flat", rta);
console.log("rta2", rta2);


// Deseo un array lineal de las fechas de inicio
// nota: map y flat funcionan sobre array
// objeto calendar convertir en array. (Object.values) 

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const rta4 = Object.values(calendars); // convertimos el objeto en un array
console.log('rst4', rta4);

const rta3 = Object.values(calendars).flatMap(item => {
    console.log('item', item);
    return item.map(date => date.startDate);
});
console.log(rta3);