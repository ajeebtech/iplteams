import { mutation } from "./_generated/server";
import { v } from "convex/values";

// This is the same as in players.ts but kept separate for clarity if needed
export const seed = mutation({
  args: { players: v.any() },
  handler: async (ctx, args) => {
    for (const player of args.players) {
      await ctx.db.insert("players", {
        ...player,
        teamCount: player.teams.length,
      });
    }
  },
});
