const getCoffeeCups = (minRead: number) => {
  const coffeeCups: number = minRead / 5;
  const coffeeCupsRounded: number = Math.round(coffeeCups);

  return coffeeCupsRounded == 0 ? coffeeCupsRounded + 1 : coffeeCupsRounded;
};

export { getCoffeeCups };
