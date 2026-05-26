import API from "./core/api.js";
import GameState from "./core/state.js";
import GameClient from "./core/gameClient.js";
import { bootstrapApp } from "./wiring/bootstrap.js";

bootstrapApp();
const api = new API();
const state = new GameState();

const client = new GameClient(api, state);

client.init();