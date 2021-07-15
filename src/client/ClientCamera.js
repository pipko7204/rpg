import MovableObject from '../common/MovableObject';

class ClientCamera extends MovableObject {
  constructor(cfg) {
    super(cfg);

    Object.assign(
      this,
      {
        cfg,
        width: cfg.canvas.width,
        height: cfg.canvas.height,
      },
      cfg,
    );
  }

  focusAtGameObject(obj) {
    const pos = obj.worldPosition(50, 50);
    this.moveTo((pos.X = this.width / 2), (pos.Y = this.height / 2));
  }
}

export default ClientCamera;
