export const calcTotalPrice = items => items.reduce((acc, tea) => (acc += tea.price), 0);
