class AnimationSystem {
  constructor() {
    this.animations = [];
  }

  add(animation) {
    this.animations.push(animation);
  }

  update() {
    this.animations.forEach(anim => anim.update());
  }
}

export default AnimationSystem;