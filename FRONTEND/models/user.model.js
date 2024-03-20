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
      (username !== undefined, firstname !== undefined, lastname !== undefined)
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
  getPassword() {
    return this.password;
  }
  getFirstname() {
    return this.firstname;
  }
  getLastname() {
    return this.lastname;
  }
  setId(id) {
    this.id = id;
  }
  setUsername(username) {
    this.username = username;
  }
  setPassword(password) {
    this.password = password;
  }
  setFirstname(firstname) {
    this.firstname = firstname;
  }
  setLastname(lastname) {
    this.lastname = lastname;
  }
}
export {User}
