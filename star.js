class Star {
  constructor(x, y, r) {
    this.body = Bodies.circle(x, y, r, { restitution: 0.5, isStatic: true });
    World.add(world, this.body);
    this.r = r;
  }
  fall() {
    Body.setStatic(this.body, false);
  }
  stop() {
    Body.setStatic(this.body, true);
  }
}
