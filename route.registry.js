export function loadRoutes() {
  console.log("Loading swap routes...");

  return [
    {
      path: ["TOKEN_A", "TOKEN_B", "TOKEN_C"],
      liquidity: 500000
    }
  ];
}
