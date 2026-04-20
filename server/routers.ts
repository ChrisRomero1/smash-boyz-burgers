import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  forms: router({
    submitContact: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().optional(),
        message: z.string().min(1, "Message is required"),
      }))
      .mutation(async ({ input }) => {
        const { createContactSubmission } = await import("./db");
        const { notifyOwner } = await import("./_core/notification");
        
        await createContactSubmission({
          name: input.name,
          email: input.email,
          phone: input.phone,
          message: input.message,
        });

        // Send notification to owner
        await notifyOwner({
          title: "New Contact Form Submission",
          content: `Name: ${input.name}\nEmail: ${input.email}\nPhone: ${input.phone || "N/A"}\n\nMessage:\n${input.message}`,
        });

        return { success: true };
      }),

    submitCatering: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().min(1, "Phone is required"),
        eventDate: z.string().min(1, "Event date is required"),
        eventType: z.string().min(1, "Event type is required"),
        guestCount: z.number().optional(),
        location: z.string().optional(),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { createCateringInquiry } = await import("./db");
        const { notifyOwner } = await import("./_core/notification");
        
        await createCateringInquiry({
          name: input.name,
          email: input.email,
          phone: input.phone,
          eventDate: input.eventDate,
          eventType: input.eventType,
          guestCount: input.guestCount,
          location: input.location,
          message: input.message,
        });

        // Send notification to owner
        await notifyOwner({
          title: "New Catering Inquiry",
          content: `Name: ${input.name}\nEmail: ${input.email}\nPhone: ${input.phone}\n\nEvent Date: ${input.eventDate}\nEvent Type: ${input.eventType}\nGuest Count: ${input.guestCount || "N/A"}\nLocation: ${input.location || "N/A"}\n\nMessage:\n${input.message || "No additional message"}`,
        });

        return { success: true };
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
