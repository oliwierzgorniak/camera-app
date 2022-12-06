import * as Sharing from "expo-sharing";

export default async function handleShare(uri) {
  const isSharingAvailable = await Sharing.isAvailableAsync();
  if (isSharingAvailable) await Sharing.shareAsync(uri);
}
