import React from "react";
import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";

const RustLearn = async () => {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage("af933f335b664a02aef1dba76ae2cb44");
  return <NotionRenderer recordMap={recordMap} />;
};

export default RustLearn;
