import API from "../core/api.js";
import GameState from "../core/state.js";
import GameClient from "../core/gameClient.js";



import { bindHUD } from "./bindHUD.js";
import { bindShop } from "./bindShop.js";
import { bindPacks } from "./bindPacks.js";
import { bindStickerBook } from "./bindStickerBook.js";
import { bindClickArea } from "./bindClickArea.js";
import { bindModals } from "./bindModals.js";

// CANVAS LAYER
import { initCanvas } from "../canvas/canvasInit.js";
import { startRenderer } from "../canvas/renderer.js";

export async function bootstrapApp() {
  // =========================
  // 1. CORE APP INSTANCES
  // =========================
  const api = new API();
  const state = new GameState();

  // =========================
  // 2. LOAD INITIAL GAME STATE
  // =========================
  const gameData = await api.getGameState();
  state.set(gameData);

  // =========================
  // 3. BUILD UI SHELL
  // =========================
  

  // =========================
  // 4. INIT CANVAS LAYER (IMPORTANT FIRST)
  // =========================
  initCanvas();

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  startRenderer(ctx);

  // =========================
  // 5. BIND UI SYSTEMS
  // =========================
  bindHUD(state, api);
  bindShop(state, api);
  bindStickerBook(state, api);
  bindModals();

  // =========================
  // 6. CANVAS-AWARE SYSTEMS
  // (these must emit visual effects)
  // =========================
  bindClickArea(state, api);
  bindPacks(state, api);

  // =========================
  // 7. CLIENT ENGINE (OPTIONAL CONTROL LOOP)
  // =========================
  const client = new GameClient(api, state);
  client.init();

  console.log("Caomhan Clicker loaded successfully.");
}