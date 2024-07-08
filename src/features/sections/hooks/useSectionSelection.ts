import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { selectSection, clearSelection } from '../sectionsSlice';

export const useSectionSelection = () => {
  const dispatch = useDispatch();
  const selectedSectionId = useSelector((state: RootState) => state.sections.selectedSectionId);

  const handleSectionSelect = (sectionId: number) => {
    dispatch(selectSection(sectionId));
  };

  const clearSectionSelection = () => {
    dispatch(clearSelection());
  };

  return {
    selectedSectionId,
    handleSectionSelect,
    clearSectionSelection,
  };
};
