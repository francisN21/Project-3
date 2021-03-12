import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { createLogEntry } from "./API";

const EntryForm = () => {
  return (
    <form className="new-event-f">
      <label htmlFor="">title</label>
      <input type="text" />
    </form>
  );
};

export default EntryForm;
