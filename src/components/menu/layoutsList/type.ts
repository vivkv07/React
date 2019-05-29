import React from 'react';
import { ImageProps } from 'react-native';
import { StyleType } from '@kitten/theme';

export interface LayoutsListItemData {
  title: string;
  icon: (style: StyleType) => React.ReactElement<ImageProps>;
}
