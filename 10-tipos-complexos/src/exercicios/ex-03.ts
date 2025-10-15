type Car = { make: string; model: string; doors: number };
type Motorcycle = { make: string; model: string; wheels: number };

function showCommonVehicleProps(vehicle: Car | Motorcycle) {
  console.log(`Marca: ${vehicle.make}, Modelo: ${vehicle.model}`);
}

showCommonVehicleProps({ make: 'Ford', model: 'Ka', doors: 4 });
