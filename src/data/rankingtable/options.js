// Label columns
import theme from '../../themes';

const headerHeight = 20;

export const backgroundColors = {
  1000: theme.colors['1000'],
  2000: theme.colors['2000'],
  3000: theme.colors['3000'],
  4000: theme.colors['4000'],
  5000: theme.colors['5000'],
};

export const rankTableOptions = {
  defaultColDef: {
    sortable: true,
    headerHeight,
  },
  // WARN: its for debugging by developers
  // debug: true,
};
