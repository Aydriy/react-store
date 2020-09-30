export const setSortBy = ({ type, oeder }) => ({
  type: "SET_SORT_BY",
  payload: { type, oeder },
});

export const setCategory = (categIndex) => ({
  type: "SET_CATEGORY",
  payload: categIndex,
});
