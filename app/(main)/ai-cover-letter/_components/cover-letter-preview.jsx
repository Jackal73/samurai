"use client";

import MDEditor from "@uiw/react-md-editor";
import React from "react";

const CoverLetterPreview = ({ content }) => {
  return (
    <div className="">
      <MDEditor value={content} preview="preview" height={700} />
    </div>
  );
};

export default CoverLetterPreview;
