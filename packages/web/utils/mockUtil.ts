export const genMockTags = (count) => {
  return [...Array(count)].map((el, index) => ({
    name: 'tag' + index,
    owner: 'owner',
  }))
}
