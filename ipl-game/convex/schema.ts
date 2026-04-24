import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  players: defineTable({
    name: v.string(),
    role: v.string(),
    batting: v.string(),
    bowling: v.string(),
    teams: v.array(
      v.object({
        team: v.string(),
        years: v.array(v.string()),
      })
    ),
    teamCount: v.number(), // Added for easier filtering/sorting
  }).index("by_teamCount", ["teamCount"]),
});
