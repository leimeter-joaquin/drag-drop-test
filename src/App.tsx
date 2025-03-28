import { useState } from "react";
import { DndContext, DragOverEvent, UniqueIdentifier } from "@dnd-kit/core";

import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";
import { MultipleContainers } from "./MultipleContainers";

function App() {
  const containers = ["A", "B"];
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      <div className="flex flex-row gap-4 p-4">
        {containers.map((id) => (
          // We updated the Dropable component so it would accept an `id`
          // prop and pass it to `useDropable`
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : "Drop here"}
          </Droppable>
        ))}

        <Droppable key="C" id="C">
          {parent === "C" ? draggableMarkup : "Drop here"}
        </Droppable>
      </div>

      <MultipleContainers />
    </DndContext>
  );

  function handleDragEnd(event: DragOverEvent) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}

export default App;
