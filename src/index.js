import './index.css';

import numeral from 'numeral';

const courseValue = numeral(0.2142).format('0.000%');
debugger;
console.log(`Course completion: ${courseValue}.`);
