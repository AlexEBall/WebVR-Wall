import Characters from './characters.json';
import { List, Map } from 'immutable';

const data = Characters;

console.log(data);


export function getData() {

	return List(data);
}