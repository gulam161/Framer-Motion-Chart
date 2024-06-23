export const res = {
  message: "Success",
  data: {
    round: "Pre Seed",
    runway: 6,
    needToRaise: 1000,
    breakdown: {
      marketing: {
        label: "Marketing",
        value: 600,
      },
      infraProduct: {
        label: "Infra & product",
        value: 200,
      },
      rent: {
        label: "Rent",
        value: 300,
      },
      salaries: {
        label: "Salaries",
        value: 2900,
      },
    },
  },
};

export const pieRes = {
  _id: "664a38896fe66ae6d840e13c",
  label: "First report",
  pinned: false,
  description:
    "Lorem ipsum dolor sit amet. Eos aliquid reprehenderit et omnis vitae nam recusandae omnis ab consequatur impedit? Ut officiis dolorem ex doloremque",
  reportData: [
    {
      id: "664e20cc1d89a5dacf16e78c",
      fields: [
        {
          id: "marketing",
          type: "expenses",
          parent: "mobileApp",
        },
        {
          id: "salaries",
          type: "expenses",
          parent: "mobileApp",
        },
      ],
      startDate: "August 2024",
      duration: 6,
      visualType: "bar",
      values: {
        marketing: {
          "August 2024": 1404.93,
          "September 2024": 1573.52,
          "October 2024": 1762.34,
          "November 2024": 1973.82,
          "December 2024": 2210.68,
          "January 2024": 0,
        },
        salaries: {
          "August 2024": 10,
          "September 2024": 10,
          "October 2024": 10,
          "November 2024": 10,
          "December 2024": 10,
          "January 2024": 0,
        },
      },
    },
  ],
};
