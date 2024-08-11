class Student {
  constructor() {}

  home(type) {
    let data = this.getInfo(type, 1);
    // this.getInfo(type,45);
    return data + 5;
  }

  userId() {
    return 12;
  }

  getInfo(type) {
    return 10;
  }

  finalMarks(total) {
    let external = this.getExternal(total);
    let internal = this.getInternal(total);
    let finalMarks = external + internal + 10;
    return finalMarks;
  }

  getInternal(total) {
    return total - 1;
  }
  getExternal(total) {
    return total + 1;
  }
}

module.exports = Student;
