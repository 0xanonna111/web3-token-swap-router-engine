export function monitorLiquidity(route) {
  return {
    path: route.path.join(" -> "),
    liquidity: route.liquidity
  };
}
