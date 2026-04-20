import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database functions
vi.mock("./db", () => ({
  createContactSubmission: vi.fn().mockResolvedValue({ insertId: 1 }),
  createCateringInquiry: vi.fn().mockResolvedValue({ insertId: 1 }),
}));

// Mock the notification function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("Forms Router", () => {
  describe("submitContact", () => {
    it("should accept valid contact form submission", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.forms.submitContact({
        name: "John Doe",
        email: "john@example.com",
        phone: "(555) 123-4567",
        message: "Great burgers!",
      });

      expect(result).toEqual({ success: true });
    });

    it("should accept contact form without phone", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.forms.submitContact({
        name: "Jane Doe",
        email: "jane@example.com",
        message: "Love the smash technique!",
      });

      expect(result).toEqual({ success: true });
    });

    it("should reject contact form with invalid email", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.forms.submitContact({
          name: "John Doe",
          email: "not-an-email",
          message: "Test message",
        })
      ).rejects.toThrow();
    });

    it("should reject contact form with empty name", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.forms.submitContact({
          name: "",
          email: "john@example.com",
          message: "Test message",
        })
      ).rejects.toThrow();
    });

    it("should reject contact form with empty message", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.forms.submitContact({
          name: "John Doe",
          email: "john@example.com",
          message: "",
        })
      ).rejects.toThrow();
    });
  });

  describe("submitCatering", () => {
    it("should accept valid catering inquiry", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.forms.submitCatering({
        name: "John Doe",
        email: "john@example.com",
        phone: "(555) 123-4567",
        eventDate: "2026-06-15",
        eventType: "Birthday Party",
        guestCount: 50,
        location: "Downtown Chattanooga",
        message: "Looking forward to catering!",
      });

      expect(result).toEqual({ success: true });
    });

    it("should accept catering inquiry with minimal required fields", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.forms.submitCatering({
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "(555) 987-6543",
        eventDate: "2026-07-20",
        eventType: "Corporate Event",
      });

      expect(result).toEqual({ success: true });
    });

    it("should reject catering inquiry with missing required phone", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.forms.submitCatering({
          name: "John Doe",
          email: "john@example.com",
          phone: "",
          eventDate: "2026-06-15",
          eventType: "Birthday Party",
        })
      ).rejects.toThrow();
    });

    it("should reject catering inquiry with missing event date", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.forms.submitCatering({
          name: "John Doe",
          email: "john@example.com",
          phone: "(555) 123-4567",
          eventDate: "",
          eventType: "Birthday Party",
        })
      ).rejects.toThrow();
    });

    it("should reject catering inquiry with invalid email", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.forms.submitCatering({
          name: "John Doe",
          email: "not-an-email",
          phone: "(555) 123-4567",
          eventDate: "2026-06-15",
          eventType: "Birthday Party",
        })
      ).rejects.toThrow();
    });
  });
});
