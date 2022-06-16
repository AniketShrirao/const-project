import { useDispatch, useSelector } from 'react-redux';
import React, { useMemo } from 'react';

import { getRankedTableData, getScoreTableData } from './RankTableLogic';
import { CONSUMER_PROTECTION_INDEX, RANK } from '../../utils/Constants';
import { setAccPillarIndex, setAccSubPillarIndex, setModalData, setOpenModal } from '../../redux/slices/RankTable';
import CommonModal from '../utilities/Modal/Modal';
import RankScoreToggleButton from '../utilities/Button/RankScoreToggleButton';
import RankTablePillars from './RankTablePillars';

import { CountryHeading, RankScoreDataSection, RespRankTable } from './Rankingtable.styled';
import { ReactComponent as FaTimes } from '../../assets/images/svgs/times.svg';

const ResponsiveRankTable = ({ isModalOpen, onToggleRankScore }) => {
  const dispatch = useDispatch();

  const modalData = useSelector(state => state.RankTable.modalData);
  const toggleRankScore = useSelector(state => state.RankTable.on);

  const rankedTableData = useMemo(() => getRankedTableData(modalData), [modalData]);
  const scoreTableData = useMemo(() => getScoreTableData(modalData), [modalData]);

  const toggleModal = (isModalOpened) => {
    dispatch(setOpenModal(!isModalOpened));
    dispatch(setAccPillarIndex(null));
    dispatch(setAccSubPillarIndex(null));
    dispatch(setModalData({}));
  };

  const onToggleSwitch = () => {
    let initialData;
    if (toggleRankScore === RANK) {
      initialData = rankedTableData;
    } else {
      initialData = scoreTableData;
    }
    dispatch(setModalData(initialData));
  }

  return (
    <RespRankTable className='resp-rank-table'>
      {isModalOpen && (
        <CommonModal
          onRequestClose={() => toggleModal(isModalOpen)}
          isRankTableModal
        >
          <div className='modal__first-section'>
            <RankScoreToggleButton styleClass='rank-score-toggle' onToggleSwitch={onToggleSwitch} onToggleRankScore={onToggleRankScore} />
            <FaTimes
              className='resp-close'
              width="30"
              height="30"
              onClick={() => toggleModal(isModalOpen)}
            />
            <RankScoreDataSection>
              <CountryHeading>{modalData.country}<span>{modalData[CONSUMER_PROTECTION_INDEX]}</span></CountryHeading>
              <RankTablePillars modalData={modalData} />
            </RankScoreDataSection>
          </div>
        </CommonModal>)}
    </RespRankTable>
  )
}

export default ResponsiveRankTable;
