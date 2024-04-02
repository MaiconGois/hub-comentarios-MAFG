class User {
  constructor(id, username, password, firstname, lastname) {
    if (
      (id !== undefined,
      username !== undefined,
      firstname !== undefined,
      lastname !== undefined)
    ) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.firstname = firstname;
      this.lastname = lastname;
    } else if (
      (username !== undefined, password !== undefined)
    ) {
      this.id = null;
      this.username = username;
      this.password = password;
      this.firstname = null;
      this.lastname = null;
    } else {
      this.id = null;
      this.username = null;
      this.password = null;
      this.firstname = null;
      this.lastname = null;
    }
  }

  getId() {
    return this.id;
  }
  getUsername() {
    return this.username;
  }
  
  getFirstname() {
    return this.firstname;
  }
  getLastname() {
    return this.lastname;
  }
  setId(value) {
    this.id = value;
  }
  setUsername(value) {
    this.username = value;
  }
  setPassword(value) {
    this.password = value;
  }
  setFirstname(value) {
    this.firstname = value;
  }
  setLastname(value) {
    this.lastname = value;
  }
}
export {User}
