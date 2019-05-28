import { StyleType } from '@kitten/theme';
import { ComponentsContainerData } from './type';
import {
  ComponentsIconAvatar,
  ComponentsIconBottomNavigation,
  ComponentsIconButton,
  ComponentsIconButtonGroup,
  ComponentsIconCheckBox,
  ComponentsIconInput,
  ComponentsIconList,
  ComponentsIconOverflowMenu,
  ComponentsIconPopover,
  ComponentsIconRadio,
  ComponentsIconTabView,
  ComponentsIconText,
  ComponentsIconToggle,
  ComponentsIconTooltip,
  ComponentsIconTopNavigation,
  ComponentsIconAvatarDark,
  ComponentsIconButtonDark,
  ComponentsIconButtonGroupDark,
  ComponentsIconCheckBoxDark,
  ComponentsIconInputDark,
  ComponentsIconListDark,
  ComponentsIconOverflowMenuDark,
  ComponentsIconPopoverDark,
  ComponentsIconRadioDark,
  ComponentsIconTabViewDark,
  ComponentsIconTextDark,
  ComponentsIconToggleDark,
  ComponentsIconTooltipDark,
  ComponentsIconTopNavigationDark,
  ComponentsIconBottomNavigationDark,
} from '@src/assets/icons';
import { ThemeService } from '@src/core/themes';

export const routes: ComponentsContainerData[] = [
  {
    title: 'Button',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconButton(style),
        'Eva Dark': ComponentsIconButtonDark(style),
      });
    },
    route: 'Button',
  },
  {
    title: 'Button Group',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconButtonGroup(style),
        'Eva Dark': ComponentsIconButtonGroupDark(style),
      });
    },
    route: 'Button Group',
  },
  {
    title: 'Checkbox',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconCheckBox(style),
        'Eva Dark': ComponentsIconCheckBoxDark(style),
      });
    },
    route: 'CheckBox',
  },
  {
    title: 'Toggle',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconToggle(style),
        'Eva Dark': ComponentsIconToggleDark(style),
      });
    },
    route: 'Toggle',
  },
  {
    title: 'Radio',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconRadio(style),
        'Eva Dark': ComponentsIconRadioDark(style),
      });
    },
    route: 'Radio',
  },
  {
    title: 'Input',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconInput(style),
        'Eva Dark': ComponentsIconInputDark(style),
      });
    },
    route: 'Input',
  },
  {
    title: 'Text',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconText(style),
        'Eva Dark': ComponentsIconTextDark(style),
      });
    },
    route: 'Text',
  },
  {
    title: 'Avatar',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconAvatar(style),
        'Eva Dark': ComponentsIconAvatarDark(style),
      });
    },
    route: 'Avatar',
  },
  {
    title: 'Popover',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconPopover(style),
        'Eva Dark': ComponentsIconPopoverDark(style),
      });
    },
    route: 'Popover',
  },
  {
    title: 'Tooltip',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconTooltip(style),
        'Eva Dark': ComponentsIconTooltipDark(style),
      });
    },
    route: 'Tooltip',
  },
  {
    title: 'Overflow Menu',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconOverflowMenu(style),
        'Eva Dark': ComponentsIconOverflowMenuDark(style),
      });
    },
    route: 'Overflow Menu',
  },
  {
    title: 'Tab View',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconTabView(style),
        'Eva Dark': ComponentsIconTabViewDark(style),
      });
    },
    route: 'Tab View',
  },
  {
    title: 'List',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconList(style),
        'Eva Dark': ComponentsIconListDark(style),
      });
    },
    route: 'List',
  },
  {
    title: 'Top Navigation',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconTopNavigation(style),
        'Eva Dark': ComponentsIconTopNavigationDark(style),
      });
    },
    route: 'Top Navigation',
  },
  {
    title: 'Bottom Navigation',
    icon: (style: StyleType) => {
      return ThemeService.select({
        'Eva Light': ComponentsIconBottomNavigation(style),
        'Eva Dark': ComponentsIconBottomNavigationDark(style),
      });
    },
    route: 'Bottom Navigation',
  },
];
