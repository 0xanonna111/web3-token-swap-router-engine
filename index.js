import { connectRPC } from "./rpc.client.js";
import { loadRoutes } from "./route.registry.js";
import { simulateSwap } from "./swap.engine.js";
import { estimateSlippage } from "./slippage.analyzer.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Token Swap Router Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const routes = loadRoutes();

const swapResult = simulateSwap(routes[0], 500);
const slippage = estimateSlippage(swapResult);

generateReport(swapResult, slippage);
