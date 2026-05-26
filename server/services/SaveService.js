class SaveService {
  serialize(user) {
    return JSON.stringify(user);
  }

  deserialize(data) {
    return JSON.parse(data);
  }
}

module.exports = SaveService;