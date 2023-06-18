import mongoose from "mongoose";

const dashSchema = new mongoose.Schema({
  end_year: String,
  intensity: String,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: String,
  pestle: String,
  source: String,
  title: String,
  likelihood: String,
});

export const Dashed = new mongoose.model("dashboard", dashSchema);
