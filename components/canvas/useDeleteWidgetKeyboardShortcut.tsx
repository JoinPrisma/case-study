import {
  safeSelectionSelector,
  selectionTypeSelector,
} from '@joinprisma/selection';
import { useEffect } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import WorkshopSelectors from 'recoil/workshop/WorkshopSelectors';
import useDeleteWidgets from './useDeleteWidgets';

const useDeleteWidgetKeyboardShortcut = () => {
  const isEditMode = useRecoilValue(WorkshopSelectors.isEditMode);
  const deleteWidgets = useDeleteWidgets();

  const handleKeydownEvent = useRecoilCallback(
    ({ snapshot }) =>
      async (event: KeyboardEvent) => {
        const element = event.target as HTMLElement;

        const isTextInput = ['textarea', 'input'].includes(
          element.tagName?.toLowerCase()
        );
        const isContentEditable = element.isContentEditable;
        const isDeleteCommand = ['Backspace', 'Delete'].includes(event.key);

        if (!isTextInput && !isContentEditable && isDeleteCommand) {
          const selectionType = await snapshot.getPromise(
            selectionTypeSelector
          );
          const selectedWidgetIds =
            selectionType === 'widget'
              ? Array.from(
                  await snapshot.getPromise(safeSelectionSelector)
                ).map((item) => item.id)
              : [];
          if (selectedWidgetIds.length > 0) {
            deleteWidgets(new Set(selectedWidgetIds));
          }
        }
      },
    [deleteWidgets]
  );

  useEffect(() => {
    if (isEditMode) {
      document.addEventListener('keydown', handleKeydownEvent);
      return () => document.removeEventListener('keydown', handleKeydownEvent);
    }
  }, [handleKeydownEvent, isEditMode]);
};

export default useDeleteWidgetKeyboardShortcut;
