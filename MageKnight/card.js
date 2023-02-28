export class Card {
  cardName = "";
  image = "";
  cardType="";
  abilities = [];

  //Used for most cards (including spells)
  initializeSimpleCard(cardName, normalEffect="", empoweredEffect="", crystalCost="", cardType, image="") {
    this.abilities = []
    if (cardType && cardType.toLowerCase() == "spell") {
      this.abilities.push(new Ability().initializeAbility(normalEffect, crystalCost, "normal"))
      this.abilities.push(new Ability().initializeAbility(empoweredEffect, crystalCost + ", Dark", "empowered"))
    } else {
      this.abilities.push(new Ability().initializeAbility(normalEffect, "", "normal"))
      this.abilities.push(new Ability().initializeAbility(empoweredEffect, crystalCost, "empowered"))
    }
    this.cardName = cardName;
    this.image = image;
    this.cardType = cardType;
    return this
  }

  initializeBasicCard(cardName, abilites, cardType, image="") {
    this.cardName = cardName;
    this.abilities = abilites;
    this.cardType = cardType;
    this.image = image;
    return this
  }

  Card() {

  }
}

export class Ability {
  effect = "";
  crystalCost = "";
  type = "";

  initializeAbility(effect, cost, type) {
    this.effect = effect;
    this.crystalCost = cost;
    this.type = type;
    return this
  }
}

export class Unit extends Card {
  level = "";
  influence = "";
  armor = "";
  recruitmentAreas = [""];
  resistances = [""];
  abilities = [""];
  woundCount = 0;

  initializeUnit(cardName, abilities, level, influence, armor, recruitmentAreas, resistances) {
    this.cardName = cardName;
    this.cardType = "Unit";
    this.abilities = abilities;
    this.level = level;
    this.influence = influence;
    this.armor = armor;
    this.recruitmentAreas = recruitmentAreas;
    this.resistances = resistances;
    return this
  }

  updateWoundCount(wounds) {
    this.woundCount = wounds;
  }
}
