import React from "react";
import PropTypes from "prop-types";
import FileContent from "./Content/FileContent";
import Section from "../../../../../Shared/Section/Section";
import getFile from "../../../../../../API/file/fileAPI";

const File = ({ url }) => (
  <Section
    name="File"
    single={url}
    get={getFile}
    view={(content) => <FileContent content={content} />}
  />
);

File.propTypes = {
  url: PropTypes.string.isRequired,
};

export default File;
