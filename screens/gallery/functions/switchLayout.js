export const presets = [1, 5];
export default function switchLayout(numColumns, setNumColumns) {
  const newIndex = numColumns === presets[0] ? 1 : 0;
  const newNumColumns = presets[newIndex];
  setNumColumns(newNumColumns);
}
