module.exports = {
  // 현재 레포의 모든 js, jsx, ts, tsx 에 대하여
  './packages/web/**/*.{js,jsx,ts,tsx}': 'cd packages/web && yarn lint',
  './packages/api/**/*.{js,jsx,ts,tsx}': 'cd packages/api && yarn lint',
}
