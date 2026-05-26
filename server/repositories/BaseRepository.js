class BaseRepository {
  constructor() {
    this.items = [];
  }

  findAll() {
    return this.items;
  }

  findById(id) {
    return this.items.find(item => item.id === id);
  }

  create(item) {
    this.items.push(item);
    return item;
  }

  update(id, updatedData) {
    const item = this.findById(id);

    if (!item) return null;

    Object.assign(item, updatedData);

    return item;
  }

  delete(id) {
    const index = this.items.findIndex(
      item => item.id === id
    );

    if (index === -1) return false;

    this.items.splice(index, 1);

    return true;
  }
}

module.exports = BaseRepository;