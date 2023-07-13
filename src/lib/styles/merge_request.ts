export type MergeRequestStatus = 'opened' | 'closed' | 'merged' | 'locked';

export const MERGE_STATUS_BG_COLOR: Record<string, string> = {
	opened: 'bg-green-500',
	closed: 'bg-red-500',
	merged: 'bg-purple-500',
	locked: 'bg-gray-500'
};
