import { Controller, Get } from "@nestjs/common";

@Controller("users")
export class UsersController {

  @Get()
  getUsers() {
    return {
      id: 2,
      name: "test name",
      password: "12345",
      roles: ["admin", "user"]
    };
  }
}
