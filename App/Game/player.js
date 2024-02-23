export class Player {
  
  static startingHealth = 100
  static startingShields = 3

  constructor({ id }) {
    this.id = id
    this.health = Player.startingHealth
    this.shields = Player.startingShields
    this.damageModifier = 1.0
    this.damageReductionModifier = 1.0
    this.status = []
  }

  getDamage(value) {}
  addHealth(value) {}
  removeHealth(value) {}
  addShield(value = 1) {}
  removeShield(value = 1) {}
  addStatus() {}
  getStatus() {}
}