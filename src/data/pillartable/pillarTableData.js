import { RANK, RANK_OUT_OF, SCORE, SCORE_OUT_OF } from '../../utils/Constants';

export const colors = [
  {
    code: 1000,
    pillarColor: 'rgba(175, 200, 205, 0.15)',
    subPillarColor: 'rgba(175, 200, 205, 0.07)',
  },
  {
    code: 2000,
    pillarColor: 'rgba(255, 185, 25, 0.15)',
    subPillarColor: 'rgba(255, 185, 25, 0.07)',
  },
  {
    code: 3000,
    pillarColor: ' rgba(145, 0, 70, 0.15)',
    subPillarColor: 'rgba(145, 0, 70, 0.07)',
  },
  {
    code: 4000,
    pillarColor: 'rgba(115, 115, 55, 0.15)',
    subPillarColor: 'rgba(115, 115, 55, 0.07)',
  },
  {
    code: 5000,
    pillarColor: 'rgba(236, 149, 23, 0.15)',
    subPillarColor: 'rgba(236, 149, 23, 0.07)',
  },
];

export const headerOptions = [
  {
    label: RANK,
    value: `rank / ${RANK_OUT_OF}`,
  },
  {
    label: SCORE,
    value: `${SCORE.toLowerCase()} / ${SCORE_OUT_OF}`,
  },
];
