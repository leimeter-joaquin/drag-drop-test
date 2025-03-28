import { useDroppable } from "@dnd-kit/core";

export function Droppable(props: { id: string; children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className="w-24 h-24 bg-gray-200">
      {props.children}
    </div>
  );
}
