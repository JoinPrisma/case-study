import Canvas from './Canvas';

const EditableCanvasKeyboardHooks = () => {
  useWidgetClipboard();
  useDeleteWidgetKeyboardShortcut();

  return <></>;
};

const EditableCanvas: FC = () => {
  const currentCanvasRoomId = useRecoilValue(currentCanvasRoomIdSelector);

  const widgetIds = useRecoilValue(
    currentCanvasRoomId
      ? canvasWidgetIdsSelectorFamily(currentCanvasRoomId)
      : constSelector(undefined)
  );
  const isPreviewMode = useRecoilValue(WorkshopSelectors.isPreviewMode);

  // TODO Maybe it should error when there's no room id.
  return currentCanvasRoomId ? (
    <>
      <EditableCanvasKeyboardHooks />
      <Canvas
        id="rnd-canvas"
        roomId={currentCanvasRoomId}
        canvasClassName="rnd-canvas"
      >
        <NewWidgetDropZone
          className={classNames({
            'overflow-clip relative': isPreviewMode,
          })}
        >
          <WithEditableCanvasContextMenu />
          {widgetIds?.map((widgetId) => (
            <EditorWidgetContainer widgetId={widgetId} key={widgetId} />
          ))}
          <WidgetMultiSelectionBox />
        </NewWidgetDropZone>
      </Canvas>
    </>
  ) : null;
};

const CanvasEditor: FC = () => {
  const currentUserId = useRecoilValue(currentUserIdAtom);
  const clearSelection = useResetRecoilState(safeSelectionSelector);

  const handleCanvasClick: MouseEventHandler = useCallback(
    (e) => {
      clickedOutsideOf(e, [
        WIDGET_SELECTION_TOGGLE_SELECTOR,
        MODAL_CONTENT_SELECTOR,
        FLOATING_UI_ROOT_SELECTOR,
      ]) && clearSelection();
    },
    [clearSelection]
  );

  return currentUserId ? (
    <Motion.div
      key="editor"
      className="flex items-center justify-center w-full h-full px-4 pt-2 pb-16"
      initial="hidden"
      exit="hidden"
      animate="shown"
      variants={{
        hidden: { opacity: 0 },
        shown: { opacity: 1 },
      }}
      transition={{ duration: 0.3 }}
      onClick={handleCanvasClick}
    >
      <NewWidgetPreviewLayer />
      <EditableCanvas />
      <BottomRightControls />
    </Motion.div>
  ) : null;
};

export default CanvasEditor;
