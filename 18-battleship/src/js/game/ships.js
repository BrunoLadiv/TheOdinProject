import Ship from '../factories/Ship'

export function createFleet() {
  const carrier = new Ship('carrier', 5)
  const battleShip = new Ship('battleship', 4)
  const cruiser = new Ship('cruiser', 3)
  const submarine = new Ship('submarine', 3)
  const destroyer = new Ship('destroyer', 2)
  return [carrier, battleShip, cruiser, submarine, destroyer]
}
