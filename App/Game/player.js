export class Player {
  
  constructor({ id: id, username: username }) {
    this.id = id
    this.username = username
    this.health = 100
    this.shields = 3
    this.damage_modifier = 1.0
    this.damage_reduction_modifier = 1.0
    this.status = []
  }



  getDamage(value) {
    return Math.round(value * this.damage_modifier)
  }

  addHealth(value) {
    return this.health += value
  }

  removeHealth(value) {
    const damage = Math.round(value * this.damage_reduction_modifier)
    if (this.health - damage <= 0) return this.health = 0  
    return this.health -= damage
  }

  addShield(value = 1) {}
  removeShield(value = 1) {}
  addStatus() {}
  getStatus() {}




}