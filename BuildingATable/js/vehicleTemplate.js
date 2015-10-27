function vehicleTemplate(data) {
  return `
    <li>${data.Make} is ${data.price}  dollars</li>
    `;
}

export default vehicleTemplate;