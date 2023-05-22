import React, { useState, useRef } from "react";
import { useEffect } from "react";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import FocusLock from "react-focus-lock";

const SmallHeaderPr = () => {
  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, handler]);
  };

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div ref={node}>
        <FocusLock disabled={!open}>
          <Hamburger open={open} setOpen={setOpen} aria-controls={menuId} />
          {/* <Home open={open} setOpen={setOpen} id={menuId} /> */}
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
    </>
  );
};

export default SmallHeaderPr;
