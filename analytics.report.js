export function generateReport(swap, slippage) {
  console.log("----- Swap Report -----");
  console.log("Route:", swap.route.join(" -> "));
  console.log("Input:", swap.input);
  console.log("Output:", swap.output);
  console.log("Price Impact:", swap.priceImpact);
  console.log("Estimated Slippage:", slippage.slippage);
  console.log("------------------------");
}
