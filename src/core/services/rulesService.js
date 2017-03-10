const rules = 'core/modules/widget/rules/rules.json';
const loans = './loan.json';

export const getRules = () => fetch(rules);

export const getLoans = () => fetch(loans);