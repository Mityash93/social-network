import React, { useEffect, useState } from "react";

export default function HookContentStatus(props) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activeEditMode = () => {
    setEditMode(true);
  };

  const deactiveEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {editMode ? (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactiveEditMode}
            value={status}
          />
        </div>
      ) : (
        <div>
          <span onClick={activeEditMode}>{status}</span>
        </div>
      )}
    </div>
  );
}
