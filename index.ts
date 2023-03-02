import { Vehicle } from './Vehicle';
const app = document.getElementById('app');
// 2. Create a new <p></p> element programmatically
const p = document.createElement('p');
// 3. Add the text content
p.textContent = 'Hello, World!';
// 4. Append the p element to the div element
app?.appendChild(p);
const demoVehicle = new Vehicle(5);
p.innerText = demoVehicle.getId();
