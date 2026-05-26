class BaseEntity {
  constructor(id) {
    this.id = id;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  touch() {
    this.updatedAt = new Date();
  }
}

module.exports = BaseEntity;