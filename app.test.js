
import { describe, it, expect } from "vitest";
const request = require("supertest");
const app = require("./app");

describe("API endpoints", () => {
  it("returns the API welcome message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      "CI/CD demo API is running"
    );
  });

  it("returns a healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  it("greets a user by name", async () => {
    const response = await request(app).get("/api/greet/Misfar");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello, Misfar!");
  });
});
