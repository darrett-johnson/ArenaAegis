export class Player {
  
  constructor({ id, username, health, shields }) {
    this.id = id
    this.username = username
    this.health = health
    this.shields = shields
    this.damage_modifier = 1.0
    this.damage_reduction_modifier = 1.0
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