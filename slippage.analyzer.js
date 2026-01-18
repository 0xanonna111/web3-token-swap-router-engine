export function estimateSlippage(result) {
  const impact = parseFloat(result.priceImpact);
  return {
    slippage: (impact * 0.8).toFixed(2) + "%"
  };
}
