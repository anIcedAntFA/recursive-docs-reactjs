import treeData from '../assets/treeData.json';
import { TNodeItem } from '../types';

export function getTreeData(): TNodeItem[] {
  return treeData.map((item) => ({
    ...item,
    hasChildren: treeData.filter((i) => i.parentId === item.id).length > 0,
  }));
}
