import axios from 'axios';

const rules = require('core/modules/widget/rules/rules.json');

const getRules = () => axios.get(rules);

export default getRules;