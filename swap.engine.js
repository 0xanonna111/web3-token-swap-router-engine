export function simulateSwap(route, amountIn) {
  console.log("Simulating swap via route:", route.path.join(" -> "));

  const impact = (amountIn / route.liquidity) * 100;
  const output = amountIn * (1 - impact / 100);

  return {
    route: route.path,
    input: amountIn,
    output: output.toFixed(2),
    priceImpact: impact.toFixed(2) + "%"
  };
}
