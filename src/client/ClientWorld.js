class ClientWorld {
  constructor(game, engine, levelCfg) {
    Object.assign(this, {
      game,
      engine,
      levelCfg,
      height: levelCfg.map.length,
      width: levelCfg.map[0].length,
    });

    this.spritesType = 'grass'

  }



  init() {
    for (let spriteX = 0; spriteX < 13; spriteX++) {
      for (let spriteY = 0; spriteY < 13; spriteY++) {
        if (spriteX === 0 || spriteY === 0 || spriteX === 12 || spriteY === 12) {
          this.spritesType = 'wall'
        } else if (spriteY === 8) {
          this.spritesType = 'water'
        } else {
          this.spritesType = 'grass'
        }
        this.engine.renderSpriteFraim({
          sprite: ['terrain', this.spritesType],
          frame: 0,
          x: spriteX * 48,
          y: spriteY * 48,
          w: 48,
          h: 48,
        });
      }
    }
  }
}

export default ClientWorld;
