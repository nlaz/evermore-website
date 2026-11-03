import { getAssetPath } from '@/utils/asset-path';

/** Path to a redesign asset in /public/images/redesign, with the GitHub Pages basePath applied. */
export const asset = (file: string): string => getAssetPath(`/images/redesign/${file}`);
