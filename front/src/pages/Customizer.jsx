import React, { lazy, useEffect, useState } from "react";
import Tab from "../components/Tab";
import FilePicker from "../components/FilePicker";
import ColorPicker from "../components/ColorPicker";
import { EditorTabs } from "../config/constants";
import ProductForm from "../components/ProductForm";
import { useCanvas } from "../hooks";
const CanvasModel = lazy(() => import("../canvas"));

const Customizer = () => {
  const [file, setFile] = useState("");

  const {
    setDarkOption,
    setPositionOption,
    setRotationOption,
    setEditableOption,
  } = useCanvas();

  useEffect(() => {
    setDarkOption(false);
    setPositionOption([0, 0, -1.5]);
    setRotationOption([0, 0, 0]);
    setEditableOption(true);
    // return () => {

    // }
  }, []);

  const [activeEditorTab, setActiveEditorTab] = useState(null);
  const [activeFilterTab, setFilterTab] = useState("");

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      default:
        return null;
    }
  };

  // const handleDecals = (type, res) => {
  //   const decalType = DecalTypes[type];
  //   state[decalType.stateProperty] = res;

  //   if (activeFilterTab[decalType.filterTab]) {
  //     hadnleActiveFilterTab(decalType.filterTab);
  //   }
  // };

  // const hadnleActiveFilterTab = (tabName) => {
  //   switch (tabName) {
  //     case "logoShirt":
  //       state.isLogoTexture = !activeFilterTab[tabName];
  //       break;
  //     case "stylishShirt":
  //       state.isFullTexture = !activeFilterTab[tabName];
  //       break;
  //     default:
  //       state.isLogoTexture = true;
  //       state.isFullTexture = false;
  //   }

  //   setFilterTab((prevState) => {
  //     return {
  //       ...prevState,
  //       [tabName]: !prevState[tabName],
  //     };
  //   });

  // };

  //   const readFile = (type) => {
  //     reader(file).then((res) => {
  //       handleDecals(type, res);
  //       setActiveEditorTab("");
  //     });
  //   };

  const handleTabClick = (name) => {
    if (activeEditorTab === name) {
      setActiveEditorTab(null);
    } else {
      setActiveEditorTab(name);
    }
  };

  return (
    <div className="w-full h-[90vh] overflow-hidden">
      <div key={"custom"} className="absolute top-0 left-0 z-10">
        <div className="flex items-center min-h-screen ">
          <div className="editortabs-container tabs relative">
            {EditorTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                handleClick={() => handleTabClick(tab.name)}
              />
            ))}
            {generateTabContent()}
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 z-10 ">
        <div className="flex items-center min-h-screen ">
          <ProductForm />
        </div>
      </div>
      {/* <CanvasModel editable={true} /> */}
    </div>
  );
};

export default Customizer;
