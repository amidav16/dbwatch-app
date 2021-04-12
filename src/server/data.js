//Example data, we can use webpack and rest api to fetch later

const pieData = [
    { name: "Documents", value: 14 },
    { name: "Temporary", value: 11 },
    { name: "Desktop", value: 7 },
    { name: "Other", value: 8 }
]

const barData = [
    {
      name: "Monday",
      Desktop: 7,
      Documents: 14,
      Temporary: 11,
      Other: 8,
      Total: 40
    },
    {
      name: "Tuesday",
      Desktop: 7,
      Documents: 16,
      Temporary: 13,
      Other: 8,
      Total: 44
    },
    {
      name: "Wednesday",
      Desktop: 13,
      Documents: 18,
      Temporary: 11,
      Other: 8,
      Total: 50
    },
    {
      name: "Thursday",
      Desktop: 16,
      Documents: 31,
      Temporary: 19,
      Other: 19,
      Total: 85
    },
    {
      name: "Friday",
      Desktop: 10,
      Documents: 41,
      Temporary: 21,
      Other: 11,
      Total: 83
    },
    {
      name: "Saturday",
      Desktop: 11,
      Documents: 19,
      Temporary: 10,
      Other: 7,
      Total: 47
    },
    {
      name: "Sunday",
      Desktop: 18,
      Documents: 31,
      Temporary: 15,
      Other: 12,
      Total: 76
    }
  ];

  const lineData = [
    {
      Name: "12:00",
      Desktop: 3,
      Documents: 14,
      Temporary: 6,
      Other: 1
    },
    {
      Name: "13:00",
      Desktop: 7,
      Documents: 16,
      Temporary: 11,
      Other: 8
    },
    {
      Name: "14:00",
      Desktop: 8,
      Documents: 13,
      Temporary: 11,
      Other: 3
    },
    {
      Name: "15:00",
      Desktop: 18,
      Documents: 31,
      Temporary: 17,
      Other: 21
    },
    {
      Name: "16:00",
      Desktop: 7,
      Documents: 17,
      Temporary: 13,
      Other: 6
    },
    {
      Name: "17:00",
      Desktop: 5,
      Documents: 4,
      Temporary: 7,
      Other: 3
    },
    {
      Name: "18:00",
      Desktop: 11,
      Documents: 19,
      Temporary: 10,
      Other: 7
    },
    {
      Name: "19:00",
      Desktop: 4,
      Documents: 6,
      Temporary: 11,
      Other: 5
    },
    {
      Name: "20:00",
      Desktop: 21,
      Documents: 41,
      Temporary: 25,
      Other: 11
    },
  ];

  const syncData = [
    {
      Name: "12:00",
      Monday: 34,
      Thursday: 45
    },
    {
      Name: "13:00",
      Monday: 42,
      Thursday: 74
    },
    {
      Name: "14:00",
      Monday: 37,
      Thursday: 61
    },
    {
      Name: "15:00",
      Monday: 42,
      Thursday: 81
    },
    {
      Name: "16:00",
      Monday: 51,
      Thursday: 89
    },
    {
      Name: "17:00",
      Monday: 47,
      Thursday: 84
    },
    {
      Name: "18:00",
      Monday: 44,
      Thursday: 77
    },
    {
      Name: "19:00",
      Monday: 34,
      Thursday: 81
    },
    {
      Name: "20:00",
      Monday: 27,
      Thursday: 67
    },
  ];


export function getPieData() {
    return pieData;
}

export function getBarData() {
    return barData;
}

export function getLineData() {
    return lineData;
}

export function getSyncData() {
  return syncData;
}
