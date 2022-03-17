import { userInfo } from "../../models/user";

const store = new userInfo();

describe("tests on user table", () => {
  it("should index method be defined", () => {
    expect(store.index).toBeDefined();
  });

  it("should show method be defined", () => {
    expect(store.show).toBeDefined();
  });

  it("should create method be defined", () => {
    expect(store.create).toBeDefined();
  });

  it("should index method return a list of users", async () => {
    const result = await store.index();
    expect(result).toBeTruthy()
  });

  it("should create method add a user", async () => {
    const result = await store.create({
      first_name: "yousef",
      last_name: "Adel",
      username: "jooo",
      password: "123456",
    });
    expect(result.username).toEqual("jooo");
  });

  it("show method should return the correct user", async () => {
    const result = await store.show(2);
    expect(result.username).toEqual("jooo");
  });
});
