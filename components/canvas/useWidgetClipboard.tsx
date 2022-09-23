import {
  safeSelectionSelector,
  selectionTypeSelector,
} from '@joinprisma/selection';
import { useCallback } from 'react';
import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { isWidgetsJSON } from 'utils/widgets/isWidgetsJSON';
import useCopyWidgets from './useCopyWidgets';
import useEditorClipboard from './useEditorClipboard';
import usePasteWidgets, { WidgetData } from './usePasteWidgets';

const useWidgetClipboard = (): void => {
  const { copyWidgets } = useCopyWidgets();
  const pasteWidgets = usePasteWidgets();
  const setSelection = useSetRecoilState(safeSelectionSelector);

  const handleCopy = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        const selectionType = await snapshot.getPromise(selectionTypeSelector);
        const selectedWidgetIds =
          selectionType === 'widget'
            ? Array.from(await snapshot.getPromise(safeSelectionSelector)).map(
                (item) => item.id
              )
            : [];
        if (selectedWidgetIds.length > 0) {
          copyWidgets(new Set(selectedWidgetIds));
        }
      },
    [copyWidgets]
  );

  const handlePaste = useCallback(
    async (widgetsJson: WidgetData[]) => {
      const newWidgetIds = await pasteWidgets(widgetsJson);
      if (newWidgetIds) {
        setSelection(
          new Set(
            Array.from(newWidgetIds).map((id) => ({ type: 'widget', id }))
          )
        );
      }
    },
    [pasteWidgets, setSelection]
  );

  useEditorClipboard({
    handleCopy,
    handlePaste,
    isExpectedJson: isWidgetsJSON,
  });
};

export default useWidgetClipboard;
